import React from "react";
import styles from "./plus-icon.module.css";
import classNames from "classnames";

interface PlusIconProps {
  isActive?: boolean;
}

export function PlusIcon({ isActive }: PlusIconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 39 39"
      className={styles.root}
      //  xml:space="preserve"
    >
      <path
        className={classNames(styles.plus, { [styles.active]: isActive })}
        d="M19.5,9.8c0.6,0,1,0.4,1,1l0,7.7l7.7,0c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1l-7.7,0l0,7.7c0,0.6-0.4,1-1,1
        c-0.6,0-1-0.4-1-1l0-7.7l-7.7,0c-0.6,0-1-0.5-1-1c0-0.6,0.4-1,1-1l7.7,0l0-7.7C18.5,10.2,19,9.8,19.5,9.8L19.5,9.8z"
      ></path>
    </svg>
  );
}
