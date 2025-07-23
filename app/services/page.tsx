import Image from "next/image";
import styles from "@/styles/services.module.scss";

export default function Services() {
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
                <h1>SERVICES</h1>
            </section>
            <section className={styles.desc}>
                <p>
                    Every business wants to grow—more visibility, more leads, more loyal customers. But with limited time and resources, it&apos;s not always easy to make that happen. That&apos;s where we step in. 
                </p>
                <p>
                  We partner with small and medium businesses to bring their marketing to life — through digital campaigns, standout branding, content creation, and advertising across print and digital. We&apos;ll take care of your marketing and branding so you can focus on what matters most: your product, your service, and your customers.
                </p>
            </section>
            <section className={styles.list}>

            </section>
            <section className={styles.intro}>

            </section>
        </>
    )
}