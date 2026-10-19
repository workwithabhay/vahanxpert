
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import SparePartsInventoryContent from '@/components/spare-parts-inventory/SparePartsInventoryContent';

export const metadata: Metadata = {
  title: 'Spare Parts Inventory & Stock Management Policy | VahanXpert',
  description:
    'Official Spare Parts Inventory & Stock Management Policy for VahanXpert Services. Policy No.: VXS/INV/028 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/Spare_Parts_Inventory_Stock_Management_Policy',
  },
};

export default function SparePartsInventoryPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <SparePartsInventoryContent />
      </main>
      <Footer />
    </>
  );
}
