"use client";

import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from "next/image";
import styles from "../styles/instagram.module.scss";
import { InstagramPost } from "@/app/api/instagram/route";
import Link from "next/link";

interface InstagramProps {
  instagram: InstagramPost[];
}

const Instagram: React.FC<InstagramProps> = ({ instagram }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [AutoScroll({speed:1, stopOnInteraction: false})]);


  return (

      <div className={styles.slider} ref={emblaRef}>
        <div className={styles.slider_container}>
          {instagram.map((data, index) => (
            <div key={index} className={styles.slider_item}>
              <Link href={data.permalink+'?utm_source=ig_web_copy_link'} target="_blank" rel="noopener noreferrer">
                <Image src={data.media_url} alt={data.caption} width={250} height={250} unoptimized />
              </Link>
            </div>
          ))}
        </div>
      </div>

  );
}

export default Instagram;
