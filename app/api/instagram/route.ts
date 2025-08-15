import { NextResponse } from "next/server";
import NodeCache from "node-cache";

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN!;
const CACHE_TTL = 60 * 5; // 5 minutes
const cache = new NodeCache({ stdTTL: CACHE_TTL });

export interface InstagramPost {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  timestamp: string;
  permalink: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit")) || 10;
  const cacheKey = `instagram_${limit}`;

  const cached = cache.get(cacheKey);
  if (cached) {
    return NextResponse.json(cached);
  }

  try {
    const igRes = await fetch(
      `https://graph.instagram.com/v23.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp,permalink&limit=${limit}&access_token=${ACCESS_TOKEN}`
    );
    const igData = await igRes.json();

    if (!igData.data) {
      return NextResponse.json(
        { error: "Failed to fetch from Instagram", details: igData },
        { status: 500 }
      );
    }

    const images: InstagramPost[] = [];

    // Handle regular IMAGE and VIDEO posts
    for (const post of igData.data) {
      if (post.media_type === "IMAGE") {
        images.push(post);
      } else if (post.media_type === "VIDEO") {
        images.push({
          ...post,
          media_url: post.thumbnail_url || post.media_url, // Use thumbnail for video
        });
      }
    }

    // Handle carousel posts (IMAGE + VIDEO inside)
    const carouselPosts = igData.data.filter(
      (p: InstagramPost) => p.media_type === "CAROUSEL_ALBUM"
    );

    for (const carousel of carouselPosts) {
      const carouselRes = await fetch(
        `https://graph.instagram.com/${carousel.id}?fields=children{media_type,media_url,thumbnail_url},caption,timestamp,permalink&access_token=${ACCESS_TOKEN}`
      );
      const carouselData = await carouselRes.json();

      if (carouselData.children?.data) {
        for (const c of carouselData.children.data) {
          images.push({
            id: c.id,
            caption: carousel.caption,
            media_type: c.media_type,
            media_url:
              c.media_type === "VIDEO"
                ? c.thumbnail_url || c.media_url
                : c.media_url,
            timestamp: carousel.timestamp,
            permalink: carousel.permalink,
          });
        }
      }
    }

    cache.set(cacheKey, images);
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: String(error) },
      { status: 500 }
    );
  }
}
