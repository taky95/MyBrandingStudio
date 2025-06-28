import Image from "next/image";
import styles from "@/styles/blog.module.scss";
import Link from "next/link";

import { GET_POSTS, Post } from '../../graphql/queries/query-blog';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance
import Tile from "@/components/Tile";
import DefaultButton from "@/components/Button";
import { FadeInOnScroll } from "@/components/FadeIn";

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
                        <Tile
                            key={post.slug}
                            src={post.featuredImage ? post.featuredImage.node.sourceUrl : "/sample1.jpg"}
                            title={post.title}
                            link={`/blog/${post.slug}`}
                            alt={post.featuredImage ? post.featuredImage.node.altText : "Blog Image Placeholder"}
                            size='360px'
                        ></Tile>
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
                                    text="View my Portfolio"
                                    src="/contact"
                                />
                            </FadeInOnScroll>
                        </div>
                    </div>
                    <Link href="/contact" className={styles.intro_banner}>
                        Let&apos;s Connect & Create 
                        <div className={styles.intro_arrow} >
                            <Image src="/arrow.png" alt="arrow" fill 
                            sizes="(max-width: 768px) 40px, 60px"
                            />
                        </div>
                    </Link>
                    <span className={styles.separator}></span>
                </div>
            </section>
        </>
    )
}