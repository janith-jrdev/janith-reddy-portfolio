
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    id: "sportshunt",
    company: "SportsHunt",
    title: "Full Stack Developer Intern",
    date: "Feb 2025 - Present",
    description: [
      "Built scalable applications using Django, Django REST Framework, React, and Vite.js",
      "Started with core HTML, CSS, JavaScript before moving to modern stack",
      "Visited real sports venues to understand industry operations"
    ]
  },
  {
    id: "prodigy",
    company: "Prodigy InfoTech",
    title: "Cybersecurity Intern",
    date: "May 2024 - June 2024",
    description: [
      "Developed Caesar Cipher, Keylogger, and Password Strength Checker using Python",
      "Gained practical exposure to core cybersecurity principles"
    ]
  },
  {
    id: "family",
    company: "Family Business",
    title: "Part-Time",
    date: "Ongoing",
    description: [
      "Managed inventory, accounting, and customer/vendor relationships",
      "Gained real-world insight into operations and client satisfaction"
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("sportshunt");
  
  return (
    <section id="experience" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Work Experience</h2>
        
        <Tabs defaultValue="sportshunt" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="flex mb-8 h-auto p-1 bg-navy-light">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.id}
                value={exp.id}
                className="flex-1 py-3 text-slate data-[state=active]:text-highlight data-[state=active]:shadow-none data-[state=active]:bg-navy"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent 
              key={exp.id}
              value={exp.id}
              className="mt-0 border-l-2 border-highlight pl-6 py-2"
            >
              <h3 className="font-semibold text-xl text-slate-light">
                {exp.title} <span className="text-highlight">@ {exp.company}</span>
              </h3>
              <p className="text-sm font-mono text-slate mb-4">{exp.date}</p>
              <ul className="space-y-3">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-highlight mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
