"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/instagram.module.scss";
import { InstagramPost } from "@/app/api/instagram/route";
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface InstagramProps {
  instagram: InstagramPost[];
}

const Instagram: React.FC<InstagramProps> = ({ instagram }) => {
  const settings = {
    dots: false,
    infinite: true,
    rtl: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplay: true,
    speed: 15000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }
      },
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
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className={styles.slider_container}>
      <Link href="https://www.instagram.com/mypersonalbrandingstudio/" target="_blank" rel="noopener noreferrer">
      <Slider {...settings}>
        {instagram.map((data, index) => (
          <div key={index} className={styles.slider_item}>
            <Image src={data.media_url} alt={data.caption} width={250} height={250} unoptimized />
          </div>
        ))}
      </Slider>
      </Link>
    </div>
  );
}

export default Instagram;
