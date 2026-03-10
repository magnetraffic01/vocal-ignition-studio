import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import StatsSection from "@/components/StatsSection";
import WavesSection from "@/components/WavesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import DiamondSection from "@/components/DiamondSection";
import ComparisonTable from "@/components/ComparisonTable";
// import ZipTreeSection from "@/components/ZipTreeSection";
import SessionSection from "@/components/SessionSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <WavesSection />
      <HowItWorksSection />
      <PricingSection />
      <DiamondSection />
      <ComparisonTable />
      {/* <ZipTreeSection /> */}
      <SessionSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <MusicPlayer />
    </main>
  );
};

export default Index;
