"use client";
import { motion } from "framer-motion";

export const GrainyBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#02040a]">
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[5%] h-[600px] w-[600px] transform-gpu rounded-full bg-cyan-500/10 blur-[80px] will-change-transform"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-[0%] bottom-[0%] h-[500px] w-[500px] transform-gpu rounded-full bg-blue-600/10 blur-[80px] will-change-transform"
      />

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-indigo-500/[0.02] blur-[100px]" />

      <div
        className="pointer-events-none absolute inset-0 transform-gpu opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
};
