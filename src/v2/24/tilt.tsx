import React, { useEffect } from "react";
import styles from "./tilt.module.css";
import useMeasure from "react-use-measure";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const MAX_DEGREE = 12;

export function Tilt() {
  const [elementRef, bounds] = useMeasure();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMouseMove = ({ clientX, clientY, currentTarget }: any) => {
    const { left, top, width, height } = (
      currentTarget as any
    ).getBoundingClientRect();

    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const mX = useSpring(x);
  const mY = useSpring(y);

  const rX = useTransform(mY, [-0.5, 0.5], [MAX_DEGREE, -MAX_DEGREE]);
  const rY = useTransform(mX, [-0.5, 0.5], [-MAX_DEGREE, MAX_DEGREE]);

  return (
    <motion.div
      ref={elementRef}
      className={styles.root}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        perspective: `1000px`,
        rotateX: useMotionTemplate`${rX}deg`,
        rotateY: useMotionTemplate`${rY}deg`,
        background: useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, #f4f4f4,  #b4b4b4)`,
      }}
    />
  );
}

/*
(0,0)              (full, 0)  
(-8, 8)             (+8,+8)
---------------------
|   1          2    |
|                   |
|                   |
|   3           4   |
---------------------
(-8, 8)             (-8, +8)
(0, full)          (full, full)
*/
