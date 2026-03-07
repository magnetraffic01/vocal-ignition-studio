import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WaveformSVG = () => (
  <svg viewBox="0 0 1200 120" className="h-full w-[2400px]" preserveAspectRatio="none">
    {Array.from({ length: 120 }).map((_, i) => {
      const h = Math.abs(Math.sin(i * 0.15) * 60 + Math.sin(i * 0.3) * 30);
      return (
        <rect
          key={i}
          x={i * 10}
          y={60 - h / 2}
          width="4"
          height={Math.max(h, 4)}
          rx="2"
          fill="#FF5E00"
          opacity={0.15 + Math.sin(i * 0.2) * 0.1}
        />
      );
    })}
  </svg>
);

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grain-overlay">
      {/* Animated waveform background */}
      <div className="absolute inset-0 flex items-center opacity-40">
        <div className="animate-waveform flex">
          <WaveformSVG />
          <WaveformSVG />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sub text-lg tracking-widest uppercase text-primary mb-4">
            Engineer-Built Vocal Templates for FL Studio
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
            Sound Pro<br />
            <span className="text-primary">Tonight.</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
            You've got the talent. You just need the right vocal chains to unlock it.
            VocalForge templates plug straight into FL Studio — so you can stop tweaking and start creating.
          </p>
          <p className="font-body text-success text-sm mb-8">
            ✓ Compatible with FL Studio 20 and all versions above including FL Studio 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="cta-lift inline-flex items-center justify-center bg-primary text-primary-foreground font-sub font-bold text-lg px-8 py-4 rounded-lg"
          >
            See Templates & Pricing →
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center border border-border text-foreground font-sub font-bold text-lg px-8 py-4 rounded-lg hover:border-primary/50 transition-colors"
          >
            How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
