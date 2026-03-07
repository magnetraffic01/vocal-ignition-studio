const FooterSection = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-display text-2xl text-primary">VocalForge</h3>
          <p className="text-muted-foreground text-sm font-body mt-1">
            Engineer-Built Vocal Templates for FL Studio.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-sub text-muted-foreground">
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
      </div>
      <div className="section-divider my-6" />
      <p className="text-center text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} VocalForge. All rights reserved. FL Studio is a trademark of Image-Line. Waves is a trademark of Waves Audio.
      </p>
    </div>
  </footer>
);

export default FooterSection;
