import React from "react";
import { FancyUnderline } from "./fancy-underline";
import styles from "./fancy-underline-demo.module.css";

export function FancyUnderlineDemo() {
  return (
    <div className={styles.root}>
      <FancyUnderline className={styles.header}>Galleries</FancyUnderline>
      <span className={styles.description}>
        Walk through two million years of history and culture across more than
        50 galleries.
      </span>
    </div>
  );
}
