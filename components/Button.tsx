import React from "react";

import Link from "next/link";
import styles from "@/styles/button.module.scss";

interface ButtonProps {
  src: string; 
  children?: React.ReactNode;
}

const DefaultButton = ({ src, children }: ButtonProps) => {
  
  return(
    <Link href={src} className={styles.defaultButton}>
      <button>{children}</button>
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