import React, { useState } from "react";
import styles from "./counter.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";

export function Counter() {
  const [count, setCount] = useState(0);

  const onAddClick = () => setCount(count + 1);
  const onMinusClick = () => {
    if (count - 1 >= 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.button} onClick={onMinusClick}>
        <RemoveIcon />
      </div>
      <div className={styles.counter}>
        {count
          .toString()
          .split("")
          .map((num) => (
            <Number key={num} number={num} />
          ))}
      </div>
      <div className={styles.button} onClick={onAddClick}>
        <AddIcon />
      </div>
    </div>
  );
}

interface NumberProps {
  number: string;
}

export function Number({ number }: NumberProps) {
  return (
    <motion.div
      className={styles.number}
      key={number}
      transition={{ type: "spring", duration: 0.3, bounce: 0 }}
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
    >
      {number}
    </motion.div>
  );
}
