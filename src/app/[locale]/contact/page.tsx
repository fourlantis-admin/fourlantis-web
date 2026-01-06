"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Navbar />

      <section className="relative flex-grow overflow-hidden px-6 pt-32 pb-20 md:px-12">
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-20 lg:grid-cols-2">
          <FadeIn>
            <h1 className="mb-8 text-5xl leading-tight font-bold tracking-tight md:text-7xl">
              {t("title")}
            </h1>
            <p className="mb-12 max-w-lg text-xl text-slate-400">
              {t("subtitle")}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-sm font-semibold tracking-wider text-blue-500 uppercase">
                  {t("infoTitle")}
                </h3>
                <p className="cursor-pointer text-2xl font-light transition-colors hover:text-blue-400">
                  {t("email")}
                </p>
                <p className="mt-2 text-lg text-slate-500">{t("address")}</p>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-blue-500 uppercase">
                  {t("socialTitle")}
                </h3>
                <div className="flex gap-4">
                  {["Twitter", "LinkedIn", "Instagram", "GitHub"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-400 transition-all hover:bg-slate-800 hover:text-white"
                      >
                        {social}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="rounded-3xl border border-white/5 bg-slate-900/30 p-8 backdrop-blur-sm md:p-12"
          >
            <form className="space-y-12">
              <div className="group relative">
                <input
                  type="text"
                  id="name"
                  required
                  className="peer w-full border-b border-slate-700 bg-transparent py-4 text-xl text-white placeholder-transparent transition-colors outline-none focus:border-blue-500"
                  placeholder={t("nameLabel")}
                />
                <label
                  htmlFor="name"
                  className="absolute top-4 left-0 text-xl text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  {t("nameLabel")}
                </label>
              </div>

              <div className="group relative">
                <input
                  type="email"
                  id="email"
                  required
                  className="peer w-full border-b border-slate-700 bg-transparent py-4 text-xl text-white placeholder-transparent transition-colors outline-none focus:border-blue-500"
                  placeholder={t("emailLabel")}
                />
                <label
                  htmlFor="email"
                  className="absolute top-4 left-0 text-xl text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  {t("emailLabel")}
                </label>
              </div>

              <div className="group relative">
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="peer w-full resize-none border-b border-slate-700 bg-transparent py-4 text-xl text-white placeholder-transparent transition-colors outline-none focus:border-blue-500"
                  placeholder={t("messageLabel")}
                />
                <label
                  htmlFor="message"
                  className="absolute top-4 left-0 text-xl text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  {t("messageLabel")}
                </label>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="group relative inline-flex h-12 w-40 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:w-full hover:bg-slate-200"
                >
                  <span className="mr-2">{t("sendButton")}</span>
                  <span className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
