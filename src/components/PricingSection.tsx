import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import WavesNotice from "./WavesNotice";

const tiers = [
  {
    name: "Basic",
    price: "$50",
    badge: "START HERE",
    badgeClass: "bg-muted text-foreground",
    popular: false,
    headline: "Your Vocals. Plug In. Record.",
    subline: "Everything you need to start recording — raw and ready.",
    included: [
      "1 Main Vocal Chain (.flp mixer template)",
      "1 Dubs (Doubles) Vocal Chain",
      "1 Adlibs Vocal Chain",
      "All chains are UNMIXED / DRY (pure routing)",
      "Compatible: FL Studio 20+ (incl. FL Studio 2025)",
      "Waves V14 + V15 routing pre-wired",
      "Instant digital download (.zip)",
      "Basic setup README text file included",
    ],
    excluded: [
      "No mixing or processing applied",
      "No instructions or tutorials",
      "No personalized support",
    ],
    bestFor: "Producers who already know FL Studio and just need a clean starting chain — no fluff, just routing.",
    cta: "Get Basic — $50 →",
    totalCost: "~$64 first month (incl. ~$14/mo Waves)",
  },
  {
    name: "Pro",
    price: "$100",
    badge: "MOST POPULAR",
    badgeClass: "bg-primary text-primary-foreground",
    popular: true,
    headline: "Three Adlib Flavors. Two Dub Chains. Instructions Included.",
    subline: "A full vocal architecture — built for artists who want options.",
    included: [
      "1 Main Vocal Chain (.flp mixer template, unmixed)",
      "3 Adlib Vocal Chains (Short & punchy · Wide & airy · Dark & low-end)",
      "2 Dub (Doubles) Vocal Chains (tight + wide double)",
      "Compatible: FL Studio 20+ (incl. FL Studio 2025)",
      "Waves V14 + V15 routing pre-wired",
      "Instant digital download (.zip)",
      "Step-by-Step PDF Setup Guide included",
      "Written walkthrough for every chain explaining each plugin",
    ],
    excluded: [],
    bestFor: "Artists who want a full vocal session setup with multiple chain options and clear instructions to get it working the same day.",
    cta: "Get Pro — $100 →",
    totalCost: "~$114 first month (incl. ~$14/mo Waves)",
  },
  {
    name: "Premium Plus",
    price: "$350",
    badge: "ALL-INCLUSIVE",
    badgeClass: "bg-accent text-accent-foreground",
    popular: false,
    headline: "3 Mixed Mains. Master Channel. Live 1-on-1 Class. Done.",
    subline: "We don't just give you the template. We build it with you and teach you how to use it — in one live session.",
    included: [
      "3 Main Vocal Plugin Chains — FULLY MIXED & PROCESSED",
      "Chain 1: Trap/Hip-Hop (dark, saturated, compressed)",
      "Chain 2: R&B/Pop (smooth, wide, airy)",
      "Chain 3: Drill/Melodic (aggressive, distorted, tuned)",
      "1 Master Channel Plugin Chain (final mix bus)",
      "2 Dub (Doubles) Chains (pre-mixed, stereo-spread)",
      "4 Adlib Chains (Short · Whisper · Hype · Melodic)",
      "Live 1-on-1 setup session via video call",
      "Lifetime support & future template updates",
    ],
    excluded: [],
    bestFor: "Artists who want everything done — fully mixed templates, a master chain, and a live session so you know exactly how to use it all.",
    cta: "Get Premium Plus — $350 →",
    totalCost: "~$364 first month (incl. ~$14/mo Waves)",
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
        <p className="font-sub text-primary uppercase tracking-widest text-sm mb-2">Choose Your Template</p>
        <h2 className="font-display text-5xl md:text-6xl">Pick Your Path</h2>
        <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
          Every hero needs the right tools. Choose the tier that matches where you are — and where you're headed.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
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
            <h3 className="font-display text-4xl mb-1">{tier.price}</h3>
            <p className="text-muted-foreground text-xs mb-4 font-body">one-time payment</p>
            <h4 className="font-sub text-lg text-foreground mb-1">{tier.headline}</h4>
            <p className="text-muted-foreground text-sm mb-6 font-body">{tier.subline}</p>

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

            <p className="text-xs text-muted-foreground mb-4 font-body italic">
              Best for: {tier.bestFor}
            </p>
            <p className="text-xs text-muted-foreground mb-4 font-body">
              Est. total: {tier.totalCost}
            </p>

            <button className="cta-lift w-full bg-primary text-primary-foreground font-sub font-bold py-3 rounded-lg text-base">
              {tier.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6 font-body">
        After first month, only the Waves subscription renews at ~$14/mo.
      </p>

      <WavesNotice />
    </div>
  </section>
);

export default PricingSection;
