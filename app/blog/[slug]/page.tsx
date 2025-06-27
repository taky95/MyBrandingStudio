import Image from "next/image";
import styles from "@/styles/blog.module.scss";

import { GET_POST_BYSLUG } from '../../../graphql/queries/query-blog';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance
import { FixBackgroundText } from "@/components/FixBackgroundText";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data } = await client.query({
    query: GET_POST_BYSLUG,
    variables: { slug },
    fetchPolicy: 'no-cache',
  });

  const post = data.post;
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
              sizes="(max-width: 768px) 300px, 300px"
            />
          </div>
        :<></>}
        <FixBackgroundText />
        <article
          className=""
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </>
  );
}
