import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import VehicleServiceEstimateJobCardContent from '@/components/privacy/VehicleServiceEstimateJobCardContent';

export const metadata: Metadata = {
  title:
    'Vehicle Service Estimate, Customer Approval & Job Card Policy | VahanXpert',
  description:
    'Read the VahanXpert Services policy for vehicle service estimates, customer approvals, job cards, additional work and billing.',
  alternates: {
    canonical:
      '/Vehicle_Service_Estimate_Customer_Approval_Job_Card_Policy',
  },
};

export default function VehicleServiceEstimateCustomerApprovalJobCardPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleServiceEstimateJobCardContent />
      </main>
      <Footer />
    </>
  );
}