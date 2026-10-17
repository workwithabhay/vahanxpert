import SplashScreen from '@/components/splash/SplashScreen';
import Navbar from '@/components/navbar/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import InsurancePartnersSection from '@/components/partners/InsurancePartnersSection';
import ProudPartnersSection from '@/components/proud-partners/ProudPartnersSection';
import InsuranceClaimSection from '@/components/claims/InsuranceClaimSection';
import ServicesSection from '@/components/services/ServicesSection';
import FaqSection from '@/components/faq/FaqSection';
import ProcessSection from '@/components/process/ProcessSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ProudPartnersSection />
        <InsurancePartnersSection />
        <InsuranceClaimSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
