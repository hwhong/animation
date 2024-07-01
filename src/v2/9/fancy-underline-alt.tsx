import React from "react";
import styles from "./fancy-underline-alt.module.css";

interface FancyUnderlineAltProps {
  children: React.ReactNode;
}

export function FancyUnderlineAlt({ children }: FancyUnderlineAltProps) {
  return <span className={styles.root}>{children}</span>;
}
