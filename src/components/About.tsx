
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern web frameworks. Creating responsive and performant user interfaces."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting beautiful, intuitive designs with attention to user experience and accessibility principles."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and seamless user interactions across all devices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver high-quality digital solutions."
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Element */}
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <img 
                  src="/images/about.png"
                  alt="David Edinam"
                  className="w-full h-full object-cover rounded-xl shadow-elegant transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Passionate Frontend Developer
              </h3>
              <p className="text-lg text-light leading-relaxed mb-6">
                With over 3 years of experience in frontend development, I specialize in creating 
                exceptional digital experiences that combine beautiful design with robust functionality. 
                My journey in web development started with a fascination for how code can bring creative 
                visions to life.
              </p>
              <p className="text-lg text-light leading-relaxed">
                I believe in the power of clean code, user-centered design, and continuous learning. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring aspiring developers in the community.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="card-gradient border-0 hover-lift animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h5 className="font-semibold text-foreground mb-2">{skill.title}</h5>
                <p className="text-sm text-light leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
