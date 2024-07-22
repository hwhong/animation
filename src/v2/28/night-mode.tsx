import React, { useEffect, useState } from "react";
import styles from "./night-mode.module.css";
import { motion } from "framer-motion";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import classNames from "classnames";

enum Mode {
  NIGHT = "night",
  LIGHT = "light",
}

export function NightMode() {
  const [mode, setMode] = useState(Mode.LIGHT);
  const [isHold, setIsHold] = useState(false);

  const onButtonClick = () => {
    setMode(mode === Mode.LIGHT ? Mode.NIGHT : Mode.LIGHT);
  };

  const variants = {
    [Mode.LIGHT]: {
      backgroundColor: "#d4d4d4",
    },
    [Mode.NIGHT]: {
      backgroundColor: "#343434",
    },
  };

  return (
    <div className={styles.root}>
      <motion.div
        className={classNames(styles.canvas, {
          [styles.hold]: isHold,
          [styles.darkText]: mode === Mode.NIGHT,
        })}
        animate={mode}
        custom={isHold}
        variants={variants}
        transition={{ ease: "easeInOut" }}
      >
        <div
          className={classNames({
            [styles.text]: isHold,
          })}
        >
          {
            "Billie Holiday was an American jazz and swing music singer. She made a significant contribution to jazz music and pop singing"
          }
        </div>
      </motion.div>
      <button
        className={styles.button}
        id="button"
        onMouseDown={() => setIsHold(true)}
        onMouseUp={() => setIsHold(false)}
        onClick={onButtonClick}
      >
        {mode === Mode.LIGHT ? <ToggleOffIcon /> : <ToggleOnIcon />}
      </button>
    </div>
  );
}
