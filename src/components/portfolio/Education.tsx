import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      institution: "Christ University",
      degree: "Bachelor of Business Administration (BBA)",
      period: "2021 - 2024",
      score: "8.62/10 CGPA",
      color: "from-primary to-accent",
      highlights: ["Placement Coordinator", "Finance Club Leader"],
    },
    {
      institution: "St. Francis School",
      degree: "High School",
      period: "2019 - 2021",
      score: "89.6%",
      color: "from-accent to-secondary",
      highlights: ["Academic Excellence", "Extra-curricular Activities"],
    },
  ];

  const certifications = [
    { name: "JP Morgan - Investment Banking Job Simulation", color: "from-primary to-accent" },
    { name: "NPTEL - Leadership and Team Effectiveness", color: "from-accent to-secondary" },
    { name: "Diploma in Finance (Distinction)", color: "from-secondary to-primary" },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Education & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span>Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                  <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} shadow-lg`}
                        >
                          <GraduationCap className="h-6 w-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className={`text-xl bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                            {edu.institution}
                          </CardTitle>
                          <CardDescription className="text-foreground font-medium mt-1">
                            {edu.degree}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <p className="text-muted-foreground mb-2">{edu.period}</p>
                          <p className={`text-lg font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                            {edu.score}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + idx * 0.1 }}
                              className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-7 w-7 text-accent" />
              <span>Certifications</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 h-full">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-2 rounded-lg bg-gradient-to-br ${cert.color} shadow-md`}
                        >
                          <Award className="h-5 w-5 text-white" />
                        </motion.div>
                        <p className="text-foreground font-medium flex-1 leading-snug">
                          {cert.name}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
