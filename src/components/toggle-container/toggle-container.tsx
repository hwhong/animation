import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./toggle-container.module.css";
import { PlusIcon } from "./plus-icon";

export type Status = "Hidden" | "Shown";

interface ToggleContainerProps {
  initialContent: React.ReactNode;
  hiddenContent: React.ReactNode;
}

export function ToggleContainer({
  initialContent,
  hiddenContent,
}: ToggleContainerProps) {
  const [status, setIsStatus] = useState<Status>("Hidden");
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);

  const onButtonClick = () =>
    setIsStatus(status === "Hidden" ? "Shown" : "Hidden");
  const onMouseOver = () => setIsButtonHover(true);
  const onMouseLeave = () => setIsButtonHover(false);

  return (
    <div className={styles.root}>
      <AnimatePresence>
        <motion.div 
          key={status}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={styles.contentWrapper}
        >
          {status === "Hidden" ? hiddenContent : initialContent}
        </motion.div>
      </AnimatePresence>
      <motion.button
        className={styles.button}
        onClick={onButtonClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        initial={{ backgroundColor: "#ffffff" }}
        whileHover={{ backgroundColor: "#000000" }}
        transition={{ delay: 0.01 }}
      >
        <motion.div
          animate={{ rotate: status === "Hidden" ? 0 : 90 }}
          transition={{ type: "just" }}
          className={styles.iconWrapper}
        >
          <PlusIcon isActive={isButtonHover} />
        </motion.div>
      </motion.button>
    </div>
  );
}
