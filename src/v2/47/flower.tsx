import React, { useState } from "react";
import styles from "./flower.module.css";
import { motion } from "framer-motion";
import ReplayIcon from "@mui/icons-material/Replay";

interface Pedal {
  degree: number;
  color: string;
}

export function Flower() {
  const [restart, setRestart] = useState<"1" | "2">("1");
  const customs: Pedal[] = [
    { degree: 0, color: "#FEA928" },
    { degree: 45, color: "#F4E10E" },
    { degree: 90, color: "#AED440" },
    { degree: 135, color: "#63C098" },
    { degree: 180, color: "#65ADE2" },
    { degree: 225, color: "#9988C3" },
    { degree: 270, color: "#DC79A3" },
    { degree: 315, color: "#FD7254" },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.flower} key={restart}>
        {customs.map(({ degree, color }) => (
          <motion.div
            className={styles.pedal}
            key={degree}
            animate={{ transform: `rotate(${degree}deg)` }}
            transition={{ duration: 2 }}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <motion.button
        whileHover={{ backgroundColor: "#d4d4d4" }}
        onClick={() => setRestart(restart === "1" ? "2" : "1")}
        className={styles.button}
      >
        <ReplayIcon />
      </motion.button>
    </div>
  );
}
