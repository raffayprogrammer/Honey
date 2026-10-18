import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import BestSelling from "@/components/BestSelling";
import HotDeals from "@/components/HotDeals";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <BestSelling />
      <HotDeals />
      <Benefits />
      <Footer />
    </main>
  );
}
