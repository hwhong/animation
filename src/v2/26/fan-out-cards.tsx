import React, { useState } from "react";
import styles from "./fan-out-card.module.css";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const cards: {
  color: string;
  custom: {};
}[] = [
  {
    color: "#00b2ff",
    custom: {
      transform: "rotate(8deg)",
      marginLeft: "100px",
      scale: "0.8",
      marginBottom: "50px",
    },
  },
  {
    color: "#01c947",
    custom: {
      transform: "rotate(-16deg)",
      marginLeft: "-100px",
      scale: "0.8",
    },
  },
  { color: "#feb90c", custom: { transform: "", margin: "" } },
];

enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export function FanOutCards() {
  const [status, setStatus] = useState(Status.INACTIVE);
  const onClick = () =>
    setStatus(status === Status.ACTIVE ? Status.INACTIVE : Status.ACTIVE);

  return (
    <div className={styles.root}>
      {status === Status.INACTIVE ? (
        cards.map(({ color, custom }) => (
          <motion.div
            key={color}
            className={styles.cardRoot}
            animate={{ ...custom }}
          >
            <motion.div
              key={color}
              layoutId={`color-${color}`}
              className={styles.color}
              style={{ backgroundColor: color }}
            />
            <motion.span className={styles.name}>{color}</motion.span>
          </motion.div>
        ))
      ) : (
        <motion.div
          layout
          className={styles.focus}
          layoutId={`color-#feb90c`}
          style={{ backgroundColor: "#feb90c" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.focusName}
            transition={{ delay: 0.3 }}
          >
            #feb90c
          </motion.span>
        </motion.div>
      )}

      <AnimatePresence>
        {status === Status.INACTIVE ? (
          <motion.div
            key="choose"
            className={styles.button}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0 }}
          >
            Choose
          </motion.div>
        ) : (
          <motion.div
            key="close"
            className={styles.closeButton}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0 }}
          >
            <CloseIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
