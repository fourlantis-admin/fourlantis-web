"use client";

import { motion, Variants } from "framer-motion";
import { GrainyBackground } from "@/components/GrainyBackground";
import { useTranslations } from "next-intl";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Home() {
  const t = useTranslations("HeroSection");
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <GrainyBackground />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mt-16 mb-8">
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 font-mono text-[10px] font-medium tracking-[0.5em] text-cyan-400/80 uppercase">
            ● NEXT-GEN DIGITAL SOLUTIONS
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl leading-[0.85] font-black tracking-tighter text-white md:text-8xl lg:text-[10vw]"
        >
          <span className="block drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            FOURLANTIS
          </span>
          <span className="mt-2 block font-serif font-light text-white/20 italic">
            ULTIMATE SOPHISTICATION.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-slate-400 md:text-xl"
        >
          Karmaşıklığı kucaklıyor, onu logonuzdaki gibi{" "}
          <span className="font-medium text-cyan-400/80">
            keskin ve etkileyici
          </span>{" "}
          dijital deneyimlere dönüştürüyoruz.
        </motion.p>

        <motion.div variants={itemVariants} className="my-12">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34,211,238,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 text-xs font-bold tracking-[0.3em] text-white backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/5"
          >
            <span className="relative z-10">PROJELERİ KEŞFET</span>
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-500 group-hover:rotate-45 group-hover:bg-cyan-400 group-hover:text-black">
              →
            </span>
          </motion.button>
        </motion.div>
      </motion.section>

      <div className="pointer-events-none absolute -right-20 -bottom-20 opacity-[0.03] select-none">
        <h1 className="text-[40vw] font-black text-cyan-400">F</h1>
      </div>
    </main>
  );
}
