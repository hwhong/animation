import React, { useState } from "react";
import styles from "./drag-carousel.module.css";
import { motion, useMotionValue } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import classNames from "classnames";

export function DragCarousel() {
  const [idx, setIdx] = useState(0);
  /**
   * All motion components internally use MotionValues to track the state and velocity of an animating value.
   * useMotionValue injects that value in manually via the style prop.
   * e.g can manually set and get it
   *    dragX.get() //100
   *    dragX.set(100)
   *    dragX.onChange(...)
   */
  const dragX = useMotionValue(0);
  const DRAG_BUFFER = 50;
  const COLORS = ["#32ADE6", "#FFCC00", "#34C759"];

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && idx < COLORS.length - 1) {
      setIdx((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && idx > 0) {
      setIdx((pv) => pv - 1);
    }
  };

  const onLeftClick = () => {
    if (idx > 0) {
      setIdx((pv) => pv - 1);
    }
  };

  const onRightClick = () => {
    if (idx < COLORS.length - 1) {
      setIdx((pv) => pv + 1);
    }
  };

  return (
    <div className={styles.root}>
      <div
        className={classNames(styles.arrow, styles.left)}
        onClick={onLeftClick}
      >
        <ChevronLeftIcon />
      </div>
      <div className={styles.carousel}>
        {COLORS.map((color) => (
          <motion.div
            drag="x"
            key={color}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
              backgroundColor: color,
            }}
            animate={{
              translateX: `-${idx * 100}%`,
            }}
            onDragEnd={onDragEnd}
            className={styles.slide}
            transition={{ bounce: 0 }}
          />
        ))}
      </div>
      <div
        className={classNames(styles.arrow, styles.right)}
        onClick={onRightClick}
      >
        <ChevronRightIcon />
      </div>
      <div className={styles.dots}>
        {Array.from(Array(COLORS.length).keys()).map((dotIdx) => (
          <div
            key={dotIdx}
            className={classNames(styles.dot, {
              [styles.active]: idx === dotIdx,
            })}
          />
        ))}
      </div>
    </div>
  );
}
