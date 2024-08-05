import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./cursor-mover.module.css";

const MOVE_MARGIN = 15;
const PADDING = 80;

export function CursorMover() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const x = useSpring(0);
  const y = useSpring(0);

  const MID_WIDTH = Math.round(width / 2) + PADDING;
  const MID_HEIGHT = Math.round(height / 2) + PADDING;
  const translateX = useTransform(
    x,
    [0, MID_WIDTH, width],
    [-MOVE_MARGIN, 0, MOVE_MARGIN]
  );
  const translateY = useTransform(
    y,
    [0, MID_HEIGHT, height],
    [-MOVE_MARGIN, 0, MOVE_MARGIN]
  );

  useEffect(() => {
    const elem = rootRef.current;
    if (elem) {
      const rect = elem.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
    }
  }, []);

  const onMouseMove = (e: any) => {
    const elem = rootRef.current;
    if (elem) {
      const rect = elem.getBoundingClientRect();
      var xVal = e.clientX - rect.left;
      var yVal = e.clientY - rect.top;
      x.set(xVal);
      y.set(yVal);
    }
  };

  const onMouseLeave = () => {
    x.set(MID_WIDTH);
    y.set(MID_HEIGHT);
  };

  return (
    <div
      className={styles.root}
      ref={rootRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div className={styles.box} style={{ translateX, translateY }} />
    </div>
  );
}
