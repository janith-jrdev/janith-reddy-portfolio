
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-slate">
            <p className="mb-4">
              I'm a passionate <span className="highlight-text">Computer Science & Mathematics student</span> with hands-on experience in full-stack web development, 
              cybersecurity, and AI applications. My journey in tech began with fundamental languages and has expanded to 
              building versatile applications.
            </p>
            <p className="mb-4">
              At <span className="highlight-text">Christ University, Bangalore</span>, I'm gaining strong theoretical foundations while actively applying my skills 
              through internships and projects. I believe in learning by doing and am constantly working on innovative solutions.
            </p>
            <p>
              Beyond academics, I've gained real-world insights through my part-time work in our family business, 
              where I've developed skills in inventory management, accounting, and customer relations. This experience has given me 
              a unique perspective on how technology and business operations intersect.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-slate-light mb-6">Education</h3>
            <div className="space-y-6">
              <Card className="border-slate-dark bg-navy-light">
                <CardContent className="p-6">
                  <p className="text-highlight font-mono text-sm mb-1">2023 - Present</p>
                  <h4 className="text-slate-light font-semibold text-lg mb-2">Bachelor of Science in Computer Science and Mathematics</h4>
                  <p className="text-slate">Christ University, Bangalore</p>
                  <div className="mt-4">
                    <p className="text-sm text-slate">Relevant courses:</p>
                    <ul className="grid grid-cols-2 gap-2 mt-2">
                      <li className="text-sm text-slate">• Data Structures</li>
                      <li className="text-sm text-slate">• C Programming</li>
                      <li className="text-sm text-slate">• Java</li>
                      <li className="text-sm text-slate">• MySQL</li>
                      <li className="text-sm text-slate">• Python for Data Analysis</li>
                      <li className="text-sm text-slate">• Calculus</li>
                      <li className="text-sm text-slate">• Algebra</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-slate-dark bg-navy-light">
                <CardContent className="p-6">
                  <p className="text-highlight font-mono text-sm mb-1">Previous</p>
                  <h4 className="text-slate-light font-semibold text-lg mb-2">High School</h4>
                  <p className="text-slate">Sri Chaitanya Techno School</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
