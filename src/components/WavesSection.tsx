import { motion } from "framer-motion";
import { AlertTriangle, ExternalLink } from "lucide-react";

const WavesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-2 border-primary rounded-lg p-8 md:p-12"
      >
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary font-sub font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <AlertTriangle size={14} /> Required Before You Start
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-4">You Need Waves Plugins to Use These Templates</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-sm">
            All ZvocalShop templates are engineered using Waves Audio V14 &amp; V15 plugins.
            Think of this like buying a car — you need fuel to run it.
            Waves is your fuel. This is not an upsell. It is the professional infrastructure
            every serious producer already has. You are making a one-time investment into tools
            you will use for the rest of your career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-background rounded-lg p-5 border border-border">
            <p className="font-sub text-xs text-primary uppercase tracking-wider mb-1">Step 1 — Free</p>
            <h4 className="font-sub text-lg text-foreground mb-1">Waves Central App</h4>
            <p className="text-primary font-display text-2xl mb-2">FREE</p>
            <p className="text-muted-foreground text-xs font-body">
              The free plugin manager from Waves Audio. Download once, keep forever.
              Install it to activate and manage all your Waves plugins.
            </p>
          </div>
          <div className="bg-background rounded-lg p-5 border border-border">
            <p className="font-sub text-xs text-primary uppercase tracking-wider mb-1">Step 2 — Monthly</p>
            <h4 className="font-sub text-lg text-foreground mb-1">Waves Unlimited Monthly</h4>
            <p className="text-primary font-display text-2xl mb-2">~$13.99/mo</p>
            <p className="text-muted-foreground text-xs font-body">
              Full access to all Waves V14 + V15 plugins. Cancel anytime.
              This subscription powers every chain in every ZvocalShop template.
            </p>
          </div>
          <div className="bg-background rounded-lg p-5 border border-primary/30">
            <p className="font-sub text-xs text-success uppercase tracking-wider mb-1">Best Value — Annual</p>
            <h4 className="font-sub text-lg text-foreground mb-1">Waves Annual Plan</h4>
            <p className="text-primary font-display text-2xl mb-2">~$9.99/mo</p>
            <p className="text-muted-foreground text-xs font-body">
              ~$119/year. Same full access. Save 30% vs monthly.
              Most artists lock this in after the first month.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://www.waves.com/downloads/central"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-lift inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-sub font-bold text-sm px-6 py-3 rounded-lg"
          >
            Download Waves Central — Free <ExternalLink size={14} />
          </a>
          <a
            href="https://www.waves.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-sub font-bold text-sm px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            View Waves Plans <ExternalLink size={14} />
          </a>
        </div>

        <div className="text-center text-xs text-muted-foreground font-body space-y-1">
          <p>Already have Waves? You're ready to go. ✓</p>
          <p>Already have FL Studio? You're ahead of everyone. ✓</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WavesSection;
