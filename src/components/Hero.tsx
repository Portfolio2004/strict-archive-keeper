import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import { ScrollReveal } from "@/components/ScrollReveal";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg"
    >
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
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(224, 190, 75, 0.2)" }}
          animate={{
            y: [20, -20, 20],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(213, 179, 82, 0.1)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
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
              <span className="text-accent/90 font-medium tracking-wide">
                Hello, I'm
              </span>
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
                DevOps Engineer & Cloud Infrastructure Specialist
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
                I'm a computer science student who enjoys building cool projects
                with Linux Docker and Kubernetes always experimenting with
                DevOps tools and automating workflows to make things run better
                and faster across systems.
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Enhanced Action Buttons */}
          <ScrollReveal direction="up" delay={0.8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.1,
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
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-lg"
                  transition={{ duration: 0.5 }}
                />
                <Button
                  onClick={() => scrollToSection("#projects")}
                  size="lg"
                  className="relative z-10 text-base px-10 py-4 font-medium tracking-wide bg-gradient-to-r from-primary to-accent hover:from-primary-bright hover:to-accent-bright text-primary-foreground shadow-golden hover:shadow-hover transition-all duration-300 golden-glow-hover backdrop-blur-lg border border-border/50 hover:border-primary/40"
                >
                  My Works
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.2,
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
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-lg"
                  transition={{ duration: 0.5 }}
                />
                <Button
                  onClick={() => {
                    // Download resume logic
                    const link = document.createElement("a");
                    link.href = "/resume.pdf"; // You'll need to add your resume PDF to public folder
                    link.download = "Dheeraj_Jain_Resume.pdf";
                    link.click();
                  }}
                  size="lg"
                  className="relative z-10 text-base px-10 py-4 font-medium tracking-wide bg-gradient-to-r from-primary to-accent hover:from-primary-bright hover:to-accent-bright text-primary-foreground shadow-golden hover:shadow-hover transition-all duration-300 golden-glow-hover backdrop-blur-lg border border-border/50 hover:border-primary/40"
                >
                  My Resume
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Enhanced Quick Stats */}
          <ScrollReveal direction="up" delay={1.0}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {[
                { value: "1+", label: "Years Experience" },
                { value: "20+", label: "Technologies" },
                { value: "100%", label: "Automation Focus" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
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
                  <Card className="h-full bg-card/60 border-border/50 hover:border-primary/40 transition-all duration-500 golden-glow-hover backdrop-blur-lg relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />
                    <CardContent className="text-center p-6 relative z-10">
                      <div className="text-3xl font-serif font-bold text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-sans tracking-wide">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>

          {/* Enhanced Social Links with Card-like Effects */}
          <ScrollReveal direction="up" delay={1.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center space-x-6 mt-12"
            >
              {[
                {
                  href: "https://github.com/iamdheerajjain",
                  icon: Github,
                  hoverColor: "hover:text-primary hover:border-primary/50",
                },
                {
                  action: () => {
                    navigator.clipboard.writeText("djprakul2004@gmail.com");
                    alert("Email copied to clipboard!");
                  },
                  icon: Mail,
                  hoverColor: "hover:text-primary hover:border-primary/50",
                },
                {
                  href: "https://linkedin.com/in/iamdheerajjain",
                  icon: Linkedin,
                  hoverColor: "hover:text-accent hover:border-accent/50",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
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
                  className="relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-full"
                    transition={{ duration: 0.5 }}
                  />
                  {social.href ? (
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-10 p-3 rounded-full bg-card/50 border border-border ${social.hoverColor} text-foreground transition-all duration-300 hover:shadow-glow golden-glow-hover backdrop-blur-lg block gold-glow-social`}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ) : (
                    <button
                      onClick={social.action}
                      className={`relative z-10 p-3 rounded-full bg-card/50 border border-border ${social.hoverColor} text-foreground transition-all duration-300 hover:shadow-glow golden-glow-hover backdrop-blur-lg block gold-glow-social`}
                    >
                      <social.icon className="h-6 w-6" />
                    </button>
                  )}
                </motion.div>
              ))}
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
            <span className="text-xs mb-2 tracking-wider">
              Scroll to explore
            </span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
