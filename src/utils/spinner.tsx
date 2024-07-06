import React from "react";
import styles from "./spinner.module.css";

const bars = Array(12).fill(0);

export function Spinner({}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        {bars.map((_, i) => (
          <div className={styles.bar} key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
