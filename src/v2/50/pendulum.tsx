import React from "react";
import styles from "./pendulum.module.css";
import { motion } from "framer-motion";

export function Pendulum() {
  return (
    <div className={styles.root}>
      <motion.div
        className={styles.pendulum}
        animate={{ rotate: [45, -45, 45] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className={styles.bob}></div>
      </motion.div>
    </div>
  );
}
