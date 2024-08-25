import React, { useRef, useState } from "react";
import { motion, useMotionValue, useScroll } from "framer-motion";
import styles from "./scroll-parent.module.css";

const VALUES = [
  "Arsenal",
  "Chelsea",
  "Liverpool",
  "Manchester United",
  "Tottenham",
  "Manchester City",
  "West Ham",
  "Aston Villa",
  "Leicester",
  "Crystal Palace",
  "Brighton",
  "Brentford",
  "Fulham",
  "Wolves",
];
const BOX_HEIGHT = 48;
const WINDOW_HEIGHT = 240;

export function ScrollParent() {
  const ref = useRef(null);
  const [middleBox, setMiddleBox] = useState<string | null>("Liverpool");

  const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setMiddleBox(
      getMiddleBox(e.currentTarget.scrollTop, BOX_HEIGHT, WINDOW_HEIGHT)
    );
  };

  const variants = {
    middle: {
      color: "#343434",
      fontWeight: "bold",
      fontSize: "24px",
    },
    side: {
      color: "#747474",
      fontSize: "20px",
      filter: "blur(1px)",
    },
    none: {
      color: "#b4b4b4",
      fontSize: "20px",
      filter: "blur(2px)",
    },
  };

  return (
    <div className={styles.root}>
      <div className={styles.scrollContainer} onScroll={onScroll} ref={ref}>
        {VALUES.map((name, i) => (
          <motion.div
            className={styles.box}
            key={name}
            variants={variants}
            animate={
              middleBox === name
                ? "middle"
                : isSideBox(i, middleBox!)
                ? "side"
                : "none"
            }
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const isSideBox = (i: number, currentMiddle: string) =>
  i >= 0 && i <= VALUES.length - 1
    ? VALUES[i - 1] === currentMiddle || VALUES[i + 1] === currentMiddle
    : false;

export function getMiddleBox(
  scrollTop: number,
  boxHeight: number,
  windowHeight: number
) {
  // Calculate the center of the visible window
  const windowCenter = scrollTop + windowHeight / 2;

  console.log(windowCenter);

  // Find the index of the box in the center of the window
  const index = Math.floor(windowCenter / boxHeight);

  // Check if the index is within the valid range
  if (index >= 0 && index < VALUES.length) {
    return VALUES[index]; // Return 1-based index
  }

  return null; // Return null if no box is in the center
}
