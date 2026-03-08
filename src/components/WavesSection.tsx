import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

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
            <AlertTriangle size={14} /> Important Requirement
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Third-Party Plugins Required</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-sm">
            All ZvocalShop templates are built using Waves Audio® V14 &amp; V15 plugins.
            In order for these templates to function correctly, you must own and have
            installed the required Waves plugins <strong>before</strong> purchasing any ZvocalShop template.
          </p>
        </div>

        <div className="bg-background rounded-lg p-6 border border-border mb-8 max-w-2xl mx-auto">
          <h4 className="font-sub text-lg text-foreground mb-3">What You Need</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground">
            <li>• A valid Waves Audio® plugin subscription or license (V14 &amp; V15)</li>
            <li>• The Waves Central application installed on your computer</li>
            <li>• FL Studio 20 or above installed on your computer</li>
          </ul>
          <p className="text-muted-foreground text-xs font-body mt-4">
            Please visit the official Waves Audio® website directly to purchase, download,
            and manage your plugins. ZvocalShop does not sell, distribute, or provide
            Waves plugins in any form.
          </p>
        </div>

        <div className="text-center text-xs text-muted-foreground font-body space-y-1">
          <p>Already have Waves plugins installed? You're ready to go. ✓</p>
          <p>Already have FL Studio? You're ahead of everyone. ✓</p>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-muted-foreground text-[10px] font-body text-center max-w-2xl mx-auto leading-relaxed">
            <strong>DISCLAIMER:</strong> ZvocalShop is <strong>not</strong> an authorized reseller, distributor,
            or certified partner of Waves Audio Ltd. We do not sell, license, or distribute Waves plugins.
            All Waves products must be purchased directly from Waves Audio Ltd. at their official website.
            ZvocalShop takes no responsibility for any issues related to the installation, activation,
            functionality, or compatibility of Waves plugins on your system. If you experience issues
            with Waves plugins, please contact Waves Audio Ltd. support directly.
            Waves®, Waves Central®, and all related product names are trademarks of Waves Audio Ltd.
            FL Studio® is a trademark of Image-Line. All third-party trademarks are the property of their respective owners.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WavesSection;
