import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleKeyCustodyContent from '@/components/vehicle-key-custody/VehicleKeyCustodyContent';

export const metadata: Metadata = {
  title: 'Vehicle Key, Customer Property & Vehicle Custody Policy | VahanXpert',
  description:
    'Official VahanXpert Services policy for vehicle keys, customer property, vehicle custody, secure storage and handover procedures.',
  alternates: {
    canonical: '/Vehicle_Key_Customer_Property_Vehicle_Custody_Policy',
  },
};

export default function VehicleKeyCustodyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleKeyCustodyContent />
      </main>
      <Footer />
    </>
  );
}