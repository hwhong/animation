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
  ScrollAppear,
  ScrollCover,
  ToggleCard,
  MacDock,
  LoadButton,
  LinedProgress,
  Counter,
  LayoutIdTransition,
  CreditCard,
  ColorGradient,
  CursorGradient,
  Tilt,
  Input,
  FanOutCards,
  Severance,
  NightMode,
  EmojiReaction,
  LoadingState,
  HoverShow,
  Flipper,
  Flying,
  JumpContent,
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

  const incompletes = [5, 17, 24, 25];

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
    <ScrollAppear key={13} />,
    <ScrollCover key={14} />,
    <ToggleCard key={15} />,
    <MacDock key={16} />,
    <LoadButton key={17} />,
    <LinedProgress key={18} />,
    <Counter key={19} />,
    <LayoutIdTransition key={20} />,
    <CreditCard key={21} />,
    <ColorGradient key={22} />,
    <CursorGradient key={23} />,
    <Tilt key={24} />,
    <Input key={25} />,
    <FanOutCards key={26} />,
    <Severance key={27} />,
    <NightMode key={28} />,
    <EmojiReaction key={29} />,
    <LoadingState key={30} />,
    <HoverShow key={31} />,
    <Flipper key={32} />,
    <Flying key={33} />,
    <JumpContent key={34} />,
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
          const isIncomplete = incompletes.includes(idx);

          return (
            <motion.div
              key={idx}
              layoutId={`selectedIdx-${selectedItem}`}
              onClick={() =>
                !isSelectionActive && !isIncomplete && onItemClick(idx)
              }
              className={classNames(styles.block, GeistMono.className, {
                [styles.unfinished]: components.length - 1 < idx,
                [styles.activeSelection]: isSelectionActive,
                [styles.incomplete]: isIncomplete,
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
