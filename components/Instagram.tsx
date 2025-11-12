"use client";

import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from "next/image";
import styles from "../styles/instagram.module.scss";
import { InstagramPost } from "@/app/api/instagram/route";
import Link from "next/link";
import DefaultButton from "./Button";
import { FaInstagram } from "react-icons/fa";

interface InstagramProps {
  instagram: {
    user:{
      id: string;
      username: string;
      profile_picture_url: string;  
    },
    images: InstagramPost[];
  }
}

const Instagram: React.FC<InstagramProps> = ({ instagram }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [AutoScroll({speed:0.6, stopOnInteraction: false})]);

  return (
    <>
      <div className={styles.account}>
        <div className={styles.profile}>
          <div className={styles.profileBorder}>
            <div className={styles.inner}>
              <Image src={instagram?.user?.profile_picture_url||'/images/ui/failover.png'} alt={instagram?.user?.username||"Instagram"} fill unoptimized />
            </div>
          </div>
          <div className={styles.username}>
            <div className={styles.line1}>
              {instagram?.user?.username||"mybrandingstudio"}
            </div>
            <div className={styles.line2}>
              @{instagram?.user?.username||"mybrandingstudio"}
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <DefaultButton src={"https://www.instagram.com/mypersonalbrandingstudio/"} newTab={true}>
            <FaInstagram />Follow
          </DefaultButton>
        </div>
      </div>
      <div className={styles.slider} ref={emblaRef}>
        <div className={styles.slider_container}>
          {instagram?.images?.map((data, index) => (
            <div key={index} className={styles.slider_item}>
              <Link href={data.permalink+'?utm_source=ig_web_copy_link'} target="_blank" rel="noopener noreferrer">
                <Image src={data.media_url} alt={data.caption} width={200} height={250} unoptimized />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Instagram;
