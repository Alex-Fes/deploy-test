import { ContactSection } from "@/widgets/contact-section/ContactSection";
import { FaqSection } from "@/widgets/faq-section/FaqSection";
import { FixedCta } from "@/widgets/fixed-cta/FixedCta";
import { GallerySection } from "@/widgets/gallery-section/GallerySection";
import { HeroSection } from "@/widgets/hero-section/HeroSection";
import { ServicesSection } from "@/widgets/services-section/ServicesSection";
import { SiteFooter } from "@/widgets/site-footer/SiteFooter";
import { SiteHeader } from "@/widgets/site-header/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FixedCta />
    </>
  );
}
