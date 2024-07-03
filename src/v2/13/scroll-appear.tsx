import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./scroll-appear.module.css";

export function ScrollAppear() {
  const COLORS = [
    "#e9e9e9",
    "#d4d4d4",
    "#9a9a9a",
    "#707070",
    "#454545",
    "#000000",
  ];

  return (
    <div className={styles.root}>
      {COLORS.map((color) => (
        <Block key={color} color={color} />
      ))}
    </div>
  );
}

interface BlockProps {
  color: string;
}

function Block({ color }: BlockProps) {
  const ref = useRef(null);
  /**
   * true when element is in viewport.
   * Can also pass in config so that animation only runs once
   * const isInView = useInView(ref, { once: true });
   */
  const isInView = useInView(ref);

  return (
    <motion.div
      className={styles.block}
      ref={ref}
      style={{ backgroundColor: color }}
      initial={{ top: "-200px", opacity: 0 }}
      animate={isInView ? { top: 0, opacity: 1 } : {}}
    />
  );
}
