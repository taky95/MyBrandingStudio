import Image from "next/image";
import styles from "@/styles/services.module.scss";
import DefaultButton from "@/components/Button";
import ServiceList from "@/components/ServiceList";
import Link from "next/link";

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
      <section className={styles.intro}>
        <p>
          Running a business means juggling a million tasks—and it’s easy for
          marketing to fall behind. But if your customers don’t know how great
          your products or services are, your best ideas won’t get the attention
          they deserve. Great ideas need smart, consistent execution—and that’s
          where we’re here to help.
        </p>
        <p>
          From branding and marketing strategy to website design, digital
          campaigns, and compelling content, we’re here to help your business
          grow and connect with the customers who matter most. You focus on
          running your business, and we’ll make sure your marketing keeps up
          every step of the way.
        </p>
      </section>
      <section className={styles.list}>
        <ServiceList />
      </section>
      <section className={styles.banner}>
        <div className={styles.container}>
          <Link href="/" className={styles.image_container}>
            <div className={styles.image}>
              <Image src="/services-banner.png" alt="service icon" fill />
            </div>
          </Link>
          <div className={styles.title_container}>
            <div className={styles.title_images}>
              <div className={styles.title}>
                <Image src="/services-title1.png" alt="service icon" fill />
              </div>
              <div className={styles.title}>
                <Image src="/services-title2.png" alt="service icon" fill />
              </div>
              <div className={styles.title}>
                <Image src="/services-title3.png" alt="service icon" fill />
              </div>
            </div>
            <DefaultButton src="/work">View my Portfolio</DefaultButton>
          </div>
        </div>
      </section>
    </>
  );
}
