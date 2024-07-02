import React from "react";
import styles from "./border-gradient.module.css";

export function BorderGradient() {
  return (
    <div className={styles.root}>
      <div className={styles.gradient} />
      <div className={styles.content} />
    </div>
  );
}
