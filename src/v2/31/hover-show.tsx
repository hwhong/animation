import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./hover-show.module.css";

export function HoverShow() {
  const [isHover, setIsHover] = useState<"true" | "false">("false");

  const backgroundVariant: Variants = {
    true: { width: "100%", height: "100%" },
    false: { width: 0, height: 0 },
  };

  const onMouseEnter = () => setIsHover("true");
  const onMouseLeave = () => setIsHover("false");

  return (
    <motion.div
      initial={false}
      className={styles.root}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        initial={false}
        className={styles.background}
        animate={isHover}
        variants={backgroundVariant}
      ></motion.div>
      <div className={styles.topWrapper}>
        <div onMouseEnter={onMouseEnter}>Paris Olympics</div>
        <motion.div
          initial={false}
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
        initial={false}
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
