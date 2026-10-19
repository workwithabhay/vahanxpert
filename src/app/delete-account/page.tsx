import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import DeleteAccountContent from '@/components/delete-account/DeleteAccountContent';

export const metadata: Metadata = {
  title: 'Delete Account | VahanXpert Account Deletion Request',
  description:
    'Submit an official VahanXpert account deletion request. Please enter your registered details to request account deletion and identity verification.',
  alternates: {
    canonical: '/delete-account',
  },
  openGraph: {
    title: 'Delete Account | VahanXpert Account Deletion Request',
    description:
      'Submit an official VahanXpert account deletion request. Verification of identity is required before account data is permanently deleted.',
    url: 'https://www.vahanxpert.in/delete-account',
  },
};

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main>
        <DeleteAccountContent />
      </main>
      <Footer />
    </>
  );
}
