import Starfield from "@/components/Starfield";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InterestsSection from "@/components/InterestsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Starfield />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <InterestsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
