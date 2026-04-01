import DemoSection from "@/app/components/home/DemoSection";
import HeroSection from "@/app/components/home/HeroSection";
import HowItWorksSection from "./components/home/HowItWorksSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      <div className="h-screen pt-30 bg-green-200"></div>
    </div>
  );
}
