import React from "react";
import styles from "./infinite-line.module.css";
import classNames from "classnames";

interface InfiiniteLineProps {
  className?: string;
}

export function InfiniteLine({ className }: InfiiniteLineProps) {
  return (
    <div className={classNames(styles.root, className)}>
      <p className={styles.text}>Hello World!</p>
      <p className={styles.text}>Hello World!</p>
    </div>
  );
}
