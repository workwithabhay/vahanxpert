import React from 'react';
import { FAQ_ITEMS } from '@/components/faq/faqData';

export default function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': 'https://www.vahanxpert.in/#autorepair',
    name: 'VahanXpert - Multi-Brand Car Service & Cashless Insurance Claim Workshop',
    alternateName: 'VahanXpert Nohar',
    image: [
      'https://www.vahanxpert.in/headerlogo.png',
      'https://www.vahanxpert.in/mechanic-vw.png',
    ],
    url: 'https://www.vahanxpert.in',
    sameAs: ['https://www.instagram.com/vahanxpert_nohar/'],
    telephone: '+91-8930293896',
    email: 'support@vahanxpert.in',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking, Cashless Insurance',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ward No. 02, Shop No. 01, Khata 23/20, Sahwa Bypass, near Shubham Hospital',
      addressLocality: 'Nohar',
      addressRegion: 'Rajasthan',
      postalCode: '335523',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.18732,
      longitude: 74.7585193,
    },
    hasMap:
      'https://www.google.com/maps/place/VAHANXPERT/@29.18732,74.7559444,17z/data=!3m1!4b1!4m6!3m5!1s0x39141d6f9291daa9:0x6d6cbb67084f0157!8m2!3d29.18732!4d74.7585193!16s%2Fg%2F11nr3f8bpv',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:30',
        closes: '20:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Nohar' },
      { '@type': 'City', name: 'Rawatsar' },
      { '@type': 'City', name: 'Bhadra' },
      { '@type': 'City', name: 'Sahwa' },
      { '@type': 'AdministrativeArea', name: 'Hanumangarh' },
      { '@type': 'State', name: 'Rajasthan' },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Brand Periodic Car Service in Nohar',
          description:
            'Comprehensive multi-point car inspection, engine oil replacement, filter cleaning, and mechanical checkup for all car brands.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cashless Car Insurance Claim & Accidental Repair in Nohar',
          description:
            'Complete cashless accidental claim assistance, digital survey coordination, and OEM body repair with 50+ IRDAI insurance tie-ups.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Car Denting & Painting in Nohar',
          description:
            'State-of-the-art paint booth, precision color-matching, and scratch removal with certified technicians.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Car AC Service & Gas Recharge in Nohar',
          description:
            'Complete AC cooling coil inspection, leak check, compressor diagnostics, and high-performance refrigerant gas charging.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Computerized Engine Diagnostics & Electrical Repairs',
          description:
            'Advanced OBD2 engine fault code scanning, sensor testing, wiring repair, and battery performance check.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Computerized Wheel Alignment & Wheel Balancing in Nohar',
          description:
            '3D laser wheel alignment, tire balancing, suspension inspection, and steering calibration.',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '184',
      bestRating: '5',
      worstRating: '1',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'VahanXpert Services',
      url: 'https://www.vahanxpert.in',
      logo: 'https://www.vahanxpert.in/headerlogo.png',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.vahanxpert.in/#website',
    url: 'https://www.vahanxpert.in',
    name: 'VahanXpert',
    description:
      'Nohar’s #1 Multi-Brand Car Service, Accidental Repair & Cashless Insurance Claim Workshop.',
    publisher: {
      '@id': 'https://www.vahanxpert.in/#autorepair',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.vahanxpert.in/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
