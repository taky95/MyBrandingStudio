import Image from "next/image";
import styles from "@/styles/blog.module.scss";
import Link from "next/link";

import { GET_POSTS, Post } from '../../graphql/queries/query-blog';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance

export default async function Blog() {
    const { data } = await client.query({ 
        query: GET_POSTS,
        fetchPolicy: "no-cache", // Disable caching
    });
    const posts = data.posts.nodes;
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
            <section className={styles.list}>
                <div className={styles.collection}>
                    {posts.map((post: Post) => (
                        <div className={styles.blog_links} key={post.slug}>
                            <h3>{post.title}</h3>
                            <Link href={`/blog/${post.slug}`}>
                                Read more
                                <div className={styles.blog_arrow} >
                                    <Image src="/arrow.png" alt="arrow" fill 
                                    sizes="(max-width: 768px) 40px, 60px"
                                    />
                                </div>
                            </Link>
                            <div className={styles.blog_image}>
                                <Image
                                src={post.featuredImage? post.featuredImage.node.sourceUrl : "/sample1.jpg"}
                                alt={post.featuredImage? post.featuredImage.node.altText : "/sample1.jpg"}
                                fill
                                sizes="(max-width: 768px) 300px, 300px"
                                />
                            </div>
                        </div>
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
                        <div className={styles.intro_text}>
                            <h3>DESIGN WITH PURPOSE.</h3>
                            <h3>MARKETING WITH RESULTS.</h3>
                            <Link href="/contact" >View my Portfolio</Link>
                        </div>
                    </div>
                    <Link href="/contact" >
                        Let&apos;s Connect & create 
                        <div className={styles.intro_arrow} >
                            <Image src="/arrow.png" alt="arrow" fill 
                            sizes="(max-width: 768px) 40px, 60px"
                            />
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}