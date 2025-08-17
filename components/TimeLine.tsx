import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/about.module.scss";

interface TimelineItemData {
  year: string;
  title: string;
  description: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  isMobile: boolean;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export function TimelineItem({ item, index, isMobile, setActiveIndex, activeIndex }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && isMobile) setActiveIndex(index);
    if (isInView) setHasBeenInView(true);
  }, [isInView, isMobile, index, setActiveIndex]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.timeline_item} ${
        index % 2 === 0 ? styles.left : styles.right
      } ${activeIndex === index ? styles.active : ""}
      ${hasBeenInView && !isMobile ? styles.fadeIn : ""}`}
    >
      <div className={styles.timeline_content}>
        <h3>{item.year}</h3>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className={styles.timeline_icon}>
        <Image
          src={`/path${index + 1}.png`}
          alt="Milestone"
          width={150}
          height={150}
        />
        <span className={styles.timeline_line} />
      </div>
    </motion.div>
  );
}
