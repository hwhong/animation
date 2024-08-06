import React from "react";
import { motion } from "framer-motion";
import styles from "./bounce.module.css";

export function Bounce() {
  return (
    <div className={styles.root}>
      {Array.from(Array(10).keys()).map((i) => (
        <Ball delay={i * 0.1} key={i} />
      ))}
    </div>
  );
}

interface BallInterface {
  delay: number;
}

function Ball({ delay }: BallInterface) {
  return (
    <motion.div
      className={styles.ball}
      animate={{
        y: ["100%", "-100%"],
        backgroundColor: ["#00b2ff", "#feb90c"],
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        repeatType: "reverse",
        repeat: Infinity,
        delay,
      }}
    />
  );
}
