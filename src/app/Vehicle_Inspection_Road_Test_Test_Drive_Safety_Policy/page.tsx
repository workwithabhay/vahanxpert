
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleInspectionRoadTestContent from '@/components/vehicle-inspection-road-test/VehicleInspectionRoadTestContent';

export const metadata: Metadata = {
  title: 'Vehicle Inspection, Road Test & Test Drive Safety Policy | VahanXpert',
  description:
    'Official VahanXpert Services Vehicle Inspection, Road Test & Test Drive Safety Policy. Policy No. VXS/RTS/023, Version 1.0.',
  alternates: {
    canonical: '/Vehicle_Inspection_Road_Test_Test_Drive_Safety_Policy',
  },
};

export default function VehicleInspectionRoadTestPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleInspectionRoadTestContent />
      </main>
      <Footer />
    </>
  );
}
