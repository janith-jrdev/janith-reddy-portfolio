
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "StoryMeemaw",
    description: "AI-based interactive storyteller with responsive and engaging UI.",
    status: "In Progress",
    tech: ["React", "AI Integration", "UI/UX Design"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "RAG App",
    description: "Built a Retrieval-Augmented Generation app using vector database for contextual semantic search.",
    status: "Completed",
    tech: ["Python", "VectorDB", "Semantic Search"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Automated Fixture Generator",
    description: "Django-based knockout fixture system with support for \"bye\" logic and visual match progression.",
    status: "Completed",
    tech: ["Django", "Python", "UI Design"],
    links: {
      github: "#",
      live: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Notable Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-slate-dark bg-navy-light hover:translate-y-[-5px] transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                    <span className="text-highlight font-bold">{project.title.charAt(0)}</span>
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.links.github} className="text-slate hover:text-highlight">
                      <Github size={20} />
                    </a>
                    <a href={project.links.live} className="text-slate hover:text-highlight">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-slate-light text-xl">{project.title}</CardTitle>
                <div className="flex items-center">
                  <span className={`inline-block w-2 h-2 rounded-full ${project.status === "In Progress" ? "bg-yellow-400" : "bg-green-400"} mr-2`}></span>
                  <CardDescription className="text-sm">{project.status}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate">{project.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-navy rounded text-highlight">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate mb-6">Interested in more of my work?</p>
          <Button className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10">
            <a 
              href="https://github.com/janith-jrdev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View More on GitHub <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
