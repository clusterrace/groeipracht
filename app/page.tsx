import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Quote from "@/app/components/Quote";
import Visie from "@/app/components/Visie";
import Aanbod from "@/app/components/Aanbod";
import OverMij from "@/app/components/OverMij";
import Werkwijze from "@/app/components/Werkwijze";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Quote />
      <Visie />
      <Aanbod />
      <OverMij />
      <Werkwijze />
      <Contact />
      <Footer />
    </main>
  );
}
