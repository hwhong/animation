import React, { useRef, useState } from "react";
import styles from "./input.module.css";
import { motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

export function Input() {
  const [isInputActive, setIsInputActive] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef(null);
  useOnClickOutside(ref, (e) => setIsInputActive(false));

  const onChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputActive(true);
    setValue(currentTarget.value);
  };

  return isInputActive ? (
    <div className={styles.root}>
      <motion.input
        ref={ref}
        layoutId="input"
        value={value}
        onChange={onChange}
        autoFocus
      ></motion.input>
      <div className={styles.suggestions}></div>
    </div>
  ) : (
    <motion.input
      layoutId="input"
      value={value}
      autoFocus
      onChange={onChange}
    ></motion.input>
  );
}
