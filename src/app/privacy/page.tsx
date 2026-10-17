import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PrivacyPolicyContent from '@/components/privacy/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | VahanXpert - Vehicle Service & Customer Data Privacy',
  description:
    'Vehicle Service & Customer Data Privacy Policy for VahanXpert Services. Policy No.: VXS/DP/018 | Version: 1.0.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
