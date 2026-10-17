import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ComplaintPolicyContent from '@/components/complaint-policy/ComplaintPolicyContent';

export const metadata: Metadata = {
  title: 'Customer Complaint, Grievance & Dispute Resolution Policy | VahanXpert',
  description:
    'Customer Complaint, Grievance & Dispute Resolution Policy for VahanXpert Services. Policy No.: VXS/CGR/028 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/complaint-grievance-policy',
  },
};

export default function ComplaintPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComplaintPolicyContent />
      </main>
      <Footer />
    </>
  );
}
