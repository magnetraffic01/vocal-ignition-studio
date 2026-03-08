import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "Basic Stock",
    price: "$35",
    originalPrice: "$70",
    savings: "You save $35",
    badge: "FL STOCK ONLY",
    badgeClass: "border border-primary text-primary",
    popular: false,
    headline: "FL Stock Plugins Only. No Extras Needed.",
    subline: "Built entirely with FL Studio's built-in stock plugins — no third-party subscriptions required.",
    wavesNote: "Uses only FL Studio stock plugins — no Waves® or third-party plugins needed.",
    included: [
      "1 Main Vocal Chain (.flp — unmixed/dry routing)",
      "1 Dubs Vocal Chain",
      "1 Adlib Vocal Chain",
      "FL Studio 20 and above compatible",
      "Uses ONLY FL Studio stock plugins",
      "No third-party plugins required",
      "Instant .zip download",
      "Basic README setup file",
    ],
    excluded: [
      "Waves® plugin chains",
      "Mixed/processed chains",
      "PDF setup instructions",
      "1-on-1 live class",
    ],
    cta: "Get Basic Stock — $35 →",
  },
  {
    name: "Basic Waves",
    price: "$50",
    originalPrice: "$97",
    savings: "You save $47",
    badge: "WAVES POWERED",
    badgeClass: "border border-primary text-primary",
    popular: false,
    headline: "Your Vocals. Plug In. Record.",
    subline: "Same routing as Basic Stock — but engineered with Waves® plugins for a higher-quality signal chain.",
    wavesNote: "Requires Waves® plugins (sold separately — not included).",
    included: [
      "1 Main Vocal Chain (.flp — unmixed/dry routing)",
      "1 Dubs Vocal Chain",
      "1 Adlib Vocal Chain",
      "FL Studio 20 and above compatible",
      "Designed for Waves® V14 & V15 plugins",
      "Instant .zip download",
      "Basic README setup file",
    ],
    excluded: [
      "Mixed/processed chains",
      "PDF setup instructions",
      "1-on-1 live class",
    ],
    cta: "Get Basic Waves — $50 →",
  },
  {
    name: "Pro",
    price: "$100",
    originalPrice: "$197",
    savings: "You save $97",
    badge: "⭐ MOST POPULAR",
    badgeClass: "bg-primary text-primary-foreground",
    popular: true,
    headline: "Three Adlib Flavors. Two Dub Chains. Instructions Included.",
    subline: "A full vocal architecture with multiple chain options and a clear PDF guide to get everything working the same day you download it.",
    wavesNote: "Requires Waves® plugins (sold separately — not included).",
    included: [
      "1 Main Vocal Chain (.flp — unmixed)",
      "3 Adlib Chains: Short & Punchy · Wide & Airy · Dark & Low-End",
      "2 Dub Chains: Tight Double + Wide Stereo Double",
      "FL Studio 20 and above compatible",
      "Designed for Waves® V14 & V15 plugins",
      "Instant .zip download",
      "PDF Setup Guide (install, route, troubleshoot, plugin explanations)",
    ],
    excluded: [
      "Mixed/processed chains",
      "1-on-1 live class",
    ],
    cta: "Get Pro — $100 →",
  },
  {
    name: "Premium Plus",
    price: "$350",
    originalPrice: "$597",
    savings: "You save $247",
    badge: "🔥 ALL-INCLUSIVE",
    badgeClass: "bg-gradient-to-r from-primary to-orange-deep text-primary-foreground",
    popular: false,
    headline: "3 Mixed Mains. Master Channel. Live Engineer. One Hour.",
    subline: "We don't just give you the template. We build the session with you live and teach you how to use it — one-on-one.",
    wavesNote: "Requires Waves® plugins (sold separately — not included).",
    included: [
      "3 Main Vocal Chains — FULLY MIXED & PROCESSED",
      "Chain 1: Trap/Hip-Hop (dark, saturated, compressed)",
      "Chain 2: R&B/Pop (smooth, wide, airy)",
      "Chain 3: Drill/Melodic (aggressive, distorted edges)",
      "1 Master Channel Plugin Chain (mix bus processing)",
      "4 Adlib Chains: Short · Whisper · Hype · Melodic",
      "2 Dub Chains — pre-mixed, stereo-spread ready",
      "FL Studio 20 and above compatible",
      "Designed for Waves® V14 & V15 plugins",
      "Organized .zip download — labeled folder structure",
      "Complete PDF Setup Guide",
      "LIVE 1-on-1 CLASS — 1 Hour via Zoom",
      "Calendly booking link sent immediately after purchase",
    ],
    excluded: [],
    cta: "Get Premium Plus — $350 →",
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-sub text-primary uppercase tracking-widest text-sm mb-2">Pricing</p>
        <h2 className="font-display text-5xl md:text-6xl">Pick Your Tier.</h2>
        <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
          One-time purchase. Instant download. FL Studio 20 and above.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`tier-accent card-orange-glow bg-card rounded-lg p-6 md:p-8 relative ${
              tier.popular ? "ring-1 ring-primary scale-[1.02] md:scale-105" : ""
            }`}
          >
            <span className={`inline-block text-xs font-sub font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider ${tier.badgeClass}`}>
              {tier.badge}
            </span>
            {tier.popular && (
              <span className="absolute -top-3 right-6 bg-primary text-primary-foreground font-sub font-bold text-xs px-3 py-1 rounded-full">
                ⭐ MOST POPULAR
              </span>
            )}

            <div className="mb-2">
              <span className="text-muted-foreground line-through text-sm font-body mr-2">{tier.originalPrice}</span>
              <span className="text-primary font-sub text-xs font-bold">{tier.savings}</span>
            </div>
            <h3 className="font-display text-4xl mb-1">{tier.price}</h3>
            <p className="text-muted-foreground text-xs mb-4 font-body">one-time payment</p>
            <h4 className="font-sub text-lg text-foreground mb-1">{tier.headline}</h4>
            <p className="text-muted-foreground text-sm mb-4 font-body">{tier.subline}</p>

            <div className="bg-primary/10 border border-primary/20 rounded-md p-3 mb-6 text-xs text-muted-foreground font-body">
              ⚠ {tier.wavesNote}
            </div>

            <ul className="space-y-2 mb-6">
              {tier.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-body">
                  <Check size={16} className="text-success shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {tier.excluded.length > 0 && (
              <ul className="space-y-2 mb-6">
                {tier.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-body">
                    <X size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <button className="cta-lift w-full bg-primary text-primary-foreground font-sub font-bold py-3 rounded-lg text-base">
              {tier.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
