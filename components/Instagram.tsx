"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/instagram.module.scss";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface Instagram {
  instagram: { 
    caption: string;
    timestamp: string;
    media_url: string 
  }[]
}

const Instagram: React.FC<Instagram> = ({ instagram }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {instagram.map((data, index) => (
          <div key={index} className={styles.slider_item}>
            <Image src={data.media_url} alt={data.caption} width={250} height={250} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Instagram;
