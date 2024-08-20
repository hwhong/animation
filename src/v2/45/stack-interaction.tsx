import React from "react";
import styles from "./stack-interaction.module.css";

export function StackInteraction() {
  return (
    <div className={styles.root}>
      {Array.from(Array(3).keys()).map((i) => (
        <div key={i} className={styles.panel}></div>
      ))}
    </div>
  );
}
