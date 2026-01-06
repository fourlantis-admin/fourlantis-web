"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  speed?: number;
}

export const ParallaxImage = ({
  src,
  alt,
  className,
  aspectRatio = "aspect-[4/3]",
  speed = 1,
}: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,

    offset: ["start end", "end start"],
  });

  const yValue = 15 * speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${yValue}%`, `${yValue}%`],
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-[2rem]",
        aspectRatio,
        className,
      )}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[15%] h-[130%] w-full"
      >
        <Image
          src={src}
          fill
          alt={alt}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />
      </motion.div>
    </div>
  );
};
