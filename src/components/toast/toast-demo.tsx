import React from "react";
import { ToastRoot } from "./toast-root";
import styles from "./toast-demo.module.css";

export function ToastDemo() {
  return (
    <div>
      <ToastRoot text="Go visit https://warrenhong.vercel.app/">
        {(dispatchToast) => (
          <button onClick={() => dispatchToast()} className={styles.button}>
            Add Toast
          </button>
        )}
      </ToastRoot>
    </div>
  );
}
