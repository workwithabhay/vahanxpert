import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import EnvironmentalPolicyContent from '@/components/environmental-policy/EnvironmentalPolicyContent';

export const metadata: Metadata = {
  title: 'Environmental & Used Oil / Waste Disposal Policy | VahanXpert',
  description:
    'Environmental & Used Oil / Waste Disposal Policy for VahanXpert Services. Policy No.: VXS/ENV/029 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/environmental-waste-policy',
  },
};

export default function EnvironmentalWastePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <EnvironmentalPolicyContent />
      </main>
      <Footer />
    </>
  );
}
