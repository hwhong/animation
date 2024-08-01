import { useMeasure } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./toggle-card.module.css";

export function ToggleCard() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [elementRef, bounds] = useMeasure();

  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle
      </button>
      <AnimatePresence>
        <motion.div
          layout
          animate={{ height: bounds.height ?? undefined }}
          className={styles.content}
        >
          <div ref={elementRef} className={styles.inner}>
            <h1>About Time</h1>
            <p className={styles.textContent}>
              At the age of 21, Tim discovers he can travel in time and change
              what happens and has happened in his own life.
            </p>
            {showExtraContent ? (
              <motion.p
                className={styles.textContent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                His decision to make his world a better place by getting a
                girlfriend turns out not to be as easy as you might think.
              </motion.p>
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
