import React from "react";
import styles from "./main.module.css";
import { GeistMono } from "geist/font/mono";
import classNames from "classnames";

export function Main() {
  return (
    <div className={styles.root}>
      {Array.from(Array(100).keys()).map((i) => (
        <div key={i} className={classNames(styles.block, GeistMono.className)}>
          {i}
        </div>
      ))}
    </div>
  );
}
