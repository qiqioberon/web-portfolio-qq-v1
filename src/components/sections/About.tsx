import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';

const tools = [
  "Figma", "Webflow", "React", "TypeScript", "GSAP", 
  "Framer Motion", "Tailwind CSS", "Next.js", "Vercel"
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation with parallax
      gsap.fromTo(
        imageRef.current,
        { 
          opacity: 0, 
          x: -100,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Image parallax on scroll
      gsap.to(imageRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Content timeline
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      contentTl
        .fromTo(
          labelRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          paragraphsRef.current?.children || [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
          '-=0.5'
        );

      // Tools stagger animation
      gsap.fromTo(
        toolsRef.current?.querySelectorAll('.tool-tag') || [],
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: toolsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-card border border-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-muted flex items-center justify-center">
                <span className="text-muted-foreground text-lg font-mono">Your Photo</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span ref={labelRef} className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block opacity-0">
              About Me
            </span>
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-black mb-8 opacity-0">
              Hi, I'm Aqil
            </h2>
            <div ref={paragraphsRef} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p className="opacity-0">
                I'm a freelance web designer and frontend developer based in [Your City]. 
                With over 5 years of experience, I've helped startups and established brands 
                create digital experiences that truly resonate with their audiences.
              </p>
              <p className="opacity-0">
                My approach combines strategic thinking with creative execution. I believe 
                great design should not only look beautiful but also drive meaningful results 
                for your business.
              </p>
              <p className="opacity-0">
                When I'm not pushing pixels or writing code, you'll find me exploring new 
                design trends, contributing to open-source projects, or sharing knowledge 
                with the design community.
              </p>
            </div>

            {/* Tools */}
            <div ref={toolsRef} className="mt-12">
              <h3 className="text-sm font-mono tracking-wider uppercase text-muted-foreground mb-6">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span 
                    key={tool}
                    className="tool-tag px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/50 hover:bg-card/80 transition-colors cursor-default opacity-0"
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
