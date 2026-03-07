import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly do I get when I purchase a template?",
    a: "You get a .zip file containing FL Studio mixer template files (.flp) with pre-configured vocal chains. Depending on your tier, this includes main vocal, adlib, dub, and master chains — all pre-wired with Waves plugin routing.",
  },
  {
    q: "Do I need Waves plugins to use these templates?",
    a: "Yes. All VocalForge templates are built using Waves Audio plugins (V14 + V15). You'll need a Waves Unlimited subscription (~$13.99/mo or ~$119/year) and the free Waves Central app to activate them.",
  },
  {
    q: "What's the total cost to get started?",
    a: "Basic: ~$64 first month ($50 template + ~$14 Waves). Pro: ~$114 first month ($100 + ~$14). Premium Plus: ~$364 ($350 + ~$14). After the first month, only the Waves subscription renews at ~$14/mo.",
  },
  {
    q: "Which versions of FL Studio are compatible?",
    a: "All templates are compatible with FL Studio 20 and all versions above, including FL Studio 2025.",
  },
  {
    q: "Can I get a refund?",
    a: "Because these are instant digital downloads, all sales are final. However, if you have technical issues, reach out and we'll help you get set up.",
  },
  {
    q: "What's included in the Premium Plus live session?",
    a: "A 1-on-1 video call where we walk through your entire template setup, customize chains for your voice, and answer any mixing questions — so you leave the session fully ready to record.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-6 max-w-3xl">
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
