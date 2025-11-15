import { FileDown, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = [
    "Quality Control Associate",
    "Finance Enthusiast",
    "Financial Analyst",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating particles animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated gradient orbs with parallax */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 0.02,
          y: -mousePosition.y * 0.02,
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/30 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.01,
          y: -mousePosition.y * 0.01,
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Sparkles className="text-primary h-8 w-8" />
            </motion.div>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground">
              Hello, I'm
            </p>
          </motion.div>

          {/* Main name with gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            Ananay Gupta
          </motion.h1>

          {/* Animated rotating titles */}
          <motion.div
            key={currentTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-16 mb-8"
          >
            <p className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {titles[currentTitle]}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Quality Control Associate at{" "}
            <span className="text-primary font-semibold">S&P Global</span> with
            a passion for finance that began investing at 14. Maintaining{" "}
            <span className="text-accent font-semibold">99.9%+ accuracy</span>{" "}
            across 15,000+ transactions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 px-8"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 px-8"
              asChild
            >
              <a
                href="/Ananay_Gupta_Resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <FileDown className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Email with copy animation */}
          <motion.a
            href="mailto:ananaygupta.work@gmail.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block text-muted-foreground hover:text-primary transition-all text-lg underline underline-offset-4"
          >
            ananaygupta.work@gmail.com
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator - moved outside content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
