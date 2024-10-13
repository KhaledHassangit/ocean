import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PricingSection from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className=" pt-24 lg:pt-28 antialiased">
        <Hero/>
        <Clients/>
        <Features/>
        <PricingSection/>
        <Testimonials/>
        <Contact/>
    </main>
  );
}
