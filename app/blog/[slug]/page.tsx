import Image from "next/image";
import styles from "@/styles/blog.module.scss";

import {
  GET_POST_BYSLUG,
  GET_RECENT_POSTS,
  Post,
} from "../../../graphql/queries/query-blog";
import client from "@/lib/apollo-client"; // Import the Apollo Client instance
import { FixBackgroundText } from "@/components/FixBackgroundText";
import DefaultButton from "@/components/Button";
import Tile from "@/components/Tile";
import Error from "@/components/Error";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    let post = null;

    try {
      const res = await client.query({
        query: GET_POST_BYSLUG,
        variables: { slug },
        fetchPolicy: "no-cache",
      });
      post = res.data.post;
    } catch (error) {
      console.error("WordPress fetch failed:", error);
    }

    return {
      title: `${post.title} | My Branding Studio`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [post.featuredImage?.sourceUrl],
      },
      other: {
        "ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          url: `https://mybrandingstudio.ca/blog/${post.slug}`,
          image: post.featuredImage?.sourceUrl,
          author: {
            "@type": "Person",
            name: post.author?.name ?? "My Branding Studio",
          },
          publisher: {
            "@type": "Organization",
            name: "My Branding Studio",
            logo: {
              "@type": "ImageObject",
              url: "https://mybrandingstudio.ca/logo.png",
            },
          },
        }),
      },
    };
}

export const revalidate = 60; //60*60 for 1 hour

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let posts = [];
  let post = null;

  try {
    const res = await client.query({
      query: GET_POST_BYSLUG,
      variables: { slug },
      fetchPolicy: "no-cache",
    });
    post = res.data.post;

    const res2 = await client.query({
      query: GET_RECENT_POSTS,
      variables: { ID: post.id },
      fetchPolicy: "no-cache",
    });
    posts = res2.data.posts.nodes;
  } catch (error) {
    console.error("WordPress fetch failed:", error);
  }

  const isError = !post || !posts || posts.length === 0;
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_background}>
          <Image
            src={"/blog-header.jpg"}
            priority
            alt="slider"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        <h1>BLOG</h1>
      </section>
      <section className={styles.article}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: post.title }} />
        {post.featuredImage ? (
          <div className={styles.article_image}>
            <Image
              src={
                post.featuredImage
                  ? post.featuredImage.node.sourceUrl
                  : "/sample1.jpg"
              }
              alt={
                post.featuredImage
                  ? post.featuredImage.node.altText
                  : "Blog Image"
              }
              fill
              sizes="(max-width: 768px) 450px, 900px"
            />
          </div>
        ) : (
          <></>
        )}
        <FixBackgroundText />
        <article
          className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
      <section className={styles.list}>
        <div className={styles.collection}>
          {posts.map((article: Post) => (
            <Tile
              key={article.slug}
              src={
                article.featuredImage
                  ? article.featuredImage.node.sourceUrl
                  : "/sample1.jpg"
              }
              title={article.title}
              link={`/blog/${article.slug}`}
              alt={
                article.featuredImage
                  ? article.featuredImage.node.altText
                  : "Category Image Placeholder"
              }
              size="400px"
            />
          ))}
        </div>
      </section>
      <section className={styles.banner}>
        <div className={styles.container}>
          <Link href="/" className={styles.image_container}>
            <div className={styles.image}>
              <Image src="/services-banner.png" alt="service icon" fill sizes="(max-width: 768px) 100vw, 900px"/>
            </div>
          </Link>
          <div className={styles.title_container}>
            <div className={styles.title_images}>
              <div className={styles.title}>
                <Image src="/services-title.png" alt="service icon" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"/>
              </div>
            </div>
            <DefaultButton src="/work">View my Portfolio</DefaultButton>
          </div>
        </div>
      </section>
    </>
  );
}
