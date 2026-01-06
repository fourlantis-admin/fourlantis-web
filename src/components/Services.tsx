"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface HighlightTextProps {
  text: string;
  progress?: MotionValue<number>;
}

const HighlightText = ({
  text,
  progress: externalProgress,
}: HighlightTextProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const effectiveProgress = externalProgress || internalProgress;
  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="flex flex-wrap gap-x-2 gap-y-1 text-2xl leading-snug font-light text-white/20 md:text-4xl"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(effectiveProgress, [start, end], [0.2, 1]);

        return (
          <motion.span key={i} style={{ opacity }} className="text-white">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

interface ServiceType {
  key: string;
  title: string;
  desc: string;
}

interface ServiceCardProps {
  service: ServiceType;
  index: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
}

const ServiceCard = ({
  service,
  index,
  range,
  targetScale,
  progress,
}: ServiceCardProps) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex h-[80vh] items-center justify-center lg:h-screen"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${index * 30}px)`,
        }}
        className="relative flex h-[50vh] w-[95%] max-w-xl origin-top flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808]/40 p-8 backdrop-blur-2xl md:w-full md:p-12 lg:h-[480px]"
      >
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex-1">
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-xs text-indigo-500">
                0{index + 1}
              </span>
              <div className="h-px w-8 bg-indigo-500/30" />
            </div>

            <h3 className="mb-6 text-3xl font-bold tracking-tighter text-white md:text-4xl">
              {service.title}
            </h3>

            <p className="line-clamp-4 text-base leading-relaxed text-white/50 md:text-lg">
              {service.desc}
            </p>
          </div>

          {/* <div className="group mt-auto flex cursor-pointer items-center gap-3 pt-6 text-xs font-bold tracking-[0.2em] text-white uppercase">
            <span>KEŞFET</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all group-hover:bg-white group-hover:text-black">
              →
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  const t = useTranslations("Services");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const services = [
    {
      key: "web",
      title: t("webTitle"),
      desc:
        t("webDesc")
    },
    {
      key: "mobile",
      title: t("mobileTitle"),
      desc:
        t("mobileDesc")
    },
    {
      key: "ui",
      title: t("uiTitle"),
      desc:
        t("uiDesc")
    },
    {
      key: "consulting",
      title: t("consultingTitle") || "Tech Strategy",
      desc:
        t("consultingDesc")
    },
  ];

  return (
    <section className="relative bg-transparent text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div
        ref={containerRef}
        className="container mx-auto flex flex-col gap-8 px-6 lg:flex-row lg:gap-20"
      >
        <div className="relative z-20 flex w-full flex-col justify-center py-20 lg:sticky lg:top-0 lg:h-screen lg:w-5/12">
          <div className="max-w-md">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-6 block font-mono text-[10px] tracking-[0.5em] text-indigo-500 uppercase"
            >
              // {t("subtitle")}
            </motion.span>

            <h2 className="mb-12 text-5xl font-bold tracking-tighter md:text-6xl">
              {t("title")}
            </h2>

            <div className="mb-12">
              <div className="lg:hidden">
                <HighlightText
                  text={
                    t("longDescription")
                  }
                />
              </div>
              <div className="hidden lg:block">
                <HighlightText
                  text={
                    t("longDescription")
                  }
                  progress={scrollYProgress}
                />
              </div>
            </div>

            {/* <button className="group relative hidden items-center gap-4 text-xs font-bold tracking-[0.2em] text-white lg:flex">
              <span className="relative">
                TÜM HİZMETLER
                <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-white/20 transition-all group-hover:bg-indigo-500" />
              </span>
            </button> */}
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          {services.map((service, index) => {
            const targetScale = 1 - (services.length - index) * 0.04;
            return (
              <ServiceCard
                key={service.key}
                index={index}
                service={service}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
