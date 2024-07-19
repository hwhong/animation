import React, { useRef, useState } from "react";
import styles from "./input.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

export function Input() {
  const [isInputActive, setIsInputActive] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef(null);
  useOnClickOutside(ref, (e) => setIsInputActive(false));

  const onChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputActive(true);
    setValue(currentTarget.value);
  };

  const suggestions = [
    "Tokyo",
    "Delhi",
    "Shanghai",
    "São Paulo",
    "Mexico City",
    "Cairo",
    "Mumbai",
    "Beijing",
    "Dhaka",
    "Osaka",
    "New York",
    "Karachi",
    "Buenos Aires",
    "Chongqing",
    "Istanbul",
    "Kolkata",
    "Manila",
    "Lagos",
    "Rio de Janeiro",
    "Tianjin",
    "Kinshasa",
    "Guangzhou",
    "Los Angeles",
    "Moscow",
    "Shenzhen",
    "Lahore",
    "Bangalore",
    "Paris",
    "Bogotá",
    "Jakarta",
    "Chennai",
    "Lima",
    "Bangkok",
    "Seoul",
    "Nagoya",
    "Hyderabad",
    "London",
    "Tehran",
    "Chicago",
    "Chengdu",
    "Nanjing",
    "Wuhan",
    "Luanda",
    "Ahmedabad",
    "Kuala Lumpur",
    "Xi'an",
    "Hong Kong",
    "Dongguan",
    "Hangzhou",
    "Foshan",
    "Shenyang",
    "Riyadh",
    "Baghdad",
    "Santiago",
    "Surat",
    "Madrid",
    "Suzhou",
    "Pune",
    "Harbin",
    "Houston",
    "Dallas",
    "Toronto",
    "Miami",
    "Belo Horizonte",
    "Singapore",
    "Philadelphia",
    "Atlanta",
    "Fukuoka",
    "Khartoum",
    "Barcelona",
    "Johannesburg",
    "Qingdao",
    "Dalian",
    "Yangon",
    "Alexandria",
    "Jinan",
    "Guadalajara",
  ];

  return (
    <div className={styles.root}>
      {isInputActive ? (
        <AnimatePresence>
          <motion.div
            className={styles.activeRoot}
            initial={{ padding: 0, backgroundColor: "#ffffff" }}
            animate={{
              backgroundColor: "#f4f4f4",
            }}
            exit={{ padding: 0, backgroundColor: "#ffffff" }}
          >
            <motion.input
              ref={ref}
              className={styles.input}
              layoutId="input"
              value={value}
              onChange={onChange}
              autoFocus
            ></motion.input>
            <motion.div className={styles.suggestions}>
              {suggestions
                .filter((s) =>
                  s.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                )
                .map((s) => (
                  <motion.div
                    key={s}
                    className={styles.listItem}
                    whileHover={{ backgroundColor: "#d4d4d4" }}
                  >
                    {s}
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.input
          className={styles.input}
          layoutId="input"
          value={value}
          autoFocus
          onChange={onChange}
        ></motion.input>
      )}
    </div>
  );
}
