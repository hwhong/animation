import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import styles from "./gradient-border.module.css";

export function GradientBorder() {
  let interval = useMotionValue(0);
  const y = useTransform(interval, (value) => Math.sin(value) * 25);
  const x = useTransform(interval, (value) => Math.cos(value) * 25);

  useEffect(() => {
    // animate: A function to manually start and control animations
    // animate(from, to)
    let controls = animate(interval, [0, Math.PI * 2], {
      repeat: Infinity,
      duration: 2,
      ease: "linear",
    });
    return controls.stop;
  }, [interval]);

  return (
    <div className={styles.wrapper}>
      <motion.div className={styles.gradient} style={{ x, y }}></motion.div>
    </div>
  );
}
