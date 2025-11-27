const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Aqil. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a href="#works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Works
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
