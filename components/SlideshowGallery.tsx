'use client';

import styles from "@/styles/work.module.scss";
import Image from "next/image";
import { useState } from 'react';
import SlideshowModal from '@/components/SlideshowModal';
import { Works } from '@/graphql/queries/query-work';

interface WorksProps {
  nodes: Works[];
}

export default function SlideshowGallery({ data }: { data: WorksProps }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);

  return (
    <div className={styles.works}>
      {data.nodes.map((work: Works, index: number) => {
        return (
          <div className={styles.works_content} key={index} onClick={() => { setModalOpen(true); setWorkIndex(index); }}>
            <Image
              src={work.worksField.catImage.node.sourceUrl}
              alt={work.worksField.catTitle}
              className={styles.works_image}
              fill
              sizes="(max-width: 768px) 100vw"
            />
            <h2>{work.worksField.catTitle}</h2>
            <div className={styles.works_arrow} >
              <Image src="/arrow.png" alt="arrow" fill 
                sizes="(max-width: 768px) 40px, 60px"
              />
            </div>
          </div>
        );}
      )} 
      <SlideshowModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        works={data.nodes}
        workIndex={workIndex}
      />
    </div>
  );
}