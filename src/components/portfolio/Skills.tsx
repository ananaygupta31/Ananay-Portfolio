import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, BarChart3, Users, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      icon: DollarSign,
      title: "Financial Operations",
      color: "from-primary to-accent",
      skills: [
        { name: "Syndicated Loans", level: 95 },
        { name: "Trade Settlements", level: 98 },
        { name: "Reconciliation", level: 92 },
        { name: "Interest Calculations", level: 90 },
        { name: "Operational Accounting", level: 88 },
      ],
    },
    {
      icon: BarChart3,
      title: "Technical Skills",
      color: "from-accent to-secondary",
      skills: [
        { name: "Data Analysis", level: 90 },
        { name: "Process Improvement", level: 93 },
        { name: "Quality Control", level: 99 },
        { name: "Transaction Processing", level: 96 },
        { name: "Performance Metrics", level: 87 },
      ],
    },
    {
      icon: Users,
      title: "Professional Skills",
      color: "from-secondary to-primary",
      skills: [
        { name: "Client Collaboration", level: 94 },
        { name: "SLA Management", level: 92 },
        { name: "Team Leadership", level: 85 },
        { name: "Stakeholder Communication", level: 91 },
        { name: "Problem Solving", level: 95 },
      ],
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      color: "from-primary to-secondary",
      skills: [
        { name: "Intraday Trading", level: 88 },
        { name: "Long-term Investing", level: 92 },
        { name: "Options Trading", level: 85 },
        { name: "Market Research", level: 90 },
        { name: "Credit Analysis", level: 93 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 h-full">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: index * 0.1 + idx * 0.05 + 0.3, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
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

export default Skills;
