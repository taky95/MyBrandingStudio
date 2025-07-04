import Image from "next/image";
import styles from "@/styles/blog.module.scss";

import { GET_POST_BYSLUG, GET_RECENT_POSTS, Post } from '../../../graphql/queries/query-blog';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance
import { FixBackgroundText } from "@/components/FixBackgroundText";
import DefaultButton, { BannerButton } from "@/components/Button";
import Tile from "@/components/Tile";
import {FadeInOnScroll} from "@/components/FadeIn";

interface BlogPostPageProps {
  params: Promise<{slug: string }>
}

export const revalidate = 60 //60*60 for 1 hour

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { data } = await client.query({
    query: GET_POST_BYSLUG,
    variables: { slug },
    fetchPolicy: 'no-cache',
  });

  const data2 = await client.query({
    query: GET_RECENT_POSTS,
    fetchPolicy: 'no-cache',
  });

  const post = data.post;
  const posts = data2.data.posts.nodes;
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_background}>
          <Image
            src={"/sample1.jpg"}
            priority
            alt="slider"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        <h1>BLOG</h1>
      </section>
      <section className={styles.article}>
        <h1 className="" dangerouslySetInnerHTML={{ __html: post.title }} />
        {post.featuredImage?
          <div className={styles.article_image}>
            <Image
              src={post.featuredImage ? post.featuredImage.node.sourceUrl : "/sample1.jpg"}
              alt={post.featuredImage ? post.featuredImage.node.altText : "Blog Image"}
              fill
              sizes="100vw"
            />
          </div>
        :<></>}
        <FixBackgroundText />
        <article
          className=""
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
      <section className={styles.list}>
        <div className={styles.collection}>
          {posts.map((article: Post) => (
            <Tile
              key={article.slug}
              src={article.featuredImage ? article.featuredImage.node.sourceUrl : "/sample1.jpg"}
              title={article.title}
              link={`/blog/${article.slug}`}
              alt={article.featuredImage ? article.featuredImage.node.altText : "Category Image Placeholder"}
              size='400px'
            />
          ))}
        </div>
      </section>
      <section className={styles.intro}>
          <div className={styles.intro_content}>
              <div className={styles.intro_background}>
                  <div className={styles.intro_image}>
                      <Image
                          src={"/sample1.jpg"}
                          alt="intro"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      />
                  </div>
                  <div className={styles.intro_card}>
                      <FadeInOnScroll delay={400} once={false}>
                        <div> 
                          <h3>DESIGN WITH PURPOSE.</h3>
                          <h3>MARKETING WITH RESULTS.</h3>
                        </div>
                      </FadeInOnScroll>
                      <FadeInOnScroll delay={400} once={false}>
                        <DefaultButton
                            src="/contact"
                        >View my Portfolio</DefaultButton>
                      </FadeInOnScroll>
                  </div>
              </div>
              <div className={styles.intro_banner}>
                  <BannerButton
                      src="/contact"
                      btnText="Talk to Us"
                  >Let&apos;s Connect & Create</BannerButton>
              </div>
              <span className={styles.separator}></span>
          </div>
      </section>
    </>
  );
}
