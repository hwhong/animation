import React, { useState } from "react";
import styles from "./credit-card.module.css";
import { motion } from "framer-motion";
import classNames from "classnames";

enum Status {
  OPEN = "open",
  CLOSED = "closed",
}

const DEFAULT_MARGIN = 40;
const ADDITIONAL_MARGIN = 20;

export function CreditCard() {
  const [isWalletOpen, setIsWalletOpen] = useState<Status>(Status.CLOSED);
  const cards = ["#00b2ff", "#01c947", "#feb90c"];

  const getVariants: (idx: number) => Record<Status, {}> = (idx: number) => ({
    [Status.OPEN]: {
      top: `-${(idx + 1) * DEFAULT_MARGIN}px`,
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
      <motion.div className={styles.wallet}>
        {cards.map((card, i) => (
          <motion.div
            key={card}
            className={styles.card}
            animate={isWalletOpen}
            whileHover={{
              top: `-${(i + 1) * DEFAULT_MARGIN + ADDITIONAL_MARGIN}px`,
            }}
            style={{
              backgroundColor: card,
              zIndex: Math.abs(i - cards.length),
            }}
            variants={getVariants(i)}
          >
            <div
              className={styles.walletHeader}
              style={{
                zIndex: Math.abs(i - cards.length),
              }}
            />
          </motion.div>
        ))}
        <motion.div
          className={classNames(styles.frontWallet)}
          onClick={onWalletClick}
        >
          Wallet
        </motion.div>
      </motion.div>
    </div>
  );
}
