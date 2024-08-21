import React from "react";
import styles from "./stack-interaction.module.css";
import { motion } from "framer-motion";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

export function StackInteraction() {
  const colors = ["#00b2ff", "#01c947", "#feb90c"];

  return (
    <div className={styles.root}>
      {colors.map((color, index) => (
        <motion.div
          key={color}
          className={styles.panel}
          style={{ backgroundColor: color }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: colors.length - index,
          }}
        ></motion.div>
      ))}
    </div>
  );
}
