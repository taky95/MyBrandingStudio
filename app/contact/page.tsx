import Image from "next/image";
import styles from "@/styles/contact.module.scss";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

export const revalidate = 60 

export default async function Contact() {

    return (
        <>
            <section className={styles.contact}>
                <div className={styles.image}>
                    <Image
                        src="/sample1.jpg"
                        alt="contact"
                        fill
                    />
                </div>
                <div className={styles.intro}>
                    <h2>Have a business idea or project in mind?</h2>
                    <p>
                        While you focus on what you do bset, I&apos;ll guide the strategy, branding, and marketing to rbing your idea to life. With the right focus, we&apos;ll build something great together. 
                    </p>
                    <h3>Let&apos;s do it!</h3>
                    <p>marinayaylabranding@gmail.com</p>
                    <p>+1(403)4708167</p>
                    <div className={styles.social}>
                        <ul>
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><FaLinkedin /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                        </ul>
                    </div>   
                </div>
            </section>
        </>
    )
}