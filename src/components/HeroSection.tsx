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
          opacity={0.12 + Math.sin(i * 0.2) * 0.08}
        />
      );
    })}
  </svg>
);

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay pt-24">
      {/* Radial orange glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,94,0,0.08)_0%,transparent_70%)]" />

      {/* Animated waveform background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
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
          <span className="inline-block bg-secondary text-foreground font-sub font-bold text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-border">
            FL Studio 20+ · Waves V14 &amp; V15
          </span>
          <h1 className="font-display text-[clamp(3.25rem,8vw,6.875rem)] leading-[0.9] mb-6">
            SOUND LIKE YOU<br />
            <span className="text-primary">PAID AN ENGINEER.</span>
          </h1>
          <h2 className="font-sub text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            FL Studio Vocal Templates Built for Artists Who Are Done Sounding Amateur.
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-2xl mx-auto mb-4">
            Engineer-built vocal chains for FL Studio 20 and above — Main Vocals,
            Adlibs, Dubs, and Master Channel ready to load and record.
            Powered by Waves V14 &amp; V15. Download your .zip today. Record tonight.
          </p>
          <p className="font-body text-foreground/60 text-xs mb-8 max-w-3xl mx-auto">
            ZvocalShop is a digital store selling FL Studio vocal templates compatible with FL Studio 20 and above including FL Studio 2025.
            Templates are pre-built .flp files containing vocal signal chains engineered with Waves V14 and V15 plugins, including Main Vocal,
            Adlibs, Dubs, and Master Channel configurations. Four tiers are available: Basic ($50), Pro ($100), Premium Plus ($350), and Diamond ($500).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="#pricing"
            className="cta-lift inline-flex items-center justify-center bg-primary text-primary-foreground font-sub font-bold text-lg px-8 py-4 rounded-lg"
          >
            Browse Templates →
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center border border-border text-foreground font-sub font-bold text-lg px-8 py-4 rounded-lg hover:border-primary/50 transition-colors"
          >
            ▶ Hear the Difference
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-body text-muted-foreground"
        >
          <span className="text-success">✓ FL Studio 20 &amp; 2025</span>
          <span className="text-success">✓ Waves V14 &amp; V15</span>
          <span className="text-success">✓ Instant .zip Download</span>
          <span className="text-success">✓ 30-Day Guarantee</span>
          <span className="text-success">✓ 10,000+ Producers</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
