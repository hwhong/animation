import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./flipper.module.css";
import classNames from "classnames";

export function Flipper() {
  const TEXT_TO_RENDER = "WELCOME TO NEW YORK";

  return (
    <div className={styles.root}>
      {TEXT_TO_RENDER.split(" ").map((str) => {
        return (
          <div className={styles.row} key={str}>
            {str.split("").map((char) => (
              <Flip key={char}>{char}</Flip>
            ))}
          </div>
        );
      })}
    </div>
  );
}

interface FlipInterface {
  className?: string;
  children: React.ReactNode;
}

const ALPHABETS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function Flip({ children, className }: FlipInterface) {
  const [counter, setCounter] = useState(0);
  const [currChar, setCurrChar] = useState<string>("A");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((t) => {
        const isCorrectChar = ALPHABETS[t] === children;

        if (isCorrectChar) {
          clearInterval(intervalId);
        }

        setCurrChar(ALPHABETS[t]);

        return !isCorrectChar ? t + 1 : t;
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div className={classNames(styles.flip, className)} key={currChar}>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
        >
          {currChar}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// https://stackoverflow.com/questions/72592921/how-stop-setinterval-automatically-in-react-hooks
