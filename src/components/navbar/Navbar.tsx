'use client';

import React, { useState, useEffect } from 'react';
import CardNav, { CardNavItem } from './CardNav';
import BookServiceModal from '@/components/common/BookServiceModal';

const items: CardNavItem[] = [
  {
    label: 'Services',
    description: 'Complete multi-brand car care & repairs.',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Book a Service', href: '#book-service' }
    ]
  },
  {
    label: 'About',
    description: 'The story and mission behind VahanXpert.',
    links: [
      { label: 'About Us', href: '/about' },
    ]
  },
  {
    label: 'Claims',
    description: 'Stress-free cashless insurance claim guidance.',
    links: [
      { label: 'Insurance Claims', href: '/insurance-claims' },
      { label: 'Cashless Process', href: '/#insurance-claims' }
    ]
  },
  {
    label: 'Policies',
    description: 'Official directory of all 35 VahanXpert policies.',
    links: [
      { label: 'All Policies (35)', href: '/policies' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Parking & Custody', href: '/parking-custody-policy' }
    ]
  },
  {
    label: 'Contact',
    description: 'Get in touch with our team for service & claims.',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Get Direction', href: 'https://maps.google.com/?cid=7884883098814316887&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF' }
    ]
  }
];

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('open-book-service-modal', handleOpen);
    return () => window.removeEventListener('open-book-service-modal', handleOpen);
  }, []);
  useEffect(() => {
  const openBookingModal = () => {
    setIsModalOpen(true);
  };

  window.addEventListener("open-book-service", openBookingModal);

  return () => {
    window.removeEventListener("open-book-service", openBookingModal);
  };
}, []);
  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '16px',
          left: 0,
          right: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
          boxSizing: 'border-box',
          zIndex: 100,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            pointerEvents: 'auto',
            position: 'relative',
          }}
        >
          <CardNav
            logo="/headerlogo.png"
            logoAlt="VahanXpert"
            logoHref="/"
            logoHeight={44}
            items={items}
            cta={{
              label: 'Book a Service',
              onClick: (e) => {
                e.preventDefault();
                setIsModalOpen(true);
              },
            }}
            onLinkClick={(link, _item, e) => {
              if (link.label === 'Book a Service') {
                e.preventDefault();
                setIsModalOpen(true);
              }
            }}
            cardEffect="rise"
            openOn="click"
            surface="glass"
            stagger={0.12}
            bounce={0.2}
            menuLabel
            speed={1}
            cardHeight={196}
            maxWidth={800}
            intro
            theme="light"
          />
        </div>
      </header>

      {/* Animated Book A Service Modal */}
      <BookServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
