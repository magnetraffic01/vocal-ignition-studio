import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-24 relative grain-overlay">
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-6xl mb-4">
          Stop Tweaking.<br />
          <span className="text-primary">Start Creating.</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
          Your next track deserves vocals that sound finished — not like a work in progress.
          Plug in a VocalForge template and hear the difference tonight.
        </p>
        <a
          href="#pricing"
          className="cta-lift inline-flex items-center justify-center bg-primary text-primary-foreground font-sub font-bold text-lg px-10 py-4 rounded-lg"
        >
          Get Your Template Now →
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
