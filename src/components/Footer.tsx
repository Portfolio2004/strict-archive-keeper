import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';

const Footer = () => {
  const contactCards = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Me",
      description: "Get in touch directly",
      contact: "djprakul2004@gmail.com",
      href: "mailto:djprakul2004@gmail.com",
      color: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500/20"
    },
    {
      icon: <Github className="h-8 w-8" />,
      title: "GitHub",
      description: "Check out my repositories",
      contact: "iamdheerajjain",
      href: "https://github.com/iamdheerajjain",
      color: "from-gray-500/20 to-slate-500/20",
      iconBg: "bg-gray-500/20"
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      title: "LinkedIn",
      description: "Professional networking",
      contact: "iamdheerajjain",
      href: "https://linkedin.com/in/iamdheerajjain",
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/20"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Let's Chat",
      description: "Open for discussions",
      contact: "Available",
      href: "mailto:djprakul2004@gmail.com",
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/20"
    }
  ];

  return (
    <footer className="relative pt-12 pb-8 bg-gradient-to-b from-background via-background/95 to-muted/10 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-accent/10 via-primary/5 to-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8"
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 tracking-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Dheeraj Jain B
                </span>
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-muted-foreground font-light tracking-wide mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                DevOps Engineer & Cloud Infrastructure Specialist
              </motion.p>

              <motion.div
                className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />

              <motion.p
                className="text-sm text-muted-foreground/80 font-light italic max-w-xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                "Architecting tomorrow's infrastructure with precision, innovation, and elegance"
              </motion.p>
            </motion.div>
          </div>
        </ScrollReveal>

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-2xl hover:shadow-primary/25 transition-all duration-300 z-50 backdrop-blur-sm border border-white/10"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg font-bold"
          >
            ↑
          </motion.div>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;