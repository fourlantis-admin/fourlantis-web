"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full overflow-hidden bg-transparent pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="pointer-events-none absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6 block font-mono text-[10px] tracking-[0.5em] text-cyan-500 uppercase"
            >
              {t("eyebrow")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[12vw] leading-[0.9] font-black tracking-tighter text-white md:text-[8vw]"
            >
              {t("headlineStrong")}
              <br />
              <span className="font-light text-white/20 italic">
                {t("headlineLight")}
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-12 py-6 text-sm font-bold tracking-[0.2em] text-white transition-all hover:border-cyan-400/50"
            >
              <span className="relative z-10 flex items-center gap-3 font-['Syne'] transition-colors duration-500 group-hover:text-black">
                {t("cta")}
                <span className="text-xl transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </span>

              <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-16 border-t border-white/5 pt-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest text-white/30 uppercase">
              {t("contact")}
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="cursor-pointer transition-colors hover:text-cyan-400">
                hello@fourlantis.com
              </li>
              <li className="cursor-pointer transition-colors hover:text-cyan-400">
                +90 (212) 555 01 99
              </li>
            </ul>
          </div>
          <div className="relative"></div>
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest text-white/30 uppercase">
              {t("social")}
            </h4>
            <div className="flex gap-4">
              {[FaXTwitter, FaInstagram, FaTiktok, FaLinkedinIn].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/50 transition-all hover:border-cyan-500 hover:text-cyan-400"
                  >
                    <Icon size={18} />
                  </motion.a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest text-white/30 uppercase">
              {t("navigation")}
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li>
                <a
                  href="/work"
                  className="transition-colors hover:text-cyan-400"
                >
                  {t("work")}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="transition-colors hover:text-cyan-400"
                >
                  {t("about")}
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="relative">
            <h4 className="mb-6 text-xs font-bold tracking-widest text-white/30 uppercase">
              Ofis
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              İstanbul, Türkiye
            </p>
          </div> */}
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase transition-colors hover:text-white">
            © {currentYear} FOURLANTIS — ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-8 font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">
            <Link
              href="/privacy"
              className="cursor-pointer transition-colors hover:text-white"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="cursor-pointer transition-colors hover:text-white"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
    </footer>
  );
}
