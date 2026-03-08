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
    q: "Do I need Waves plugins to use these templates?",
    a: "Yes. Waves plugins are required for all templates to function at full capability. You must download the free Waves Central app and subscribe to a Waves plan to access the V14 and V15 plugins used in every template.",
  },
  {
    q: "What is Waves Central and how much does it cost?",
    a: "Waves Central is the free plugin manager from Waves Audio available at waves.com/downloads/central. The app itself is always free. To unlock the plugin library you subscribe to a plan: approximately $13.99 per month or approximately $119 per year (~$9.99/month).",
  },
  {
    q: "What is the total cost to get started for each tier?",
    a: "Basic: ~$64 first month ($50 template + ~$14 Waves). Pro: ~$114 ($100 + ~$14). Premium Plus: ~$364 ($350 + ~$14). Diamond: ~$864–950 total from scratch ($500 service + ~$350–450 hardware purchased separately + ~$14 Waves). After the first month only the Waves subscription renews at ~$13.99/month. All template purchases are one-time payments.",
  },
  {
    q: "What is the Diamond tier exactly?",
    a: "Diamond is a complete from-scratch setup service. You receive everything in Premium Plus plus a personalized hardware shopping list with direct purchase links, and a 2-hour live Zoom session where we install your FL Studio, activate your Waves plugins, configure your Focusrite Scarlett audio interface, load all templates, and record your first professional vocal together. Hardware is purchased separately by you using our provided list, estimated at $350–450 total depending on what you already own.",
  },
  {
    q: "Why does the Diamond price vary?",
    a: "The $500 Diamond fee covers our guidance, your complete template package, and your 2-hour live session. The additional hardware costs vary because they depend entirely on your personal choices — which retailer you buy from, which FL Studio edition you select, and whether you already own any of the items on the list. We provide direct purchase links after your Diamond purchase so you always get the right products at the best current price.",
  },
  {
    q: "Can ZvocalShop provide FL Studio or Waves plugins directly?",
    a: "No. FL Studio is a licensed software product owned by Image-Line. Waves plugins are licensed products owned by Waves Audio Ltd. Both must be purchased directly by you from their respective companies. ZvocalShop sells templates, guidance, and session time only. When you purchase your own licenses, you own them forever.",
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
    a: "Yes. These three tiers are designed for artists who already have FL Studio 20 or above installed. If you do not yet have FL Studio, the Diamond tier includes setup guidance and a purchase link to get the correct edition.",
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
