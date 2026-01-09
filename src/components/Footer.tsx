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
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function Footer() {
  const t = useTranslations("Footer");
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full overflow-hidden bg-transparent py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 border-t border-white/15 pt-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16">
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
          {!isMobile && <div className="relative"></div>}
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
                <Link
                  href="/work"
                  className="transition-colors hover:text-cyan-400"
                >
                  {t("work")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-cyan-400"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-cyan-400"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-cyan-400"
                >
                  {t("faq")}
                </Link>
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
          <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase transition-colors hover:text-white">
            © {currentYear} FOURLANTIS — ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] text-white/20 uppercase">
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
