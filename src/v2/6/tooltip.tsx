import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./tooltip.module.css";
import Image from "next/image";
import img from "./profile.png";
import { useHover } from "@uidotdev/usehooks";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import classNames from "classnames";

export function Tooltip() {
  const [isHover, setIsHover] = useState(false);
  const [ref, hovering] = useHover();

  return (
    <div className={styles.root} onMouseLeave={() => setIsHover(false)}>
      <div className={styles.wrapper} onMouseOver={() => setIsHover(true)}>
        <Image
          src={img}
          width={18}
          height={18}
          alt="Profile"
          className={styles.img}
        />
        <span>Warren Hong</span>
      </div>
      {isHover && (
        <motion.div
          className={styles.hoverContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={img}
            width={32}
            height={32}
            alt="Profile"
            className={styles.img}
          />
          <div className={styles.content}>
            <span>Warren Hong</span>
            <span className={styles.subtext}> Engineering</span>
          </div>
          <span
            onClick={() =>
              window.open("https://www.linkedin.com/in/hwhong/", "_blank")
            }
          >
            <LinkedInIcon
              className={classNames(styles.icon, {
                [styles.hoverIcon]: hovering,
              })}
              ref={ref}
            />
          </span>
        </motion.div>
      )}
    </div>
  );
}
