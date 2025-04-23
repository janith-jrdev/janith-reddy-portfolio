
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-slate-light">
            <span className="text-highlight">J</span>anith <span className="text-highlight">R</span>eddy
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
            <a href="#contact">Say Hello</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light hover:text-highlight"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-navy/95 z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="h-full flex flex-col justify-center items-center space-y-8 p-6">
          <a href="#about" className="text-xl text-slate-light hover:text-highlight" onClick={closeMobileMenu}>About</a>
          <a href="#experience" className="text-xl text-slate-light hover:text-highlight" onClick={closeMobileMenu}>Experience</a>
          <a href="#projects" className="text-xl text-slate-light hover:text-highlight" onClick={closeMobileMenu}>Projects</a>
          <a href="#skills" className="text-xl text-slate-light hover:text-highlight" onClick={closeMobileMenu}>Skills</a>
          <a href="#contact" className="text-xl text-slate-light hover:text-highlight" onClick={closeMobileMenu}>Contact</a>
          
          <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10 mt-6">
            <a href="#contact" onClick={closeMobileMenu}>Say Hello</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
