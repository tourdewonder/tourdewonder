import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DestinationsSection from "@/components/DestinationsSection";
import VacationSpotsSection from "@/components/VacationSpotsSection";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import TopHotelsSection from "@/components/TopHotelsSection";
import FacilitySection from "@/components/FacilitySection";
import BookARideSection from "@/components/BookARideSection";
import HouseboatsSection from "@/components/HouseboatsSection";
import NaturalSpringsLakesSection from "@/components/NaturalSpringsLakesSection";
import TreksSection from "@/components/TreksSection";
import AffordableBundlesSection from "@/components/AffordableBundlesSection";
import DealsSection from "@/components/DealsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useHead from "@/hooks/useHead";

const Index = () => {
  useHead({
    title: "Tour De Wonder | Kashmir Travel Packages, Houseboats, Treks & Hotels",
    description: "Discover Kashmir with Tour De Wonder. Book houseboats on Dal Lake, trekking packages, affordable vacation bundles, and top hotels. Best travel agency in Srinagar, J&K.",
  });

  return (
    <div id="main-content" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DestinationsSection />
      <VacationSpotsSection />
      <FeaturedExperiences />
      <TopHotelsSection />
      <FacilitySection />
      <BookARideSection />
      <HouseboatsSection />
      <NaturalSpringsLakesSection />
      <TreksSection />
      <AffordableBundlesSection />
      <DealsSection />
      <TestimonialSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
