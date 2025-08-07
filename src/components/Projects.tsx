import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import taskManagementImage from '@/assets/task-management-project.jpg';
import weatherDashboardImage from '@/assets/weather-dashboard-project.jpg';
import portfolioImage from '@/assets/portfolio-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features include real-time inventory, user authentication, and responsive design.",
      image: ecommerceImage,
      tech: ["React", "TypeScript", "Stripe", "Node.js", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: taskManagementImage,
      tech: ["Next.js", "Tailwind CSS", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets for weather tracking.",
      image: weatherDashboardImage,
      tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations, dark mode support, and optimized performance built with modern web technologies.",
      image: portfolioImage,
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-light max-w-2xl mx-auto">
            A collection of projects that showcase my skills in frontend development, 
            user experience design, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group card-gradient border-0 hover-lift overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover image-hover-effect"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="bg-white/90 text-primary hover:bg-white"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary text-white hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-light mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button 
            variant="outline" 
            size="lg"
            className="hover-glow"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;