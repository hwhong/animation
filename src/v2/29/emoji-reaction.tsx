import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { v4 } from "uuid";
import styles from "./emoji-reaction.module.css";
import { motion } from "framer-motion";
import { genRand } from "@/utils/utility";

interface EmojiObj {
  emoji: string;
  id: string;
  left: number;
  duration: number;
  scale: number;
}

const DEFAULT_GAP = 50;

export function EmojiReaction() {
  const [elementRef, bounds] = useMeasure();
  const [emojis, setEmojis] = useState<EmojiObj[]>([]);

  const icons = ["⚽️", "🥞", "👋"];

  const onEmojiClick = (emoji: string) => {
    const left = genRand(DEFAULT_GAP, bounds.width - DEFAULT_GAP);
    const duration = genRand(1, 2);
    const scale = genRand(1, 5);
    setEmojis([...emojis, { emoji, id: v4(), left, duration, scale }]);
  };

  const onAnimateEnd = (emoji: EmojiObj) => {
    // const newArr = emojis.filter(({ id }) => id !== emoji.id);
    emojis.shift();
    console.log(emojis);
    setEmojis([...emojis]);
  };

  return (
    <div className={styles.root} ref={elementRef}>
      {emojis.map((emoji, i) => {
        return (
          <Emoji
            key={emoji.id}
            emojiObj={emoji}
            onAnimateEnd={() => onAnimateEnd(emoji)}
          />
        );
      })}
      <div className={styles.buttonRow}>
        {icons.map((i) => (
          <div className={styles.emoji} key={i} onClick={() => onEmojiClick(i)}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

interface EmojiProps {
  emojiObj: EmojiObj;

  onAnimateEnd: () => void;
}

export function Emoji({ emojiObj, onAnimateEnd }: EmojiProps) {
  const { emoji, id, left, duration, scale } = emojiObj;

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      onAnimateEnd();
    }, 1000);

    return () => clearTimeout(timeoutRef);
  });

  return (
    <motion.div
      key={id}
      className={styles.animatedEmoji}
      style={{ scale, left }}
      initial={{ bottom: 0, opacity: 1 }}
      animate={{ bottom: 250, opacity: 0 }}
      transition={{ duration }}
    >
      {emoji}
    </motion.div>
  );
}
