import Image from "next/image";
import styles from "@/styles/blog.module.scss";
import Link from "next/link";


export default async function Blog() {
    
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
                <h1>Blog</h1>
                <p>Welcome to the blog section!</p>
            </section>
            <section className={styles.list}>
            
            </section>
            <section className={styles.intro}>
                <h3>DESIGN WITH PURPOSE.</h3>
                <h3>MARKETING WITH RESULTS.</h3>
                <Link href="/contact" >View my Portfolio</Link>
            </section>
        </>
    )
}