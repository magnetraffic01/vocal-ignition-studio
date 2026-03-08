import { motion } from "framer-motion";

const tree = [
  { type: "folder", name: "Main Vocals/", indent: 1 },
  { type: "flp", name: "MainVocal_Trap.flp", indent: 2 },
  { type: "flp", name: "MainVocal_RnB.flp", indent: 2 },
  { type: "flp", name: "MainVocal_Drill.flp", indent: 2 },
  { type: "folder", name: "Adlibs/", indent: 1 },
  { type: "flp", name: "Adlib_Short_Punchy.flp", indent: 2 },
  { type: "flp", name: "Adlib_Whisper.flp", indent: 2 },
  { type: "flp", name: "Adlib_Hype.flp", indent: 2 },
  { type: "flp", name: "Adlib_Melodic.flp", indent: 2 },
  { type: "folder", name: "Dubs/", indent: 1 },
  { type: "flp", name: "Dub_Tight_Double.flp", indent: 2 },
  { type: "flp", name: "Dub_Wide_Stereo.flp", indent: 2 },
  { type: "folder", name: "Master Channel/", indent: 1 },
  { type: "flp", name: "MasterBus_Chain.flp", indent: 2 },
  { type: "pdf", name: "ZvocalShop_Setup_Guide.pdf", indent: 1 },
  { type: "txt", name: "README.txt", indent: 1 },
];

const getColor = (type: string) => {
  if (type === "folder") return "text-primary";
  if (type === "flp") return "text-[#7DD3FC]";
  if (type === "pdf") return "text-[#FCA5A5]";
  return "text-muted-foreground";
};

const getIcon = (type: string) => {
  if (type === "folder") return "📂";
  if (type === "pdf") return "📄";
  return "📄";
};

const ZipTreeSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-sub text-primary uppercase tracking-widest text-sm mb-2">What You Download</p>
        <h2 className="font-display text-5xl md:text-6xl">Inside Your .zip File</h2>
        <p className="text-muted-foreground font-body mt-4">
          Premium Plus &amp; Diamond — organized, labeled, ready to load.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-background rounded-lg border border-border p-6 font-mono text-sm"
      >
        <p className="text-primary font-bold mb-3">📦 ZvocalShop_PremiumPlus.zip</p>
        {tree.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="flex items-center"
            style={{ paddingLeft: `${item.indent * 24}px` }}
          >
            <span className="text-border mr-1">│ </span>
            <span className="mr-1">{getIcon(item.type)}</span>
            <span className={getColor(item.type)}>{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ZipTreeSection;
