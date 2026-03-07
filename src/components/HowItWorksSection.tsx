import { motion } from "framer-motion";
import { Mic, Download, Headphones } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "1. Choose & Download",
    desc: "Pick your tier, complete checkout, and instantly download your .zip template file.",
  },
  {
    icon: Mic,
    title: "2. Load Into FL Studio",
    desc: "Open FL Studio, import the .flp mixer template, and assign your microphone input.",
  },
  {
    icon: Headphones,
    title: "3. Record Like a Pro",
    desc: "Hit record. Your vocals now run through engineer-built chains — sounding polished from take one.",
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
        <p className="font-sub text-primary uppercase tracking-widest text-sm mb-2">Simple Setup</p>
        <h2 className="font-display text-5xl md:text-6xl">Three Steps. That's It.</h2>
        <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
          No complicated setup. No hours of YouTube tutorials. Just plug in and go.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <step.icon size={28} className="text-primary" />
            </div>
            <h4 className="font-sub text-xl text-foreground mb-2">{step.title}</h4>
            <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
