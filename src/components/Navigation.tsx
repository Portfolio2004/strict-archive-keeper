import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('djprakul2004@gmail.com');
    toast({
      title: "Email copied!",
      description: "djprakul2004@gmail.com has been copied to clipboard",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, rotateX: -90 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-golden border-b border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -50, rotateY: -45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{
              scale: 1.08,
              rotateY: 5,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-golden relative overflow-hidden"
              whileHover={{
                rotateZ: 360,
                boxShadow: "var(--shadow-glow)"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-bright to-accent-bright opacity-0"
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-background font-bold text-sm relative z-10">DJ</span>
            </motion.div>
            <motion.span
              className="text-xl font-bold text-gradient"
              whileHover={{
                letterSpacing: "0.05em",
                textShadow: "0 0 20px hsl(var(--primary) / 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              Dheeraj Jain
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: index * 0.1 + 0.5,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-all duration-500 font-medium relative group px-3 py-2 rounded-lg"
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  backgroundColor: "hsl(var(--primary) / 0.05)",
                  textShadow: "0 0 10px hsl(var(--primary) / 0.5)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                  whileHover={{
                    width: "80%",
                    x: "-50%",
                    boxShadow: "0 0 10px hsl(var(--primary) / 0.8)"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.button>
            ))}
          </div>

          {/* Get in Touch Button */}
          <div className="hidden md:flex items-center">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: 1.0,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                scale: 1.08,
                y: -2,
                boxShadow: "var(--shadow-hover)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary-bright hover:to-accent-bright text-primary-foreground font-medium transition-all duration-500 shadow-golden relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0"
                whileHover={{
                  opacity: [0, 1, 0],
                  x: ["-100%", "100%"]
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-border/50">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-card/50 rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-4 pt-4">
                  <motion.a
                    href="https://github.com/iamdheerajjain"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="p-2 rounded-full bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/iamdheerajjain"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-2 rounded-full bg-card/50 border border-border hover:border-accent/50 transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </motion.a>
                  <motion.button
                    onClick={copyEmailToClipboard}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="p-2 rounded-full bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <Mail className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;