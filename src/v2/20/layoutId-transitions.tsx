import React, { useState } from "react";
import styles from "./layoutId-transition.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";

type Block = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

export function LayoutIdTransition() {
  const [blockId, setBlockId] = useState<Block>("topLeft");

  const onClick = (blockId: Block) => setBlockId(blockId);

  return (
    <div className={styles.root}>
      <div
        className={classNames(styles.block, styles.topLeft)}
        onClick={() => onClick("topLeft")}
      ></div>
      <div
        className={classNames(styles.block, styles.topRight)}
        onClick={() => onClick("topRight")}
      ></div>
      <div
        className={classNames(styles.block, styles.bottomLeft)}
        onClick={() => onClick("bottomLeft")}
      ></div>
      <div
        className={classNames(styles.block, styles.bottomRight)}
        onClick={() => onClick("bottomRight")}
      ></div>
      <motion.div
        className={classNames(styles.moveBlock, styles.block, {
          [styles.topLeft]: blockId === "topLeft",
          [styles.topRight]: blockId === "topRight",
          [styles.bottomLeft]: blockId === "bottomLeft",
          [styles.bottomRight]: blockId === "bottomRight",
        })}
        layoutId="moveBlock"
      ></motion.div>
    </div>
  );
}
