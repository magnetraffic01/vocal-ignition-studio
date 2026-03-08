import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Get Waves Central",
    desc: "Download the free Waves Central app and subscribe to a Waves plan (~$14/mo). This is the foundation that powers every template.",
  },
  {
    num: "2",
    title: "Purchase Your Tier",
    desc: "Choose Basic, Pro, Premium Plus, or Diamond. You receive an email with your secure .zip download link immediately after purchase.",
  },
  {
    num: "3",
    title: "Unzip & Load in FL Studio",
    desc: "Drag your .flp template into FL Studio 20 or above. Your full vocal chain loads in seconds — pre-wired, labeled, and ready.",
  },
  {
    num: "4",
    title: "Record & Sound Pro",
    desc: "Hit record. Your mic flows through an engineer-built chain the moment you start. Recording is not as hard as you think — we make sure of that.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-sub text-primary uppercase tracking-widest text-sm mb-2">The Process</p>
        <h2 className="font-display text-5xl md:text-6xl">Four Steps. One Pro Vocal.</h2>
        <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
          From zero to a professionally-chained vocal session in under an hour.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Dashed connector line */}
        <div className="absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-primary/30 hidden md:block" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display text-2xl flex items-center justify-center shrink-0 relative z-10">
                {step.num}
              </div>
              <div>
                <h4 className="font-sub text-xl text-foreground mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
