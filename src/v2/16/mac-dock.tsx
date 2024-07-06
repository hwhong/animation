import React, { useEffect, useRef, useState } from "react";
import styles from "./mac-dock.module.css";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

const DEFAULT_DIMENSION = 40;
const NUM_ITEMS = 10;
const MAX_WIDTH = 600;
const BOUNDARY = 100;

export function MacDock() {
  const [left, setLeft] = useState<number>(0);
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);

  const onMouseMove = (e: any) => {
    if (ref.current) {
      var rect = (ref.current as any).getBoundingClientRect();
      setLeft(e.clientX - rect.left);
    }
  };

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className={styles.root}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        whileHover={{ width: MAX_WIDTH }}
        transition={{
          type: "linear",
        }}
      >
        {Array.from(Array(NUM_ITEMS).keys()).map((idx) => (
          <DockItem key={idx} left={left} isHover={isHover} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

interface DockItemProps {
  left: number;
  isHover: boolean;
}

function DockItem({ left, isHover }: DockItemProps) {
  const ref = useRef(null);
  const motionValue = useMotionValue(BOUNDARY);

  useEffect(() => {
    const setMotion = () => {
      if (ref.current) {
        const { offsetLeft, offsetWidth } = ref.current;
        const loc = offsetLeft + offsetWidth / 2;

        motionValue.set(Math.floor(Math.abs(left - loc)));
      }
    };
    setMotion();
  }, [motionValue, left]);

  useEffect(() => {
    if (!isHover) {
      motionValue.set(100);
    }
  }, [isHover, motionValue]);

  const multiplier = useTransform(
    motionValue,
    [0, BOUNDARY],
    [80, DEFAULT_DIMENSION]
  );
  const value = useTransform(multiplier, (value) =>
    isHover ? `${value}px` : `${DEFAULT_DIMENSION}px`
  );

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      style={{
        width: value,
        height: value,
      }}
    />
  );
}
