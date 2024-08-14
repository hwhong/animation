import React, { useState } from "react";
import styles from "./in-out-stagger.module.css";
import { motion } from "framer-motion";

type Status = "in" | "out" | "none";

export function InOutStagger() {
  const [status, setStatus] = useState<Status>("none");

  const onClick = () => {
    switch (status) {
      case "in":
        setStatus("out");
        break;
      case "out":
        setStatus("none");
        break;
      case "none":
        setStatus("in");
        break;
    }
  };

  const variants: Record<Status, any> = {
    in: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    out: (i: number) => ({
      x: -1000,
      opacity: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
    none: (i: number) => ({
      x: 1000,
      opacity: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  return (
    <motion.div
      className={styles.root}
      onClick={onClick}
      animate={status}
      variants={{
        in: {
          transition: {
            delayChildren: 0.5,
          },
        },
        out: {
          transition: {
            delayChildren: 0.5,
          },
        },
      }}
    >
      {Array.from(Array(5).keys()).map((i) => {
        return (
          <motion.div
            key={i}
            initial={"none"}
            className={styles.line}
            animate={status}
            variants={variants}
          />
        );
      })}
    </motion.div>
  );
}
