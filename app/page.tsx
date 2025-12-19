import HeroSection from "@/components/HeroSection";
import IntroStatement from "@/components/IntroStatement";
import WeddingsFeature from "@/components/WeddingsFeature";
import VisualPause from "@/components/VisualPause";
import PreWeddingsFeature from "@/components/PreWeddingsFeature";
import PortraitFeature from "@/components/PortraitFeature";
import EditorialBreak from "@/components/EditorialBreak";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroStatement />
      <WeddingsFeature />
      <VisualPause />
      <PreWeddingsFeature />
      <VisualPause />
      <PortraitFeature />
      <EditorialBreak />
    </>
  );
}
