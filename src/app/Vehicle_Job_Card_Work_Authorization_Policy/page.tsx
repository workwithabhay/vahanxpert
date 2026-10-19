
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleJobCardContent from '@/components/vehicle-job-card/VehicleJobCardContent';

export const metadata: Metadata = {
  title: 'Vehicle Job Card & Work Authorization Policy | VahanXpert',
  description:
    'Official VahanXpert Services Vehicle Job Card & Work Authorization Policy. Policy No. VXS/JW/002, Version 1.0.',
  alternates: {
    canonical: '/Vehicle_Job_Card_Work_Authorization_Policy',
  },
};

export default function VehicleJobCardPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleJobCardContent />
      </main>
      <Footer />
    </>
  );
}
