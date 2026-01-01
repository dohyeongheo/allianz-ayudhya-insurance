import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ProductComparison } from "@/components/product-comparison";
import { LineContactSection } from "@/components/line-contact-section";
import { HospitalFinder } from "@/components/hospital-finder";
import { Products } from "@/components/products";
import { TrustpilotSection } from "@/components/trustpilot-section";
import { CTASection } from "@/components/cta-section";
import { PartnersSection } from "@/components/partners-section";
import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductComparison />
        <LineContactSection />
        <HospitalFinder />
        <Products />
        <TrustpilotSection />
        <CTASection />
        <PartnersSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
