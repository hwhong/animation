import React, { useEffect, useRef, useState } from "react";
import styles from "./spotify-slide.module.css";

export function SpotifySlide() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [delta, setDelta] = useState(0);
  const rootRef = useRef(null);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMouseDown) {
      setDelta(e.clientX - startX);
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMouseDown(false);
    setDelta(0);
  };

  useEffect(() => {
    if (isMouseDown) {
      const unregisterMouseEvent = () => {
        setIsMouseDown(false);
        setDelta(0);
      };
      window.addEventListener("mouseup", unregisterMouseEvent);
    }
  });

  const calculateOpacity = (): number => {
    const elem = rootRef.current as any;
    if (elem) {
      const width = elem.clientWidth;
      return delta / width;
    }
    return 0;
  };

  return (
    <div
      ref={rootRef}
      className={styles.root}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div
        className={styles.subComp}
        style={{ width: `${delta}px`, opacity: calculateOpacity() }}
      />
      <div
        className={styles.mainComp}
        style={{ right: `${Math.max(-delta, -320)}px` }}
      >
        <div className={styles.albumCover} />
        <div className={styles.songMeta}>
          <div className={styles.name}>{"Slide to Queue Song -->"}</div>
          <div className={styles.artist}>
            <div className={styles.icon}></div>
            Spotify
          </div>
        </div>
      </div>
    </div>
  );
}
