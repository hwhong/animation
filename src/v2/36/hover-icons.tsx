import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./hover-icons.module.css";
import { random } from "@/utils/utility";
import { useMeasure } from "@uidotdev/usehooks";

interface CitySet {
  name: CityName;
  emojis: string[];
  customStyle?: React.CSSProperties;
}

enum CityName {
  NEW_YORK = "New York",
  LONDON = "London",
  SAN_FRANCISCO = "San Francisco",
}

export function HoverIcons() {
  const [currSelection, setCurrSelection] = useState<CityName | null>(null);
  const [elementRef, bounds] = useMeasure();

  const cities: CitySet[] = [
    {
      name: CityName.NEW_YORK,
      emojis: ["🚕", "🗽", "🥯", "🌃", "⚾️"],
      customStyle: { transform: "rotate(-10deg)" },
    },
    {
      name: CityName.LONDON,
      emojis: ["⚽️", "🏛", "🇬🇧", "🖼", "🏟"],
      customStyle: { transform: "rotate(5deg) translateY(-20px)" },
    },
    {
      name: CityName.SAN_FRANCISCO,
      emojis: ["🌁", "🇺🇸", "📱", "💰", "🏀"],
      customStyle: { transform: "rotate(-10deg)" },
    },
  ];

  const selection = cities.find(({ name }) => name === currSelection);

  return (
    <div className={styles.root} ref={elementRef}>
      {cities.map(({ name, customStyle }) => (
        <motion.div
          key={name}
          className={styles.cityName}
          whileHover={{
            scale: 1.2,
            color: "#000",
            ...(customStyle as any),
            fontWeight: 900,
          }}
          style={customStyle}
          onMouseEnter={() => {
            setCurrSelection(name);
            console.log("here");
          }}
          onMouseLeave={() => setCurrSelection(null)}
        >
          {name}
        </motion.div>
      ))}
      {selection &&
        selection.emojis.map((emoji) => {
          const ranX = random(0, bounds.width! - 100);
          const ranY = random(0, bounds.height! - 100);
          const scale = random(1, 3);

          return (
            <AnimatePresence key={emoji}>
              <motion.div
                key={emoji}
                className={styles.icon}
                initial={{ left: ranX, top: ranY, scale: 0, opacity: 0 }}
                animate={{ left: ranX, top: ranY, scale, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                {emoji}
              </motion.div>
            </AnimatePresence>
          );
        })}
    </div>
  );
}
