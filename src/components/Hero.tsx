import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code, Zap } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const roles = ["Application Developer", "Frontend Engineer", "Problem Solver", "Tech Enthusiast"];

  const FloatingIcon = ({ icon: Icon, delay = 0, position }: { icon: any; delay?: number; position: string }) => (
    <div 
      className={`absolute ${position} animate-float opacity-20 hover:opacity-40 transition-opacity cursor-pointer`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="w-8 h-8 text-accent" />
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Icons */}
      <FloatingIcon icon={Code} delay={0} position="top-20 left-20" />
      <FloatingIcon icon={Sparkles} delay={1.5} position="top-32 right-32" />
      <FloatingIcon icon={Zap} delay={3} position="bottom-40 left-32" />
      <FloatingIcon icon={Code} delay={4.5} position="bottom-20 right-20" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="mb-6">
              {/* Greeting with staggered animation */}
              <div className="mb-4 overflow-hidden">
                <h1 className={`text-4xl md:text-6xl font-bold text-text-heading leading-tight transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent animate-pulse-glow">
                    Avinash
                  </span>
                </h1>
              </div>

              {/* Dynamic typewriter role */}
              <div className={`mb-6 transition-all duration-700 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-xl md:text-2xl text-text-body font-medium mb-2">
                  <TypewriterText texts={roles} className="text-accent font-semibold" />
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-text-light">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>& B.Tech Student</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Description with delayed animation */}
              <div className={`transition-all duration-700 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
                <p className="text-lg text-text-light max-w-2xl leading-relaxed">
                  Passionate about creating innovative applications and continuously learning new technologies. 
                  Currently pursuing B.Tech in Computer Science Engineering with a focus on delivering 
                  high-quality, user-centric solutions.
                </p>
              </div>
            </div>

            {/* Action Buttons with staggered hover effects */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 transition-all duration-700 delay-900 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("portfolio")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium hover:shadow-strong transform hover:scale-105 transition-all duration-300 group"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-border hover:bg-secondary hover:border-accent transform hover:scale-105 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className={`flex gap-4 justify-center lg:justify-start transition-all duration-700 delay-1100 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
              {[
                { href: "https://github.com/avinashessarapu", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/avinash-essarapu-2a53a32a9", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:avinashessarapu3124@gmail.com", icon: Mail, label: "Email" }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-medium transform hover:scale-110 hover:-translate-y-1`}
                  style={{ animationDelay: `${1200 + index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative group">
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full blur-3xl scale-110 animate-pulse-glow"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-strong border-4 border-background transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <img
                  src="/lovable-uploads/1e200acf-7100-4abd-9a38-0f6767d8605e.png"
                  alt="Avinash Essarapu - Application Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating skill badges around image */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce shadow-medium">
                React
              </div>
              <div className="absolute top-1/2 -left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-float shadow-medium" style={{ animationDelay: '1s' }}>
                JavaScript
              </div>
              <div className="absolute -bottom-4 left-1/4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse shadow-medium">
                Python
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <button
          onClick={() => scrollToSection("about")}
          className="group p-3 rounded-full bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-medium animate-bounce hover:animate-pulse"
        >
          <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;