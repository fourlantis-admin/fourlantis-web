import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { GrainyBackground } from "@/components/GrainyBackground";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="mx-auto w-full bg-[#030303] px-4 text-white antialiased sm:px-6 lg:px-12">
        <NextIntlClientProvider messages={messages}>
          <GrainyBackground />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
