import { motion } from "framer-motion";
import { Monitor, Mic } from "lucide-react";

const SessionSection = () => (
  <section id="session" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-sub text-primary uppercase tracking-widest text-sm mb-2">Premium Plus &amp; Diamond Only</p>
        <h2 className="font-display text-5xl md:text-6xl">Your Personal 1-on-1 Session</h2>
        <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
          One session. Everything installed, working, and your first professional vocal recorded.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tier-accent card-orange-glow bg-card rounded-lg p-6"
        >
          <Monitor size={28} className="text-primary mb-4" />
          <h4 className="font-sub text-xl text-foreground mb-3">Part 1 — Installation</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground mb-4">
            <li>→ Load .zip into FL Studio</li>
            <li>→ Verify your plugins are activated and functioning</li>
            <li>→ Configure mic input and audio interface routing</li>
            <li>→ Confirm all chains functioning correctly</li>
            <li>→ Live Q&amp;A on your specific setup</li>
          </ul>
          <p className="text-xs text-muted-foreground font-body italic">
            30 min (Premium Plus) · 60 min (Diamond)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="tier-accent card-orange-glow bg-card rounded-lg p-6"
        >
          <Mic size={28} className="text-primary mb-4" />
          <h4 className="font-sub text-xl text-foreground mb-3">Part 2 — Record &amp; Mix</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground mb-4">
            <li>→ Record first take into the Main Vocal chain</li>
            <li>→ Understand signal flow through the FL Studio mixer</li>
            <li>→ Adjust mix to YOUR voice — gain staging, EQ tweaks</li>
            <li>→ Record adlibs and dubs with proper mic technique</li>
            <li>→ Export settings for professional-quality bounce</li>
            <li>→ Walk away with a finished, bounced vocal take</li>
          </ul>
          <p className="text-xs text-muted-foreground font-body italic">
            30 min (Premium Plus) · 60 min (Diamond)
          </p>
        </motion.div>
      </div>

      <p className="text-center text-muted-foreground text-sm font-body mb-6">
        After purchase you receive a Calendly link to schedule your session at a time that works for you.
      </p>
      <p className="text-center text-muted-foreground text-xs font-body mb-6 italic max-w-2xl mx-auto">
        Note: You must have FL Studio and Waves® plugins installed before your session.
        ZvocalShop does not provide or install third-party software — these must be purchased directly from their vendors.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#pricing" className="cta-lift inline-flex items-center justify-center bg-primary text-primary-foreground font-sub font-bold text-base px-6 py-3 rounded-lg">
          Get Premium Plus — $350
        </a>
        <button
          className="cta-diamond inline-flex items-center justify-center font-sub font-bold text-base px-6 py-3 rounded-lg"
          style={{ background: "linear-gradient(90deg,#b8a9c9,#e0d4f7,#b8a9c9)", color: "#0F0F1A" }}
        >
          Get Diamond — $500 💎
        </button>
      </div>
    </div>
  </section>
);

export default SessionSection;
