import React from "react";
import styles from "./loading-state.module.css";
import { motion } from "framer-motion";

export function LoadingState() {
  return (
    <motion.div
      className={styles.root}
      animate={{
        background: [
          `linear-gradient(270deg, #ffffff 0%, #dddddd 0%, #ffffff 100%)`,
          `linear-gradient(270deg, #ffffff 0%, #dddddd 100%, #ffffff 100%)`,
          `linear-gradient(270deg, #ffffff 0%, #dddddd 0%, #ffffff 100%)`,
        ],
      }}
      transition={{ repeat: Infinity, duration: 5, repeatType: "loop" }}
    />
  );
}
