import Hero from "@/components/Hero/Hero";
import BestSeller from "@/components/BestSeller/BestSeller";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <BestSeller />
      <Testimonials />
      <Contact />
    </main>
  );
}
