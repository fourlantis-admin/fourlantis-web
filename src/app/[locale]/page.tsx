import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <FadeIn>
        <LogoCloud />
      </FadeIn>

      {/* <FadeIn delay={0.2}>
        <About />
      </FadeIn> */}

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <FeaturedWork />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <CTA />
      </FadeIn>
    </main>
  );
}
