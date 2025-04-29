"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "@/styles/card.module.scss";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface Card {
  cards:{
    title: string;
    description: string;
    buttonText: string;
    image: string;
  }[]
}

const Card: React.FC<Card> = ({ cards }) => {

  const settings = {
    dots: true, // Enables pagination dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    arrows: false, // Hides next/prev arrows
  };


  return (
    <div className={styles.cardSlider}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <button>{card.buttonText}</button>
            </div>
            <div className={styles.cardImage}>
              <Image
                src={card.image}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;