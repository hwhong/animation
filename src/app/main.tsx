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
  Wiggle,
  FanOutCards,
  Severance,
  NightMode,
  EmojiReaction,
  LoadingState,
  HoverShow,
  Flipper,
  Flying,
  JumpContent,
  List,
  HoverIcons,
  PausePlay,
  CursorMover,
  Bounce,
  ScrollFrame,
  InOutStagger,
  Pills,
  Delete,
  Vinyl,
  StackInteraction,
  FanOut,
  Flower,
  EnterAnimate,
  ScrollParent,
  Pendulum,
} from "@/v2";

export function Main() {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);
  const ref = useRef(null);

  const removeHidden = () => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "auto";
    }
  };

  useOnClickOutside(ref, (e) => {
    setSelectedItem(null);
    removeHidden();
  });

  useEffect(() => {
    function onKeyDown(event: any) {
      if (event.key === "Escape") {
        setSelectedItem(null);
        removeHidden();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const onItemClick = (index: number) => {
    setSelectedItem(index);
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }
  };

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
    <Wiggle key={25} />,
    <FanOutCards key={26} />,
    <Severance key={27} />,
    <NightMode key={28} />,
    <EmojiReaction key={29} />,
    <LoadingState key={30} />,
    <HoverShow key={31} />,
    <Flipper key={32} />,
    <Flying key={33} />,
    <JumpContent key={34} />,
    <List key={35} />,
    <HoverIcons key={36} />,
    <PausePlay key={37} />,
    <CursorMover key={38} />,
    <Bounce key={39} />,
    <ScrollFrame key={40} />,
    <InOutStagger key={41} />,
    <Pills key={42} />,
    <Delete key={43} />,
    <Vinyl key={44} />,
    <StackInteraction key={45} />,
    <FanOut key={46} />,
    <Flower key={47} />,
    <EnterAnimate key={48} />,
    <ScrollParent key={49} />,
    <Pendulum key={50} />,
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
      <div className={styles.root}>
        {Array.from(Array(50).keys()).map((i) => {
          const idx = i + 1;
          /** Modal exists */
          const isSelectionActive = selectedItem !== null;
          // const isIncomplete = incompletes.includes(idx);

          return (
            <motion.div
              key={idx}
              layoutId={`selectedIdx-${selectedItem}`}
              onClick={() => !isSelectionActive && onItemClick(idx)}
              className={classNames(styles.block, GeistMono.className, {
                [styles.unfinished]: components.length - 1 < idx,
                [styles.activeSelection]: isSelectionActive,
                // [styles.incomplete]: isIncomplete,
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
