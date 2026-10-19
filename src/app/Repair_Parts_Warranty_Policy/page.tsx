
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

import RepairPartsWarrantyContent from '@/components/repair-parts-warranty/RepairPartsWarrantyContent';


export const metadata: Metadata = {
  title: 'Repair & Parts Warranty Policy | VahanXpert',
  description:
    'Official Repair & Parts Warranty Policy for VahanXpert Services. Policy No.: VXS/WP/006 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/Repair_Parts_Warranty_Policy',
  },
};

export default function RepairPartsWarrantyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <RepairPartsWarrantyContent />
      </main>
      <Footer />
    </>
  );
}
