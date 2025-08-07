import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} DavDev</span>
            <span>Made with</span>
           
            <span></span>
            <Code className="w-4 h-4 text-primary" />
          </div>

          {/* Signature */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              
            </p>
            <p className="text-xs text-light">
             Trust the process.
            </p>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            scoll to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;