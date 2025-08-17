import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "portfolio", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-soft border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-xl font-bold text-text-heading cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Avinash Essarapu
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "portfolio", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === section ? "text-accent" : "text-text-body"
                }`}
              >
                {section}
              </button>
            ))}
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;