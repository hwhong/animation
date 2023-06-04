import classNames from "classnames";
import styles from "./button-group.module.css";
import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";

interface ButtonGroupProps {
  groupContents: string[];
  selectedIndex?: number;
}

export function ButtonGroup({
  groupContents,
  selectedIndex,
}: ButtonGroupProps) {
  const [activeIndex, setActiveIndex] = useState(selectedIndex ?? 0);
  const controls = useAnimationControls();

  const onMouseEnter = async (e: any) => {
    await controls.start({ opacity: 1, transition: { duration: 0.001 } });
    await controls.start({
      width: e.target.offsetWidth,
      left: `${e.target.offsetLeft}px`,
    });
  };

  const onMouseLeave = () => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.001 },
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <ul className={styles.list}>
          <motion.div
            animate={controls}
            style={{
              position: "absolute",
              height: "40px",
              backgroundColor: "#EDEDED",
              borderRadius: "20px",
            }}
          />
          {groupContents.map((content, i) => (
            <li
              key={content}
              className={classNames(styles.item, {
                [styles.activeWrapper]: i === activeIndex,
              })}
            >
              <button
                className={classNames(styles.button, {
                  [styles.active]: i === activeIndex,
                })}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {content}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
