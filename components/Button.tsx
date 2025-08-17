"use client";

import React from "react";

import Link from "next/link";
import styles from "@/styles/button.module.scss";
import * as gtag from "@/lib/gtag";

interface ButtonProps {
  src: string; 
  children?: React.ReactNode;
}

const DefaultButton = ({ src, children }: ButtonProps) => {
  
  return(
    <Link href={src} className={styles.defaultButton}>
      <button
        onClick={() =>
          gtag.event({
            action: "click",
            params: { label: children?children.toString():"Button Clicked" },
          })
        }
      >{children}</button>
    </Link>
  )
}

export const BannerButton = ({ src, children, btnText }: ButtonProps & { btnText: string }) => {
  
  return(
    <div className={styles.bannerButton}>
        {children} 
        <div className={styles.btn} >
            <DefaultButton src={src}>{btnText}</DefaultButton>
        </div>
    </div>

  )
}

export default DefaultButton;