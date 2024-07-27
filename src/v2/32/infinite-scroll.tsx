import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./infinite-scroll.module.css";

export function InfiniteScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const position = Math.ceil(
      (scrollLeft / (scrollWidth - clientWidth)) * 100
    );
    console.log(position);
    setScrollPosition(position);
  };

  return (
    <div className={styles.root}>
      <motion.div className={styles.wrapper} onScroll={onScroll} drag="x">
        <motion.div className={styles.block}>1</motion.div>
        <motion.div className={styles.block}>2</motion.div>
        <motion.div className={styles.block}>3</motion.div>
        <motion.div className={styles.block}>4</motion.div>
        <motion.div className={styles.block}>5</motion.div>
        <motion.div className={styles.block}>6</motion.div>
        <motion.div className={styles.block}>7</motion.div>
        <motion.div className={styles.block}>8</motion.div>
        <motion.div className={styles.block}>9</motion.div>
      </motion.div>
    </div>
  );
}
// use dragX to set the translateX value
/**
 *
 * ----------------------------
 * |
 * |
 * |
 * ----------------------------
 */
