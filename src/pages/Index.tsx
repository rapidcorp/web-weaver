import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import TimelineSection from "@/components/sections/TimelineSection";
import DualIdentitySection from "@/components/sections/DualIdentitySection";
import PrisonUniversitySection from "@/components/sections/PrisonUniversitySection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import SagwaanSection from "@/components/sections/SagwaanSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import QuoteSection from "@/components/sections/QuoteSection";
import PoliceMitraSection from "@/components/sections/PoliceMitraSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <FloatingNav />
      <HeroSection />
      <IntroSection />
      <TimelineSection />
      <DualIdentitySection />
      <PrisonUniversitySection />
      <AchievementsSection />
      <SagwaanSection />
      <RecognitionSection />
      <QuoteSection />
      <PoliceMitraSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
