import React from "react";
import styles from "./delete.module.css";
import { motion, useAnimate } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

export function Delete() {
  return (
    <div className={styles.root}>
      {Array.from(Array(4).keys()).map((i) => (
        <DeleteItem key={i} />
      ))}
    </div>
  );
}

function DeleteItem() {
  const [scope, animate] = useAnimate();

  const onClick = () => {
    animate(scope.current, { scale: 0 });
  };

  return (
    <motion.div className={styles.item} ref={scope}>
      <CloseIcon className={styles.icon} onClick={onClick} />
    </motion.div>
  );
}
