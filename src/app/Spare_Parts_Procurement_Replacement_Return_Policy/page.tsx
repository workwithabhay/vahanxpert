
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import SparePartsProcurementContent from '@/components/spare-parts-procurement/SparePartsProcurementContent';

export const metadata: Metadata = {
  title:
    'Spare Parts Procurement, Replacement & Return Policy | VahanXpert',
  description:
    'Official VahanXpert Services policy for spare parts procurement, replacement, returns and warranty handling. Policy No. VXS/SP/009.',
  alternates: {
    canonical:
      '/Spare_Parts_Procurement_Replacement_Return_Policy',
  },
};

export default function SparePartsProcurementPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <SparePartsProcurementContent />
      </main>
      <Footer />
    </>
  );
}
