import { cache } from "react";
import client from '@/lib/apollo-client';
import { GET_ALL_POSTS, GET_POST_BYSLUG, GET_RECENT_POSTS } from "../../graphql/queries/query-blog";

export const getAllPosts = cache(async () => {
  try {
    const res = await client.query({
      query: GET_ALL_POSTS,
      fetchPolicy: "network-only", // Ensures fresh fetch but still cacheable by Next.js
    });

    return res.data;
  } catch (error) {
    console.error("WordPress fetch failed:", error);
    return null;
  }
});

export const getPostBySlug = cache(async (slug: string) => {
  try {
    const res = await client.query({
      query: GET_POST_BYSLUG,
      variables: { slug },
      fetchPolicy: "network-only", // Ensures fresh fetch but still cacheable by Next.js
    });

    return res.data;
  } catch (error) {
    console.error("WordPress fetch failed:", error);
    return null;
  }
});

export const getRecentPosts = cache(async (id: number) => {
  try {
    const res = await client.query({
      query: GET_RECENT_POSTS,
      variables: { ID: id },
      fetchPolicy: "network-only", // Ensures fresh fetch but still cacheable by Next.js
    });

    return res.data;
  } catch (error) {
    console.error("WordPress fetch failed:", error);
    return null;
  }
});

