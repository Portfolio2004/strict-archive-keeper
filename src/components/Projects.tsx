import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Server,
  Cloud,
  Container,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "NovaDB",
      link: "https://github.com/iamdheerajjain/NovaDB",
      description:
        "Developing a lightweight, high-performance database management system using C++ and implemented core database operations with with efficient query handling. It is a Relational-Database and uses SQL.",
      technologies: [
        "C++",
        "SQL",
        "STL",
        "OOP",
        "Data Management",
        "Data Structures",
      ],
      icon: <Cloud className="h-8 w-8" />,
      category: "Infrastructure",
      highlights: [
        "Centralized Monitoring",
        "Custom Alerts to Prevent Downtime",
        "Zero Cost, Fully Open Source",
      ],
      gradient: "from-primary to-accent",
    },
    {
      title: "LogMetrix",
      link: "https://github.com/iamdheerajjain/LogMetrix",
      description:
        "CA fully open-source project helps track system performance and activities in real time through visual dashboards. It alerts users when something unusual happens, making system monitoring simple and effective.",
      technologies: [
        "Prometheus",
        "Grafana",
        "Loki",
        "Promtail",
        "Node Exporter",
      ],
      icon: <Monitor className="h-8 w-8" />,
      category: "DevOps",
      highlights: [
        "Centralized Monitoring",
        "Custom Alerts to Prevent Downtime",
        "Zero Cost, Fully Open Source",
      ],
      gradient: "from-accent to-primary",
    },
    {
      title: "FluxShell",
      link: "https://github.com/iamdheerajjain/FluxShell",
      description:
        "A lightweight Linux shell clone written in C++. This custom shell (newbash$) provides basic shell functionalities like file navigation, permission changes, process management, and more—built entirely using system-level C++ APIs.",
      technologies: [
        "C++",
        "Linux",
        "Shell-Scripting",
        "System Calls",
        "Algorithms",
      ],
      icon: <Container className="h-8 w-8" />,
      category: "Systems Programming",
      highlights: [
        "Basic Shell Environment",
        "Built-in Command Support",
        "Error Handling & Safety",
      ],
      gradient: "from-accent to-primary",
    },
    {
      title: "C-RAD",
      link: "https://github.com/iamdheerajjain/C_RAD",
      description:
        "This system automatically detects accidents from video footage and determines whether an incident has occurred. Upon detection, it identifies the user's location using IP-based geolocation. It then sends an alert message with the location details to a predefined emergency contact.",
      technologies: [
        "Python",
        "Twilio",
        "Computer Vision",
        "Geocoder",
        "Geopy",
      ],
      icon: <Server className="h-8 w-8" />,
      category: "Deep Learning",
      highlights: [
        "50% Faster Emergency Response ",
        "90% Accurate Location Tracking",
        "Hands-Free Accident Detection",
      ],
      gradient: "from-primary to-accent",
    },
    {
      title: "AquaSense",
      link: "https://github.com/iamdheerajjain/AquaSense",
      description:
        "This project predicts whether a given water sample is safe for drinking based on its physical and chemical properties. It analyzes factors like pH, turbidity, and contamination levels to determine potability. The system helps in early detection of unsafe water.",
      technologies: [
        "Python",
        "CLI-Execution",
        "Scikit-learn",
        "Pandas",
        "Numpy",
      ],
      icon: <Cloud className="h-8 w-8" />,
      category: "Machine Learning",
      highlights: [
        "Model Explainability via Feature Attribution",
        "Deployment-Ready Architecture",
        "Predictive Modeling",
      ],
      gradient: "from-primary to-accent",
    },
    {
      title: "PixelPalette",
      link: "https://github.com/iamdheerajjain/PixelPalette",
      description:
        "This project analyzes an image to identify its most prominent colors.It then generates a clean visual representation showing these dominant colors in proportion.The result helps in understanding the color composition and aesthetic of any image at a glance.",
      technologies: [
        "Python",
        "OpenCV",
        "Scikit-learn",
        "Numpy",
        "Azure DevOps",
      ],
      icon: <Server className="h-8 w-8" />,
      category: "Machine Learning",
      highlights: [
        "Instant Visual Color Insights",
        "Proportional Palette Visualization",
        "Offline and Fast Processing",
      ],
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Server className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">
                Featured Projects
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Solutions & Innovations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Systems built with intention — focused on stability, efficiency
              and real-world use
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
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotateY: 3,
                  rotateX: 2,
                  boxShadow: "var(--shadow-hover)",
                  transition: { duration: 0.5 },
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
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                      >
                        {project.icon}
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-secondary/50 border border-border/50"
                      >
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
                      <h4 className="text-sm font-semibold text-foreground">
                        Key Achievements:
                      </h4>
                      <div className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="flex items-center gap-2 text-xs"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        Technologies:
                      </h4>
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
                        onClick={() => window.open(project.link, "_blank")}
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
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Take a peek at my work
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Swing by my GitHub to see what I’ve been building lately
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button hover:shadow-hover transition-all duration-300 glow-effect"
                onClick={() =>
                  window.open("https://github.com/iamdheerajjain", "_blank")
                }
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
