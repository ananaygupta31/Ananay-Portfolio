import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Users, Target } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: TrendingUp,
      title: "2+",
      suffix: " Years",
      description: "At S&P Global",
      color: "from-primary to-accent",
    },
    {
      icon: Award,
      title: "99.9",
      suffix: "%+",
      description: "Accuracy Rate",
      color: "from-accent to-secondary",
    },
    {
      icon: Users,
      title: "15,000",
      suffix: "+",
      description: "Transactions Processed",
      color: "from-secondary to-primary",
    },
    {
      icon: Target,
      title: "14",
      suffix: "",
      description: "Started Investing",
      color: "from-primary to-accent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-card/50 border border-primary/20 shadow-lg">
            <p className="text-lg text-foreground/90 leading-relaxed text-center">
              Quality Control Associate at{" "}
              <span className="text-primary font-semibold">S&P Global</span> with a passion for financial markets
              that began at the age of 15. Specializing in{" "}
              <span className="text-accent font-semibold">syndicated loans</span> and{" "}
              <span className="text-secondary font-semibold">trade settlements</span>,
              I bring meticulous attention to detail and a proven track record of 99.9%+ accuracy
              in high-volume transaction environments. Experienced in collaborating with top-tier
              clients including <span className="text-primary font-semibold">Goldman Sachs, JP Morgan, and BCG</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  rotate: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Card
                  className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500"
                    >
                      <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-500" />
                    </motion.div>

                    <AnimatedCounter
                      value={highlight.title}
                      suffix={highlight.suffix}
                      isInView={isInView}
                      delay={index * 0.2}
                    />

                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Animated counter component
const AnimatedCounter = ({ value, suffix, isInView, delay }: { value: string; suffix: string; isInView: boolean; delay: number }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, numericValue, delay]);

  return (
    <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {Math.floor(count) === numericValue ? value : Math.floor(count)}{suffix}
    </h3>
  );
};

export default About;
