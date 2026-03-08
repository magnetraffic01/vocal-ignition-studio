import { motion } from "framer-motion";
import { Clock, Mic, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Hours Wasted Tweaking Plugins",
    desc: "You spend more time adjusting EQ knobs than creating music — and your vocals still don't cut through the mix.",
  },
  {
    icon: Mic,
    title: "Vocals Sound Amateur",
    desc: "Your raw vocals are great. But without the right chain, they'll never sound like the artists you admire on streaming platforms.",
  },
  {
    icon: HelpCircle,
    title: "No Clear System to Follow",
    desc: "Every YouTube tutorial contradicts the last one. You don't need more advice — you need a working chain you can load right now.",
  },
];

const ProblemSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-sub text-primary uppercase tracking-widest text-sm mb-2">The Problem</p>
        <h2 className="font-display text-5xl md:text-6xl">Your Vocals Are Good. Your Mix Is Holding You Back.</h2>
        <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
          Every independent artist hits the same wall. The talent is there. The setup isn't.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="tier-accent card-orange-glow bg-card rounded-lg p-6"
          >
            <p.icon size={28} className="text-primary mb-4" />
            <h4 className="font-sub text-lg text-foreground mb-2">{p.title}</h4>
            <p className="text-muted-foreground text-sm font-body">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
