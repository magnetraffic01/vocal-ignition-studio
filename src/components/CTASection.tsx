import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-24 relative grain-overlay">
    {/* Radial orange glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,94,0,0.08)_0%,transparent_70%)]" />

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-7xl mb-4">
          STOP SOUNDING LIKE<br />
          <span className="text-primary">A DEMO TRACK.</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
          Pick your tier. Download your .zip. Load it into FL Studio.
          Record tonight with a chain that sounds like a real engineer built it
          — because one did.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <a href="#pricing" className="inline-flex items-center justify-center bg-secondary text-foreground font-sub font-bold text-sm px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
            Basic — $50
          </a>
          <a href="#pricing" className="cta-lift inline-flex items-center justify-center bg-primary text-primary-foreground font-sub font-bold text-sm px-6 py-3 rounded-lg">
            Pro — $100 ⭐
          </a>
          <a href="#pricing" className="cta-lift inline-flex items-center justify-center font-sub font-bold text-sm px-6 py-3 rounded-lg text-primary-foreground" style={{ background: "linear-gradient(90deg, hsl(21 100% 50%), #CC4A00)" }}>
            Premium Plus — $350 🔥
          </a>
          <a
            href="#diamond"
            className="cta-diamond inline-flex items-center justify-center font-sub font-[800] text-sm px-6 py-3 rounded-lg"
            style={{ background: "linear-gradient(90deg,#b8a9c9,#e0d4f7,#b8a9c9)", color: "#0F0F1A" }}
          >
            Diamond — $500 💎
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-body text-muted-foreground">
          <span>✓ 30-Day Satisfaction Guarantee</span>
          <span>✓ Instant Download</span>
          <span>✓ FL Studio 20+ Compatible</span>
          <span>✓ Commercial License Included</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
