import React, { useState } from "react";
import styles from "./fan-out.module.css";
import { motion, useMotionTemplate } from "framer-motion";

interface Custom {
  translateX: number;
  translateY: number;
  rotate: number;
}

export function FanOut() {
  const [status, setStatus] = useState<"active" | "inactive">("inactive");

  const customs: Custom[] = [
    {
      translateX: 90,
      translateY: 80,
      rotate: 8,
    },
    {
      translateX: -100,
      translateY: 100,
      rotate: 10,
    },
    {
      translateX: 110,
      translateY: -90,
      rotate: -5,
    },
    {
      translateX: -85,
      translateY: -80,
      rotate: 3,
    },
  ];

  const variants = {
    active: (index: number) => {
      const { translateX, translateY, rotate } = customs[index];
      return {
        transform: `translate(${translateX}px, ${translateY}px)  rotate(${rotate}deg)`,
      };
    },
  };

  const onClick = () => setStatus(status === "active" ? "inactive" : "active");

  return (
    <div className={styles.root} onClick={onClick}>
      {["#00b2ff", "#01c947", "#feb90c", "#FF9500"].map((color, index) => (
        <motion.div
          key={color}
          style={{ backgroundColor: color }}
          className={styles.tile}
          animate={status}
          variants={variants}
          custom={index}
        ></motion.div>
      ))}
    </div>
  );
}
