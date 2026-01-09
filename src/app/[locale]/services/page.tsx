"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code2, Smartphone, Palette, Zap } from "lucide-react";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      desc: "Performans odaklı, ölçeklenebilir ve modern Next.js mimarileriyle dijital varlığınızı inşa ediyoruz.",
      features: ["Next.js & React", "TypeScript", "Performance Optimization"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Solutions",
      desc: "iOS ve Android platformlarında kesintisiz kullanıcı deneyimi sunan native kalitesinde uygulamalar.",
      features: ["React Native", "Expo", "Cross-Platform"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      desc: "Sadece estetik değil, veri odaklı ve kullanıcıyı merkeze alan modern arayüz tasarımları.",
      features: ["Prototyping", "Design Systems", "User Research"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Growth Hacking",
      desc: "Yazılımınızı sadece geliştirmiyor, doğru stratejilerle Google Discover ve pazarda öne çıkarıyoruz.",
      features: ["SEO Strategies", "Conversion Rate", "Data Analytics"],
    },
  ];

  return (
    <main className="relative z-10 min-h-screen bg-transparent pt-32 text-white">
      <section className="container mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-8 text-6xl font-semibold tracking-tighter text-white antialiased md:text-8xl lg:text-9xl">
            HİZMETLER<span className="text-cyan-500">.</span>
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed font-light text-slate-400 md:text-2xl">
            Karmaşık problemleri, zarif ve performanslı yazılım çözümlerine
            dönüştürüyoruz.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-white/[0.04] md:p-12"
            >
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px] transition-colors group-hover:bg-cyan-500/10" />

              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {service.title}
                </h3>

                <p className="mb-8 text-lg leading-relaxed font-light text-slate-400">
                  {service.desc}
                </p>

                <ul className="flex flex-wrap gap-3">
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      className="rounded-full border border-white/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-white/40 uppercase"
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="mb-8 text-4xl font-semibold tracking-tighter text-white md:text-6xl">
              NASIL <br />{" "}
              <span className="font-light text-white/20 italic">
                ÇALIŞIYORUZ?
              </span>
            </h2>
          </div>
          <div className="grid w-full gap-8 md:w-1/2">
            {[
              {
                n: "01",
                t: "Keşif & Analiz",
                d: "İhtiyaçlarınızı derinlemesine analiz edip yol haritasını çıkarıyoruz.",
              },
              {
                n: "02",
                t: "Tasarım & Prototip",
                d: "Kullanıcı deneyimini en üst seviyeye çıkaracak arayüzleri kurguluyoruz.",
              },
              {
                n: "03",
                t: "Geliştirme & Test",
                d: "En güncel teknolojilerle kodluyor ve titizlikle test ediyoruz.",
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="pt-1 font-mono text-sm text-cyan-500">
                  {step.n}
                </span>
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-white">
                    {step.t}
                  </h4>
                  <p className="font-light text-slate-500">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
