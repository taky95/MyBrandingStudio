import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/tile.module.scss";

interface TileProps {
  src: string; 
  title: string;
  link: string;
  alt: string;
}

const Tile = ({ src, title, link, alt }: TileProps) => {
  
  return(
    <div className={styles.link} >
      <h3>{title}</h3>
      <Link href={link}>
        Read more
        <div className={styles.arrow} >
          <Image src="/arrow.png" alt="arrow" fill 
            sizes="(max-width: 768px) 40px, 60px"
          />
        </div>
      </Link>
      <div className={styles.image}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 300px, 300px"
        />
      </div>
    </div>
  )
}

export default Tile;