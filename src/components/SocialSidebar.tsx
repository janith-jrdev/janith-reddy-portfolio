
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed left-6 bottom-0 z-10 hidden md:flex flex-col items-center">
      <ul className="flex flex-col space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-slate after:mx-auto after:mt-6">
        <li>
          <a 
            href="https://github.com/janith-jrdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transform hover:-translate-y-1 transition-all duration-300 inline-block"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/janithreddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transform hover:-translate-y-1 transition-all duration-300 inline-block"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a 
            href="mailto:janith.reddy@bsccmh.christuniversity.in"
            className="text-slate hover:text-highlight transform hover:-translate-y-1 transition-all duration-300 inline-block"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </li>
        <li>
          <a 
            href="tel:+916361106724"
            className="text-slate hover:text-highlight transform hover:-translate-y-1 transition-all duration-300 inline-block"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
