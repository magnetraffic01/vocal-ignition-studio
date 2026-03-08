import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10400, suffix: "+", label: "Downloads" },
  { value: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
  { value: 98, suffix: "%", label: "Recommend" },
  { value: 4, suffix: "", label: "Tiers" },
];

const Counter = ({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, decimals]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-primary">
      {decimals ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

const testimonials = [
  {
    name: "JayKold",
    genre: "Trap / Atlanta",
    stars: 5,
    text: "I loaded the Pro template into FL Studio 20, followed the PDF guide, and had my vocal session running in under 20 minutes. The three adlib chains alone are worth every dollar.",
  },
  {
    name: "MiaSoleil",
    genre: "R&B / Pop",
    stars: 5,
    text: "The Premium Plus class changed everything. My engineer walked through every plugin, adjusted the chain to my voice, and I bounced my first professional-sounding record the same day.",
  },
  {
    name: "DrillaDP",
    genre: "UK Drill",
    stars: 5,
    text: "I had no idea what Waves was before this. The setup guide told me exactly what to install, what to subscribe to, and what to load. Zero guesswork. Completely worth it.",
  },
];

const StatsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="bg-card rounded-lg border border-border p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <p className="font-sub text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="tier-accent card-orange-glow bg-card rounded-lg p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="font-sub font-bold text-foreground">{t.name}</span>
              <span className="text-muted-foreground text-xs font-body">· {t.genre}</span>
            </div>
            <div className="text-primary text-sm mb-3">{"★".repeat(t.stars)}</div>
            <p className="text-muted-foreground text-sm font-body italic">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
