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
    <section className="relative overflow-hidden bg-transparent py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto mb-16 px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-medium tracking-[0.5em] text-white/30 uppercase"
        >
          {t("title") || "TRUSTED BY INDUSTRY LEADERS"}
        </motion.p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex flex-none items-center gap-16 pr-16 md:gap-32 md:pr-32"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <span
              key={index}
              className="cursor-default text-2xl font-bold tracking-tighter text-white/20 transition-all duration-500 select-none hover:scale-110 hover:text-white md:text-4xl"
            >
              {logo}
            </span>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-40 bg-gradient-to-r from-[#030303] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-40 bg-gradient-to-l from-[#030303] to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
