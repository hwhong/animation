import React, { useState, useEffect, useRef } from "react";
import styles from "./main.module.css";
import { GeistMono } from "geist/font/mono";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { One } from "@/v2/one";

export function Main() {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);
  const ref = useRef(null);
  // useOnClickOutside(ref, () => setSelectedItem(null));

  useEffect(() => {
    function onKeyDown(event: any) {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const onItemClick = (index: number) => setSelectedItem(index);

  const components = [<></>, <One key={1} />];

  return (
    <>
      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            layoutId={`selectedIdx-${selectedItem}`}
            className={styles.modal}
            ref={ref}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
          >
            {components[selectedItem]}
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.root}>
        {Array.from(Array(100).keys()).map((i) => {
          const idx = i + 1;

          return (
            <motion.div
              key={idx}
              layoutId={`selectedIdx-${selectedItem}`}
              className={classNames(styles.block, GeistMono.className, {
                [styles.todo]: components.length - 1 < idx,
              })}
              onClick={() => onItemClick(idx)}
            >
              {idx}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
