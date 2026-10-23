
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleServiceCustomerDataPrivacyContent from '@/components/privacy/VehicleServiceCustomerDataPrivacyContent';

export const metadata: Metadata = {
  title: 'Vehicle Service & Customer Data Privacy Policy | VahanXpert',
  description:
    'Vehicle Service & Customer Data Privacy Policy for VahanXpert Services.',
};

export default function VehicleServiceCustomerDataPrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleServiceCustomerDataPrivacyContent />
      </main>
      <Footer />
    </>
  );
}
