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

  /**
   * Use custom prop to pass in dynamic value
   */
  const variants = {
    [State.OPEN]: (index: number) => {
      if (index === 0) {
        return {};
      }
      // TODO: calculate left value
      const leftValue = index === 1 ? -22 : -8;
      return {
        bottom: `${60 * index}px`,
        transform: `rotate(${8 * index}deg)`,
        left: `${leftValue}px`,
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
