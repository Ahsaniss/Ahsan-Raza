import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import captureLogo from "@/assets/Capture.PNG";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t-2 border-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex-shrink-0">
                <img src={captureLogo} alt="Ahsan Raza logo" className="h-full w-full object-contain rounded bg-background" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-background">Ahsan Raza</h3>
                <p className="text-sm text-background/70">Software Engineer</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Building innovative solutions with modern technologies. 
              Passionate about AI, web development, and creating meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[hsl(var(--butter))]">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[hsl(var(--butter))]">Let's Connect</h4>
            <div className="space-y-3">
              <p className="text-sm text-background/70">
                Ready to work together? Let's create something amazing.
              </p>
              <div className="flex gap-3">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary hover:text-white text-background"
                  asChild
                >
                  <a href="https://github.com/Ahsaniss" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary hover:text-white text-background"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/muhammad-ahsan-raza-2a9b9828a" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary hover:text-white text-background"
                  asChild
                >
                  <a href="mailto:ahsanraza858585@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="pt-2">
                <a 
                  href="mailto:ahsanraza858585@gmail.com"
                  className="text-sm text-primary hover:underline"
                >
                  ahsanraza858585@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/70">
              © {currentYear} Muhammad Ahsan Raza. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-background/70">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-primary animate-pulse" />
              <span>by Ahsan Raza</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;