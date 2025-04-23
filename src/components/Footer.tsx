
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-navy-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/janith-jrdev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/janithreddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:janith.reddy@bsccmh.christuniversity.in" 
              className="text-slate hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-slate">
              Designed & Built by Janith N Reddy
            </p>
            <p className="text-xs text-slate mt-2">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
