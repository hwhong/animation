import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  defaultModalAnimation,
  defaultModalBackdropAnimation,
} from "./modal-utils";
import { ClientSidePortal } from "./portal";
import styles from "./modal.module.css";
import classNames from "classnames";
import Image from "next/image";

interface ModalProps {
  isVisible: boolean;
  gifLink: any;
  onClose: () => void;
}

export function Modal({ isVisible, gifLink, onClose }: ModalProps) {
  // A hook that returns `true` if the current device has Reduced Motion setting enabled
  const shouldReduceMotion = useReducedMotion();

  // Combine the modal class names from the props and the default class names
  const modalMainClassName = classNames(styles.modal);

  const modalAnimation = shouldReduceMotion ? {} : defaultModalAnimation;
  const modalBackdropAnimation = shouldReduceMotion
    ? {}
    : defaultModalBackdropAnimation;

  // When the user press the ESC key, onPressEscKey will be called
  const handleWindowKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);
    return () => window.removeEventListener("keydown", handleWindowKeyDown);
  }, [handleWindowKeyDown]);

  return (
    <ClientSidePortal>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              {...modalAnimation}
              className={modalMainClassName}
            >
              <div className={styles.modalContent}>
                <Image src={gifLink} alt="demo" className={styles.image} />
              </div>
            </motion.div>

            <motion.div
              key="modal-backdrop"
              {...modalBackdropAnimation}
              onClick={onClose}
              className={styles.modalBackdrop}
            />
          </>
        )}
      </AnimatePresence>
    </ClientSidePortal>
  );
}
