import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-text-heading mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Avinash
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-text-body font-medium mb-6">
                Application Developer & Student
              </h2>
              <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                Passionate about creating innovative applications and continuously learning new technologies. 
                Currently pursuing B.Tech in Computer Science Engineering with a focus on delivering 
                high-quality, user-centric solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("portfolio")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-border hover:bg-secondary"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/avinashessarapu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-medium"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/avinash-essarapu-2a53a32a9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-medium"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:avinashessarapu3124@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-medium"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full blur-3xl scale-110"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-strong border-4 border-background">
                <img
                  src="/lovable-uploads/1e200acf-7100-4abd-9a38-0f6767d8605e.png"
                  alt="Avinash Essarapu - Application Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
        >
          <ArrowDown className="w-5 h-5 text-text-light" />
        </button>
      </div>
    </section>
  );
};

export default Hero;