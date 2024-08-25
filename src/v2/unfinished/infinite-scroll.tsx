import React, { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import styles from "./infinite-scroll.module.css";

const WIDTH = 100;
const MARGIN = 20;

function getDefaultPositions() {
  return Array.from(Array(10).keys()).map((i) => {
    return (WIDTH + MARGIN) * (i + 1);
  });
}

export function InfiniteScroll() {
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [positions, setPositions] = useState<number[]>(getDefaultPositions());

  const onPointerDown = (e: any) => {
    setIsPointerDown(true);
    setStartX(e.clientX);
  };

  const onPointerUp = () => {
    setIsPointerDown(false);

    // const finalDelta = delta + lastDelta;
    // const newPosition = positions.map((v) => v + finalDelta);
    // setPositions([...newPosition]);
  };

  const onMouseMove = (e: any) => {
    if (isPointerDown) {
      // setDelta(startX - e.clientX);
      const delta = startX - e.clientX;
      const newPosition = positions.map((v) => v + delta);
      setPositions([...newPosition]);
    }
  };

  return (
    <div className={styles.root}>
      <motion.div
        onMouseMove={onMouseMove}
        className={styles.wrapper}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {Array.from(Array(10).keys()).map((i) => (
          <Block key={i} id={i.toString()} xValue={positions[i]} />
        ))}
      </motion.div>
    </div>
  );
}

interface BlockInterface {
  id: string;
  xValue: number;
}

function Block({ id, xValue }: BlockInterface) {
  return (
    <motion.div
      className={styles.block}
      style={{ transform: `translateX(${xValue}px)` }}
    >
      {xValue}
    </motion.div>
  );
}
// use dragX to set the translateX value
/**
 *
 * ----------------------------
 * |
 * |
 * |
 * ----------------------------
 */
