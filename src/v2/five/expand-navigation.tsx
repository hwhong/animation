import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./expand-navigation.module.css";
import useMeasure from "react-use-measure";

interface TabContent {
  tabName: string;
  content: React.ReactNode;
}

export function ExpandNavigation() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [ref, bounds] = useMeasure();
  const [rootRef, rootBounds] = useMeasure();
  const tabContent: TabContent[] = [
    { tabName: "London", content: <London /> },
    { tabName: "Barcelona", content: <></> },
    { tabName: "Seoul", content: <></> },
    { tabName: "Taipei", content: <></> },
    { tabName: "New York", content: <NewYork /> },
  ];

  return (
    <AnimatePresence initial={false}>
      <motion.div
        ref={rootRef}
        className={styles.root}
        animate={{ height: bounds.height }}
      >
        <div
          ref={ref}
          className={styles.wrapper}
          onMouseLeave={() => setHoverIdx(null)}
        >
          <ul className={styles.list}>
            {tabContent.map(({ tabName }, i) => (
              <motion.li key={tabName} className={styles.tabItem}>
                {/** Wrap text around span avoid doom-flickers */}
                <span onMouseOver={() => setHoverIdx(i)}>{tabName}</span>
              </motion.li>
            ))}
          </ul>
          {hoverIdx !== null && (
            <AnimatePresence>
              <motion.div
                className={styles.contentWrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                onMouseEnter={() => setHoverIdx(hoverIdx)}
                onMouseLeave={() => setHoverIdx(null)}
              >
                {tabContent[hoverIdx].content}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function NewYork() {
  return (
    <div className={styles.demoRoot}>
      <div className={styles.demoCol}>
        <div>East Village</div>
        <div>Central Park</div>
        <div>Greenwich Village</div>
      </div>
      <div className={styles.block} />
      <div className={styles.block} />
    </div>
  );
}

function London() {
  return (
    <div className={styles.demoRoot}>
      <div className={styles.demoCol}>
        <div>Soho</div>
        <div>Totteham</div>
        <div>London Eye</div>
      </div>
      <div className={styles.block} />
      <div className={styles.block} />
    </div>
  );
}
