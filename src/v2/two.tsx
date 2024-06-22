import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./two.module.css";

/**
 * Define layoutId on the element that animates,
 * so that it know where to transition to between renders.
 */

export function Two() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const tabs = ["Home", "About", "Projects"];

  return (
    <div>
      <nav className={styles.tabRoot}>
        <ul className={styles.wrapper}>
          {tabs.map((tab) => {
            return (
              <div key={tab}>
                <li className={styles.tab} key={tab}>
                  <button
                    className={styles.button}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
                {selectedTab === tab && (
                  <motion.div
                    key={selectedTab}
                    layoutId="underline"
                    className={styles.highlight}
                  />
                )}
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
