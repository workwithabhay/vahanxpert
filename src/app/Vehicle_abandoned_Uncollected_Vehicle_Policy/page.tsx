
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleAbandonedContent from '@/components/vehicle-abandoned/VehicleAbandonedContent';

export const metadata: Metadata = {
  title: 'Vehicle Abandoned / Uncollected Vehicle Policy | VahanXpert',
  description:
    'Official VahanXpert Services Vehicle Abandoned / Uncollected Vehicle Policy. Policy No. VXS/VEH/033, Version 1.0.',
  alternates: {
    canonical: '/Vehicle_Abandoned_Uncollected_Vehicle_Policy',
  },
};

export default function VehicleAbandonedPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleAbandonedContent />
      </main>
      <Footer />
    </>
  );
}
