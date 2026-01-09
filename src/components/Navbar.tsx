"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("services"), href: "/services" },
    { name: t("projects"), href: "/projects" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 z-[100] w-full px-6 py-6 transition-all duration-500 ${
          isScrolled || isOpen
            ? "bg-black/20 py-4 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            aria-label="Fourlantis Home"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/Fourlantıs2.png"
              alt="Fourlantis Logo"
              width={32}
              height={32}
              className="object-contain transition-transform duration-300 hover:scale-110"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className="group relative text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase antialiased transition-all duration-300 hover:text-cyan-400"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-1 left-0 h-[px] w-0 bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="group relative inline-block overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] text-white transition-all hover:border-white/40"
                // data-cursor="WRITE"
              >
                {/* Buton Metni */}
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  {t("cta")}
                </span>

                <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0" />
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 bg-white transition-transform"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-6 bg-white"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 bg-white transition-transform"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] flex flex-col bg-[#02040a]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <Link
                    href={link.href as any}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-semibold tracking-tighter text-white transition-colors hover:text-cyan-400 active:text-cyan-500"
                  >
                    <span className="mr-4 font-mono text-xs text-cyan-500/40">
                      0{index + 1}
                    </span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-10 py-4 text-xs font-bold tracking-widest text-cyan-400 uppercase"
                >
                  {t("cta")}
                </Link>
              </motion.div>
            </div>

            <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 opacity-5 select-none">
              <h2 className="text-8xl font-black text-white">4LANTIS</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
