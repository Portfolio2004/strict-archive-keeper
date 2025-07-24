import React from 'react';
import { Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useInView } from 'react-intersection-observer';
import PhotoGallery from '@/components/PhotoGallery';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const [hoveredPhoto, setHoveredPhoto] = React.useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);

  const photoStack = [
    "/lovable-uploads/d243b8fc-c605-4599-840f-9a01830a3add.png",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-secondary/30 to-muted/20 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
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
              <span className="text-primary font-semibold">Meet the Engineer</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 tracking-tight">
              <span className="text-gradient">Crafting Digital</span>
              <br />
              <span className="font-sans">Infrastructure Excellence</span>
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
                  {/* Photo Stack Container */}
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-1">
                    <div className="relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-sm h-96">
                      {/* Show all photos on hover in a stacked layout */}
                      {photoStack.map((photo, index) => (
                        <motion.div
                          key={index}
                          className="absolute inset-0 cursor-pointer"
                          initial={{
                            opacity: index === 0 ? 1 : 0,
                            scale: 1,
                            rotate: 0,
                            x: 0,
                            y: 0
                          }}
                          animate={{
                            opacity: hoveredPhoto > 0 ? 1 : (index === 0 ? 1 : 0),
                            scale: hoveredPhoto > 0 ? 0.85 : 1,
                            rotate: hoveredPhoto > 0 ? (index - 1.5) * 8 : 0,
                            x: hoveredPhoto > 0 ? (index - 1.5) * 20 : 0,
                            y: hoveredPhoto > 0 ? Math.abs(index - 1.5) * 10 : 0,
                            zIndex: hoveredPhoto > 0 ? (4 - Math.abs(index - 1.5)) : (index === 0 ? 10 : 1)
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          onMouseEnter={() => setHoveredPhoto(index + 1)}
                        >
                          <img
                            src={photo}
                            alt={`Dheeraj Jain B - Photo ${index + 1}`}
                            className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-6 left-4 right-4 bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-2xl"
                  >
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">Dheeraj Jain B</h3>
                    <p className="text-primary font-sans font-medium mb-3 tracking-wide">DevOps Engineer & Cloud Architect</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-xs text-muted-foreground">Certified Professional</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Text */}
              <ScrollReveal direction="right" delay={0.6}>
                <div className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed font-sans tracking-wide">
                      Passionate about architecting sophisticated, scalable infrastructure that powers enterprise applications.
                      I specialize in cloud-native solutions, intelligent automation, and creating seamless CI/CD pipelines
                      that enable teams to deliver exceptional software experiences with unparalleled reliability.
                    </p>
                    <p className="text-base text-muted-foreground/85 leading-relaxed font-sans">
                      With expertise spanning from Linux systems to advanced container orchestration, I bridge the gap
                      between development and operations, ensuring secure, efficient, and resilient deployment
                      strategies. My journey began with a deep fascination for Linux systems in 2022, which
                      evolved into comprehensive expertise in cloud architecture, container orchestration with
                      Kubernetes, and cutting-edge DevOps practices.
                    </p>
                    <p className="text-base text-muted-foreground/85 leading-relaxed font-sans">
                      I excel at solving complex infrastructure challenges and have successfully implemented
                      sophisticated monitoring solutions using Prometheus and Grafana, designed CI/CD pipelines
                      that reduced deployment time by 80%, and architected cloud-native solutions on Azure
                      that serve millions of users with 99.9% uptime. My approach harmonizes technical excellence with
                      strategic business impact, ensuring every solution drives measurable value.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <ScrollReveal direction="up" delay={1.0}>
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold mb-12 text-gradient">Professional Journey</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-1 p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary mb-3">2022</div>
                <div className="text-base text-muted-foreground font-medium">Started Linux Journey</div>
              </motion.div>
              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-1 p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 border border-border/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-accent mb-3">2023-2024</div>
                <div className="text-base text-muted-foreground font-medium">Cloud & DevOps Focus</div>
              </motion.div>
              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-accent via-primary to-accent"></div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-1 p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-primary mb-2">Achievements</div>
                <div className="text-sm text-muted-foreground">Multiple Certifications & Projects</div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Photo Gallery Modal */}
        <PhotoGallery
          photos={photoStack}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialIndex={0}
        />
      </div>
    </section>
  );
};

export default About;