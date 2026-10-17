import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import InsuranceCoordinationPolicyContent from '@/components/insurance-policy/InsuranceCoordinationPolicyContent';

export const metadata: Metadata = {
  title: 'Insurance / Cashless Claim Coordination Policy | VahanXpert',
  description:
    'Official Insurance & Cashless Claim Coordination Policy for VahanXpert Services. Policy No.: VXS/INS/031 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/insurance-coordination-policy',
  },
};

export default function InsuranceCoordinationPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <InsuranceCoordinationPolicyContent />
      </main>
      <Footer />
    </>
  );
}
