import React from "react";
import styles from "./flying.module.css";
import { v4 } from "uuid";
import { motion } from "framer-motion";
import { random } from "@/utils/utility";
import { useMeasure } from "@uidotdev/usehooks";

const PADDING = 100;

interface FlyingObject {
  id: string;
  obj: string;
}

export function Flying() {
  const [ref, { width }] = useMeasure();
  const flyingObjects: FlyingObject[] = [
    { id: v4(), obj: "🛸" },
    { id: v4(), obj: "🚀" },
    { id: v4(), obj: "🪁" },
    { id: v4(), obj: "🥏" },
    { id: v4(), obj: "🐉" },
  ];
  return (
    <div className={styles.root} ref={ref}>
      {flyingObjects.map(({ id, obj }) => (
        <FlyingObject key={id} maxLeft={width}>
          {obj}
        </FlyingObject>
      ))}
    </div>
  );
}

interface FlyingObjectProps {
  maxLeft: number | null;
  children: React.ReactNode;
}

function FlyingObject({ maxLeft, children }: FlyingObjectProps) {
  return (
    <motion.div
      className={styles.cloud}
      initial={{ marginLeft: -PADDING }}
      animate={{ marginLeft: maxLeft! + PADDING }}
      transition={{
        duration: random(7, 10),
        repeat: Infinity,
        delay: random(1, 5),
      }}
    >
      {children}
    </motion.div>
  );
}
