import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Netflix Clone",
      description: "A responsive streaming platform clone with modern UI design and interactive features.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      github: "https://github.com/avinashessarapu",
      demo: "#",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop"
    },
    {
      title: "Amazon Clone",
      description: "E-commerce platform replica featuring product catalogs and shopping cart functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/avinashessarapu",
      demo: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    {
      title: "Swiggy Clone",
      description: "Food delivery application interface with restaurant listings and order management.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/avinashessarapu",
      demo: "#",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
    },
    {
      title: "Calculator Application",
      description: "Multi-language calculator implementation with clean interface and precise calculations.",
      technologies: ["Java", "Python"],
      github: "https://github.com/avinashessarapu",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Interactive game implementation with smart AI opponent and intuitive gameplay.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/avinashessarapu",
      demo: "#",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop"
    },
    {
      title: "Login Page System",
      description: "Secure authentication system with user management and session handling.",
      technologies: ["C++", "Database"],
      github: "https://github.com/avinashessarapu",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              My Portfolio
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              A showcase of projects demonstrating my skills in web development, programming, and problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 border-0 bg-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Links Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 hover:bg-background text-text-heading"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 hover:bg-background text-text-heading"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-text-heading group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-text-body text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-text-body text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border hover:bg-secondary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;