
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleSparePartsContent from '@/components/vehicle-spare-parts/VehicleSparePartsContent';

export const metadata: Metadata = {
  title:
    'Vehicle Spare Parts Procurement, Genuine Parts & Parts Replacement Policy | VahanXpert',
  description:
    'VahanXpert Services policy covering spare parts sourcing, genuine and aftermarket parts, customer approval, installation, replacement and warranty support.',
  alternates: {
    canonical: '/Vehicle_Spare_Parts_Procurement_Policy',
  },
};

export default function VehicleSparePartsPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleSparePartsContent />
      </main>
      <Footer />
    </>
  );
}
