import React, { useEffect, useState } from "react";
import styles from "./flying-rocket.module.css";
import { MAX, v4 } from "uuid";
import { motion, useTime, useTransform } from "framer-motion";
import { genRand } from "@/utils/utility";
import useMeasure from "react-use-measure";

const MAX_AMPLITUDE = 100;
const MIN_AMPLITUDE = 50;
const FULL_LENGTH_TIME = 5000;

export function FlyingRocket() {
  const [elementRef, bounds] = useMeasure();
  const [rockets, setRockets] = useState([v4(), v4(), v4(), v4(), v4()]);

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      rockets.pop();
      setRockets([...rockets, v4()]);
    }, FULL_LENGTH_TIME);

    return () => clearTimeout(timeoutRef);
  });

  return (
    <div className={styles.root} ref={elementRef}>
      {rockets.map((id, i) => (
        <Rocket key={id} left={bounds.width} index={i} />
      ))}
    </div>
  );
}

function generate() {
  return genRand(MIN_AMPLITUDE, MAX_AMPLITUDE);
}

interface RocketProps {
  left: number;
  index: number;
}

function Rocket({ left, index }: RocketProps) {
  const vTime = useTime();
  const top = useTransform(
    vTime,
    [0, 1000, 2000, 3000, 4000, 5000],
    [0, -generate(), generate(), -generate(), generate(), -generate()]
  );

  return (
    <motion.div
      style={{ top }}
      className={styles.cloud}
      initial={{ left: 0 }}
      animate={{ left }}
      transition={{ duration: 5, delay: index + 1 }}
    >
      🚀
    </motion.div>
  );
}
