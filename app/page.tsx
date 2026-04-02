import DemoSection from "@/app/components/home/DemoSection";
import HeroSection from "@/app/components/home/HeroSection";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import PricingSection from "@/app/components/home/PricingSection";
import CTASection from "@/app/components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
      <div className="h-screen pt-30 bg-green-200"></div>
    </div>
  );
}
