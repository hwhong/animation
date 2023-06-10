import React from "react";
import styles from "./container.module.css";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { motion } from "framer-motion";

const headerInter = Inter({ subsets: ["latin"], weight: "600" });

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  title: string;
}

export function Container({ children, className, title }: ContainerProps) {
  return (
    <motion.div
      className={styles.root}
      whileHover={{
        // scale: 1.01,
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      <div className={classNames(styles.header, headerInter.className)}>
        {title}
      </div>
      <div className={classNames(className, styles.contentWrapper)}>
        {children}
      </div>
    </motion.div>
  );
}
