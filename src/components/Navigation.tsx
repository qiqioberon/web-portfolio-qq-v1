import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { gsap } from '@/hooks/useGSAP';

const navLinks = [
  { name: 'Works', href: '/#works' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Templates', href: '/#templates' },
  { name: 'Contact', href: '/#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Entrance animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          linksRef.current?.children || [],
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.3'
        );
    }, navRef);

    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Magnetic effect on links
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(link, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a ref={logoRef} href="/" className="text-2xl font-black opacity-0">
          <img src="/logo/dark.svg" alt="Qiqi's Logo" className="w-8 h-8 inline-block mr-2" />
        </a>

        {/* Desktop Navigation */}
        <nav ref={linksRef} className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors opacity-0"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          ref={ctaRef}
          href="/#contact"
          className={buttonVariants({ size: 'sm', className: 'hidden md:inline-flex glow-sm opacity-0' })}
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className={buttonVariants({ size: 'sm', className: 'mt-4 glow-sm' })}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
