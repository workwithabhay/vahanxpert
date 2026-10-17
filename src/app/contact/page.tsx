import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact VahanXpert Nohar | Workshop Location, Phone & Directions',
  description:
    'Visit VahanXpert workshop in Nohar, Rajasthan: Ward No. 02, Sahwa Bypass, near Shubham Hospital. Call +91 8930293896 or get instant directions for car repair, maintenance & cashless insurance claims.',
  keywords: [
    'car service near me',
    'car repair near me',
    'vahanxpert nohar contact',
    'vahanxpert phone number',
    'car workshop in nohar address',
    'car mechanic near me nohar',
    'auto repair nohar contact',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact VahanXpert | Car Repair & Insurance Claim Workshop in Nohar',
    description:
      'Ward No. 02, Sahwa Bypass, near Shubham Hospital, Nohar, Rajasthan 335523. Call +91 8930293896 for immediate vehicle support.',
    url: 'https://www.vahanxpert.in/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
