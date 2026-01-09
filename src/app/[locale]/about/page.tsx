"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Target, Users, Zap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const stats = [
    { label: "Deneyim", value: "2+" },
    { label: "Proje", value: "15+" },
    { label: "Teknoloji", value: "12+" },
    { label: "Mutlu Müşteri", value: "10+" },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-cyan-400" />,
      title: "Vizyonumuz",
      desc: "Karmaşık yazılım süreçlerini, en sade ve kullanıcı dostu deneyimlere dönüştürmek.",
    },
    {
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
      title: "Hız & Performans",
      desc: "Sadece çalışan değil, milisaniyeler içinde tepki veren ultra hızlı sistemler inşa ediyoruz.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
      title: "Güvenirlik",
      desc: "Sürdürülebilir ve güvenli kod mimarisi ile projelerinizin geleceğini garanti altına alıyoruz.",
    },
  ];

  return (
    <main className="relative z-10 min-h-screen px-6 pt-40 pb-32 text-white selection:bg-cyan-500/30">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-5%] left-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
        <div className="absolute right-[-5%] bottom-[20%] h-[40%] w-[30%] rounded-full bg-indigo-500/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto">
        <section className="mb-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-5xl leading-[0.85] font-semibold tracking-tighter antialiased sm:text-7xl md:text-8xl lg:text-[10vw]"
          >
            GELECEĞİ <br className="hidden sm:block" />{" "}
            <span className="font-light text-white/20 italic">KODLUYORUZ.</span>
          </motion.h1>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl leading-relaxed font-light text-slate-400 md:text-3xl lg:col-span-7"
            >
              Fourlantis, bir yazılım ajansından daha fazlasıdır. Biz, dijital
              dünyada
              <span className="font-medium text-white">
                {" "}
                kusursuzluğu arayan
              </span>
              , modern web ve mobil mimarileri sanatla birleştiren bir
              mühendislik ekibiyiz.
            </motion.p>

            <div className="grid grid-cols-2 gap-8 border-l border-white/5 lg:col-span-5 lg:grid-cols-1 lg:pl-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="mb-1 text-3xl font-bold text-cyan-400 md:text-5xl">
                    {stat.value}
                  </h4>
                  <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-60 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-md transition-all duration-500 hover:border-cyan-500/30"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 transition-transform group-hover:scale-110">
                {value.icon}
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                {value.title}
              </h3>
              <p className="leading-relaxed font-light text-slate-400">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </section>

        <section className="mx-auto mt-60 max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12 text-4xl font-semibold tracking-tighter md:text-6xl lg:text-7xl"
          >
            "Yazılım, bir iş değil; bir{" "}
            <span className="text-cyan-500 italic">dijital zanaat</span>{" "}
            meselesidir."
          </motion.h2>
          <div className="mx-auto h-px w-24 bg-cyan-500" />
        </section>
      </div>
    </main>
  );
}
