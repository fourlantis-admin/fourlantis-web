"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  const REVIEWS = [
    {
      id: 1,
      role: t("role1") || "CEO @ TechStart",
      comment:
        t("comment1") ||
        "Vizyonumuzu gerçeğe dönüştürme hızları inanılmazdı. Sadece kod değil, strateji de üretiyorlar.",
      initial: "A",
    },
    {
      id: 2,
      role: t("role2") || "Product Manager",
      comment:
        t("comment2") ||
        "Kullanıcı psikolojisine bu kadar hakim bir ekiple çalışmak projeyi bambaşka bir seviyeye taşıdı.",
      initial: "B",
    },
    {
      id: 3,
      role: t("role3") || "Founder",
      comment:
        t("comment3") ||
        "Minimalist ama bir o kadar da güçlü. Her detayda kaliteyi hissedebiliyorsunuz.",
      initial: "C",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-transparent py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-4 block font-mono text-[10px] tracking-[0.5em] text-indigo-500 uppercase"
          >
            // SOCIAL PROOF
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tighter text-white md:text-7xl"
          >
            SÖZ{" "}
            <span className="font-light text-white/20 italic">ONLARDA.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.21, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group relative rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-3xl transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05]"
            >
              <div className="absolute -top-4 -left-2 font-serif text-[120px] leading-none text-indigo-500/10 select-none">
                “
              </div>

              <div className="relative z-10">
                <p className="mb-12 text-xl leading-relaxed font-light text-white/70 italic">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-[1px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#080808] text-sm font-bold text-white">
                      {review.initial}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold tracking-tight text-white">
                      Client Name
                    </p>
                    <p className="font-mono text-[10px] tracking-widest text-indigo-500/60 uppercase">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
    </section>
  );
}
