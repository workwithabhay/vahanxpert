
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleRepairWarrantyContent from '@/components/vehicle-repair-warranty/VehicleRepairWarrantyContent';

export const metadata: Metadata = {
  title: 'Vehicle Repair & Parts Warranty Policy | VahanXpert',
  description:
    'VahanXpert Services Vehicle Repair & Parts Warranty Policy covering repair workmanship, spare parts, warranty claims, exclusions and customer responsibilities.',
  alternates: {
    canonical: '/Vehicle_Repair_Parts_Warranty_Policy',
  },
};

export default function VehicleRepairWarrantyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleRepairWarrantyContent />
      </main>
      <Footer />
    </>
  );
}
