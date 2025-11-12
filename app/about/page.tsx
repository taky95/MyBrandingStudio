import styles from "@/styles/about.module.scss";
import Image from "next/image";
import Career from "@/components/Career";

export const metadata = {
  title: "About | My Branding Studio",
  description: "Learn about our story and mission.",
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About",
  "url": "https://mybrandingstudio.ca/about",
  "description": "Learn more about My Branding Studio and our design process.",
  "inLanguage": "en"
}]

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_background}>
          <Image
            src={"/images/backgrounds/about-hero.jpg"}
            priority
            alt="slider"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        <div className={styles.hero_content}>
          <div className={styles.hero_image}>
            <Image src={"/images/profiles/about-profile.jpg"} alt="about" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"/>
          </div>
          <div className={styles.hero_text}>
            <h2>Hey,</h2>
            <h2>I&apos;m Marina,</h2>
            <hr />
            <p>Your new branding & marketing strategist.</p>
          </div>
        </div>
      </section>
      <section className={styles.intro}>
        <div className={styles.intro_background}>
          <Image
            src={"/images/backgrounds/about-background.jpg"}
            priority
            alt="slider"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        <div className={styles.intro_content}>
          <h2>I&apos;M ON A MISSION</h2>
          <p>
            to help bring your business ideas to life with clear strategies &
            creative solutions that really work & leave a lasting impression.
          </p>
          <hr />
          <div className={styles.desc}>
              <p>
                At my branding and marketing studio, my mission is simple: to
                help businesses grow in a way that feels clear, manageable, and
                true to who they are.{" "}
              </p>
              <p>
                I understand that many business owners wear multiple hats every
                day — handling everything from operations to customer care — and
                that marketing can often feel overwhelming or out of reach.
              </p>
              <p>
                That’s where we come in. We’re here to bring your ideas to life,
                shape your brand story, and build marketing strategies that
                actually work — not just in theory, but in practice. Whether
                you’re starting fresh or need a new direction, we offer the
                guidance, and hands-on support to move your business forward with purpose.
              </p>
            <div className={styles.desc_image}>
              <Image
                src={"/images/backgrounds/about-background.jpg"}
                priority
                alt="slider"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
              <p>
                We know the journey isn’t always easy — but you don’t have to do
                it alone. With the right tools, a clear plan, and a trusted
                partner by your side, growth is not only possible — it’s within
                reach. Together, we’ll figure out what works, cut through the
                noise, and make your brand shine. We’re not just here to help —
                we’re here to make it work.
              </p>
              <div className={styles.signature}>
                <Image
                  src={"/images/titles/signature.png"}
                  priority
                  alt="signature"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section className={styles.career}>
        <Career />
      </section>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}