"use client";

import { BannerButton } from "@/components/Button";
import { timelineItems } from "@/data";
import styles from "@/styles/about.module.scss";
import Image from "next/image";
import { useState } from "react";
import useIsMobile from "@/components/IsMobile";
import { TimelineItem } from "@/components/TimeLine";

export default function About() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Detect mobile screens

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_background}>
          <Image
            src={"/about-hero.png"}
            priority
            alt="slider"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        <div className={styles.hero_content}>
          <div className={styles.hero_image}>
            <Image src={"/profile.jpg"} alt="about" fill />
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
            src={"/about-background.jpg"}
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
            <div className={styles.desc_left}>
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
                guidance,
              </p>
            </div>
            <div className={styles.desc_image}>
              <Image
                src={"/about-background.jpg"}
                priority
                alt="slider"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <div className={styles.desc_right}>
              <p>
                and hands-on support to move your business forward with purpose.
              </p>
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
                  src={"/signature.png"}
                  priority
                  alt="signature"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section className={styles.career}>
        <h2>MY CAREER PATH</h2>
        <div className={styles.career_content}>
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isMobile={isMobile}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
        </div>
        <div className={styles.career_banner}>
          <BannerButton src="/contact" btnText="Let's connect!">
            Have a project in mind?
          </BannerButton>
        </div>
      </section>
    </>
  );
}