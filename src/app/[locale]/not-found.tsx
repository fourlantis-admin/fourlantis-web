"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { GrainyBackground } from "@/components/GrainyBackground";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  const glitchVariants = {
    animate: {
      x: [-2, 2, -1, 1, 0],
      y: [1, -1, 2, -2, 0],
      filter: [
        "hue-rotate(0deg) blur(0px)",
        "hue-rotate(90deg) blur(1px)",
        "hue-rotate(180deg) blur(0px)",
        "hue-rotate(270deg) blur(2px)",
        "hue-rotate(360deg) blur(0px)",
      ],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
  };

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030303]">
      <GrainyBackground />

      <div className="relative z-10 flex flex-col items-center select-none">
        <motion.h1
          variants={glitchVariants}
          whileHover="animate"
          className="text-[25vw] leading-none font-black tracking-tighter text-white transition-all md:text-[20vw]"
          style={{
            textShadow:
              "0.05em 0 0 rgba(255,0,0,0.75), -0.025em -0.05em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75)",
          }}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="font-mono text-xl tracking-[0.3em] text-indigo-500 uppercase md:text-2xl">
            Sistem Hatası: Yol Bulunamadı
          </h2>
          <p className="mt-4 max-w-md px-6 text-sm text-white/40 md:text-base">
            Görünüşe göre aradığınız sayfa dijital boşluğun derinliklerinde
            kaybolmuş. Belki de hiç var olmamıştı.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <Link href="/">
            <button className="group relative overflow-hidden rounded-full border border-white/10 px-10 py-4 text-xs font-bold tracking-[0.3em] text-white transition-all hover:border-white">
              <span className="relative z-10">GÜVENLİ BÖLGEYE DÖN</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
              <style jsx>{`
                button:hover span {
                  color: black;
                  transition: color 0.5s;
                }
              `}</style>
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 hidden space-y-2 font-mono text-[10px] text-white/10 md:block">
        <p>ERR_PAGE_NOT_FOUND</p>
        <p>LOCATION: unknown_sector_7</p>
        <p>STATUS: disconnected</p>
      </div>

      <div className="absolute top-10 right-10 hidden font-mono text-[10px] text-white/10 md:block">
        <p>SYSTEM_RECOVERY: 0%</p>
      </div>
    </main>
  );
}
