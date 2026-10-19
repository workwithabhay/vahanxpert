
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleServiceWarrantyContent from '@/components/vehicle-service-warranty/VehicleServiceWarrantyContent';

export const metadata: Metadata = {
  title:
    'Vehicle Service Warranty & Workmanship Warranty Policy | VahanXpert',
  description:
    'Official VahanXpert Services policy covering service warranties, workmanship claims, replacement parts, exclusions and warranty claim procedures.',
  alternates: {
    canonical:
      '/Vehicle_Service_Warranty_Workmanship_Warranty_Policy',
  },
};

export default function VehicleServiceWarrantyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleServiceWarrantyContent />
      </main>
      <Footer />
    </>
  );
}
