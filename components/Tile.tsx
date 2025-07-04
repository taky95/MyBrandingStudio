import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/tile.module.scss";

interface TileProps {
  src: string; 
  title: string;
  link: string;
  alt: string;
  size?: string;
}

const Tile = ({ src, title, link, alt, size }: TileProps) => {
  
  return(
    <Link href={link} className={styles.tile} >
      <h3 style={size ? {width: size} : undefined}>{title}</h3>
      <div className={styles.link}>
        Read more
        <div className={styles.arrow} >
          <Image src="/arrow.png" alt="arrow" fill 
            sizes="(max-width: 768px) 40px, 60px"
          />
        </div>
      </div>
      <div className={styles.image} style={size ? { width: size, height: size, paddingTop: 0 } : undefined}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={size ? size : "100vw"}
        />
      </div>
    </Link>
  )
}

export default Tile;