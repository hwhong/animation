import React from "react";
import { motion } from "framer-motion";
import styles from "./severance.module.css";

export function Severance() {
  const NUMS = Array.from(Array(50).keys()).map(() => genRand(0, 10, 0));

  return (
    <div className={styles.root}>
      {NUMS.map((num, i) => (
        <Number
          direction={
            Math.round(Math.random())
              ? Direction.HORIZONTAL
              : Direction.VERTICAL
          }
          key={`${i}-${num}`}
          index={`${i}-${num}`}
          num={num}
        />
      ))}
    </div>
  );
}

enum Direction {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

interface NumberProps {
  num: number;
  direction: Direction;
  index: string;
}

function Number({ num, direction, index }: NumberProps) {
  const dir = direction === Direction.VERTICAL ? "top" : "left";

  const duration = genRand(2, 8);
  const movement = genRand(10, 20);

  return (
    <motion.div
      key={index}
      className={styles.number}
      animate={{ [dir]: [`-${movement}px`, `${movement}px`, `-${movement}px`] }}
      transition={{ repeat: Infinity, duration, repeatType: "loop" }}
    >
      {num}
    </motion.div>
  );
}

function genRand(min: number, max: number, decimalPlaces = 2) {
  var rand =
    Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min; // could be min or max or anything in between
  var power = Math.pow(10, decimalPlaces);
  return Math.floor(rand * power) / power;
}
