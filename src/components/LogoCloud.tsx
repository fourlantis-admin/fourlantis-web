"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const LOGOS = [
  "TechStart",
  "GlobalCorp",
  "NexusAI",
  "Starlight",
  "FinEdge",
  "Logix",
];

export default function LogoCloud() {
  const t = useTranslations("LogoCloud");

  return (
    <section className="relative overflow-hidden bg-transparent py-8 md:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />

      <div className="container mx-auto mb-20 px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-medium tracking-[0.5em] text-cyan-500/40 uppercase"
        >
          {t("title") || "TRUSTED BY INDUSTRY LEADERS"}
        </motion.p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex flex-none transform-gpu items-center gap-20 pr-20 will-change-transform md:gap-40 md:pr-40"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <span
              key={index}
              className="cursor-default text-3xl font-semibold tracking-tighter text-white/10 antialiased transition-all duration-700 select-none hover:text-cyan-400/60 md:text-5xl"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
