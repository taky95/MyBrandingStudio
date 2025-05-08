import Image from "next/image";
import styles from "@/styles/index.module.scss";
import Link from "next/link";

//import { GET_POSTS } from '../graphql/queries/query';
//import client from '@/lib/apollo-client'; // Import the Apollo Client instance
import { instagram, intro, nav, resources, steps, cards } from "@/data";
import Card from "@/components/Card";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Steps from "@/components/Steps";
import Instagram from "@/components/Instagram";

export default async function Home() {
  //const { data } = await client.query({ query: GET_POSTS });
  //console.log(data);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_background}>
          <Image
            src="https://picsum.photos/400/200"
            priority
            alt="slider"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"/>
        </div>
        <div className={styles.hero_content}>
          <Card cards={cards}/>
        </div>
      </section>
      <section className={styles.nav}>
        {nav.map((nav_item, index) => {
          return (
            <Link href={nav_item.link} key={index}>
              <div className={styles.nav_content}>
                <Image
                  src={nav_item.img}
                  alt={nav_item.title}
                  className={styles.nav_image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                <h2>{nav_item.title}</h2>
                <HiOutlineArrowLongRight className={styles.nav_arrow}/>
              </div>
            </Link>
          );}
        )} 
      </section>
      <section className={styles.intro}>
        <h2>{intro.title}</h2>
        <p>{intro.desc}</p>
      </section>
      <section className={styles.steps}>
        <Steps steps={steps}/>
      </section>
      <section className={styles.bio}>
        <div className={styles.bio_card}>
          <div className={styles.bio_content}>
            <div className={styles.bio_text}>
              <h2>Hey, I&#39;m Marina,</h2>
              <h3>your new branding</h3>
              <h3>&amp; marketing strategist.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
          {resources.map((r_item, index) => {
            return (
              <div className={styles.resources_links} key={index}>
                <h3>{r_item.title}</h3>
                <Link href={r_item.link}>
                  Read more <HiOutlineArrowLongRight className={styles.resources_arrow}/>
                </Link>
                <Image
                  src={r_item.img}
                  alt={r_item.title}
                  width={250}
                  height={250}
                  className={styles.resources_image}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </div>
            );}
          )} 
        </div>
        <span className={styles.resources_line}></span>
      </section>
      <section className={styles.socialmedia}>
          <Instagram instagram={instagram} />
      </section>
      {/*


      <section className="socialmedia">
        <ul>
          <li><a href="#"><Image src="https://picsum.photos/100/100" width={100} height={100} alt="slider" /></a></li>
          <li><a href="#"><Image src="https://picsum.photos/100/100" width={100} height={100} alt="slider" /></a></li>
          <li><a href="#"><Image src="https://picsum.photos/100/100" width={100} height={100} alt="slider" /></a></li>
          <li><a href="#"><Image src="https://picsum.photos/100/100" width={100} height={100} alt="slider" /></a></li>
          <li><a href="#"><Image src="https://picsum.photos/100/100" width={100} height={100} alt="slider" /></a></li>
        </ul>
      </section>
      */}
    </>
  );
}
