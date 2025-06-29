import Image from "next/image";
import styles from "@/styles/work.module.scss";
import Link from "next/link";

import { GET_WORKS } from '../../graphql/queries/query-work';
import client from '@/lib/apollo-client';
import SlideshowGallery from "@/components/SlideshowGallery";

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
                        src={"/sample1.jpg"}
                        priority
                        alt="slider"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
                <h1>Work</h1>
            </section>
            <section className={styles.desc}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
            <section className={styles.list}>
                <SlideshowGallery data={data.works} />
            </section>
            <section className={styles.intro}>
                <h3>Have a Project in Mind?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link href="/contact" >Let&apos;s Chat!</Link>
            </section>
        </>
    )
}