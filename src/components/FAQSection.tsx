import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this compatible with FL Studio 20?",
    a: "Yes. All ZvocalShop templates are fully compatible with FL Studio 20 and all versions above including FL Studio 2025. Any version numbered 20 or higher loads these templates correctly.",
  },
  {
    q: "Do I need Waves® plugins to use these templates?",
    a: "Yes. Waves® plugins (V14 and V15) are required for all templates to function correctly. You must purchase and install Waves plugins directly from Waves Audio Ltd. before using any ZvocalShop template. ZvocalShop does not sell, distribute, or provide Waves plugins.",
  },
  {
    q: "Where do I get Waves® plugins?",
    a: "Waves plugins must be purchased directly from Waves Audio Ltd. through their official website. ZvocalShop is not an authorized reseller or distributor of Waves products. Please visit the Waves Audio website for pricing, plans, and support.",
  },
  {
    q: "What is the total cost to get started for each tier?",
    a: "The ZvocalShop template prices are: Basic Stock $35 (FL stock plugins only — no additional plugins needed), Basic Waves $50 (requires Waves® plugins, sold separately), Pro $100, Premium Plus $350, Diamond $500. Pro, Premium Plus, and Diamond tiers require Waves® plugins purchased separately from Waves Audio. All ZvocalShop template purchases are one-time payments.",
  },
  {
    q: "What is the Diamond tier exactly?",
    a: "Diamond is a complete from-scratch setup service. You receive everything in Premium Plus plus a personalized hardware shopping list and a 2-hour live Zoom session where we help you get set up, load all templates, and record your first professional vocal together. All hardware and third-party software (FL Studio, Waves plugins, audio interface) are purchased separately by you from their respective vendors.",
  },
  {
    q: "Why does the Diamond price vary?",
    a: "The $500 Diamond fee covers our template package, guidance, and your 2-hour live session. The additional hardware and software costs vary because they depend entirely on your personal choices — which retailer you buy from, which FL Studio edition you select, and whether you already own any of the required items.",
  },
  {
    q: "Can ZvocalShop provide FL Studio or Waves® plugins directly?",
    a: "No. ZvocalShop is not an authorized seller, reseller, or distributor of FL Studio or Waves plugins. FL Studio is owned by Image-Line. Waves plugins are owned by Waves Audio Ltd. Both must be purchased directly by you from their respective companies. ZvocalShop sells templates, guidance, and session time only.",
  },
  {
    q: "What if I have issues with Waves® plugins on my system?",
    a: "ZvocalShop takes no responsibility for any issues related to the installation, activation, functionality, or compatibility of Waves plugins or any other third-party software on your system. If you experience issues with Waves plugins, please contact Waves Audio Ltd. support directly through their official website.",
  },
  {
    q: "What is the difference between unmixed and mixed chains?",
    a: "Unmixed chains in the Basic and Pro tiers have routing and plugin structure pre-built with no processing applied — you get the chain and apply your own settings. Mixed chains in Premium Plus and Diamond are fully processed by engineers and ready to record into immediately with a professional sound from the very first take.",
  },
  {
    q: "How do I receive my download after purchase?",
    a: "Immediately after purchase you receive an email with a secure .zip download link. The link is also available in your account dashboard. Premium Plus and Diamond buyers also receive a Calendly booking link to schedule their live session.",
  },
  {
    q: "Can I use these templates for commercial releases?",
    a: "Yes. All ZvocalShop templates include a commercial use license for streaming, sync licensing, and physical releases.",
  },
  {
    q: "Do I need to own FL Studio before buying Basic, Pro, or Premium Plus?",
    a: "Yes. These three tiers are designed for artists who already have FL Studio 20 or above installed. If you do not yet have FL Studio, the Diamond tier includes setup guidance. FL Studio must be purchased directly from Image-Line.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-6 max-w-[760px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-sub text-primary uppercase tracking-widest text-sm mb-2">Questions?</p>
        <h2 className="font-display text-5xl">Got Questions. We Got Answers.</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`faq-${i}`} className="border border-border bg-card rounded-lg px-4">
              <AccordionTrigger className="font-sub text-base text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
