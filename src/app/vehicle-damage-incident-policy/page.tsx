import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleDamagePolicyContent from '@/components/vehicle-damage-policy/VehicleDamagePolicyContent';

export const metadata: Metadata = {
  title: 'Customer Vehicle Damage & Incident Reporting Policy | VahanXpert',
  description:
    'Official Customer Vehicle Damage & Incident Reporting Policy for VahanXpert Services. Policy No.: VXS/IR/012 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/vehicle-damage-incident-policy',
  },
};

export default function VehicleDamagePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleDamagePolicyContent />
      </main>
      <Footer />
    </>
  );
}
