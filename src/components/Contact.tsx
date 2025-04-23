
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mx-auto">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-slate-light mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-slate">Email</p>
                  <a 
                    href="mailto:janith.reddy@bsccmh.christuniversity.in" 
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    janith.reddy@bsccmh.christuniversity.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-slate">Phone</p>
                  <a 
                    href="tel:+916361106724" 
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    +91 6361106724
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-slate">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/janithreddy/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    linkedin.com/in/janithreddy
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                  <Github className="w-5 h-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-slate">GitHub</p>
                  <a 
                    href="https://github.com/janith-jrdev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    github.com/janith-jrdev
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Card className="border-slate-dark bg-navy-light p-4">
                <CardContent className="p-2">
                  <h4 className="text-slate-light font-semibold mb-2">Location</h4>
                  <p className="text-slate">Bangalore, India</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-slate-light mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-slate-light">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-navy-light border-slate-dark text-slate focus:border-highlight"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-slate-light">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-navy-light border-slate-dark text-slate focus:border-highlight"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-slate-light">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="bg-navy-light border-slate-dark text-slate focus:border-highlight"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-slate-light">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={6} 
                  className="bg-navy-light border-slate-dark text-slate focus:border-highlight resize-none"
                />
              </div>
              
              <Button className="w-full bg-highlight text-navy hover:bg-highlight/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
