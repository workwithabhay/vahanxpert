import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import RefundCancellationPolicyContent from '@/components/refund-cancellation-policy/RefundCancellationPolicyContent';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | VahanXpert',
  description:
    'Official Refund & Cancellation Policy for VahanXpert Services. Policy No.: VXS/RC/008 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/refund-cancellation-policy',
  },
};

export default function RefundCancellationPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <RefundCancellationPolicyContent />
      </main>
      <Footer />
    </>
  );
}
