import React from "react";
import styles from "./hover-preview.module.css";

export function HoverPreview() {
  return <div className={styles.root}></div>;
}

interface HoverComponentProps {
  text: string;
}

export function HoverComponent({ text }: HoverComponentProps) {
  return <span>{text}</span>;
}
