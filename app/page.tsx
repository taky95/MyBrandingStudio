import Image from "next/image";
import styles from "@/styles/index.module.scss";
import Link from "next/link";

import { HOME_PAGE_QUERY, NavItem, Resource} from '../graphql/queries/query';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance
import { instagram } from "@/data";
import Card from "@/components/Card";
import Steps from "@/components/Steps";
import Instagram from "@/components/Instagram";

export const revalidate = 60;

export default async function Home() {
  const { data } = await client.query({ 
    query: HOME_PAGE_QUERY,
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
        <h2>{intro.title}</h2>
        <p>{intro.description}</p>
      </section>
      <section className={styles.steps}>
        <Steps steps={steps}/>
      </section>
      <section className={styles.bio}>
        <div className={styles.bio_card}>
          <div className={styles.bio_content}>
            <div className={styles.bio_text}>
              <h2>{bio.heading}</h2>
              <h3>{bio.subHeading1}</h3>
              <h3>{bio.subHeading2}</h3>
              <p>{bio.description}</p>
              <Link href='\about'><button>Read my story</button></Link>
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
      </section>
      <section className={styles.resources}>
        <h2>Resources</h2>
        <div className={styles.resources_content}>
          {resources.map((r_item: Resource, index: number) => {
            return (
              <div className={styles.resources_links} key={index}>
                <h3>{r_item.resourceField.title}</h3>
                <Link href={r_item.resourceField.link}>
                  Read more
                  <div className={styles.resources_arrow} >
                    <Image src="/arrow.png" alt="arrow" fill 
                      sizes="(max-width: 768px) 40px, 60px"
                    />
                  </div>
                </Link>
                <div className={styles.resources_image}>
                  <Image
                    src={r_item.resourceField.image.node.sourceUrl}
                    alt={r_item.resourceField.title}
                    fill
                    sizes="(max-width: 768px) 100px, 250px"
                  />
                </div>
              </div>
            );}
          )} 
        </div>
        <span className={styles.resources_line}></span>
      </section>
      <section className={styles.socialmedia}>
          <Instagram instagram={instagram} />
      </section>
    </>
  );
}
