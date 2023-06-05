import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface FadeTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
}

export function FadeTransition({ children, isVisible }: FadeTransitionProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
