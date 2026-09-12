import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandStrip from "@/components/BrandStrip";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileCTA />
      <main>
        <Hero />
        <StatsBar />
        <WhyChooseUs />
        <BrandStrip />
        <div className="section-line" />
        <Services />
        <div className="section-line" />
        <Gallery />
        <div className="section-line" />
        <Pricing />
        <div className="section-line" />
        <Process />
        <div className="section-line" />
        <Reviews />
        <div className="section-line" />
        <FAQ />
        <div className="section-line" />
        <ServiceAreas />
        <div className="section-line" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
