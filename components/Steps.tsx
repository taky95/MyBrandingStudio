"use client";

import { useState } from "react";
import styles from "../styles/steps.module.scss";
import Image from "next/image";
import { Step } from "@/graphql/queries/query";
import DefaultButton from "./Button";

interface Steps {
  steps: Step[];
}

const AccordionMenu: React.FC<Steps> = ({ steps }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.accordionContainer}>
      {steps.map((step, index) => {
          const colors = ['#051111', '#0D2F30', '#155253', '#207475', '#1D6167']
          const dynamicColor = colors[index % colors.length];
        return (
          <div
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            style={{
              backgroundColor: dynamicColor,
            }}
          >
            <div
              className={styles.steps_title}
              onMouseEnter={() => toggleAccordion(index)}
            >
              Step {index}: {step.stepField.title}
            </div>
            <div className={styles.steps_content}>
              <div className={styles.steps_image}>
                <div className={styles.imageWrapper}
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src={steps[activeIndex].stepField.image.node.sourceUrl}
                    alt={steps[activeIndex].stepField.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className={styles.steps_text}>
                <h2>{step.stepField.title}</h2>
                <p>{step.stepField.description}</p>
                <DefaultButton src={step.stepField.link}>Learn More</DefaultButton>
              </div>
            </div>
          </div>
        );})}
    </div>
  );
};

export default AccordionMenu;