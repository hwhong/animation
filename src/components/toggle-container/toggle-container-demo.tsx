import React, { useState } from "react";
import { Status, ToggleContainer } from "./toggle-container";
import styles from "./toggle-container-demo.module.css";

export function ToggleContainerDemo() {
  const initialContent = <div className={styles.content}>Hello</div>;
  const hiddenContent = <div className={styles.content}>Hej</div>;

  return (
    <ToggleContainer
      initialContent={initialContent}
      hiddenContent={hiddenContent}
    />
  );
}
