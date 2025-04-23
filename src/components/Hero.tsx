
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-highlight mb-5 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-light mb-4 font-poppins">
            Janith N Reddy.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-slate mb-8 font-poppins">
            I build things for the web & beyond.
          </h2>
          <p className="text-lg text-slate mb-12 max-w-lg">
            I'm a Computer Science & Mathematics student with a passion for full-stack development, 
            cybersecurity, and AI applications. Currently focused on building impactful tech projects 
            and contributing to startup ecosystems.
          </p>
          <div className="flex gap-4">
            <Button className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10 px-7 py-6 rounded">
              <a href="#projects" className="flex items-center gap-2">
                View My Work <ArrowRightIcon size={16} />
              </a>
            </Button>
            <Button className="bg-highlight text-navy hover:bg-highlight/90 px-7 py-6 rounded">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <a href="#about" className="flex flex-col items-center text-sm text-slate">
            <span className="text-highlight mb-2">Scroll</span>
            <svg 
              width="16" 
              height="24" 
              viewBox="0 0 16 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0L7 23H9L9 0L7 0Z" 
                fill="#64ffda"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
