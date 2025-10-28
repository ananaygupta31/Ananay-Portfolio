import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  icon: string;
  size: number;
  opacity: number;
}

const MoneyParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const moneyIcons = ["💰", "💵", "💸", "💲", "🪙", "💴", "💶", "💷"];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 15 + Math.random() * 10,
          icon: moneyIcons[Math.floor(Math.random() * moneyIcons.length)],
          size: 20 + Math.random() * 20,
          opacity: 0.1 + Math.random() * 0.2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          initial={{ y: -100, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            x: [0, 30, -30, 0],
          }}
          transition={{
            y: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            },
            rotate: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            },
          }}
        >
          {particle.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default MoneyParticles;
