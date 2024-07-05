import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
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
      <motion.div
        layout
        animate={{ height: bounds.height ? bounds.height : null }}
        className={styles.content}
      >
        <div ref={elementRef} className={styles.inner}>
          <h1>About Time</h1>
          <p>
            At the age of 21, Tim discovers he can travel in time and change
            what happens and has happened in his own life.
          </p>
          {showExtraContent ? (
            <p>
              His decision to make his world a better place by getting a
              girlfriend turns out not to be as easy as you might think.
            </p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
