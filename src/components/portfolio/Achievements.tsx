import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Medal, Heart, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: Target,
      title: "Early Investor",
      description: "Started investing journey at age 16, developing deep market understanding",
      color: "from-primary to-accent",
    },
    {
      icon: Users,
      title: "Placement Coordinator",
      description: "Led placement activities at Christ University, facilitating student-recruiter connections",
      color: "from-accent to-secondary",
    },
    {
      icon: Sparkles,
      title: "Finance Club Leader",
      description: "Founded and led finance club, organizing events and workshops for 200+ students",
      color: "from-secondary to-primary",
    },
    {
      icon: Medal,
      title: "National Level Skating",
      description: "Competed at national level in skating, demonstrating discipline and dedication",
      color: "from-primary to-secondary",
    },
    {
      icon: Heart,
      title: "Kiran Foundation",
      description: "Served as Field Manager, coordinating community outreach and social initiatives",
      color: "from-accent to-primary",
    },
    {
      icon: Trophy,
      title: "99.9%+ Accuracy",
      description: "Maintained exceptional accuracy rate across 15,000+ transactions at S&P Global",
      color: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Key <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 h-full">
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <div className="flex flex-col items-center text-center h-full">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-lg mb-4`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
