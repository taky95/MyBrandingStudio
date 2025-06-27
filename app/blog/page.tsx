import Image from "next/image";
import styles from "@/styles/blog.module.scss";
import Link from "next/link";

import { BLOG_QUERY, Post } from '../../graphql/queries/query-blog';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance

export default async function Blog() {
    const { data } = await client.query({ 
        query: BLOG_QUERY,
        fetchPolicy: "no-cache", // Disable caching
    });
    console.log(data);
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
                <ul className="space-y-4">
                    {data.map((post: Post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl text-blue-600 hover:underline" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                    </li>
                    ))}
                </ul>
            </section>
            <section className={styles.intro}>
                <h3>DESIGN WITH PURPOSE.</h3>
                <h3>MARKETING WITH RESULTS.</h3>
                <Link href="/contact" >View my Portfolio</Link>
            </section>
        </>
    )
}