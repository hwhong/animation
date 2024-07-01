import React from "react";
import { FancyUnderlineAlt } from "./fancy-underline-alt";
import styles from "./fancy-underline-alt-demo.module.css";

export function FancyUnderlineAltDemo() {
  return (
    <div className={styles.root}>
      <FancyUnderlineAlt>Hover over me</FancyUnderlineAlt>
    </div>
  );
}
