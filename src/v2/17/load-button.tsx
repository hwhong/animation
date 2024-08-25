import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "../../utils/spinner";
import styles from "./load-button.module.css";

const buttonCopy = {
  idle: "Submit",
  loading: <Spinner />,
  success: "Sent!",
};

enum State {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
}

export function LoadButton() {
  const [buttonState, setButtonState] = useState<State>(State.IDLE);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        disabled={buttonState === "loading"}
        onClick={() => {
          if (buttonState === "success") return;

          setButtonState(State.LOADING);

          setTimeout(() => {
            setButtonState(State.SUCCESS);
          }, 1750);

          setTimeout(() => {
            setButtonState(State.IDLE);
          }, 3500);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            key={buttonState}
            className={styles.span}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
