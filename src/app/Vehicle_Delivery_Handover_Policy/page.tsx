
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleDeliveryHandoverContent from '@/components/vehicle-delivery-handover/VehicleDeliveryHandoverContent';

export const metadata: Metadata = {
  title: 'Vehicle Delivery & Handover Policy | VahanXpert',
  description:
    'Official VahanXpert Services Vehicle Delivery & Handover Policy. Policy No. VXS/VD/005, Version 1.0.',
  alternates: {
    canonical: '/Vehicle_Delivery_Handover_Policy',
  },
};

export default function VehicleDeliveryHandoverPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleDeliveryHandoverContent />
      </main>
      <Footer />
    </>
  );
}
