import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehiclePickupDeliveryContent from '@/components/vehicle-pickup-delivery/VehiclePickupDeliveryContent';

export const metadata: Metadata = {
  title:
    'Vehicle Pickup, Delivery & Transportation Safety Policy | VahanXpert',
  description:
    'Official VahanXpert Services policy covering safe vehicle pickup, transportation, delivery, driver responsibilities and incident reporting.',
  alternates: {
    canonical: '/Vehicle_Pickup_Delivery_Transportation_Safety_Policy',
  },
};

export default function VehiclePickupDeliveryPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehiclePickupDeliveryContent />
      </main>
      <Footer />
    </>
  );
}