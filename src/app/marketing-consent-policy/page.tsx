import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import MarketingConsentPolicyContent from '@/components/marketing-consent-policy/MarketingConsentPolicyContent';

export const metadata: Metadata = {
  title: 'Customer Promotional Communication & Marketing Consent Policy | VahanXpert',
  description:
    'Customer Promotional Communication & Marketing Consent Policy for VahanXpert Services. Policy No.: VXS/MKT/020 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/marketing-consent-policy',
  },
};

export default function MarketingConsentPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <MarketingConsentPolicyContent />
      </main>
      <Footer />
    </>
  );
}
