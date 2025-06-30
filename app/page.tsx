import Image from "next/image";
import styles from "@/styles/index.module.scss";
import Link from "next/link";

import { WP_QUERY, NavItem, Resource} from '../graphql/queries/query';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance
import Card from "@/components/Card";
import Steps from "@/components/Steps";
import DefaultButton from "@/components/Button";
import Tile from "@/components/Tile";
import { FadeInOnScroll } from "@/components/FadeIn";

export const revalidate = 60;

export default async function Home() {
  const { data } = await client.query({ 
    query: WP_QUERY,
    fetchPolicy: "no-cache", // Disable caching
  });

  const heroCards = data.heroCards.nodes
  const nav =data.navItems.nodes
  const intro = data.introductions.nodes[0].introField
  const steps = data.steps.nodes
  const resources = data.resources.nodes
  const bio = data.bios.nodes[0].bioField
  const heroImage = data.heroImages.nodes[0].heroImageField.image.node.sourceUrl
  return (
    <>
      <section className={styles.hero}>
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
                <h2>{nav_item.navField.title}</h2>
                <div className={styles.nav_arrow} >
                  <Image src="/arrow.png" alt="arrow" fill 
                    sizes="(max-width: 768px) 40px, 60px"
                  />
                </div>
              </div>
            </Link>
          );}
        )} 
      </section>
      <section className={styles.intro}>
        <div className={styles.intro_title}>
          <Image src='/intro-title.png' alt='intro-title' fill/>
        </div>
        <p>{intro.description}</p>
      </section>
      <section className={styles.steps}>
        <Steps steps={steps}/>
      </section>
      <section className={styles.bio}>
        <FadeInOnScroll delay={200} once={true}>
          <div className={styles.bio_card}>
            <div className={styles.bio_content}>
              <div className={styles.bio_text}>
                <div className={styles.bio_title}>
                  <Image src='/bio-title.png' alt='bio-title' fill/>
                </div>
                <h2>{bio.heading}</h2>
                <h3>{bio.subHeading1}</h3>
                <h3>{bio.subHeading2}</h3>
                <p>{bio.description}</p>
                <DefaultButton src="\about" text="Read my story" />
              </div>
              <div className={styles.bio_picture} >
                <Image
                  src="/sample2.jpg"
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
          {resources.map((r_item: Resource, index: number) => {
            return (
              <Tile 
                    key={index}
                    src={r_item.resourceField.image.node.sourceUrl}
                    title={r_item.resourceField.title}
                    link={r_item.resourceField.link}
                    alt={r_item.resourceField.title}></Tile>
            );}
          )} 
        </div>
        <span className={styles.resources_line}></span>
      </section>
      
    </>
  );
}
