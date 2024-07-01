"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Main } from "./main";

let scrollThreshold = [0, 50];

interface Content {
  node: React.ReactNode;
  title: string;
  codeLink: string;
  link?: any;
}

//https://codesandbox.io/s/github/samselikoff/fixed-header-teaser
export default function Home() {
  let { scrollY } = useScroll();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef<any>();
  let lastScrollDirection = useRef<string>("down");
  let pixelsScrolled = useMotionValue(0);

  // useTransform maps the second param on to the third param
  // [0, 50] ==> [100, 60]
  // if pixelsScrolled is at 0, then return 100
  // if pixelsScrolled is at 50, then return 60
  let height = useTransform(pixelsScrolled, scrollThreshold, [100, 60]);
  let backgroundOpacity = useTransform(
    pixelsScrolled,
    scrollThreshold,
    [1, 0.4]
  );
  // let boxShadow = useTransform(pixelsScrolled, scrollThreshold, [0, 2]);
  let backgroundColorTemplate = useMotionTemplate`rgba(250 250 249 / ${backgroundOpacity})`;
  // let boxShadowTemplate = useMotionTemplate`0 ${boxShadow}px 2px 0 rgb(0 0 0 / 0.05);`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 0) return;

    let isScrollingDown = scrollY.getPrevious() - latest < 0;
    let scrollDirection = isScrollingDown ? "down" : "up";
    let currentPixelsScrolled = pixelsScrolled.get();
    let newPixelsScrolled;

    if (lastScrollDirection.current !== scrollDirection) {
      lastPixelsScrolled.current = currentPixelsScrolled;
      scrollYOnDirectionChange.current = latest;
    }

    const lastScrolled =
      typeof lastPixelsScrolled.current === "number"
        ? lastPixelsScrolled.current
        : 0;
    if (isScrollingDown) {
      newPixelsScrolled = Math.min(
        lastScrolled + (latest - scrollYOnDirectionChange.current),
        scrollThreshold[1]
      );
    } else {
      newPixelsScrolled = Math.max(
        lastScrolled - (scrollYOnDirectionChange.current - latest),
        scrollThreshold[0]
      );
    }

    pixelsScrolled.set(newPixelsScrolled);
    lastScrollDirection.current = scrollDirection;
  });

  const isNew = false;

  return isNew ? (
    <div className={styles.root}>
      <motion.header
        style={{
          height,
          backgroundColor: backgroundColorTemplate,
        }}
        className={styles.header}
      >
        <div className={styles.container}>
          <div className={styles.headerText}>
            <a>Animation Trove</a>
            <a
              className={styles.nameText}
              href="https://github.com/hwhong"
              target="_blank"
            >
              by Warren
            </a>
          </div>
          <button
            className={styles.githubButton}
            onClick={() =>
              window.open("https://github.com/hwhong/animation", "_blank")
            }
          >
            View on Github
          </button>
        </div>
      </motion.header>
    </div>
  ) : (
    <Main />
  );
}
