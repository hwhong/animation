import classNames from "classnames";
import styles from "./button-group.module.css";
import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";

interface ButtonGroupProps {
  groupContents: string[];
  selectedIndex?: number;
}

export function ButtonGroup({
  groupContents,
  selectedIndex,
}: ButtonGroupProps) {
  const [activeIndex, setActiveIndex] = useState(selectedIndex ?? 0);
  const controls = useAnimationControls();

  const onMouseEnter = async (e: any) => {
    await controls.start({ opacity: 1, transition: { duration: 0.001 } });
    await controls.start({
      width: e.target.offsetWidth,
      left: `${e.target.offsetLeft}px`,
    });
  };

  const onMouseLeave = () => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.001 },
    });
  };

  return (
    <ul className={styles.root}>
      <motion.div
        animate={controls}
        style={{
          position: "absolute",
          height: "40px",
          backgroundColor: "#EDEDED",
          borderRadius: "20px",
        }}
      />
      {groupContents.map((content, i) => (
        <li key={content}>
          <button
            className={classNames(styles.button, {
              [styles.active]: i === activeIndex,
            })}
            onClick={() => setActiveIndex(i)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {content}
          </button>
        </li>
      ))}
    </ul>
  );
}

// import classNames from "classnames";
// import styles from "./button-group.module.css";
// import { motion, useAnimationControls } from "framer-motion";
// import React, { useState } from "react";

// interface ButtonGroupProps {
//   groupContents: string[];
//   selectedIndex?: number;
// }

// export function ButtonGroup({
//   groupContents,
//   selectedIndex,
// }: ButtonGroupProps) {
//   const [activeIndex, setActiveIndex] = useState(selectedIndex ?? 0);
//   const [hIdx, setHIdx] = useState<number | null>(null);
//   const [dimension, setDimension] = useState<{ width: number; left: number }>({
//     width: 0,
//     left: 0,
//   });

//   const onMouseEnter = async (e: any, idx: number) => {
//     const { offsetLeft, offsetWidth } = e.target;
//     setDimension({ width: offsetWidth, left: offsetLeft });
//     setHIdx(idx);
//   };

//   const onMouseLeave = () => setHIdx(null);

//   return (
//     <ul className={styles.root}>
//       {groupContents.map((content, i) => (
//         <motion.li
//           onClick={() => setActiveIndex(i)}
//           onMouseEnter={(e) => onMouseEnter(e, i)}
//           onMouseLeave={onMouseLeave}
//           key={content}
//         >
//           {hIdx === i && activeIndex !== hIdx && (
//             <motion.div
//               layoutId="background"
//               className={styles.background}
//               transition={{ duration: 0.4 }}
//               style={{ width: dimension.width, left: dimension.left }}
//             />
//           )}
//           <button
//             className={classNames(styles.button, {
//               [styles.active]: i === activeIndex,
//             })}
//           >
//             {content}
//           </button>
//         </motion.li>
//       ))}
//     </ul>
//   );
// }
