"use client";

import Image from "next/image";
import styles from "@/styles/services.module.scss";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Service } from "../graphql/queries/query-service";

interface ServiceProps {
  services: { nodes: Service[] };
}

export default function ServiceList({
  services_data,
}: {
  services_data: ServiceProps;
}) {
  // Parent animation (stagger setup)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  };

  // Child animation (fade-in)
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={styles.service_card}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {services_data.services.nodes.map((data: Service, index: number) => (
        <motion.div
          key={index}
          className={styles.container}
          variants={childVariants}
        >
          <div className={styles.title}>
            <div className={styles.image}>
              <Image
                src={`/path${index + 1}.png`}
                alt="service icon"
                width={80}
                height={80}
              />
            </div>
            <h2>{data.serviceField.title}</h2>
          </div>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: data.serviceField.description }}
          />
          <Link href="/contact" className={styles.link}>
            Contact us
            <div className={styles.arrow}>
              <Image
                src="/arrow.png"
                alt="arrow"
                fill
                sizes="(max-width: 768px) 40px, 60px"
              />
            </div>
          </Link>
          <hr />
        </motion.div>
      ))}
    </motion.div>
  );
}
