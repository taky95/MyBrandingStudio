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

            <Slider {...settings} initialSlide={workIndex}>
              {works.map((work: Works, i) => (
                <div key={i} className={styles.gallery}>
                  <h2 className={styles.gallery_title}>{work.worksField.title}</h2>
                  <div className={styles.gallery_desc} dangerouslySetInnerHTML={{ __html: work.worksField.description }} />
                  <div className={styles.gallery_image}>
                    <Image
                      src={work.worksField.image.node.sourceUrl}
                      alt={work.worksField.title}
                      width={work.worksField.image.node.mediaDetails.width}
                      height={work.worksField.image.node.mediaDetails.height}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
