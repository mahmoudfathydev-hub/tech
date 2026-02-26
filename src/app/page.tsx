import Hero from "@/components/Hero/Hero";
import BestSeller from "@/components/BestSeller/BestSeller";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Faq from "@/components/Faq/Faq";
export default function Home() {
  return (
    <main>
      <Hero />
      <BestSeller />
      <Testimonials />
      <Contact />
      <Faq />
    </main>
  );
}
