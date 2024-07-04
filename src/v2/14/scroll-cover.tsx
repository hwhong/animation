import React, { useRef } from "react";
import styles from "./scroll-cover.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { GeistMono } from "geist/font/mono";
import classNames from "classnames";

export function ScrollCover() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    container: ref,
  });
  // (motionValue, from, to)
  // to needs to be consistent with the values set in CSS
  const margin = useTransform(scrollY, [0, 200], [100, 0]);
  /** This doesn't actually log any values
   *  in framer-motion, values are injected.
   *  Need to place motion value in style tag of <motion/> elements
   *
   *  // console.log(scrollY.get());
   */

  return (
    <motion.div className={styles.root} ref={ref}>
      <motion.div
        className={classNames(styles.scrollContent, GeistMono.className)}
        style={{ margin }}
      >
        Scroll
      </motion.div>
    </motion.div>
  );
}
