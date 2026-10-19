
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import RepairApprovalPolicyContent from '@/components/repair-approval-policy/RepairApprovalPolicyContent';

export const metadata: Metadata = {
  title: 'Repair Approval & Additional Work Authorization Policy | VahanXpert',
  description:
    'Official Repair Approval & Additional Work Authorization Policy for VahanXpert Services. Policy No.: VXS/RA/004 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/Repair_Approval_Additional_Work_Authorization_Policy/',
  },
};

export default function RepairApprovalPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
  <RepairApprovalPolicyContent />
</main>
      <Footer />
    </>
  );
}

