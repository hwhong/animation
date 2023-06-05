import React, { useState } from "react";
import styles from "./fade-transition-demo.module.css";
import { FadeTransition } from "./fade-transition";

export function FadeTransitionDemo() {
  const [isPage1Visible, setIsPage1Visible] = useState(true);

  const onClick = () => {
    setIsPage1Visible(false);
  };

  return (
    <div className={styles.root}>
      <div>
        <FadeTransition isVisible={isPage1Visible}>
          <Page title="Page 1" onClick={onClick} />
        </FadeTransition>
      </div>
      <div>
        <FadeTransition isVisible={!isPage1Visible}>
          <Page title="Page 2" onClick={() => setIsPage1Visible(true)} />
        </FadeTransition>
      </div>
    </div>
  );
}

interface PageProps {
  title: string;
  onClick: () => void;
}

function Page({ title, onClick }: PageProps) {
  return (
    <div className={styles.pageRoot}>
      <div className={styles.header} onClick={onClick}>
        {title}
      </div>
      <div className={styles.grid}>
        <div className={styles.item} onClick={onClick} />
        <div className={styles.item} onClick={onClick} />
        <div className={styles.item} onClick={onClick} />
        <div className={styles.item} onClick={onClick} />
        <div className={styles.item} onClick={onClick} />
        <div className={styles.item} onClick={onClick} />
      </div>
    </div>
  );
}
