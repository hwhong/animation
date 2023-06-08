"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container } from "./container";
import classNames from "classnames";
import { ButtonGroupDemo, FadeTransitionDemo, ScrollZoom } from "@/components";
import { ElevatedContainerDemo } from "@/components/elevated-container";

let scrollThreshold = [0, 50];

interface Content {
  node: React.ReactNode;
  title: string;
}

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
  let backgroundColorTemplate = useMotionTemplate`rgba(250 250 249 / ${backgroundOpacity})`;

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

  const contents: Content[] = [
    {
      node: <ButtonGroupDemo />,
      title: "Button Group",
    },
    {
      node: <ScrollZoom />,
      title: "Scroll Zoom",
    },
    {
      node: <FadeTransitionDemo />,
      title: "Page Transition",
    },
    {
      node: <ElevatedContainerDemo />,
      title: "Elevated Container",
    },
  ];

  // MAKE THE APP APPLE LIKE

  return (
    <div className={styles.root}>
      <motion.header
        style={{ height, backgroundColor: backgroundColorTemplate }}
        className={styles.header}
      >
        <div className={styles.container}>Animation</div>
      </motion.header>
      <div className={styles.content}>
        {contents.map(({ node, title }, i) => (
          <Container
            title={title}
            key={title}
            className={classNames({ [styles.scrollZoomOverride]: i === 1 })}
          >
            {node}
          </Container>
        ))}
      </div>
    </div>
  );
}
