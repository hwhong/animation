import React from "react";
import { ElevatedContainer } from "./elevated-container";
import styles from "./elevated-container-demo.module.css";

export function ElevatedContainerDemo() {
  return (
    <ElevatedContainer>
      <div className={styles.container} />
    </ElevatedContainer>
  );
}
