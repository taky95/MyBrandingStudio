import Image from "next/image";
import styles from "@/styles/contact.module.scss";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Contact | My Branding Studio",
  description: "Get in touch with My Branding Studio for your branding and marketing needs.",
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Contact",
  "url": "https://mybrandingstudio.ca/contact",
  "description": "Get in touch with My Branding Studio for your branding and marketing needs.",
  "inLanguage": "en"
}]


export const revalidate = 60 

export default async function Contact() {

    return (
        <>
            <section className={styles.contact}>
                <div className={styles.image}>
                    <Image
                        src="/contact-profile.jpg"
                        alt="contact"
                        fill
                        sizes="500px"
                    />
                </div>
                <div className={styles.intro}>
                    <h2>Have a business idea or project in mind?</h2>
                    <p>
                        While you focus on what you do best, I&apos;ll guide the strategy, branding, and marketing to bring your idea to life. With the right focus, we&apos;ll build something great together. 
                    </p>
                    <div className={styles.contact_title}>
                        <Image src='/contact-title.png' alt='intro-title' fill sizes="570px"/>
                    </div>
                    <p>marinayaylabranding@gmail.com</p>
                    <p>+1(403)4708167</p>
                    <div className={styles.social}>
                        <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=61564442412328" target="_blank" rel="noopener noreferrer" ><FaFacebookF /></a></li>
                            <li><a href="https://www.linkedin.com/in/marina-yayla/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                            <li><a href="https://www.instagram.com/mypersonalbrandingstudio/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                        </ul>
                    </div>   
                </div>
            </section>
            {/* Schema markup */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    )
}