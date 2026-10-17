import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ParkingCustodyContent from '@/components/custody-policy/ParkingCustodyContent';

export const metadata: Metadata = {
  title: 'Vehicle Parking, Custody & Security Policy | VahanXpert',
  description:
    'Vehicle Parking, Custody & Security Policy for VahanXpert Services. Policy No.: VXS/PCS/011 | Version: 1.0.',
};

export default function ParkingCustodyPage() {
  return (
    <>
      <Navbar />
      <main>
        <ParkingCustodyContent />
      </main>
      <Footer />
    </>
  );
}
