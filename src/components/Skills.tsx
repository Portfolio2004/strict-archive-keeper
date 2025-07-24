import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer } from '@/components/ScrollReveal';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Server,
  Cloud,
  Container,
  Wrench,
  Monitor,
  Network,
  Database
} from 'lucide-react';

const Skills = () => {
  const [progressRef, progressInView] = useInView({ threshold: 0.3, triggerOnce: false });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["C++", "Go", "HTML", "CSS", "Shell Scripting"],
      color: "text-primary"
    },
    {
      title: "Core Skills",
      icon: <Server className="h-6 w-6" />,
      skills: ["Networking", "Server Management", "Linux Administration", "System Design"],
      color: "text-accent"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Azure", "Linux", "CI/CD", "Ansible", "Terraform"],
      color: "text-primary"
    },
    {
      title: "Containerization",
      icon: <Container className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "Container Orchestration"],
      color: "text-accent"
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Jenkins", "Vim", "VSCode", "Android Studio", "ReactJS", "NextJS"],
      color: "text-primary"
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["Prometheus", "Grafana", "Loki", "Promtail", "System Monitoring"],
      color: "text-accent"
    },
    {
      title: "Infrastructure",
      icon: <Network className="h-6 w-6" />,
      skills: ["Nextcloud", "OpenStack", "RESTful API", "Network Configuration"],
      color: "text-primary",
      centerCard: true
    },
  ];

  const proficiencyLevels = [
    { name: "Infrastructure & DevOps", level: 95, color: "primary" },
    { name: "Cloud Technologies", level: 90, color: "accent" },
    { name: "Container Orchestration", level: 88, color: "primary" },
    { name: "Monitoring & Observability", level: 92, color: "accent" },
    { name: "CI/CD Pipelines", level: 87, color: "primary" },
    { name: "Linux Administration", level: 94, color: "accent" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
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
              <Wrench className="h-4 w-4 text-accent" />
              <span className="text-accent font-medium">Skills & Expertise</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 tracking-tight">
              <span className="text-gradient">Technical</span> <span className="font-sans">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
              A sophisticated arsenal for architecting, deploying, and maintaining enterprise-grade infrastructure
              solutions across diverse platforms and cutting-edge technologies.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <StaggerContainer staggerDelay={0.1} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateY: 2,
                  boxShadow: "var(--shadow-hover)",
                  transition: { duration: 0.4 }
                }}
                whileTap={{ scale: 0.98 }}
                className={category.centerCard ? "md:col-start-2 lg:col-start-2" : ""}
              >
                <Card className="h-full bg-card/60 border-border/50 hover:border-primary/40 transition-all duration-500 golden-glow-hover backdrop-blur-lg relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  <CardHeader className="pb-4 relative z-10">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <motion.div
                        className={`p-2 rounded-lg bg-card border border-border/50 ${category.color} relative overflow-hidden`}
                        whileHover={{
                          rotateY: 180,
                          backgroundColor: "hsl(var(--primary) / 0.1)"
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10">{category.icon}</span>
                      </motion.div>
                      <motion.span
                        whileHover={{ letterSpacing: "0.02em" }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.title}
                      </motion.span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 + index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors duration-300 px-3 py-1 text-sm"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

        {/* Additional Certifications & Learning */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-gradient">Continuous Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm golden-glow-hover"
              >
                <Database className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Database Management</h4>
                <p className="text-sm text-muted-foreground">PostgreSQL, MySQL, Redis optimization and administration</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm golden-glow-hover"
              >
                <Network className="h-8 w-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Network Security</h4>
                <p className="text-sm text-muted-foreground">Firewall configuration, VPN setup, and security best practices</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm golden-glow-hover"
              >
                <Cloud className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Cloud Architecture</h4>
                <p className="text-sm text-muted-foreground">Multi-cloud strategies, cost optimization, and scalability design</p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;