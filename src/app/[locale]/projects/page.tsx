"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
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
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
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

const ProjectItem = ({ project, index, setModal }: any) => {
  return (
    <motion.div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="group relative flex w-full flex-col border-t border-white/10 py-10 transition-all duration-500 first:border-t-0 md:flex-row md:items-center md:justify-between md:py-16"
    >
      <div className="flex items-center gap-6 md:gap-12">
        <span className="font-mono text-xs text-white/20 md:text-sm">
          {project.id.toString().padStart(2, "0")}
        </span>
        <h2 className="text-4xl font-semibold tracking-tighter text-white transition-all group-hover:text-cyan-400 md:text-7xl lg:text-8xl">
          {project.title}
        </h2>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0, marginTop: 0 }}
        whileInView={{
          height: "280px",
          opacity: 1,
          marginTop: 24,
        }}
        viewport={{
          once: false,
          amount: 0.6,
        }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative w-full overflow-hidden rounded-2xl md:hidden"
      >
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="mt-6 flex items-center justify-between md:mt-0 md:flex-col md:items-end">
        <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase md:text-xs">
          {project.category}
        </span>
        <ArrowUpRight className="h-6 w-6 text-white/20 transition-all group-hover:rotate-45 group-hover:text-cyan-400 md:h-10 md:w-10" />
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");
  const [modal, setModal] = useState({ active: false, index: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative z-10 overflow-hidden bg-transparent pt-32 pb-20 text-white selection:bg-cyan-500/30"
    >
      <motion.div
        style={{ x, y }}
        initial="hidden"
        animate={modal.active ? "visible" : "hidden"}
        variants={{
          hidden: { scale: 0, opacity: 0, rotate: -5 },
          visible: { scale: 1, opacity: 1, rotate: 0 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden h-[250px] w-[320px] items-center justify-center overflow-hidden rounded-3xl bg-white/5 md:flex lg:h-[350px] lg:w-[450px]"
      >
        <div
          className="relative h-full w-full transition-transform duration-500 ease-[0.76,0,0.24,1]"
          style={{ transform: `translateY(${modal.index * -100}%)` }}
        >
          {PROJECTS.map((project) => (
            <div key={project.id} className="relative h-full w-full p-4">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="scale-110 object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <section className="relative z-10 container mx-auto px-6">
        <header className="mb-24 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-6xl font-semibold tracking-tighter antialiased md:text-8xl lg:text-9xl"
          >
            PROJELER<span className="text-cyan-500">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl leading-relaxed font-light text-slate-400 md:text-2xl"
          >
            Dijital dünyada iz bırakan, modern teknolojilerle örülmüş
            projelerimiz.
          </motion.p>
        </header>

        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={project.id}
            index={index}
            project={project}
            setModal={setModal}
          />
        ))}
      </section>
    </main>
  );
}
