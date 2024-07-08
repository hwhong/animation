import React, { useState } from "react";
import styles from "./lined-progress.module.css";
import { motion } from "framer-motion";

const LENGTH = 5;
export const RUNTIME = 0.3;
// const styles = {
//   root: "",
//   unitRoot: "",
//   edgeWrapper: "",
//   inactiveEdge: "",
//   activeEdge: "",
//   node: "",
// };

export function LinedProgress() {
  const [activeNodes, setActiveNodes] = useState<boolean[]>(
    new Array(LENGTH).fill(false)
  );
  // const [exitNodes, setExitNodes] = useState<number[]>([]);
  const [delays, setDelays] = useState<(number | undefined)[]>([]);

  const onNodeClicked = (idx: number) => {
    const isNodeActive = activeNodes[idx];
    const old = [...activeNodes];

    if (isNodeActive) {
      // need to
      // 1. immediately remove if previous nodes are lighted
      // 2. cannot exist a middle one

      for (let i = idx + 1; i < LENGTH; i++) {
        activeNodes[i] = false;
      }
      setDelays([]);
    } else {
      for (let i = 0; i <= idx; i++) {
        activeNodes[i] = true;
      }
      setDelays(calculateDelay(idx, old));
    }

    setActiveNodes([...activeNodes]);
  };

  return (
    <div className={styles.root}>
      {Array.from(Array(LENGTH).keys()).map((idx) => (
        <LinedUnit
          key={idx}
          isActive={activeNodes[idx]}
          onNodeClicked={() => onNodeClicked(idx)}
          delay={delays[idx]}
        />
      ))}
    </div>
  );
}

interface LinedUnitProps {
  isActive: boolean;
  delay: number | undefined;
  onNodeClicked: () => void;
}

const variants = {
  inactive: { width: 0 },
  active: { width: 100 },
};

const nodeVariants = {
  inactive: { backgroundColor: "#d4d4d4" },
  active: { backgroundColor: "#747474" },
};

export function LinedUnit({ isActive, delay, onNodeClicked }: LinedUnitProps) {
  return (
    <div className={styles.unitRoot}>
      <div className={styles.edgeWrapper}>
        <div className={styles.inactiveEdge} />
        <motion.div
          initial={false}
          className={styles.activeEdge}
          animate={isActive ? "active" : "inactive"}
          variants={variants}
          transition={{
            duration: RUNTIME,
            ease: "easeInOut",
            delay: delay ?? 0,
          }}
        />
      </div>
      <motion.div
        initial={false}
        className={styles.node}
        onClick={onNodeClicked}
        variants={nodeVariants}
        animate={isActive ? "active" : "inactive"}
        transition={{ delay: delay ? delay + RUNTIME : 0 }}
      ></motion.div>
    </div>
  );
}

export function calculateDelay(idx: number, activeNodes: boolean[]) {
  let firstInactiveIdx = 0;
  let result: (number | undefined)[] = [];
  for (let i = 0; i < idx + 1; i++) {
    if (!activeNodes[i]) {
      firstInactiveIdx = i;
      break;
    }
    result.push(undefined);
  }

  for (let i = firstInactiveIdx; i <= idx; i++) {
    if (i == firstInactiveIdx) {
      result.push(0);
      continue;
    }
    const previousNum = (i - 1 >= 0 ? result[i - 1] ?? 0 : 0) * 10;
    const additionalTime = RUNTIME * 2 * 10;

    result.push((previousNum + additionalTime) / 10);
  }

  for (let i = idx; i < activeNodes.length - 1; i++) {
    result.push(undefined);
  }

  return result;
}
