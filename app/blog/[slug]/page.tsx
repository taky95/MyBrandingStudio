import Image from "next/image";
import styles from "@/styles/blog.module.scss";

import { Post } from "../../../graphql/queries/query-blog";
import { FixBackgroundText } from "@/components/FixBackgroundText";
import DefaultButton from "@/components/Button";
import Tile from "@/components/Tile";
import Error from "@/components/Error";
import Link from "next/link";
import { getPostBySlug, getRecentPosts } from "@/lib/queries/getPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const data = await getPostBySlug(slug);
    const post = data.post;

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
  const data = await getPostBySlug(slug);
  const post = data.post;
  const data2 = await getRecentPosts(post.id);
  const posts = data2.posts.nodes;

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
