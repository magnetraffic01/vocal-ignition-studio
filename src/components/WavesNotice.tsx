import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle } from "lucide-react";

const WavesNotice = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-secondary border border-border rounded-lg p-6 md:p-8 my-8"
  >
    <div className="flex items-start gap-3 mb-4">
      <AlertTriangle className="text-primary shrink-0 mt-1" size={22} />
      <div>
        <span className="inline-block bg-primary/20 text-primary font-sub font-bold text-xs px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
          Required
        </span>
        <h4 className="text-xl text-foreground">Waves Subscription Required</h4>
      </div>
    </div>
    <p className="text-muted-foreground font-body text-sm mb-4">
      All VocalForge templates are engineered using Waves Audio plugins. To use these templates at full functionality, you need:
    </p>
    <div className="space-y-4">
      <div className="bg-background rounded-md p-4 border border-border">
        <p className="font-sub font-bold text-foreground mb-1">Step 1 — Download Waves Central (Free)</p>
        <p className="text-muted-foreground text-sm mb-2">
          Waves Central is the free plugin manager. Install it to activate and manage your Waves plugins.
        </p>
        <a
          href="https://www.waves.com/downloads/central"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary text-sm font-sub font-bold hover:underline"
        >
          Download Waves Central — Free <ExternalLink size={14} />
        </a>
      </div>
      <div className="bg-background rounded-md p-4 border border-border">
        <p className="font-sub font-bold text-foreground mb-1">Step 2 — Subscribe to Waves</p>
        <p className="text-muted-foreground text-sm mb-3">
          This gives you access to ALL Waves V14 + V15 plugins used in every VocalForge template.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 text-sm text-foreground font-body">
          <span className="bg-muted px-3 py-1.5 rounded">Monthly: ~$13.99/mo</span>
          <span className="bg-muted px-3 py-1.5 rounded">Annual: ~$119/yr (~$9.99/mo)</span>
        </div>
        <a
          href="https://www.waves.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary text-sm font-sub font-bold mt-3 hover:underline"
        >
          Get Waves Subscription → <ExternalLink size={14} />
        </a>
        <p className="text-muted-foreground text-xs mt-2 italic">
          Waves subscription is a separate purchase not included in VocalForge template pricing.
        </p>
      </div>
    </div>
  </motion.div>
);

export default WavesNotice;
