import React from "react";
import styles from "./container.module.css";
import { Inter } from "next/font/google";
import classnames from "classnames";
import classNames from "classnames";

const headerInter = Inter({ subsets: ["latin"], weight: "600" });

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  title: string;
}

export function Container({ children, className, title }: ContainerProps) {
  return (
    <div className={styles.root}>
      <div className={classnames(styles.header, headerInter.className)}>
        {title}
      </div>
      <div className={classNames(className, styles.contentWrapper)}>
        {children}
      </div>
    </div>
  );
}
