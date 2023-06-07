import React from "react";
import { motion } from "framer-motion";
import styles from "./elevated-container.module.css";

interface ElevatedContainerProps {
  children: React.ReactNode;
}

export function ElevatedContainer({ children }: ElevatedContainerProps) {
  return (
    <motion.div
      className={styles.root}
      initial={{
        borderColor: "#ffffff",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      whileHover={{
        borderWidth: "16px",
        borderColor: "#000000",
        borderStyle: "solid",
        marginTop: "-32px",
        scale: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
