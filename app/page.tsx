import AboutSection from "./components/about-section";
import AccommodationsSection from "./components/accomodation-section";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import LocationSection from "./components/location-section";
import ServicesSection from "./components/service-section";
import TestimonialsSection from "./components/testimonials-section";
import WhatsAppButton from "./components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AccommodationsSection />
        <ServicesSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
