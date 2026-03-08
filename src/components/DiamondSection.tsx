import { motion } from "framer-motion";
import { Check } from "lucide-react";

const leftItems = [
  "3 Fully Mixed Main Vocal Chains (Trap · R&B · Drill)",
  "1 Master Channel Chain",
  "4 Adlib Chains (Short · Whisper · Hype · Melodic)",
  "2 Dub Chains pre-mixed",
  "Organized .zip download",
  "Complete PDF Setup Guide",
  "FL Studio 20 and above compatible",
  "Waves V14 & V15 pre-wired and pre-mixed",
  "Live 2-Hour Zoom Session",
  "Calendly booking link sent immediately",
  "Personalized hardware shopping list with direct links",
];

const shoppingList = [
  { name: "FL Studio Producer Edition", price: "~$199", note: "purchased directly from image-line.com" },
  { name: "Focusrite Scarlett Solo Studio Pack", price: "~$120", note: "interface + condenser mic + headphones" },
  { name: "1TB External Hard Drive", price: "~$55", note: "for vocal takes, sessions & project backups" },
  { name: "Waves Monthly Subscription", price: "~$14/mo", note: "required — purchased at waves.com/subscribe" },
];

const scenarios = [
  { title: "If you already own FL Studio", savings: "Save ~$199", note: "Your hardware total drops significantly" },
  { title: "If you already own an audio interface", savings: "Save ~$120", note: "Skip the Scarlett if you have a working interface" },
  { title: "If you already have Waves", savings: "Save ~$14/mo", note: "No subscription needed — you are already set" },
];

