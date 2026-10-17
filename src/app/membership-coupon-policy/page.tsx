import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import MembershipCouponPolicyContent from '@/components/membership-coupon-policy/MembershipCouponPolicyContent';

export const metadata: Metadata = {
  title: 'Membership & Coupon Book Terms, Offer & Validity Policy | VahanXpert',
  description:
    'Official Membership & Coupon Book Terms, Offer & Validity Policy for VahanXpert Services. Policy No.: VXS/MCB/019 | Version: 1.0 | Effective Date: 20/09/2026.',
  alternates: {
    canonical: '/membership-coupon-policy',
  },
};

export default function MembershipCouponPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <MembershipCouponPolicyContent />
      </main>
      <Footer />
    </>
  );
}
