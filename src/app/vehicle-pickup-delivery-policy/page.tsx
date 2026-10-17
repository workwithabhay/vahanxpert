import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehiclePickupPolicyContent from '@/components/vehicle-pickup-policy/VehiclePickupPolicyContent';

export const metadata: Metadata = {
  title: 'Customer Vehicle Pickup, Delivery & Transportation Policy | VahanXpert',
  description:
    'Customer Vehicle Pickup, Delivery & Transportation Policy for VahanXpert Services. Policy No.: VXS/PDT/015 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/vehicle-pickup-delivery-policy',
  },
};

export default function VehiclePickupPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehiclePickupPolicyContent />
      </main>
      <Footer />
    </>
  );
}
