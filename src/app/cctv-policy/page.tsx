import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CCTVPolicyContent from '@/components/cctv-policy/CCTVPolicyContent';

export const metadata: Metadata = {
  title: 'CCTV Surveillance & Security Recording Policy | VahanXpert',
  description:
    'Official CCTV Surveillance & Security Recording Policy for VahanXpert Services. Policy No.: VXS/CCTV/030 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/cctv-policy',
  },
};

export default function CCTVPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <CCTVPolicyContent />
      </main>
      <Footer />
    </>
  );
}
