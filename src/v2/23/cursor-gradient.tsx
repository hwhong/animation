import React from "react";
import styles from "./cursor-gradient.module.css";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function CursorGradient() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const onMouseMove = ({ clientX, clientY, currentTarget }: any) => {
    const { left, top } = (currentTarget as any).getBoundingClientRect();

    x.set(clientX - left);
    y.set(clientY - top);
  };

  return (
    <motion.div
      className={styles.root}
      onMouseMove={onMouseMove}
      style={{
        background: useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, #f4f4f4,  #b4b4b4)`,
      }}
    ></motion.div>
  );
}
