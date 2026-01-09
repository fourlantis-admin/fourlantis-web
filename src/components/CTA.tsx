"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ContactCTA() {
  const t = useTranslations("Footer");

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-8 md:py-16">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
          <div className="max-w-4xl text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-5xl leading-[0.85] font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[9vw]"
            >
              {t("headlineStrong") || "BİRLİKTE"}
              <br />
              <span className="font-light text-white/20 italic">
                {t("headlineLight") || "ÜRETELİM."}
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold tracking-[0.2em] text-white transition-all hover:border-cyan-400 sm:w-auto sm:px-16 sm:py-8"
            >
              <span className="relative z-10 flex items-center gap-4 text-[14px] font-semibold uppercase antialiased transition-colors duration-500 group-hover:text-black">
                {t("cta") || "PROJENİZİ BAŞLATIN"}
                <span className="text-2xl transition-transform duration-500 group-hover:translate-x-3">
                  →
                </span>
              </span>
              <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
