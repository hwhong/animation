import React, { useState } from "react";
import styles from "./in-out-stagger.module.css";
import { animate, motion } from "framer-motion";

type Status = "in" | "out";

export function InOutStagger() {
  const [status, setStatus] = useState<Status>("in");

  const onClick = () => setStatus(status === "in" ? "out" : "in");

  const colors = [
    "#00b2ff",
    "#01c947",
    "#feb90c",
    "#00b2ff",
    "#01c947",
    "#feb90c",
  ];

  return (
    <motion.div className={styles.root} onClick={onClick}>
      {status === "in" &&
        colors.map((color, i) => {
          return (
            <motion.li
              key={i}
              className={styles.line}
              style={{ backgroundColor: color }}
              initial={{
                x: 1000,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
              }}
            />
          );
        })}
      {status === "out" &&
        colors.map((color, i) => {
          return (
            <motion.li
              key={i}
              style={{ backgroundColor: color }}
              className={styles.line}
              initial={{
                x: 0,
              }}
              animate={{
                x: -1000,
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
              }}
            />
          );
        })}
    </motion.div>
  );
}
