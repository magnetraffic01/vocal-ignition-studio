import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { label: "Main Vocal Chains", basic: "1 raw", pro: "1 raw", premium: "3 mixed", diamond: "3 mixed" },
  { label: "Dub Chains", basic: "1", pro: "2", premium: "2", diamond: "2" },
  { label: "Adlib Chains", basic: "1", pro: "3", premium: "4", diamond: "4" },
  { label: "Master Channel Chain", basic: false, pro: false, premium: true, diamond: true },
  { label: "Chains Are Pre-Mixed", basic: false, pro: false, premium: true, diamond: true },
  { label: "PDF Setup Guide", basic: false, pro: true, premium: true, diamond: true },
  { label: "Live Session", basic: false, pro: false, premium: "1 Hour", diamond: "2 Hours" },
  { label: "Hardware Shopping List", basic: false, pro: false, premium: false, diamond: true },
  { label: "Full Hardware Setup Guidance", basic: false, pro: false, premium: false, diamond: true },
  { label: "FL Studio 20+ Compatible", basic: true, pro: true, premium: true, diamond: true },
  { label: "Waves V14 + V15 Pre-Wired", basic: true, pro: true, premium: true, diamond: true },
  { label: "Instant .zip Download", basic: true, pro: true, premium: true, diamond: true },
  { label: "Commercial Use License", basic: true, pro: true, premium: true, diamond: true },
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (value === true) return <Check size={16} className="text-success mx-auto" />;
  if (value === false) return <X size={16} className="text-muted-foreground mx-auto" />;
  return <span className="text-foreground text-xs font-body">{value}</span>;
};

const ComparisonTable = () => (
  <section className="py-16">
    <div className="container mx-auto px-6 overflow-x-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left font-sub text-foreground py-3 px-2">Feature</th>
              <th className="text-center font-sub text-foreground py-3 px-2">Basic $50</th>
              <th className="text-center font-sub text-foreground py-3 px-2">Pro $100</th>
              <th className="text-center font-sub text-foreground py-3 px-2">Premium+ $350</th>
              <th className="text-center font-sub py-3 px-2 text-diamond" style={{ background: "rgba(184,169,201,0.08)" }}>💎 Diamond $500</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f.label} className="border-b border-border/50">
                <td className="text-left text-foreground font-body py-2.5 px-2">{f.label}</td>
                <td className="text-center py-2.5 px-2"><Cell value={f.basic} /></td>
                <td className="text-center py-2.5 px-2"><Cell value={f.pro} /></td>
                <td className="text-center py-2.5 px-2"><Cell value={f.premium} /></td>
                <td className="text-center py-2.5 px-2" style={{ background: "rgba(184,169,201,0.04)" }}><Cell value={f.diamond} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
