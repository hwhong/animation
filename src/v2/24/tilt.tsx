import React, { useEffect } from "react";
import styles from "./tilt.module.css";
import useMeasure from "react-use-measure";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

export function Tilt() {
  const [elementRef, bounds] = useMeasure();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const onMouseMove = ({ clientX, clientY, currentTarget }: any) => {
    const { left, top } = (currentTarget as any).getBoundingClientRect();

    x.set(clientX - left);
    y.set(clientY - top);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const tX = useTransform(x, [0, bounds.width], [10, -10]);
  //   const botX = useTransform(x, [0, bounds.width], [-10, -10]);
  //   const topY = useTransform(x, [0, bounds.width], [10, 10]);
  //   const botY = useTransform(x, [0, bounds.width], [-10, -10]);
  const tY = useTransform(y, [0, bounds.height], [-10, 10]);

  return (
    <motion.div
      ref={elementRef}
      className={styles.root}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        perspective: `1000px`,
        rotateX: useMotionTemplate`${tX}deg`,
        rotateY: useMotionTemplate`${tY}deg`,
        background: useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, #f4f4f4,  #b4b4b4)`,
      }}
    />
  );
}

/*
(0,0)              (full, 0)  
(+8, -8)             (+8,+8)
---------------------
|   1          2    |
|                   |
|                   |
|   3           4   |
---------------------
(-8, -8)             (-8, +8)
(0, full)          (full, full)
*/
