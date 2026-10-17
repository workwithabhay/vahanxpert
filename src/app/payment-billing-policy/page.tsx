import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PaymentBillingPolicyContent from '@/components/payment-billing-policy/PaymentBillingPolicyContent';

export const metadata: Metadata = {
  title: 'Payment, Billing & Invoice Policy | VahanXpert',
  description:
    'Official Payment, Billing & Invoice Policy for VahanXpert Services. Policy No.: VXS/FIN/032 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/payment-billing-policy',
  },
};

export default function PaymentBillingPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PaymentBillingPolicyContent />
      </main>
      <Footer />
    </>
  );
}
