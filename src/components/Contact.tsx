import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, Github, Linkedin, MessageCircle, Copy, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerContainer } from '@/components/ScrollReveal';
import { useInView } from 'react-intersection-observer';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Reset form and close dialog
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setIsDialogOpen(false);

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('djprakul2004@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      toast({
        title: "Email copied!",
        description: "djprakul2004@gmail.com has been copied to clipboard",
      });
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Me",
      description: "Get in touch directly",
      detail: "djprakul2004@gmail.com",
      action: copyEmailToClipboard,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Check out my repositories",
      detail: "iamdheerajjain",
      action: () => window.open('https://github.com/iamdheerajjain', '_blank'),
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Professional networking",
      detail: "iamdheerajjain",
      action: () => window.open('https://linkedin.com/in/iamdheerajjain', '_blank'),
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section id="contact" className="py-20 pb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              <span className="text-accent font-medium">Get In Touch</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your infrastructure needs or explore collaboration opportunities? I'm
              always open to connecting with fellow developers and potential clients.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Cards Grid */}
        <ScrollReveal direction="up" delay={0.4}>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, rotateY: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "var(--shadow-hover)",
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className="h-full bg-card/60 border-border/50 hover:border-primary/40 transition-all duration-500 golden-glow-hover backdrop-blur-lg cursor-pointer relative overflow-hidden group"
                    onClick={method.action}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />
                    <CardContent className="p-8 text-center relative z-10">
                      <motion.div
                        className={`w-14 h-14 rounded-full ${method.bgColor} border ${method.borderColor} flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}
                        whileHover={{
                          rotateY: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className={method.color}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          {method.icon}
                        </motion.div>
                      </motion.div>
                      <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                      <p className="text-xs text-primary font-medium">{method.detail}</p>
                      {method.title === "Email Me" && copiedEmail && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center justify-center gap-1 text-xs text-green-500 mt-2"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          Copied!
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </ScrollReveal>

        {/* Availability Status */}
        <ScrollReveal direction="up" delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 rounded-lg bg-green-500/10 border border-green-500/20 max-w-2xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
              <span className="text-green-400 font-medium">Available for opportunities</span>
            </div>
            <p className="text-sm text-green-300/80">
              Currently accepting new consulting and full-time opportunities
            </p>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg bg-card/95 backdrop-blur-xl border-accent/50 shadow-2xl">
          <DialogHeader className="relative">
            <motion.button
              onClick={() => setIsDialogOpen(false)}
              className="absolute right-0 top-0 p-2 rounded-full hover:bg-muted/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </motion.button>
            <div className="text-center">
              <DialogTitle className="text-2xl font-bold text-accent mb-2">Send a Message</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Have a specific project in mind? Let's discuss the details.
              </p>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="bg-background/50 border-border/50 focus:border-accent/50 transition-colors duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-accent/50 transition-colors duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Subject *</label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="bg-background/50 border-border/50 focus:border-accent/50 transition-colors duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message *</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                rows={4}
                required
                className="bg-background/50 border-border/50 focus:border-accent/50 transition-colors duration-300 resize-none"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-black font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;