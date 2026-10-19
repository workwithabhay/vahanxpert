
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleDamageIncidentContent from '@/components/vehicle-damage-incident/VehicleDamageIncidentContent';

export const metadata: Metadata = {
  title: 'Vehicle Damage, Loss & Incident Reporting Policy | VahanXpert',
  description:
    'Official VahanXpert Services Vehicle Damage, Loss & Incident Reporting Policy. Policy No. VXS/DIR/022, Version 1.0.',
  alternates: {
    canonical: '/Vehicle_Damage_Loss_Incident_Reporting_Policy',
  },
};

export default function VehicleDamageIncidentPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleDamageIncidentContent />
      </main>
      <Footer />
    </>
  );
}
