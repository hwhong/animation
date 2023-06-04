import React from "react";
import styles from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className={styles.root}>{children}</div>;
}
