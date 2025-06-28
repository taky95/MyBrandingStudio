import React from "react";

import Link from "next/link";
import styles from "@/styles/button.module.scss";

interface ButtonProps {
  src: string; 
  text: string;
}

const DefaultButton = ({ src, text }: ButtonProps) => {
  
  return(
    <Link href={src} className={styles.defaultButton}>
      <button>{text}</button>
    </Link>

  )
}

export default DefaultButton;