import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import TermsConditionsContent from '@/components/terms/TermsConditionsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions | VahanXpert - Garage Services Policy',
  description:
    'Garage Services Terms & Conditions Policy for VahanXpert Services. Policy No.: VXS/TC/001 | Version: 1.0.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TermsConditionsContent />
      </main>
      <Footer />
    </>
  );
}
