import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import WhatsAppButton from "@/components/WhatsAppButton";
import MoneyParticles from "@/components/MoneyParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MoneyParticles />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </div>
      <ThemeSwitch />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
