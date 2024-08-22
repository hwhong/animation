import React, { useState } from "react";
import styles from "./stack-interaction.module.css";
import { motion } from "framer-motion";

const CARD_OFFSET = 30;
const SCALE_FACTOR = 0.06;

export function StackInteraction() {
  const [colors, setColors] = useState(["#00b2ff", "#01c947", "#feb90c"]);

  const onClick = () => {
    const [hd, ...tl] = colors;
    setColors([...tl, hd]);
  };

  return (
    <div className={styles.root} onClick={onClick}>
      {colors.map((color, index) => (
        <motion.div
          key={color}
          className={styles.panel}
          style={{ backgroundColor: color }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: colors.length - index,
          }}
        ></motion.div>
      ))}
    </div>
  );
}
