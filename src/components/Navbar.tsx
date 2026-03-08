import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "💎 Diamond", href: "#diamond", className: "text-diamond" },
    { label: "1-on-1 Class", href: "#session" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#111111]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-primary">
          ZvocalShop
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-sub text-sm uppercase tracking-wider hover:text-primary transition-colors ${
                l.className || "text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="cta-lift bg-primary text-primary-foreground font-sub font-bold text-sm px-5 py-2 rounded-lg"
          >
            Get Started →
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 z-50 flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`font-sub text-2xl uppercase tracking-wider hover:text-primary transition-colors ${
                l.className || "text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="cta-lift bg-primary text-primary-foreground font-sub font-bold text-lg px-8 py-3 rounded-lg"
          >
            Get Started →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
