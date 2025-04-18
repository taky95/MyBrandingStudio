import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Home() {
  const nav = [
    {
      title: "Services",
      img: "https://via.placeholder.com/1920x1080",
      link: "/services",
    },
    {
      title: "Services",
      img: "https://via.placeholder.com/1920x1080",
      link: "/services",
    },
    {
      title: "Services",
      img: "https://via.placeholder.com/1920x1080",
      link: "/services",
    },
    ]

  const steps = [
    {
      title:'1:1 Program',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title:'Sales & Growth',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title:'Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title:'Branding',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title:'Mindset',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]
  return (
    <>
      <section className={styles.hero}>
        <Image src="https://via.placeholder.com/1920x1080" alt="slider" />
        <div className={styles.cards}>
          <div className={styles.card_content}>
            <h1>Improve your Impact & Income</h1>
            <p>Slider Description</p>
            <button>Lets Do it!</button>
          </div>
          <Image src="https://via.placeholder.com/1920x1080" alt="logo" />
        </div>
      </section>
      <section className={styles.nav}>
        {nav.map((nav_item, index) => (
            <div className={styles.nav_content} key={index}>
            <Image src={nav_item.img} alt="service-info" />
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
            <Image src="https://via.placeholder.com/1920x1080" alt="step" />
            <div>
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
              <Link href="#">Read more</Link>
            </div>
          </div>
        ))} 
      </section>
      <section className="introduction">
        <Image src="https://via.placeholder.com/1920x1080" alt="review" />
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
            <Image src="https://via.placeholder.com/1920x1080" alt="resource" />
          </div>
          <div className="resource-item">
            <h3>Resource Title</h3>
            <button>Read more</button>
            <Image src="https://via.placeholder.com/1920x1080" alt="resource" />
          </div>
          <div className="resource-item">
            <h3>Resource Title</h3>
            <button>Read more</button>
            <Image src="https://via.placeholder.com/1920x1080" alt="resource" />
          </div>
        </div>
      </section>
      <section className="socialmedia">
        <ul>
          <li><a href="#"><Image src="https://via.placeholder.com/1920x1080" alt="slider" /></a></li>
          <li><a href="#"><Image src="https://via.placeholder.com/1920x1080" alt="slider" /></a></li>
          <li><a href="#"><Image src="https://via.placeholder.com/1920x1080" alt="slider" /></a></li>
          <li><a href="#"><Image src="https://via.placeholder.com/1920x1080" alt="slider" /></a></li>
          <li><a href="#"><Image src="https://via.placeholder.com/1920x1080" alt="slider" /></a></li>
        </ul>
      </section>
  </>
  );
}
