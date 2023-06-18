import React, { useState } from "react";
import styles from "./container.module.css";
import { Inter, Inter_Tight } from "next/font/google";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const headerInter = Inter({ subsets: ["latin"], weight: "600" });
const italicInter = Inter_Tight({
  subsets: ["latin"],
  weight: "300",
  style: "italic",
});

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  codeLink: string;
  title: string;
  link: any;
  onInspiredByClick: () => void;
}

export function Container({
  children,
  codeLink,
  className,
  title,
  link,
  onInspiredByClick,
}: ContainerProps) {
  const onExternalLinkClick = () => window.open(codeLink, "_blank");
  const [isIconHover, setIsIconHover] = useState(false);

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
        <FontAwesomeIcon
          className={styles.icon}
          icon={faArrowUpRightFromSquare}
          color={isIconHover ? "#0071e3" : "#000"}
          onClick={onExternalLinkClick}
          onMouseEnter={() => setIsIconHover(true)}
          onMouseLeave={() => setIsIconHover(false)}
        />
      </div>
      <div className={classNames(className, styles.contentWrapper)}>
        {children}
      </div>
      {link && (
        <span
          className={classNames(styles.inspiredByText, italicInter.className)}
          onClick={onInspiredByClick}
        >
          Inspired by
        </span>
      )}
    </motion.div>
  );
}
