import React, { useRef } from "react";
import styles from "./scroll-frame.module.css";
import {
  motion,
  MotionStyle,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { random } from "@/utils/utility";

const END_THRESHOLD = 200;

interface CustomStyle {
  backgroundColor: string;
}

export function ScrollFrame() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    container: ref,
  });

  const customStyle: CustomStyle[] = [{ backgroundColor: "#00b2ffs" }];

  return (
    <motion.div className={styles.root} ref={ref}>
      <div className={styles.wrapper}>
        {Array.from(Array(9).keys()).map((i) => {
          const style = customStyle[i];
          return <Block key={i} scrollY={scrollY} style={style} />;
        })}
      </div>
    </motion.div>
  );
}

interface BlockProps {
  scrollY: MotionValue<number>;
  style: MotionStyle;
}

function Block({ scrollY, style }: BlockProps) {
  const ranX = random(0, 300);
  const ranY = random(100, 150);
  const xVal = useTransform(scrollY, [0, END_THRESHOLD], [ranX, 0]);
  const yVal = useTransform(scrollY, [0, END_THRESHOLD], [ranY, 0]);
  const rotate = useTransform(scrollY, [0, END_THRESHOLD], [35, 0]);

  return (
    <motion.div
      className={styles.frame1}
      style={{ translateX: xVal, translateY: yVal, rotate, ...style }}
    />
  );
}
