import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Mail, ArrowUpRight, Twitter, Dribbble, Github, Linkedin } from 'lucide-react';

const socials = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Dribbble', icon: Dribbble, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          ref={ref}
          className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Have a project in mind or just want to chat? I'm always excited to connect 
            with fellow creatives and explore new opportunities.
          </p>

          {/* Email CTA */}
          <div className="mb-16">
            <a 
              href="mailto:hello@aqil.dev" 
              className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-primary transition-colors"
            >
              <Mail className="w-8 h-8" />
              hello@aqil.dev
              <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
