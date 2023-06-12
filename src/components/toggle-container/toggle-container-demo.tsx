import React, { useState } from "react";
import { Status, ToggleContainer } from "./toggle-container";
import styles from "./toggle-container-demo.module.css";

export function ToggleContainerDemo() {
  const initialContent = <div className={styles.content}>안녕!</div>;
  const hiddenContent = <div className={styles.content}>你好!</div>;

  return (
    <ToggleContainer
      initialContent={initialContent}
      hiddenContent={hiddenContent}
    />
  );
}
