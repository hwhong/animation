import React, { useEffect, useState } from "react";
import { Toast } from "./toast";

interface ToastRootProps {
  children: (dispatchToast: () => void) => React.ReactNode;
  text: string;
}

export function ToastRoot({ children, text }: ToastRootProps) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(false);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {children(() => setIsOpen(true))}
      {isOpen && <Toast isActive={isOpen}>{text}</Toast>}
    </>
  );
}
