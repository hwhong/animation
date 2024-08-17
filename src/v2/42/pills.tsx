import React, { useState } from "react";
import styles from "./pills.module.css";
import { motion } from "framer-motion";

export function Pills() {
  const [currSelection, setCurSelection] = useState("New York");
  const texts = ["New York", "London", "San Francisco", "Seoul", "Taipei"];

  return (
    <div className={styles.root}>
      {texts.map((name) => {
        const isSelection = currSelection === name;
        return (
          <Pill
            key={name}
            name={name}
            onClick={() => setCurSelection(name)}
            isSelection={isSelection}
          />
        );
      })}
    </div>
  );
}

interface PillProps {
  name: string;
  onClick?: () => void;
  isSelection: boolean;
}

export function Pill({ name, onClick, isSelection }: PillProps) {
  const variants = {
    initial: { width: 35 },
    open: {
      width: 150,
    },
  };
  const textVariant = {
    initial: { opacity: 0 },
    open: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      key={name}
      className={styles.pill}
      onClick={onClick}
      variants={variants}
      animate={isSelection ? "open" : "initial"}
    >
      {name.charAt(0)}
      <motion.div
        animate={isSelection ? "open" : "initial"}
        variants={textVariant}
      >
        {isSelection ? name.substring(1, name.length) : null}
      </motion.div>
    </motion.div>
  );
}
