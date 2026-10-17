import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import AllPoliciesContent from '@/components/policies/AllPoliciesContent';

export const metadata: Metadata = {
  title: 'Official Policies Directory (35 Policies) | VahanXpert',
  description:
    'Browse all 35 official operational, workshop security, customer privacy, parts warranty, and service governance policies of VahanXpert Services.',
};

export default function PoliciesPage() {
  return (
    <>
      <Navbar />
      <main>
        <AllPoliciesContent />
      </main>
      <Footer />
    </>
  );
}
