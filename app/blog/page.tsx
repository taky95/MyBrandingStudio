import Image from "next/image";
import styles from "@/styles/blog.module.scss";

import { GET_ALL_POSTS, Post } from '../../graphql/queries/query-blog';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance
import Tile from "@/components/Tile";
import DefaultButton, { BannerButton } from "@/components/Button";
import { FadeInOnScroll } from "@/components/FadeIn";
import Error from "@/components/Error";

export const revalidate = 60

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
        return (
        <Error />
        );
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
                            src={post.featuredImage ? post.featuredImage.node.sourceUrl : "/sample1.jpg"}
                            title={post.title}
                            link={`/blog/${post.slug}`}
                            alt={post.featuredImage ? post.featuredImage.node.altText : "Blog Image Placeholder"}
                            size='400px'
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
    )
}