import React from "react";
import { Award, Users, Server } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const [hoveredPhoto, setHoveredPhoto] = React.useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);

  const photoStack = ["/DJ.jpg"];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-secondary/30 to-muted/20 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Users className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">About Me</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 tracking-tight">
              <span className="text-gradient">Designing Systems</span>
              <br />
              <span className="font-sans">That Just Work</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Main Content - Hero Layout */}
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Photo Stack with Info Card */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="lg:col-span-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredPhoto(1)}
                  onMouseLeave={() => setHoveredPhoto(0)}
                  onClick={() => setIsGalleryOpen(true)}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-1">
                    <div className="relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-sm h-96">
                      {photoStack.map((photo, index) => (
                        <motion.div
                          key={index}
                          className="absolute inset-0 cursor-pointer"
                          initial={{
                            opacity: index === 0 ? 1 : 0,
                            scale: 1,
                            rotate: 0,
                            x: 0,
                            y: 0,
                          }}
                        >
                          <img
                            src="/DJ.jpg"
                            alt={`Dheeraj Jain B - Photo ${index + 1}`}
                            className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal direction="right" delay={0.6}>
                <div className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed font-sans tracking-wide">
                      Throughout my academic journey, I've gained extensive
                      experience in building and managing backend systems that
                      actually make a difference. From Linux and Docker to
                      Kubernetes and CI/CD, I'm all about automating things and
                      making infrastructure clean and reliable. <br />
                      <br />
                      I’ve built everything from private clouds to my own
                      database engine in C++, and was a Top 5 finalist at a
                      state-level hackathon I enjoy tackling real problems with
                      code, and I’m always learning something new with every
                      project I work on. <br />
                      <br />
                      Beyond my own work, I also help friends and classmates
                      with coding and project guidance I believe tech is better
                      when shared, and I’m always up for collaborating,
                      experimenting, and building something cool together. I
                      genuinely enjoy being part of the process from start to
                      finish.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Professional Journey with Enhanced Effects */}
        <ScrollReveal direction="up" delay={1.0}>
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold mb-12 text-gradient">
              Professional Journey
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
              {[
                {
                  year: "2022",
                  description: "Explored Linux systems, scripting, and others.",
                },
                {
                  year: "2023–2024",
                  description:
                    "Specialized in DevOps pipelines and cloud infrastructure.",
                },
                {
                  year: "2025",
                  description: "Delivered high-impact projects.",
                },
              ].map((card, index, arr) => (
                <div key={index} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      rotateY: 2,
                      boxShadow: "var(--shadow-hover)",
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="h-full bg-card/60 border-border/50 hover:border-primary/40 transition-all duration-500 golden-glow-hover backdrop-blur-lg relative overflow-hidden group w-[280px] md:w-[300px]">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.5 }}
                      />
                      <CardHeader className="pb-4 relative z-10">
                        <div className="text-3xl font-bold text-primary">
                          {card.year}
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-sm text-muted-foreground">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Arrow between cards */}
                  {index < arr.length - 1 && (
                    <span className="hidden md:inline-block text-3xl font-bold text-primary">
                      ───&gt;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
