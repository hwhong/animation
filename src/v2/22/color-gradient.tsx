import React, { useEffect, useRef, useState } from "react";
import styles from "./color-gradient.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function ColorGradient() {
  const [width, setWidth] = useState<number>(0);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [0, width], ["#00b2ff", "#feb90c"]);

  useEffect(() => {
    const elem = constraintsRef.current as any;
    if (elem) {
      setWidth(elem.clientWidth);
    }
  }, []);

  return (
    // DON'T FORGET TO MAKE TAG MOTION.DIV WHEN CHANGING STYLE
    <motion.div className={styles.root} style={{ backgroundColor }}>
      <div className={styles.slider} ref={constraintsRef}>
        <motion.div
          drag="x"
          style={{ x }}
          className={styles.drag}
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600 }}
        />
      </div>
    </motion.div>
  );
}
