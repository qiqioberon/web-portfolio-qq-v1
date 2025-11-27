import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tools = [
  "Figma", "Webflow", "React", "TypeScript", "GSAP", 
  "Framer Motion", "Tailwind CSS", "Next.js", "Vercel"
];

const About = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div 
            ref={imageRef}
            className={`relative ${imageVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-card border border-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-muted flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Your Photo</span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`${contentVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Hi, I'm Aqil
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a freelance web designer and frontend developer based in [Your City]. 
                With over 5 years of experience, I've helped startups and established brands 
                create digital experiences that truly resonate with their audiences.
              </p>
              <p>
                My approach combines strategic thinking with creative execution. I believe 
                great design should not only look beautiful but also drive meaningful results 
                for your business.
              </p>
              <p>
                When I'm not pushing pixels or writing code, you'll find me exploring new 
                design trends, contributing to open-source projects, or sharing knowledge 
                with the design community.
              </p>
            </div>

            {/* Tools */}
            <div className="mt-12">
              <h3 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-6">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/50 hover:bg-card/80 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
