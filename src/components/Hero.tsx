"use client";

import { motion, Variants } from "framer-motion";
import { GrainyBackground } from "@/components/GrainyBackground";
import { useTranslations } from "next-intl";
import { Montserrat } from "next/font/google";
import { useIsMobile } from "@/hooks/use-is-mobile";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Home() {
  const t = useTranslations("HeroSection");
  const isMobile = useIsMobile();

  return (
    <main className="relative flex min-h-[80svh] w-full items-center justify-center overflow-hidden md:min-h-screen">
      <GrainyBackground />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-4 text-center md:px-6"
      >
        <motion.div variants={itemVariants} className="mt-40 mb-6 md:mb-8">
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/5 px-6 py-2 font-mono text-[10px] font-bold tracking-[0.2em] text-cyan-400/80 uppercase md:px-12 md:py-3 md:text-[14px] md:tracking-[0.5em]">
            ● NEXT-GEN DIGITAL SOLUTIONS
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="flex flex-col items-center leading-[0.9] text-white"
        >
          <span
            className={`${montserrat.className} text-5xl font-semibold antialiased drop-shadow-[0_0_30px_rgba(34,211,238,0.25)] sm:text-7xl md:text-8xl lg:text-[10vw]`}
          >
            FOURLANTIS
          </span>

          <span
            className={`${montserrat.className} mt-4 block text-xl font-light tracking-tight text-white/20 uppercase italic sm:text-3xl md:text-5xl lg:text-[4vw]`}
          >
            ULTIMATE SOFTWARE QUALITY.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-[280px] text-base leading-relaxed font-light text-slate-400 sm:max-w-md sm:text-lg md:max-w-2xl md:text-xl"
        >
          Dijital süreçleri{" "}
          <span className="font-medium text-cyan-400/80">
            güçlü ve sürdürülebilir{" "}
          </span>{" "}
          yazılımlarla dönüştürüyoruz.
        </motion.p>

        <motion.div variants={itemVariants} className="my-10 md:my-14">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34,211,238,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/5 md:px-10 md:py-5 md:text-xs md:tracking-[0.3em]"
          >
            <span className="relative z-10">PROJELERİ KEŞFET</span>
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-500 group-hover:rotate-45 group-hover:bg-cyan-400 group-hover:text-black md:h-8 md:w-8">
              →
            </span>
          </motion.button>
        </motion.div>
      </motion.section>

      {!isMobile && (
        <div className="pointer-events-none absolute -right-10 -bottom-10 opacity-[0.02] select-none md:-right-20 md:-bottom-20">
          <h1 className="text-[60vw] leading-none font-black text-cyan-400 md:text-[40vw]">
            F
          </h1>
        </div>
      )}
    </main>
  );
}
