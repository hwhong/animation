import React, { useRef } from "react";
import styles from "./fancy-underline.module.css";
import { motion, useAnimationControls } from "framer-motion";
import classNames from "classnames";

interface FancyUnderlineProps {
  className?: string;
  children: string;
}

export function FancyUnderline({ children, className }: FancyUnderlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const onMouseEnter = async (e: any) => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width;
    await controls.start({ width: containerWidth });
  };

  const onMouseLeave = async () =>
    await controls.start({
      width: 0,
    });

  return (
    <span
      ref={containerRef}
      className={classNames(styles.root, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <motion.div
        animate={controls}
        className={styles.underline}
        initial={{ width: 0 }}
      />
    </span>
  );
}
