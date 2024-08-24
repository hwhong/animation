import React, { useState } from "react";
import styles from "./enter-animate.module.css";
import { motion } from "framer-motion";
import { useMeasure } from "@uidotdev/usehooks";

enum Direction {
  LEFT = "left",
  RIGHT = "right",
  BOTTOM = "bottom",
  TOP = "top",
}

const OFFSET = 10;

export function EnterAnimate() {
  const [elementRef, bounds] = useMeasure();
  const [direction, setDirection] = useState<Direction | null>(null);

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { width, height } = bounds;
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = (currentTarget as any).getBoundingClientRect();

    setDirection(
      getDirection({ x: clientX - left, y: clientY - top }, width!, height!)
    );
  };
  const onMouseLeave = () => setDirection(null);

  return (
    <div className={styles.root}>
      <motion.div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={styles.text}
        whileHover={{ color: "#FFF" }}
      >
        Hello World
        {direction ? (
          <motion.div
            ref={elementRef}
            className={styles.background}
            initial={{
              opacity: 0,
              transform: `translate(${getTranslateValue(direction).x}px, ${
                getTranslateValue(direction).y
              }px)`,
            }}
            animate={{ opacity: 1, transform: "translate(0px, 0px)" }}
          ></motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}

interface Coordinate {
  x: number;
  y: number;
}

function getDirection(
  coordinate: Coordinate,
  width: number,
  height: number
): Direction {
  const { x, y } = coordinate;
  const threshold = 10;

  if (x < threshold) {
    return Direction.LEFT;
  } else if (x > width - threshold) {
    return Direction.RIGHT;
  }

  if (y < threshold) {
    return Direction.TOP;
  } else if (y > height - threshold) {
    return Direction.BOTTOM;
  }

  return Direction.TOP;
}

function getTranslateValue(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      return { x: -OFFSET, y: 0 };
    case Direction.RIGHT:
      return { x: OFFSET, y: 0 };
    case Direction.TOP:
      return { x: 0, y: -OFFSET };
    case Direction.BOTTOM:
      return { x: 0, y: OFFSET };
  }
}
