'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Works } from '@/graphql/queries/query-work';
import styles from "@/styles/work.module.scss";
import { NextArrow, PrevArrow } from './Arrow';

interface SlideshowModalProps {
  isOpen: boolean;
  onClose: () => void;
  works: Works[];
  workIndex: number;
}

interface imageProps {
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
  } | null;
}

export default function SlideshowModal({
  isOpen,
  onClose,
  works,
  workIndex,
}: SlideshowModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const settings = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  const work = works[workIndex].worksField;
  const images: imageProps[] = [];
  const links: string[] = [];
  const uploadLimit = 10;

  for (let i = 1; i <= uploadLimit; i++) {
    const imageKey = `image${i}` as keyof typeof work;
    const imageValue = work[imageKey];
    
    if (
      imageValue &&
      typeof imageValue === 'object'
    ) {
      images.push(imageValue.node);
    }
  }

  for (let i = 1; i <= uploadLimit; i++) {
    const linkKey = `link${i}` as keyof typeof work;
    const linkValue = work[linkKey];
    if (typeof linkValue === 'string' && linkValue) {
      links.push(linkValue);
    }
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className={styles.gallery_overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className={styles.gallery_modal}
            initial={{ opacity: 0, y: "-10%", x: "-50%", scale: 1 }}
            animate={{ opacity: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, y: "-10%"}}
            transition={{ type: 'spring', damping: 25, stiffness: 300, delay: 0.2}}
          >
            <button
              onClick={onClose}
              className={styles.gallery_close}
              aria-label="Close"
            >
              x
            </button>
            <div className={styles.gallery}>
              <h2 className={styles.gallery_title}>{work.catTitle}</h2>
              <div className={styles.gallery_desc} dangerouslySetInnerHTML={{ __html: work.description }} />
              <Slider {...settings} initialSlide={0}>
                {images.map((image: imageProps, i) => (
                  <div key={i} className={styles.gallery_image}>
                    <a href={links[i]} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={image.sourceUrl}
                        alt={work.catTitle}
                        width={image.mediaDetails?image.mediaDetails.width:0}
                        height={image.mediaDetails?image.mediaDetails.height:0}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </a>
                  </div>
                ))}                
              </Slider>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
