import Nav from "@/components/ui/nav";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
