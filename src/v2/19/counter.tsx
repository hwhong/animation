import React from "react";
import styles from "./counter.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function Counter() {
  return (
    <div className={styles.root}>
      <div className={styles.button}>
        <RemoveIcon />
      </div>
      <div className={styles.counter}></div>
      <div className={styles.button}>
        <AddIcon />
      </div>
    </div>
  );
}
