"use client";

import { useState } from "react";
import { BannerButton } from "@/components/Button";
import useIsMobile from "@/components/IsMobile";
import { TimelineItem } from "@/components/TimeLine";
import styles from "@/styles/about.module.scss";
import { timelineItems } from "@/data";

export default function Career() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
        {isMobile && (<div className={styles.mobile_background}></div>)}
        <h2>MY CAREER PATH</h2>
        <div className={styles.career_content}>
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isMobile={isMobile}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
        <div className={styles.career_banner}>
          <BannerButton src="/contact" btnText="Let's connect!">
            Have a project in mind?
          </BannerButton>
        </div>
    </>
  );
}