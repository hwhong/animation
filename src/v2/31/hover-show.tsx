import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./hover-show.module.css";

export function HoverShow() {
  const [isHover, setIsHover] = useState<"true" | "false">("true");

  const backgroundVariant: Variants = {
    true: { width: "100%", height: "100%" },
    false: { width: 0, height: 0 },
  };

  const onMouseEnter = () => setIsHover("true");
  const onMouseLeave = () => setIsHover("false");

  return (
    <motion.div
      className={styles.root}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className={styles.background}
        animate={isHover}
        variants={backgroundVariant}
      ></motion.div>
      <div className={styles.topWrapper}>
        <div>Paris Olympics</div>
        <motion.div
          className={styles.flag}
          animate={isHover}
          variants={{
            true: { bottom: "0px", opacity: 1 },
            false: { bottom: "-5px", opacity: 0 },
          }}
        >
          <div className={styles.blue} />
          <div />
          <div className={styles.red} />
        </motion.div>
      </div>

      <motion.div
        className={styles.description}
        animate={isHover}
        variants={{
          true: { bottom: "0px", opacity: 1 },
          false: { bottom: "-10px", opacity: 0 },
        }}
      >
        Driven by the reforms of Olympic Agenda 2020, Paris 2024 will set a
        precedent for future editions.
      </motion.div>
    </motion.div>
  );
}
