import Image from "next/image";
import styles from "@/styles/work.module.scss";
import Link from "next/link";

export default async function Work() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.hero_background}>
                    <Image
                        src={"/work-hero.jpg"}
                        priority
                        alt="slider"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
                <h1>Work</h1>
                <p>Welcome to the work section!</p>
            </section>
            <section className={styles.list}>

            </section>
            <section className={styles.desc}>
                <h3>Have a Project in Mind?</h3>
                <p>sample sample sample sample sample sample sample sample sample sample sample sample</p>
                <Link href="/contact" >Let&apos;s Chat!</Link>
            </section>
        </>
    )
}