import {
  Reorder,
  useMotionValue,
  animate,
  MotionValue,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import styles from "./list.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useOnClickOutside } from "usehooks-ts";
import classNames from "classnames";

export function List() {
  const [items, setItems] = useState<string[]>([
    "New York",
    "Los Angeles",
    "San Francisco",
    "Seoul",
    "Taipei",
  ]);
  const [value, setValue] = useState("");
  const [emoji, setEmoji] = useState("⚽️");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const ref = useRef(null);
  const pickerRef = useRef(null);
  useOnClickOutside([pickerRef, ref], (e) => {
    setIsPopoverOpen(false);
  });

  const onAddClick = () => {
    setItems([...items, `${emoji} ${value}`]);
    setValue("");
  };

  const onEmojiClick = (emoji: string) => {
    setEmoji(emoji);
  };

  const onDisplayClick = () => setIsPopoverOpen(true);

  return (
    <div className={styles.root}>
      {/* <div className={styles.inputWrapper}>
        <div
          className={styles.emojiDisplay}
          onClick={onDisplayClick}
          ref={pickerRef}
        >
          {emoji}
          {isPopoverOpen && (
            <AnimatePresence>
              <motion.div
                className={styles.pickerWrapper}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "just" }}
              >
                <div className={styles.picker} ref={ref}>
                  {["⚽️", "🏀", "🥏", "🎾", "🥅"].map((i) => (
                    <motion.div
                      className={styles.pick}
                      whileHover={{ backgroundColor: "#d4d4d4" }}
                      key={i}
                      onClick={() => onEmojiClick(i)}
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <input
          value={value}
          className={styles.input}
          onChange={(e) => setValue(e.target.value)}
        />
        <motion.button
          onClick={onAddClick}
          className={styles.button}
          whileHover={{ backgroundColor: "#d4d4d4" }}
        >
          <AddIcon />
        </motion.button>
      </div> */}
      <div className={styles.divider} />

      <Reorder.Group
        axis="y"
        onReorder={setItems}
        values={items}
        className={styles.listStyle}
      >
        {items.map((value) => (
          <Item key={value} item={value} />
        ))}
      </Reorder.Group>
    </div>
  );
}

interface Props {
  item: string;
}

function Item({ item }: Props) {
  const y = useMotionValue(0);
  // const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      className={classNames(styles.listStyle, styles.item)}
      value={item}
      id={item}
      style={{ y }}
    >
      <span>{item}</span>
    </Reorder.Item>
  );
}

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

export function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}
