import Image from "next/image";
import styles from "@/styles/index.module.scss";
import Link from "next/link";

import { GET_POSTS } from '../graphql/queries/query';
import client from '@/lib/apollo-client'; // Import the Apollo Client instance
import { nav } from "@/data";
import Card from "@/components/Card";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default async function Home() {
  const { data } = await client.query({ query: GET_POSTS });
  console.log(data);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_background}>
          <Image
            src="https://picsum.photos/400/200"
            priority
            alt="slider"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
        </div>
        <div className={styles.hero_content}>
          <Card />
        </div>
      </section>
      <section className={styles.nav}>
        {nav.map((nav_item, index) => {
          // Subtract a fixed value from each RGB component to make it darker
          const baseR = 29;
          const baseG = 97;
          const baseB = 103;
          const darkeningFactor = 20; // Amount to subtract per iteration

          const dynamicColor = `rgba(
            ${Math.max(baseR - index * darkeningFactor, 0)}, 
            ${Math.max(baseG - index * darkeningFactor, 0)}, 
            ${Math.max(baseB - index * darkeningFactor, 0)}, 
            1
          )`;
          return (
            <Link href={nav_item.link} key={index}>
              <div className={styles.nav_content} 
                style={{
                  backgroundColor: dynamicColor,
                }}
              >
                <Image src={nav_item.img} alt={nav_item.title} 
                  className={styles.nav_image} fill/>
                <h2>{nav_item.title}</h2>
                <HiOutlineArrowLongRight className={styles.nav_arrow}/>
              </div>
            </Link>
          )}
        )} 
      </section>
      {/*
      <section className={styles.nav}>
        {nav.map((nav_item, index) => (
            <div className={styles.nav_content} key={index}>
            <Image src={nav_item.img} width={100} height={100}  alt="service-info" />
            <p>{nav_item.title}</p>
            <Link href={nav_item.link}>arrow</Link>
          </div>
        ))} 
      </section>
      <section className={styles.intro}>
        <h2></h2>
        <p></p>
      </section>
      <section className={styles.steps}>
        {steps.map((step, index) => (
          <div className={styles.steps_content} key={index}>
            <Image src="https://picsum.photos/100/100" width={100} height={100}  alt="step" />
            <div>
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
              <Link href="#">Read more</Link>
            </div>
          </div>
        ))} 
      </section>
      <section className="introduction">
        <Image src="https://picsum.photos/100/100" width={100} height={100} alt="review" />
        <div>
          <h2>Hey, Im Marina,</h2>
          <h3>your new branding</h3>
          <h3>b marketing strategist</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Read my story</button>
        </div>
      </section>
      <section className="resources">
        <h2>Resources</h2>
        <div className="resource">
          <div className="resource-item">
            <h3>Resource Title</h3>
            <button>Read more</button>
            <Image src="https://picsum.photos/100/100" width={100} height={100} alt="resource" />
          </div>
          <div className="resource-item">
            <h3>Resource Title</h3>
            <button>Read more</button>
            <Image src="https://picsum.photos/100/100" width={100} height={100} alt="resource" />
          </div>
          <div className="resource-item">
            <h3>Resource Title</h3>
            <button>Read more</button>
            <Image src="https://picsum.photos/100/100" width={100} height={100} alt="resource" />
          </div>
        </div>
      </section>
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
