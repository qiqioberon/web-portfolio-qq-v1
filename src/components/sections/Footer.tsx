const footerLinks = [
  { name: "Works", href: "/#works" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Templates", href: "/#templates" },
  { name: "Contact", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Aqil. All rights reserved.</p>
        <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
