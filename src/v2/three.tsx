import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./three.module.css";
import RefreshIcon from "@mui/icons-material/Refresh";

enum Status {
  INITIAL = "initial",
  UPDATE = "update",
}

const DELAY = 0.1;

export function Three() {
  const [update, setUpdate] = useState(Status.INITIAL);

  const TEXT =
    "Disney and Pixar’s “Inside Out 2” returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.";

  useEffect(() => {
    setUpdate(Status.INITIAL);
  }, [update]);

  return (
    <div className={styles.root}>
      <button
        onClick={() => setUpdate(Status.UPDATE)}
        className={styles.refreshButton}
      >
        <motion.div
          whileHover={{ rotate: 25 }}
          transition={{ ease: "linear", duration: 0.1 }}
        >
          <RefreshIcon />
        </motion.div>
      </button>
      <div className={styles.container} key={update}>
        {TEXT.split(" ").map((fragment, i) => (
          <motion.div
            key={fragment}
            className={styles.word}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            /**
             * --- this is important ---
             * Originally placed animationDelay in animate prop,
             * but that doesn't trigger the animation, because animate
             * prop is the end state, transition is the animation config
             */
            transition={{ delay: DELAY * i }}
          >
            {fragment}
            <span>&nbsp;&nbsp;</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
