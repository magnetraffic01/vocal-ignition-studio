const FooterSection = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-6">
      {/* Newsletter */}
      <div className="text-center mb-12 pb-12 border-b border-border">
        <h3 className="font-display text-3xl mb-2">Get free vocal tips + new template drops</h3>
        <div className="flex gap-2 max-w-md mx-auto mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="cta-lift bg-primary text-primary-foreground font-sub font-bold text-sm px-5 py-2.5 rounded-lg">
            Subscribe →
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl text-primary mb-2">ZvocalShop</h3>
          <p className="text-muted-foreground text-sm font-body mb-3">
            Engineer-built FL Studio vocal templates for independent artists. Sound professional from day one.
          </p>
        </div>

        {/* Templates */}
        <div>
          <h4 className="font-sub text-sm uppercase tracking-wider text-foreground mb-3">Templates</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground">
            <li><a href="#pricing" className="hover:text-primary transition-colors">Basic — $50</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pro — $100</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Premium Plus — $350</a></li>
            <li><a href="#diamond" className="hover:text-diamond transition-colors text-diamond">Diamond — $500 💎</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-sub text-sm uppercase tracking-wider text-foreground mb-3">Resources</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground">
            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#zip-tree" className="hover:text-primary transition-colors">What's in the .zip</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-sub text-sm uppercase tracking-wider text-foreground mb-3">Company</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="border border-border rounded-lg p-4 mb-8">
        <p className="text-muted-foreground text-[10px] font-body leading-relaxed text-center">
          <strong>LEGAL DISCLAIMER:</strong> ZvocalShop is an independent business and is <strong>not</strong> an authorized
          reseller, certified seller, distributor, or official partner of Waves Audio Ltd., Image-Line, or Focusrite plc.
          ZvocalShop sells vocal templates, setup guidance, and session time only. We do not sell, distribute, or provide
          Waves® plugins, FL Studio® licenses, or any third-party software or hardware.
          All third-party products referenced on this website must be purchased directly from their respective vendors.
          ZvocalShop takes <strong>no responsibility</strong> for any issues related to the installation, activation,
          functionality, compatibility, or performance of Waves® plugins, FL Studio®, or any other third-party software
          or hardware on your system. If you experience issues with third-party products, please contact the respective
          vendor's support directly. Waves®, Waves Central®, and all related names are trademarks of Waves Audio Ltd.
          FL Studio® is a trademark of Image-Line. Focusrite® and Scarlett® are trademarks of Focusrite plc.
          All third-party product names and trademarks are the property of their respective owners and are used here
          for informational purposes only. Use of these names does not imply endorsement, sponsorship, or affiliation.
        </p>
      </div>

      <div className="section-divider mb-6" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground font-body">
        <p>© {new Date().getFullYear()} ZvocalShop. All rights reserved.</p>
        <p>Built for independent artists. FL Studio 20 and above.</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
