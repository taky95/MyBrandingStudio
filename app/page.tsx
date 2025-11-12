import Image from "next/image";
import styles from "@/styles/index.module.scss";
import Link from "next/link";

import { NavItem } from '../graphql/queries/query';
import Card from "@/components/Card";
//import Steps from "@/components/Steps";
import DefaultButton from "@/components/Button";
import Tile from "@/components/Tile";
import Error from "@/components/Error";
import { FadeInOnScroll } from "@/components/FadeIn";
import { Post } from "@/graphql/queries/query-blog";
import { getWpData } from "@/lib/queries/getWpData";

const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Home",
  "url": "https://mybrandingstudio.ca/",
  "description": "Branding & Marketing Strategist.",
  "inLanguage": "en"
}]

export const revalidate = 60;

export default async function Home() {
  const data = await getWpData();
  const heroCards = data.heroCards.nodes
  const nav =data.navItems.nodes
  const intro = data.introductions.nodes[0].introField
  const steps = data.steps.nodes
  const resources = data.posts.nodes
  const bio = data.bios.nodes[0].bioField
  const heroImage = data.heroImages.nodes[0].heroImageField.image.node.sourceUrl

  const isError = !heroImage || !intro || !bio || !nav || !steps || !resources;
  if (isError) {
    return (
      <Error />
    );
  }

  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.srOnly}>My Branding Studio - Branding & Marketing Strategist</h1>
        <div className={styles.hero_background}>
          <Image
            src={heroImage}
            priority
            alt="slider"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"/>
        </div>
        <div className={styles.hero_content}>
          <Card cards={heroCards}/>
        </div>
      </section>
      <section className={styles.nav}>
        {nav.map((nav_item: NavItem, index: number) => {
          return (
            <Link href={nav_item.navField.link} key={index}>
              <div className={styles.nav_content}>
                <Image
                  src={nav_item.navField.image.node.sourceUrl}
                  alt={nav_item.navField.title}
                  className={styles.nav_image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                <div className={styles.navField_titleArea}>
                  <h2>{nav_item.navField.title}</h2>
                  <div className={styles.nav_arrow} >
                    <Image src="/images/ui/arrow.png" alt="arrow" fill 
                      sizes="(max-width: 768px) 40px, 60px"
                    />
                  </div>
                </div>
              </div>
            </Link>
          );}
        )} 
      </section>
      <section className={styles.intro}>
        <div className={styles.intro_title}>
          <Image src='/images/titles/intro-title.png' alt='intro-title' fill/>
        </div>
        <p>{intro.description}</p>
      </section>
      {/*<section className={styles.steps}>
        <Steps steps={steps}/>
      </section>*/}
      <section className={styles.bio}>
        <FadeInOnScroll delay={200} once={true}>
          <div className={styles.bio_card}>
            <div className={styles.bio_content}>
              <div className={styles.bio_text}>
                <div className={styles.bio_title}>
                  <Image src='/images/titles/bio-title.png' alt='bio-title' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"/>
                </div>
                <h2>{bio.heading}</h2>
                <h3>{bio.subHeading1}</h3>
                <h3>{bio.subHeading2}</h3>
                <p>{bio.description}</p>
                <DefaultButton src="\about">Read my story</DefaultButton>
              </div>
              <div className={styles.bio_picture} >
                <Image
                  src={bio.image.node.sourceUrl}
                  alt="bio_picture"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
      <section className={styles.resources}>
        <h2>Resources</h2>
        <div className={styles.resources_content}>
          {resources.map((r_item: Post, index: number) => {
            return (
              <Tile 
                    key={index}
                    src={r_item.featuredImage? r_item.featuredImage.node.sourceUrl : '/images/ui/failover.png'}
                    title={r_item.title}
                    link={'/blog/'+r_item.slug}
                    alt={r_item.title}></Tile>
            );}
          )} 
        </div>
        <span className={styles.resources_line}></span>
      </section>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
