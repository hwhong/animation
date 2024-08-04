import React, { useEffect, useState } from "react";
import styles from "./pause-play.module.css";
import { useAnimate } from "framer-motion";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export function PausePlay() {
  const [scope, animate] = useAnimate();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const ref = animate(
      scope.current,
      {
        backgroundColor: ["#00b2ff", "#feb90c", "#01c947"],
        rotate: [0, 360, 0],
        translateX: [0, 100, -100, 0],
      },
      { duration: 5, repeat: Infinity }
    );
    if (isActive) {
      ref.play();
    } else {
      ref.stop();
    }
  }, [animate, isActive, scope]);

  const onPlayClick = () => setIsActive(true);

  const onPauseClick = () => setIsActive(false);

  return (
    <div className={styles.root}>
      <div ref={scope} className={styles.spinner}></div>
      <div className={styles.controlWrapper}>
        <div onClick={onPlayClick} className={styles.icon}>
          <PlayArrowIcon />
        </div>
        <div onClick={onPauseClick} className={styles.icon}>
          <StopIcon />
        </div>
      </div>
    </div>
  );
}
