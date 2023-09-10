import React, { useEffect, useState } from "react";
import styles from "./toast.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  isActive: boolean;
  children: React.ReactNode;
}

export function Toast({ isActive, children }: ToastProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.root}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
