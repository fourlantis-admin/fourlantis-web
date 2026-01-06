"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const t = useTranslations("CTASection");
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-transparent px-6 py-40 text-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[180px]" />
        <div className="absolute right-1/4 -bottom-20 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.21, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8 block font-mono text-[10px] tracking-[0.5em] text-indigo-500 uppercase"
        ></motion.span>

        <motion.h2
          className="mb-10 text-6xl leading-[0.85] font-black tracking-tighter text-white md:text-8xl lg:text-9xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {t("title")
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                className={`mr-[0.25em] inline-block ${i === 1 ? "font-light text-white/20 italic" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {word}
              </motion.span>
            ))}
        </motion.h2>

        <motion.p
          className="mx-auto mb-16 max-w-xl text-lg leading-relaxed font-light text-white/40 md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="inline-block"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 px-12 py-6 text-sm font-bold tracking-[0.2em] text-white transition-all hover:border-transparent"
          >
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-black">
              {t("button") || "PROJENİZİ BAŞLATIN"}
              <span className="text-xl transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </span>

            <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0" />
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
