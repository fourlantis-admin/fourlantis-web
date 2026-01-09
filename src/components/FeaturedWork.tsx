"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ParallaxImage } from "@/components/ParallaxImage";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useTranslations } from "next-intl";

const projects = [
  {
    id: 1,
    title: "Cinebond",
    category: "E-Commerce / Mobile",
    year: "2026",
    src: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=2574&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Fourlantis",
    category: "Wellness / Web App",
    year: "2026",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Örnek görsel
  },
  {
    id: 3,
    title: "Nexus Dashboard",
    category: "Fintech / SaaS",
    year: "2026",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Solana Analytics",
    category: "Web3 / Crypto",
    year: "2026",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop",
  },
];

export default function FeaturedWork() {
  const isMobile = useIsMobile();
  const t = useTranslations("FeaturedWork");

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className={`${isMobile ? "flex gap-20 pr-80" : "flex gap-12 md:gap-40"}`}
        >
          <div className="flex w-[300px] flex-col justify-center md:w-[500px]">
            <h2 className="text-5xl font-bold tracking-tighter text-white md:text-8xl">
              {t("title")}
            </h2>
            <p className="mt-8 max-w-sm text-white/40">{t("subtitle")}</p>
          </div>

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative h-[60vh] w-[80vw] md:h-[70vh] md:w-[600px] lg:w-[800px]"
            >
              <ParallaxImage
                src={project.src}
                alt={project.title}
                speed={index % 2 === 0 ? 1 : 1.2}
                aspectRatio="h-full"
                className="border border-white/10"
              />

              <div className="rounded-4x pointer-events-none absolute inset-0 flex flex-col justify-end p-8 opacity-100 transition-opacity duration-500 md:p-12">
                <h3 className="relative z-10 text-3xl font-bold tracking-tighter text-white md:text-5xl">
                  {project.title}
                </h3>
                <div className="mb-2 text-right">
                  <span className="text-sm font-light text-white/40">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="absolute top-8 right-8 flex h-12 w-12 translate-x-4 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </div>
            </motion.div>
          ))}

          {/* <div className="flex w-[300px] flex-col items-center justify-center md:w-[500px]">
            <button className="flex h-40 w-40 items-center justify-center rounded-full border border-white/10 text-xs font-bold tracking-widest text-white transition-all hover:bg-white hover:text-black">
              TÜMÜNÜ GÖR
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
