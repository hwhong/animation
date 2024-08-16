import React, { useState } from "react";
import styles from "./pills.module.css";
import { motion } from "framer-motion";

export function Pills() {
  const [currSelection, setCurSelection] = useState("New York");
  const texts = ["New York", "London", "San Francisco", "Seoul", "Taipei"];

  const variants = {
    initial: { width: 0 },
    open: {
      width: "auto",
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <div className={styles.root}>
      {texts.map((name) => {
        const isSelection = currSelection === name;
        return (
          <motion.div
            key={name}
            className={styles.pill}
            onClick={() => setCurSelection(name)}
            layout
            variants={variants}
            animate={currSelection ? "open" : "initial"}
          >
            {name.charAt(0)}
            {isSelection && name.substring(1, name.length)}
          </motion.div>
        );
      })}
    </div>
  );
}
