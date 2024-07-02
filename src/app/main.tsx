import React, { useState, useEffect, useRef } from "react";
import styles from "./main.module.css";
import { GeistMono } from "geist/font/mono";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import {
  ButtonGroupDemo,
  TabUnderline,
  TextLoader,
  FileExpand,
  ExpandNavigation,
  Tooltip,
  FancyUnderlineDemo,
  ToggleContainerDemo,
  FancyUnderlineAltDemo,
  InfiniteLineDemo,
  DragCarousel,
  BorderGradient,
} from "@/v2";

export function Main() {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);
  const ref = useRef(null);
  useOnClickOutside(ref, (e) => setSelectedItem(null));

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

  const components = [
    <></>,
    <ButtonGroupDemo key={1} />,
    <TabUnderline key={2} />,
    <TextLoader key={3} />,
    <FileExpand key={4} />,
    <ExpandNavigation key={5} />,
    <Tooltip key={6} />,
    <FancyUnderlineDemo key={7} />,
    <ToggleContainerDemo key={8} />,
    <FancyUnderlineAltDemo key={9} />,
    <InfiniteLineDemo key={10} />,
    <DragCarousel key={11} />,
    <BorderGradient key={12} />,
  ];

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
            {components[selectedItem] ?? selectedItem}
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.root}>
        {Array.from(Array(100).keys()).map((i) => {
          const idx = i + 1;
          /** Modal exists */
          const isSelectionActive = selectedItem !== null;

          return (
            <motion.div
              key={idx}
              layoutId={`selectedIdx-${selectedItem}`}
              onClick={() => !isSelectionActive && onItemClick(idx)}
              className={classNames(styles.block, GeistMono.className, {
                [styles.unfinished]: components.length - 1 < idx,
                [styles.activeSelection]: isSelectionActive,
              })}
            >
              {idx}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
