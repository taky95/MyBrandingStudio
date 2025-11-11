import Image from "next/image";
import styles from "@/styles/blog.module.scss";

import { GET_ALL_POSTS, Post } from "../../graphql/queries/query-blog";
import client from "@/lib/apollo-client"; // Import the Apollo Client instance
import Tile from "@/components/Tile";
import DefaultButton from "@/components/Button";
import Error from "@/components/Error";
import Link from "next/link";

export const metadata = {
  title: "Blog | My Branding Studio",
  description: "Read our latest articles on branding and marketing.",
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Blog",
  "url": "https://mybrandingstudio.ca/blog",
  "description": "Read our latest articles on branding and marketing.",
  "inLanguage": "en"
}]

export const revalidate = 60;

export default async function Blog() {
  let posts = [];

  try {
    const res = await client.query({
      query: GET_ALL_POSTS,
      fetchPolicy: "no-cache", // Disable caching
    });
    posts = res.data.posts.nodes;
  } catch (error) {
    console.error("WordPress fetch failed:", error);
  }

  const isError = !posts || posts.length === 0;
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
      <section className={styles.list}>
        <div className={styles.collection}>
          {posts.map((post: Post) => (
            <Tile
              key={post.slug}
              src={
                post.featuredImage
                  ? post.featuredImage.node.sourceUrl
                  : "/sample1.jpg"
              }
              title={post.title}
              link={`/blog/${post.slug}`}
              alt={
                post.featuredImage
                  ? post.featuredImage.node.altText
                  : "Blog Image Placeholder"
              }
              size="400px"
            ></Tile>
          ))}
        </div>
      </section>
      <section className={styles.banner}>
        <div className={styles.container}>
          <Link href="/" className={styles.image_container}>
            <div className={styles.image}>
              <Image src="/services-banner.png" alt="service icon" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"/>
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
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

{
  /*<section className={styles.intro}>
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
</section>*/
}
