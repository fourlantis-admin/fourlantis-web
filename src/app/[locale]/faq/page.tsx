"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import { Link } from "@/i18n/routing";

const FAQItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-8 text-left transition-all hover:text-cyan-400"
      >
        <div className="flex items-center gap-6 md:gap-10">
          <span className="font-mono text-xs text-cyan-500/40">
            0{index + 1}
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-400 md:text-2xl lg:text-3xl">
            {question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="ml-4 flex-shrink-0 text-cyan-500"
        >
          <Plus className="h-6 w-6 md:h-8 md:w-8" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-8 pl-16 text-base leading-relaxed font-light text-slate-400 md:pl-24 md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQPage() {
  const t = useTranslations("FAQPage");

  const faqs = [
    {
      q: "Hangi teknolojileri kullanıyorsunuz?",
      a: "Projelerimizde modern, ölçeklenebilir ve performans odaklı Next.js, React, TypeScript ve Tailwind CSS ekosistemini kullanıyoruz.",
    },
    {
      q: "Bir projenin tamamlanma süresi nedir?",
      a: "Projenin kapsamına bağlı olarak genellikle 4 ile 12 hafta arasında değişmektedir. Her aşamada sizi bilgilendirerek ilerliyoruz.",
    },
    {
      q: "Tasarım süreçleriniz nasıl işliyor?",
      a: "Önce markanızı ve hedeflerinizi analiz ediyoruz. Ardından Figma üzerinde prototipler hazırlayıp onayınızdan sonra geliştirmeye geçiyoruz.",
    },
    {
      q: "Satış sonrası destek veriyor musunuz?",
      a: "Evet, yayına alım sonrasında teknik bakım, güvenlik güncellemeleri ve performans optimizasyonu için yanınızdayız.",
    },
    {
      q: "Mobil uygulama yapıyor musunuz?",
      a: "Evet, React Native teknolojisi ile hem iOS hem Android platformlarında yüksek performanslı native uygulamalar geliştiriyoruz.",
    },
  ];

  return (
    <main className="relative z-10 min-h-screen bg-transparent px-6 pt-40 pb-32 text-white selection:bg-cyan-500/30">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[20%] right-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto">
        <header className="mb-24 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-6xl font-semibold tracking-tighter antialiased md:text-8xl lg:text-9xl"
          >
            S.S.S<span className="text-cyan-500">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl leading-relaxed font-light text-slate-400 md:text-2xl"
          >
            Aklınıza takılan sorulara hızlı yanıtlar bulun. Daha fazlası için
            bizimle iletişime geçebilirsiniz.
          </motion.p>
        </header>

        <div className="max-w-5xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.q}
              answer={faq.a}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 rounded-[3rem] border border-white/5 bg-white/[0.02] p-12 text-center backdrop-blur-md"
        >
          <h2 className="mb-6 text-3xl font-semibold tracking-tighter md:text-5xl">
            Aradığınız cevabı bulamadınız mı?
          </h2>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-10 py-4 text-xs font-bold tracking-[0.2em] text-black uppercase transition-all hover:scale-105 hover:bg-cyan-400 active:scale-95"
          >
            BİZE YAZIN
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
