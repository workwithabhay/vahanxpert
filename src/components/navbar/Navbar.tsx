'use client';

import React from 'react';
import CardNav, { CardNavItem } from './CardNav';
import headerLogo from './headerlogo.png';

const items: CardNavItem[] = [
  {
    label: 'Services',
    description: 'Complete multi-brand car care & repairs.',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Book a Service', href: '/contact' }
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
  return (
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
          logo={typeof headerLogo === 'string' ? headerLogo : headerLogo.src}
          logoAlt="VahanXpert"
          logoHref="/"
          items={items}
          cta={{ label: 'Book a Service', href: '/contact' }}
          cardEffect="rise"
          openOn="click"
          surface="glass"
          stagger={0.12}
          bounce={0.2}
          menuLabel
          speed={1}
          cardHeight={176}
          maxWidth={800}
          intro
          theme="light"
        />
      </div>
    </header>
  );
}
