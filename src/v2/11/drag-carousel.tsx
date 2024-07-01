import React from "react";
import styles from "./drag-carousel.module.css";

export function DragCarousel() {
  const COLORS = ["#32ADE6", "#FFCC00", "#34C759"];

  return (
    <div className={styles.root}>
      <div className={styles.carousel}>
        {COLORS.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className={styles.slide}
          ></div>
        ))}
      </div>
    </div>
  );
}
