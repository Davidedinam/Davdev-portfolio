
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            
            <div className="animate-fade-in-up delay-200">
              <p className="text-xl sm:text-2xl lg:text-3xl text-accent mb-4 font-medium">
                Frontend Developer | Creative Technologist
              </p>
            </div>
            
            <div className="animate-fade-in-up delay-400">
              <p className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Crafting beautiful and functional user experiences with modern web technologies.
                Passionate about creating digital solutions that make a difference.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 text-lg group"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up delay-800 flex justify-center lg:justify-start space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary hover:bg-accent/20 hover:scale-110 transition-all duration-300 p-3"
                aria-label="GitHub"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary hover:bg-accent/20 hover:scale-110 transition-all duration-300 p-3"
                aria-label="LinkedIn"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary hover:bg-accent/20 hover:scale-110 transition-all duration-300 p-3"
                aria-label="Email"
                asChild
              >
                <a href="davidedinam35@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Animated Tech Visual */}
          <div className="animate-fade-in-up delay-300 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-96 flex items-center justify-center">
              {/* Central glowing orb */}
              <div className="absolute w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse shadow-[0_0_50px_rgba(255,215,0,0.5)] hover:scale-110 transition-all duration-300"></div>
              
              {/* Rotating rings */}
              <div className="absolute w-64 h-64 border-2 border-primary/30 rounded-full animate-spin hover:border-primary/50 transition-all duration-300" style={{animationDuration: '20s'}}></div>
              <div className="absolute w-48 h-48 border-2 border-accent/40 rounded-full animate-spin hover:border-accent/60 transition-all duration-300" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              
              {/* Floating code symbols */}
              <div className="absolute w-full h-full">
                <div className="absolute top-8 left-8 text-primary text-2xl font-mono animate-bounce hover:scale-125 transition-all duration-300 cursor-default" style={{animationDelay: '0s'}}>{'<>'}</div>
                <div className="absolute top-16 right-12 text-accent text-xl font-mono animate-bounce hover:scale-125 transition-all duration-300 cursor-default" style={{animationDelay: '0.5s'}}>{'{ }'}</div>
                <div className="absolute bottom-20 left-16 text-primary text-lg font-mono animate-bounce hover:scale-125 transition-all duration-300 cursor-default" style={{animationDelay: '1s'}}>{'</>'}</div>
                <div className="absolute bottom-8 right-8 text-accent text-2xl font-mono animate-bounce hover:scale-125 transition-all duration-300 cursor-default" style={{animationDelay: '1.5s'}}>{'()'}</div>
                <div className="absolute top-1/2 left-4 text-primary/70 text-sm font-mono animate-bounce hover:scale-125 transition-all duration-300 cursor-default" style={{animationDelay: '2s'}}>{'[ ]'}</div>
                <div className="absolute top-1/3 right-4 text-accent/70 text-sm font-mono animate-bounce hover:scale-125 transition-all duration-300 cursor-default" style={{animationDelay: '2.5s'}}>{'=>'}</div>
              </div>
              
              {/* Orbiting dots */}
              <div className="absolute w-80 h-80 animate-spin" style={{animationDuration: '25s'}}>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 hover:scale-150 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 hover:scale-150 transition-all duration-300"></div>
                <div className="absolute left-0 top-1/2 w-3 h-3 bg-primary/70 rounded-full transform -translate-y-1/2 hover:scale-150 transition-all duration-300"></div>
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-accent/70 rounded-full transform -translate-y-1/2 hover:scale-150 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-all duration-300 cursor-pointer" onClick={scrollToProjects}>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-primary transition-all duration-300">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
