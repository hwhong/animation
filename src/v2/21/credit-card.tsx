import React, { useState } from "react";
import styles from "./credit-card.module.css";
import { motion } from "framer-motion";

enum Status {
  OPEN = "open",
  CLOSED = "closed",
}

export function CreditCard() {
  const [isWalletOpen, setIsWalletOpen] = useState<Status>(Status.CLOSED);
  const cards = ["#00b2ff", "#01c947", "#feb90c"];

  const getVariants: (idx: number) => Record<Status, {}> = (idx: number) => ({
    [Status.OPEN]: {
      top: `-${(idx + 1) * 40}px`,
    },
    [Status.CLOSED]: {
      top: `0px`,
    },
  });

  const onWalletClick = () =>
    isWalletOpen === Status.OPEN
      ? setIsWalletOpen(Status.CLOSED)
      : setIsWalletOpen(Status.OPEN);

  return (
    <div className={styles.root}>
      <motion.div className={styles.wallet} onClick={onWalletClick}>
        {cards.map((card, i) => (
          <motion.div
            key={card}
            className={styles.card}
            animate={isWalletOpen}
            style={{
              backgroundColor: card,
              zIndex: Math.abs(i - cards.length),
            }}
            variants={getVariants(i)}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
}
