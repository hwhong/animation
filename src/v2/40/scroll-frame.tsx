import React, { useRef } from "react";
import styles from "./scroll-frame.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const END_THRESHOLD = 200;
const END_THRESHOLD_MID = END_THRESHOLD / 2;

/**
 * TODO: dynamically change the padding top depending on the size of the screen
 */

interface CustomStyle {
  backgroundColor: string;
  width: number;
  height: number;
  translateX: number;
  translateY: number;
  rotate: number;
  finalY?: number;
}

export function ScrollFrame() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    container: ref,
  });
  const opacity = useTransform(scrollY, [0, END_THRESHOLD], [0, 1]);
  // take middle point to speed up and create smoother transition
  const scale = useTransform(
    scrollY,
    [0, END_THRESHOLD_MID, END_THRESHOLD],
    [0, 0.8, 1]
  );

  const customStyle: CustomStyle[] = [
    {
      backgroundColor: "#00b2ff",
      width: 200,
      height: 150,
      translateX: 50,
      translateY: 0,
      rotate: 10,
    },
    {
      backgroundColor: "#01c947",
      width: 200,
      height: 320,
      translateX: 0,
      translateY: 0,
      rotate: -10,
    },
    {
      backgroundColor: "#feb90c",
      width: 200,
      height: 250,
      translateX: 0,
      translateY: 0,
      rotate: -6,
    },
    {
      backgroundColor: "#feb90c",
      width: 200,
      height: 300,
      translateX: -30,
      translateY: -230,
      rotate: -10,
      finalY: -170,
    },
    {
      backgroundColor: "#00b2ff",
      width: 200,
      height: 100,
      translateX: 60,
      translateY: -290,
      rotate: 5,
    },
    {
      backgroundColor: "#01c947",
      width: 200,
      height: 250,
      translateX: 60,
      translateY: -250,
      rotate: 10,
      finalY: -70,
    },
  ];

  return (
    <motion.div className={styles.root} ref={ref}>
      <div className={styles.parentWrapper}>
        <div className={styles.wrapper}>
          {Array.from(Array(6).keys()).map((i) => {
            const style = customStyle[i];
            return <Block key={i} scrollY={scrollY} customStyle={style} />;
          })}
        </div>
        <motion.div
          className={styles.background}
          style={{ opacity, scale }}
        ></motion.div>
      </div>
    </motion.div>
  );
}

interface BlockProps {
  scrollY: MotionValue<number>;
  customStyle: CustomStyle;
}

function Block({ scrollY, customStyle }: BlockProps) {
  const {
    backgroundColor,
    width,
    height,
    translateX,
    translateY,
    rotate,
    finalY,
  } = customStyle;

  const xVal = useTransform(scrollY, [0, END_THRESHOLD], [translateX, 0]);
  const yVal = useTransform(
    scrollY,
    [0, END_THRESHOLD],
    [translateY, finalY ?? 0]
  );
  const rotateVal = useTransform(scrollY, [0, END_THRESHOLD], [rotate, 0]);

  return (
    <motion.div
      className={styles.frame}
      style={{
        translateX: xVal,
        translateY: yVal,
        rotate: rotateVal,
        width,
        height,
        backgroundColor,
      }}
    >
      Scroll
    </motion.div>
  );
}
