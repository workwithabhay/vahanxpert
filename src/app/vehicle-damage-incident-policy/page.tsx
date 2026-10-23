import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleDamagePolicyContent from '@/components/vehicle-damage-policy/VehicleDamagePolicyContent';

export const metadata: Metadata = {
  title: 'Customer Vehicle Damage & Incident Reporting Policy | VahanXpert',
  description:
    'Official Customer Vehicle Damage & Incident Reporting Policy for VahanXpert Services.',
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