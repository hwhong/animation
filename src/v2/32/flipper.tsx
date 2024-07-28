import React, { useEffect, useState } from "react";

export function Flipper() {
  return <Flip alphabet="a"></Flip>;
}

interface FlipInterface {
  alphabet: string;
}

const ALPHABETS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function Flip({ alphabet }: FlipInterface) {
  const [counter, setCounter] = useState(0);
  const [currChar, setCurrChar] = useState<string>("A");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((t) => {
        if (t >= 10) {
          clearInterval(intervalId);
        }

        setCurrChar(ALPHABETS[t]);

        return t < 10 ? t + 1 : t;
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return <div key={currChar}>{currChar}</div>;
}
