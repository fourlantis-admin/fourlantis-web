"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, .cursor-pointer",
      );

      if (target) {
        const text = target.getAttribute("data-cursor");
        setCursorText(text || "VIEW");
      } else {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    // window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      //   window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: x,
        top: y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: cursorText ? 64 : 32,
        height: cursorText ? 64 : 32,
        backgroundColor: cursorText
          ? "rgba(2, 4, 10, 0.9)"
          : "rgba(2, 4, 10, 0)",
      }}
      transition={{ type: "spring", stiffness: 1000, damping: 60 }}
      className="pointer-events-none fixed z-[9999] hidden items-center justify-center rounded-full border border-cyan-500/20 backdrop-blur-[2px] md:flex"
    >
      <div
        className={`relative h-full w-full transition-all duration-300 ${cursorText ? "scale-75 opacity-20" : "scale-100 opacity-100"}`}
      >
        <Image
          src="/Fourlantıs2.png"
          alt="cursor"
          fill
          className="object-contain p-1.5"
          priority
        />
      </div>

      <AnimatePresence>
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute text-[11px] font-bold tracking-[0.2em] text-cyan-400 uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
