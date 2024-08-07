import React, { useRef } from "react";
import styles from "./scroll-frame.module.css";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

export function ScrollFrame() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    container: ref,
  });
  const xVal = useTransform(scrollY, [0, 200], [50, 0]);
  const yVal = useTransform(scrollY, [0, 200], [100, 0]);
  const rotate = useTransform(scrollY, [0, 200], [35, 0]);

  return (
    <motion.div className={styles.root} ref={ref}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.frame1}
          style={{ marginTop: xVal, marginLeft: yVal, rotate }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
