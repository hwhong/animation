import { useRef } from "react";
import styles from "./scroll-zoom.module.css";

export function ScrollZoom() {
  const zoomRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.root}
      ref={rootRef}
      onScroll={(e) => {
        const height = rootRef.current?.clientHeight;
        const scrollTop = rootRef.current?.scrollTop;

        if (height) {
          const start = (100 * height) / 100;
          const stop = (200 * height) / 100;

          if (scrollTop && scrollTop > start && scrollTop < stop) {
            const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
            const elementStyle = zoomRef.current?.style;
            // Going from original (2.2) to normal (1)
            elementStyle!.transform = `scale(${scale})`;
          }
        }
      }}
    >
      <section className={styles.top} />
      <section className={styles.wrap}>
        <div className={styles.zoom} ref={zoomRef} />
      </section>
      <section className={styles.bottom} />
    </div>
  );
}
