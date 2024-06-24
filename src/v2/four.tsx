import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./four.module.css";
import classNames from "classnames";
import { GeistMono } from "geist/font/mono";

enum State {
  OPEN = "Open",
  CLOSE = "Close",
}

export function Four() {
  const [isOpen, setIsOpen] = useState<State>(State.CLOSE);
  const files = ["pdf", "svg", "jpg"];
  const variants = {
    [State.OPEN]: (index: number) => {
      if (index === 0) {
        return {};
      }
      return {
        bottom: `${80 * index}px`,
        transform: `rotate(${5 * index}deg)`,
        left: `${1 * index}px`,
      };
    },
    [State.CLOSE]: {
      bottom: "0px",
    },
  };

  return (
    <div
      className={styles.root}
      onClick={() =>
        setIsOpen(isOpen === State.CLOSE ? State.OPEN : State.CLOSE)
      }
    >
      {files.map((filename, i) => {
        return (
          <motion.div
            initial={false}
            key={filename}
            className={styles.file}
            animate={isOpen}
            variants={variants}
            custom={i}
          >
            <div
              className={classNames(styles.folder, GeistMono.className, {
                [styles.default]: isOpen === State.CLOSE,
              })}
            >
              {filename}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
