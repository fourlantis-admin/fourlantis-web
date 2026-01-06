"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-[100] w-full px-6 py-6 transition-all duration-500 ${
        isScrolled ? "bg-black/20 py-4 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="group cursor-pointer">
          <span className="text-xl font-bold tracking-tighter text-white">
            Fourlantis
          </span>
          <div className="h-[1px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
        </div>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
              className="relative text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-white"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <button className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] text-white transition-all hover:border-white/40">
            <span className="relative z-10 transition-colors group-hover:text-black">
              {t("cta")}
            </span>
            <div className="ease-[0.76, 0, 0.24, 1] absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
