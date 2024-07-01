import React from "react";
import { ButtonGroup } from "./button-group";
import styles from "./button-group-demo.module.css";

export function ButtonGroupDemo() {
  return (
    <div className={styles.root}>
      <ButtonGroup groupContents={["About", "Features", "Log in", "Sign up"]} />
    </div>
  );
}
