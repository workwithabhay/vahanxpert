import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import AboutContent from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | VahanXpert - More Than A Garage, A Trusted Partner',
  description:
    'VahanXpert is built around one simple idea — making car care easier, more transparent and more reliable under one roof.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
