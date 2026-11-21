import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import captureLogo from "@/assets/Capture.PNG";

const RESUME_URL =
  "https://drive.google.com/file/d/1nJOd_S8dhl5eTeCNGMjMuciCUSisun1m/view?usp=sharing";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "01. About" },
    { href: "#experience", label: "02. Experience" },
    { href: "#projects", label: "03. Projects" },
    { href: "#skills", label: "04. Skills" },
    { href: "#contact", label: "05. Contact" },
  ];

  return (
    <nav className="fixed top-4 inset-x-0 z-50 px-4">
      <div className={`mx-auto max-w-5xl rounded-full border-2 border-foreground bg-card px-5 transition-shadow duration-300 ${
        scrolled ? "shadow-glow" : ""
      }`}>
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full">
              <img
                src={captureLogo}
                alt="Ahsan Raza logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm font-bold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" size="sm" className="ml-2" asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-3 rounded-3xl bg-card border-2 border-foreground shadow-glow">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" className="w-full mt-4" asChild>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navigation;