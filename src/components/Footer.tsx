import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Avinash Essarapu</h3>
              <p className="text-primary-foreground/80">
                Application Developer & Student
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <nav className="flex gap-6">
                <a href="#home" className="hover:text-accent transition-colors">Home</a>
                <a href="#about" className="hover:text-accent transition-colors">About</a>
                <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
                <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
              </nav>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/avinashessarapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/avinash-essarapu-2a53a32a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:avinashessarapu3124@gmail.com"
                  className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © {currentYear} Avinash Essarapu. All rights reserved. Built with passion and React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;