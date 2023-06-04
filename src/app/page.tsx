"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ButtonGroupDemo } from "@/components/button-group/button-group-demo";
import { Container } from "./container";

let scrollThreshold = [0, 50];

export default function Home() {
  let { scrollY } = useScroll();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef<any>();
  let lastScrollDirection = useRef<string>("down");
  let pixelsScrolled = useMotionValue(0);
  let height = useTransform(pixelsScrolled, scrollThreshold, [100, 60]);
  let logoHeight = useTransform(pixelsScrolled, scrollThreshold, [33, 30]);
  let backgroundOpacity = useTransform(
    pixelsScrolled,
    scrollThreshold,
    [1, 0.4]
  );
  let backgroundColorTemplate = useMotionTemplate`rgba(250 250 249 / ${backgroundOpacity})`;

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let scrollDirection = isScrollingDown ? "down" : "up";
      let currentPixelsScrolled = pixelsScrolled.get();
      let newPixelsScrolled;

      if (
        lastScrollDirection.current !== scrollDirection &&
        lastPixelsScrolled.current
      ) {
        lastPixelsScrolled.current = currentPixelsScrolled;
        scrollYOnDirectionChange.current = latest;
      }

      if (isScrollingDown) {
        newPixelsScrolled = Math.min(
          lastPixelsScrolled.current +
            (latest - scrollYOnDirectionChange.current),
          scrollThreshold[1]
        );
      } else {
        newPixelsScrolled = Math.max(
          lastPixelsScrolled.current -
            (scrollYOnDirectionChange.current - latest),
          scrollThreshold[0]
        );
      }

      pixelsScrolled.set(newPixelsScrolled);

      lastScrollDirection.current = scrollDirection;
    });
  }, [pixelsScrolled, scrollY]);

  return (
    <div className={styles.root}>
      <motion.header
        // style={{ height, backgroundColor: backgroundColorTemplate }}
        style={{ height }}
        className={styles.header}
      >
        <div className={styles.container}>
          <a href="/">
            {/* <Logo style={{ height: logoHeight }} /> */}
            <div style={{ height: logoHeight }}>LOGOG</div>
          </a>
        </div>
      </motion.header>
      <div className={styles.content}>
        <Container>
          <ButtonGroupDemo />
        </Container>
        <Container>
          <></>
        </Container>
        <Container>
          {" "}
          <></>
        </Container>
        <Container>
          {" "}
          <></>
        </Container>
      </div>
    </div>
  );
}
