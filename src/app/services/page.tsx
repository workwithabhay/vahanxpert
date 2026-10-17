import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ServicesPageContent from '@/components/services-page/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Best Car Service & Repair in Nohar | Complete Multi-Brand Auto Care',
  description:
    'Looking for the best car repair in Nohar? VahanXpert provides complete multi-brand car services: periodic maintenance, engine diagnostics, denting & painting, computerized wheel alignment, and car AC service near you in Nohar, Rajasthan.',
  keywords: [
    'car repair in nohar',
    'best car service in nohar',
    'nohar best car service',
    'car service near me',
    'car mechanic in nohar',
    'car denting painting nohar',
    'car ac service nohar',
    'wheel alignment in nohar',
    'multi brand car workshop nohar',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Best Car Repair & Maintenance Services in Nohar | VahanXpert',
    description:
      'Certified multi-brand car service workshop in Nohar, Rajasthan. Periodic car servicing, genuine OEM parts, computerized diagnostics, and transparent pricing.',
    url: 'https://www.vahanxpert.in/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
}
