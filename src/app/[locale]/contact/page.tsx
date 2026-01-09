"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <main className="relative z-10 min-h-screen px-6 pt-40 pb-24 text-white selection:bg-cyan-500/30">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] h-[40%] w-[40%] rounded-full bg-cyan-500/[0.05] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] h-[30%] w-[30%] rounded-full bg-indigo-500/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="mb-10 text-5xl leading-[0.9] font-semibold tracking-tighter antialiased md:text-8xl">
                HADİ <br /> KONUŞALIM<span className="text-cyan-500">.</span>
              </h1>
              <p className="mb-16 max-w-sm text-xl leading-relaxed font-light text-slate-400">
                Yeni bir proje fikriniz mi var? Ya da sadece merhaba demek mi
                istiyorsunuz? Sizi dinlemek için buradayız.
              </p>

              <div className="space-y-10">
                <div className="group flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-cyan-400 transition-all group-hover:bg-cyan-400 group-hover:text-black">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xs font-bold tracking-widest text-white/30 uppercase">
                      E-Posta
                    </h4>
                    <p className="text-xl font-medium">hello@fourlantis.com</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-cyan-400 transition-all group-hover:bg-cyan-400 group-hover:text-black">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xs font-bold tracking-widest text-white/30 uppercase">
                      Lokasyon
                    </h4>
                    <p className="text-xl font-medium">Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="rounded-[3rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm md:p-16 lg:col-span-7"
          >
            <form className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
              <motion.div variants={itemVariants} className="group relative">
                <input
                  type="text"
                  placeholder="İsim & Soyisim"
                  className="w-full border-b border-white/10 bg-transparent py-4 text-lg font-light transition-colors placeholder:text-white/10 focus:border-cyan-400 focus:outline-none"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="group relative">
                <input
                  type="email"
                  placeholder="E-Posta Adresi"
                  className="w-full border-b border-white/10 bg-transparent py-4 text-lg font-light transition-colors placeholder:text-white/10 focus:border-cyan-400 focus:outline-none"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="group relative md:col-span-2"
              ></motion.div>

              <motion.div
                variants={itemVariants}
                className="group relative md:col-span-2"
              >
                <textarea
                  rows={4}
                  placeholder="Projenizden kısaca bahsedin..."
                  className="w-full resize-none border-b border-white/10 bg-transparent py-4 text-lg font-light transition-colors placeholder:text-white/10 focus:border-cyan-400 focus:outline-none"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="md:col-span-2">
                <button
                  type="submit"
                  className="group relative flex items-center gap-4 rounded-full bg-cyan-500 px-10 py-5 text-xs font-bold tracking-[0.2em] text-black uppercase transition-all hover:scale-105 hover:bg-white active:scale-95"
                >
                  GÖNDER
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
