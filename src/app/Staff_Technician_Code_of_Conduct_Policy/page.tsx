
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import StaffTechnicianConductContent from '@/components/staff-technician-conduct/StaffTechnicianConductContent';

export const metadata: Metadata = {
  title: 'Staff / Technician Code of Conduct Policy | VahanXpert',
  description:
    'Official VahanXpert Services Staff / Technician Code of Conduct Policy. Policy No. VXS/EMP/026, Version 1.0.',
  alternates: {
    canonical: '/Staff_Technician_Code_of_Conduct_Policy',
  },
};

export default function StaffTechnicianConductPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <StaffTechnicianConductContent />
      </main>
      <Footer />
    </>
  );
}
