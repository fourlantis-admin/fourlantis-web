"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function About() {
  const t = useTranslations("About");
  const isMobile = useIsMobile();
  const containerRef = useRef(null);

  const ringColor = "#10b981";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center center"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? "85%" : "95%", "100%"],
  );
  const height = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? "auto" : "700px", isMobile ? "auto" : "600px"],
  );
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["40px", "0px"]);

  const borderOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.15)"],
  );

  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section
      ref={containerRef}
      className="flex w-full justify-center bg-[#F5F8FC] py-24"
      style={
        {
          "--ring": ringColor,
        } as React.CSSProperties
      }
    >
      <motion.div
        style={{
          width,
          height,
          borderRadius,
          borderColor: borderOpacity,
        }}
        className="relative flex items-center justify-center overflow-hidden border bg-slate-950 shadow-2xl transition-colors duration-500"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, ${ringColor} 1px, transparent 1px), linear-gradient(to bottom, ${ringColor} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div
            className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full opacity-40 mix-blend-screen blur-[100px]"
            style={{
              background: `radial-gradient(circle at top right, #334155 0%, color-mix(in oklab, var(--ring) 30%, transparent) 60%, transparent 100%)`,
            }}
          />

          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-slate-800 opacity-10 blur-[80px]" />
        </div>

        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="relative z-10 flex w-full max-w-7xl min-w-[100vw] justify-center px-4 md:min-w-0 md:px-8"
        >
          <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <motion.h2
                style={{
                  color: useTransform(
                    scrollYProgress,
                    [0.5, 1],
                    ["#94a3b8", "#ffffff"],
                  ),
                }}
                className="text-4xl leading-tight font-bold tracking-tight md:text-6xl"
              >
                {t("title")}
              </motion.h2>

              <p className="max-w-md text-lg leading-relaxed text-slate-400">
                {t("description")}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                {[
                  { val: "50+", label: t("stat1") },
                  { val: "%98", label: t("stat2") },
                  { val: "10+", label: t("stat3") },
                ].map((stat, i) => (
                  <div key={i}>
                    <h3
                      className="mb-1 text-3xl font-bold"
                      style={{ color: ringColor }}
                    >
                      {stat.val}
                    </h3>
                    <p className="font-mono text-xs tracking-wider text-slate-500 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
