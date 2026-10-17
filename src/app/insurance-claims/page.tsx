import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import InsuranceClaimsContent from '@/components/insurance-claims/InsuranceClaimsContent';

export const metadata: Metadata = {
  title: 'Best Cashless Car Insurance Claim Workshop in Nohar | 50+ Insurer Tie-ups',
  description:
    'Need the best insurance claim support in Nohar? VahanXpert offers 100% cashless accidental claims with 50+ IRDAI approved insurance partners. Dedicated digital survey coordination, zero hassle paperwork, and OEM body repair.',
  keywords: [
    'best insurance claim in nohar',
    'cashless insurance claim nohar',
    'car accidental claim nohar',
    'car insurance claim near me',
    'accidental car repair nohar',
    'icici lombard cashless garage nohar',
    'hdfc ergo cashless garage nohar',
    'bajaj allianz cashless garage nohar',
    'tata aig cashless garage nohar',
  ],
  alternates: {
    canonical: '/insurance-claims',
  },
  openGraph: {
    title: 'Best Cashless Car Insurance Claims in Nohar | VahanXpert',
    description:
      'Hassle-free cashless insurance claim guidance and accidental body repairs with 50+ insurance tie-ups in Nohar, Rajasthan.',
    url: 'https://www.vahanxpert.in/insurance-claims',
  },
};

export default function InsuranceClaimsPage() {
  return (
    <>
      <Navbar />
      <main>
        <InsuranceClaimsContent />
      </main>
      <Footer />
    </>
  );
}