const DiamondSection = () => (
  <section id="diamond" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[860px] mx-auto rounded-lg p-8 md:p-12 card-diamond-glow relative"
        style={{
          background: "#0F0F1A",
          border: "2px solid rgba(184,169,201,0.4)",
          borderTop: "4px solid #C9B8E8",
        }}
      >
        {/* Badge */}
        <div className="text-center mb-8">
          <span
            className="inline-block text-xs font-sub font-[800] px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider"
            style={{
              background: "linear-gradient(90deg,#b8a9c9,#e0d4f7,#b8a9c9)",
              color: "#0F0F1A",
            }}
          >
            💎 DIAMOND — Complete Setup
          </span>

          <div className="mb-2">
            <span className="text-muted-foreground line-through text-sm font-body mr-2">$950</span>
          </div>
          <h3 className="font-display text-5xl md:text-6xl text-diamond">$500</h3>
          <p className="text-muted-foreground text-xs mt-2 font-body">
            + Hardware purchased separately (~$350–450 depending on your choices and what you already own)
          </p>
        </div>

        <h2 className="font-display text-3xl md:text-4xl text-center mb-4" style={{ color: "#E0D4F7" }}>
          FROM NOTHING TO A PROFESSIONAL RECORDING SETUP. IN ONE SESSION.
        </h2>
        <p className="text-muted-foreground font-body text-sm text-center max-w-2xl mx-auto mb-6">
          Everything in Premium Plus — plus a curated hardware shopping list and a 2-hour live Zoom session
          where we install everything together, configure your audio interface, load all templates,
          and record your first professional vocal. This is not just a product.
          It is the foundation of your entire career as a recording artist.
        </p>

        {/* Info note */}
        <div className="rounded-lg p-4 mb-8 text-sm font-body text-muted-foreground" style={{ border: "1px solid rgba(184,169,201,0.3)", background: "rgba(184,169,201,0.05)" }}>
          💡 After your Diamond purchase, you receive a personalized hardware shopping list with direct purchase links.
          You buy the hardware independently. We then schedule your 2-hour Zoom session and build everything together, live.
          Waves subscription (~$13.99/mo) also required and purchased separately.
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="font-sub text-lg text-diamond mb-4">Everything in Premium Plus</h4>
            <ul className="space-y-2">
              {leftItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-body">
                  <Check size={16} className="text-diamond shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg p-5" style={{ background: "#0a0a12", border: "1px solid rgba(184,169,201,0.3)" }}>
            <h4 className="font-sub text-lg text-diamond mb-1">💎 What You'll Purchase Separately</h4>
            <p className="text-muted-foreground text-xs font-body mb-4">
              We recommend the best products in our professional opinion.
              You own every license, every piece of hardware — forever.
            </p>
            <div className="space-y-3">
              {shoppingList.map((item) => (
                <div key={item.name} className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground text-sm font-body">{item.name}</p>
                    <p className="text-muted-foreground text-xs font-body">({item.note})</p>
                  </div>
                  <span className="text-diamond font-sub font-bold text-sm shrink-0 ml-4">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-3" style={{ borderColor: "rgba(184,169,201,0.2)" }}>
              <div className="flex justify-between">
                <span className="font-sub font-bold text-foreground text-sm">Est. Hardware Total:</span>
                <span className="text-diamond font-sub font-bold">~$374–450</span>
              </div>
              <p className="text-muted-foreground text-xs font-body mt-1">
                Exact prices vary by retailer and availability. Direct purchase links sent after your Diamond purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Price Variance */}
        <div className="rounded-lg p-6 mb-8" style={{ borderLeft: "4px solid #C9B8E8", background: "rgba(184,169,201,0.05)" }}>
          <h4 className="font-sub text-lg text-foreground mb-3">📊 Why the Total Investment Varies — Read This</h4>
          <p className="text-muted-foreground text-sm font-body mb-3">
            The hardware costs above are estimates based on our recommended products.
            Your actual total depends on the choices you make — which retailer you use,
            which FL Studio edition you select, and what you already own. No two setups
            cost exactly the same, and that is completely normal.
          </p>
          <p className="text-muted-foreground text-sm font-body mb-4">
            We provide you with a personalized shopping list after your Diamond purchase with
            direct links to the exact products we recommend at that moment in time, so you always
            get the right version at the best available price.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {scenarios.map((s) => (
              <div key={s.title} className="rounded-lg p-4" style={{ background: "#0a0a12", border: "1px solid rgba(184,169,201,0.2)" }}>
                <p className="text-foreground text-sm font-body font-medium mb-1">{s.title}</p>
                <p className="text-diamond font-sub font-bold text-lg">{s.savings}</p>
                <p className="text-muted-foreground text-xs font-body">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-xs font-body mt-3 italic">
            Prices are estimates as of 2025 and vary by retailer, region, and availability.
          </p>
        </div>

        {/* Licensing */}
        <div className="tier-accent rounded-lg p-6 mb-8 bg-card">
          <h4 className="font-sub text-lg text-foreground mb-3">⚖️ What ZvocalShop Provides — And What We Cannot</h4>
          <p className="text-muted-foreground text-sm font-body mb-3">
            ZvocalShop sells vocal templates, guidance, and our time. We cannot and do not provide
            FL Studio licenses or Waves plugins as part of any purchase. FL Studio is a licensed
            software product owned by Image-Line. Waves plugins are licensed products owned by
            Waves Audio Ltd. Both must be purchased directly by you from their respective companies.
          </p>
          <p className="text-muted-foreground text-sm font-body mb-3">
            This is not a limitation — this is the right way to do it. When you purchase your own
            license, you own it. No one can take it away from you. We are your setup crew.
            The tools are yours to keep forever. Our job is to guide you to the best products
            available and show you exactly how to use them.
          </p>
          <p className="text-muted-foreground text-xs font-body italic">
            ZvocalShop is not affiliated with Image-Line, Waves Audio Ltd., or Focusrite plc.
            All third-party product names and trademarks are the property of their respective owners.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="cta-diamond inline-flex items-center justify-center font-sub font-[800] text-lg px-9 py-4 rounded-lg"
            style={{
              background: "linear-gradient(90deg,#b8a9c9,#e0d4f7,#b8a9c9)",
              color: "#0F0F1A",
            }}
          >
            Get Diamond — $500 💎
          </button>
          <p className="text-muted-foreground text-xs font-body mt-3">
            Calendly session link sent immediately after purchase · 2-hour Zoom session · Hardware shopping list included
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DiamondSection;
