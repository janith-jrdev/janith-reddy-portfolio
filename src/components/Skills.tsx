
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, FileCode, FileText } from "lucide-react";

const skillCategories = [
  {
    name: "Languages",
    icon: <Code className="w-5 h-5 text-highlight" />,
    skills: [
      { name: "Python", proficiency: 85 },
      { name: "JavaScript", proficiency: 80 },
      { name: "C", proficiency: 70 },
      { name: "Java", proficiency: 60 }
    ]
  },
  {
    name: "Web Technologies",
    icon: <FileCode className="w-5 h-5 text-highlight" />,
    skills: [
      { name: "HTML & CSS", proficiency: 85 },
      { name: "React", proficiency: 75 },
      { name: "Django", proficiency: 80 },
      { name: "Flask", proficiency: 65 }
    ]
  },
  {
    name: "Database",
    icon: <Database className="w-5 h-5 text-highlight" />,
    skills: [
      { name: "MySQL", proficiency: 75 },
      { name: "VectorDB", proficiency: 65 }
    ]
  },
  {
    name: "Mathematics",
    icon: <Code className="w-5 h-5 text-highlight" />,
    skills: [
      { name: "Calculus", proficiency: 80 },
      { name: "Algebra", proficiency: 75 }
    ]
  },
  {
    name: "Tools & Others",
    icon: <FileText className="w-5 h-5 text-highlight" />,
    skills: [
      { name: "Git", proficiency: 80 },
      { name: "VSCode", proficiency: 85 },
      { name: "Postman", proficiency: 75 },
      { name: "Django REST Framework", proficiency: 70 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-slate-dark bg-navy-light">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 gap-3">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-slate-light">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-light">{skill.name}</span>
                        <span className="text-xs text-highlight">{skill.proficiency}%</span>
                      </div>
                      <Progress 
                        value={skill.proficiency} 
                        className="h-1.5 bg-navy [&>div]:bg-highlight" 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-slate-light mb-6 text-center">Achievements</h3>
          <Card className="border-slate-dark bg-navy-light max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6 p-4">
                <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-highlight font-bold">VIT</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-light">Vellore Institute of Technology (VIT) – Startup Recognition</h4>
                  <p className="text-slate mt-2">
                    Recognized for "Emerging Startup" idea, awarded ₹20,000.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-slate-light mb-6 text-center">Certifications</h3>
          <div className="flex justify-center">
            <Card className="border-slate-dark bg-navy-light max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-highlight font-bold">IS</span>
                  </div>
                  <div>
                    <h4 className="text-slate-light font-medium">Infosys Springboard</h4>
                    <p className="text-slate text-sm">Working in Excel</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
