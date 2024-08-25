import React from "react";
import styles from "./wiggle.module.css";
import { motion } from "framer-motion";
import classNames from "classnames";

export function Wiggle() {
  return (
    <div className={styles.root}>
      <motion.div
        className={classNames(styles.yellow, styles.item)}
        animate={{ rotate: [3, -5, 2] }}
        transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className={classNames(styles.blue, styles.item)}
        animate={{ rotate: [-5, 2, -1] }}
        transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className={classNames(styles.green, styles.item)}
        animate={{ rotate: [3, -2, 1] }}
        transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
