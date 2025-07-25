import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import { ScrollReveal } from '@/components/ScrollReveal';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
      {/* Enhanced Background */}
      <div className="absolute inset-0 mesh-bg opacity-60" />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(213, 179, 82, 0.2)" }}
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(224, 190, 75, 0.2)" }}
          animate={{
            y: [20, -20, 20],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(213, 179, 82, 0.1)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-accent/90 font-medium tracking-wide">Hello, I'm</span>
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            </motion.div>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal direction="up" delay={0.4}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">Dheeraj Jain B</span>
            </motion.h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction="up" delay={0.6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground/90 mb-6 tracking-wide">
                DevOps Engineer & Infrastructure Specialist
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
                Passionate about architecting sophisticated infrastructure solutions, streamlining enterprise deployments,
                and building resilient, scalable systems that power modern applications. Specialized in cloud technologies,
                advanced containerization, and comprehensive monitoring ecosystems.
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal direction="up" delay={0.8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                onClick={() => scrollToSection('#projects')}
                size="lg"
                className="text-base px-10 py-4 font-medium tracking-wide bg-gradient-to-r from-primary to-accent hover:from-primary-bright hover:to-accent-bright text-primary-foreground shadow-golden hover:shadow-hover transition-all duration-300"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => {
                  // Download resume logic
                  const link = document.createElement('a');
                  link.href = '/resume.pdf'; // You'll need to add your resume PDF to public folder
                  link.download = 'Dheeraj_Jain_B_Resume.pdf';
                  link.click();
                }}
                size="lg"
                className="text-base px-10 py-4 font-medium tracking-wide bg-gradient-to-r from-primary to-accent hover:from-primary-bright hover:to-accent-bright text-primary-foreground shadow-golden hover:shadow-hover transition-all duration-300"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </ScrollReveal>

          {/* Quick Stats or Highlights */}
          <ScrollReveal direction="up" delay={1.0}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                className="text-center p-6 rounded-xl glass-effect transition-all duration-500 hover:shadow-premium group golden-glow-hover"
              >
                <div className="text-3xl font-serif font-bold text-gradient mb-2">1+</div>
                <div className="text-sm text-muted-foreground font-sans tracking-wide">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                className="text-center p-6 rounded-xl glass-effect transition-all duration-500 hover:shadow-premium group golden-glow-hover"
              >
                <div className="text-3xl font-serif font-bold text-gradient-accent mb-2">20+</div>
                <div className="text-sm text-muted-foreground font-sans tracking-wide">Technologies</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                className="text-center p-6 rounded-xl glass-effect transition-all duration-500 hover:shadow-premium group golden-glow-hover"
              >
                <div className="text-3xl font-serif font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-sans tracking-wide">Automation Focus</div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal direction="up" delay={1.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center space-x-6 mt-12"
            >
              <motion.a
                href="https://github.com/iamdheerajjain"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow premium-glow-hover"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/iamdheerajjain"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card/50 border border-border hover:border-accent/50 text-foreground hover:text-accent transition-all duration-300 hover:shadow-accent premium-glow-hover"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:djprakul2004@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow premium-glow-hover"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground/60"
          >
            <span className="text-xs mb-2 tracking-wider">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;