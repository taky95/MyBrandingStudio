import Image from "next/image";
import styles from "@/styles/work.module.scss";

import { GET_WORKS } from '../../graphql/queries/query-work';
import client from '@/lib/apollo-client';
import SlideshowGallery from "@/components/SlideshowGallery";
import DefaultButton from "@/components/Button";

export const revalidate = 60 

export default async function Work() {
    const { data } = await client.query({ 
        query: GET_WORKS,
        fetchPolicy: "no-cache", // Disable caching
    });

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.hero_background}>
                    <Image
                        src={"/work-header.jpg"}
                        priority
                        alt="slider"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
                <h1>WORK</h1>
            </section>
            <section className={styles.desc}>
                <p>
                    Every business wants to grow—more visibility, more leads, more loyal customers. But with limited time and resources, it&apos;s not always easy to make that happen. That&apos;s where we step in. We partner with small and medium businesses to bring their marketing to life — through digital campaigns, standout branding, content creation, and advertising across print and digital. We&apos;ll take care of your marketing and branding so you can focus on what matters most: your product, your service, and your customers.
                </p>
            </section>
            <section className={styles.list}>
                <SlideshowGallery data={data.works} />
            </section>
            <section className={styles.intro}>
                <h3>Have a Project in Mind?</h3>
                <p>Whether you&apos;re launching a new product, refreshing your brand, or looking to level up your marketing — great ideas start with a conversation. I&apos;m here to help you with clarifying your goals, shaping your vision, and mapping out the best path forward. From discovery and strategy to content creation, execution, and ongoing optimization, I&apos;ll guide you through every step. Share your ideas — I&apos;ll help bring them to life.</p>
                <DefaultButton src="/contact">Let&apos;s Chat!</DefaultButton>
            </section>
        </>
    )
}