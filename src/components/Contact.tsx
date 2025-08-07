import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Gmail compose URL with form data
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=your.email@gmail.com&su=${subject}&body=${body}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');
    
    toast({
      title: "Opening Gmail...",
      description: "A new tab will open with your message ready to send.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "davidedinam35@gmail.com",
      href: "davidedinam35@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+233 54 750 4414",
      href: "tel:+233547504414"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Accra, Ghana",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Davidedinam/Davidedinam",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9JtmUCjAZ9l4BjjR0Zuk9OpmhOjThBpShFtOpQrClQrCBvsClHpmlPnS9LqBYOtChxs6xzrDlxr3RAinhBpShFtOoMfmVLqnhFsSZgt6lDp6BT9z0Kc3RBsCZzkT9D9zROol1Ipl9OpOoZp6Zdr6lisCsCc3RKrSBQqndLk71RrT9D9zAVejAVfmhBt7dBtn5BkCRRjD1RrT9D9DhItm5CpmgZp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9DhKpnhKqjRAinhLr7cCt6NRompBp3RAinhRrTBxr2oOtChxs6xzrDlxr3RBrm5epmtxs2pEt7tLsCsZp4BMs64CdPcRdPAOfmh9rCZFsT9BtyoMcj4ScjkPcj0Nfmh9tipzpm9zozlxoCdCdjgJdS8TeiQToP8QbmkOpCkJcP1Cd3gRpj0Zp4BQu6lQrCZzs",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.davidedinam35@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 section-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-light max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-0 animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full hover-glow"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send via Gmail
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-light leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-light">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    className="hover-glow"
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="card-gradient border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-foreground">Available for freelance</span>
                </div>
                <p className="text-light text-sm">
                  I'm currently accepting new projects and would love to hear about your next venture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;