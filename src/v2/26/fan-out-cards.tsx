import React from "react";
import styles from "./fan-out-card.module.css";

export function FanOutCards() {
  const cards = ["#00b2ff", "#01c947", "#feb90c"];
  return (
    <div className={styles.root}>
      {cards.map((c) => (
        <div key={c} className={styles.cardRoot}>
          <div style={{ backgroundColor: c }}></div>
        </div>
      ))}
    </div>
  );
}
