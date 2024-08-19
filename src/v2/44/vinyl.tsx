import React from "react";
import styles from "./vinyl.module.css";
import { motion, useTime, useTransform } from "framer-motion";

export function Vinyl() {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );

  return (
    <div className={styles.root}>
      <motion.div
        className={styles.vinyl}
        style={{
          rotate,
        }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <div className={styles.middle}>
          <div className={styles.dot}></div>
        </div>
      </motion.div>
    </div>
  );
}
