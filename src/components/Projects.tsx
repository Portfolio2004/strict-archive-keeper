import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Server, Cloud, Container, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer } from '@/components/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated cloud infrastructure deployment using Terraform and Ansible, reducing deployment time by 80% and ensuring consistent environments across development, staging, and production.",
      technologies: ["Terraform", "Ansible", "Azure", "Docker", "Kubernetes"],
      icon: <Cloud className="h-8 w-8" />,
      category: "Infrastructure",
      highlights: ["80% faster deployments", "Zero-downtime updates", "Multi-environment consistency"],
      gradient: "from-primary to-accent"
    },
    {
      title: "Kubernetes Monitoring Stack",
      description: "Comprehensive monitoring solution using Prometheus, Grafana, and Loki for real-time observability across Kubernetes clusters with custom alerting and automated incident response.",
      technologies: ["Prometheus", "Grafana", "Loki", "Kubernetes", "Helm"],
      icon: <Monitor className="h-8 w-8" />,
      category: "Monitoring",
      highlights: ["Real-time metrics", "Custom dashboards", "Automated alerting"],
      gradient: "from-accent to-primary"
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Redesigned and optimized CI/CD pipelines using Jenkins and GitLab CI, implementing automated testing, security scanning, and deployment strategies for faster, safer releases.",
      technologies: ["Jenkins", "GitLab CI", "Docker", "SonarQube", "Nexus"],
      icon: <Server className="h-8 w-8" />,
      category: "DevOps",
      highlights: ["50% faster builds", "Automated security scans", "Quality gates"],
      gradient: "from-primary to-accent"
    },
    {
      title: "Container Orchestration Platform",
      description: "Built a scalable container orchestration platform with automatic scaling, load balancing, and health monitoring for microservices architecture supporting 1000+ concurrent users.",
      technologies: ["Kubernetes", "Docker", "Istio", "Prometheus", "Redis"],
      icon: <Container className="h-8 w-8" />,
      category: "Platform",
      highlights: ["Auto-scaling", "Load balancing", "Health monitoring"],
      gradient: "from-accent to-primary"
    },
    {
      title: "Multi-Cloud Disaster Recovery",
      description: "Implemented comprehensive disaster recovery solution across multiple cloud providers with automated failover, data replication, and recovery testing procedures.",
      technologies: ["Azure", "AWS", "Terraform", "Ansible", "Backup Tools"],
      icon: <Cloud className="h-8 w-8" />,
      category: "Infrastructure",
      highlights: ["99.9% uptime", "Automated failover", "Cross-cloud backup"],
      gradient: "from-primary to-accent"
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Developed a comprehensive IaC framework with reusable modules, automated testing, and validation pipelines for consistent infrastructure provisioning across teams.",
      technologies: ["Terraform", "Terratest", "Go", "GitHub Actions", "Azure DevOps"],
      icon: <Server className="h-8 w-8" />,
      category: "Automation",
      highlights: ["Reusable modules", "Automated testing", "Team consistency"],
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Server className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">Featured Projects</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Solutions & Innovations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of infrastructure projects that demonstrate expertise in cloud architecture,
              automation, monitoring, and scalable system design.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotateY: 3,
                  rotateX: 2,
                  boxShadow: "var(--shadow-hover)",
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group perspective-1000"
              >
                <Card className="h-full bg-card/60 border-border/50 hover:border-primary/40 transition-all duration-700 golden-glow-hover backdrop-blur-xl overflow-hidden relative group-card">
                  {/* Project Header with Gradient */}
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                        {project.icon}
                      </div>
                      <Badge variant="secondary" className="bg-secondary/50 border border-border/50">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                      <div className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs bg-background/50 border-border/50 hover:border-primary/30 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                        onClick={() => window.open('https://github.com/iamdheerajjain', '_blank')}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

        {/* Call to Action */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="text-center mt-16">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient">View All Projects on GitHub</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Explore my complete portfolio of infrastructure projects, automation scripts,
                and DevOps solutions. All code is open source and available for collaboration.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button hover:shadow-hover transition-all duration-300 glow-effect"
                onClick={() => window.open('https://github.com/iamdheerajjain', '_blank')}
              >
                View All Projects
                <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;