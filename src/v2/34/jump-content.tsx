import React, { useState } from "react";
import styles from "./jump-content.module.css";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, Variants } from "framer-motion";

export function JumpContent() {
  const [active, setIsActive] = useState<"inactive" | "active">("inactive");

  const variants: Variants = {
    active: { marginTop: "-110px", scale: 1 },
    inactive: { marginTop: "-50px", scale: 0 },
  };

  const onClick = () =>
    setIsActive(active === "active" ? "inactive" : "active");

  return (
    <motion.div
      className={styles.root}
      whileHover={{ backgroundColor: "#d4d4d4" }}
    >
      <LaunchIcon className={styles.icon} onClick={onClick} />
      {active && (
        <motion.div
          className={styles.jumpContent}
          initial={{ marginTop: "0", scale: 0 }}
          variants={variants}
          animate={active}
          transition={{ type: "just" }}
        >
          <div
            className={styles.block}
            style={{ backgroundColor: "#00b2ff" }}
          ></div>
          <div
            className={styles.block}
            style={{ backgroundColor: "#01c947" }}
          ></div>
          <div
            className={styles.block}
            style={{ backgroundColor: "#feb90c" }}
          ></div>
        </motion.div>
      )}
    </motion.div>
  );
}
