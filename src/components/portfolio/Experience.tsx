import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      company: "S&P Global",
      role: "Quality Control Associate",
      period: "July 2024 - Present",
      location: "Gurugram, Haryana",
      color: "from-primary to-accent",
      achievements: [
        "Maintained 99.9%+ accuracy across 15,000+ trade transactions involving syndicated loans and settlement processing",
        "Reduced error rates by 40% through implementation of systematic quality control checks",
        "Collaborated with Goldman Sachs, JP Morgan, and BCG on transaction validations",
        "Expertise in SOFR, LIBOR, SONIA, and EURIBOR interest calculations",
        "Managed complex reconciliation processes and operational accounting tasks",
      ],
    },
    {
      company: "Vidyuttech",
      role: "Founder's Office Intern",
      period: "June 2023 - July 2023",
      location: "Gurugram, Haryana",
      color: "from-accent to-secondary",
      achievements: [
        "Analyzed 700+ CIBIL reports to optimize credit evaluation processes",
        "Improved lead quality by 53% through enhanced verification protocols",
        "Conducted market research identifying three new lending opportunities",
        "Designed performance metrics tracking system for lending operations",
      ],
    },
    {
      company: "Sleepwell",
      role: "Sales and Supply Chain Intern",
      period: "June 2022 - July 2022",
      location: "New Delhi, India",
      color: "from-secondary to-primary",
      achievements: [
        "Analyzed sales data across 15 retail outlets to identify growth opportunities",
        "Optimized inventory levels reducing stockouts by 25%",
        "Coordinated with suppliers to improve delivery timelines by 20%",
        "Created comprehensive sales reports for senior management decision-making",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-secondary" />

          <div className="space-y-22">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-16 items-start ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${exp.color} p-1 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 0 ? "md:pr-8" : "md:col-start-2 md:pl-8"}>
                  <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <CardHeader className="relative z-10">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg border border-slate-700">
                              <Building2 className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className={`text-2xl bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                {exp.company}
                              </CardTitle>
                              <CardDescription className="text-lg font-semibold text-foreground mt-1">
                                {exp.role}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            {exp.period}
                          </div>
                          <div className="ml-6">{exp.location}</div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                            className="flex items-start gap-3 text-muted-foreground group/item"
                          >
                            <span className="text-primary mt-1 flex-shrink-0 font-bold group-hover/item:scale-125 transition-transform">▹</span>
                            <span className="group-hover/item:text-foreground transition-colors">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? "hidden md:block" : "hidden md:block md:col-start-1 md:row-start-1"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
