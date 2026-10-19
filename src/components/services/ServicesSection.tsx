'use client';

import React from 'react';
import ServiceCard, { ServiceItem } from './ServiceCard';
import styles from './ServicesSection.module.css';

export const servicesData: ServiceItem[] = [
  {
    id: 'periodic-maintenance',
   
    title: 'Periodic Maintenance',
    description: 'Complete multi-point vehicle service, synthetic engine oil replacement, filter changes, and 40+ precision safety checkups.',
    imageSrc: '/services/periodic-maintenance.jpg',
    imageAlt: 'VahanXpert Indian mechanic performing periodic car maintenance in modern garage',
    ctaText: 'Book Service',
    ctaHref: '/services',
    spotlightColor: '#f59e0b',
  },
  {
    id: 'claim-assistance',
   
    title: 'Cashless Insurance Claims',
    description: '100% cashless accident claim processing with 50+ network insurers, on-site surveyor coordination, and zero-hassle documentation.',
    imageSrc: '/services/claim-assistance.jpg',
    imageAlt: 'VahanXpert insurance claim advisor and surveyor inspecting car in garage',
    ctaText: 'Claim Assistance',
    ctaHref: '/insurance-claims',
    spotlightColor: '#d97706',
  },
  {
    id: 'engine-diagnostics',
   
    title: 'Engine & Diagnostics',
    description: 'Computerized ECU scanning, engine troubleshooting, battery load testing, sensor calibration, and electronic fault resolution.',
    imageSrc: '/services/diagnostics.jpg',
    imageAlt: 'VahanXpert Indian technician scanning engine with computerized diagnostic tool',
    ctaText: 'Diagnose Vehicle',
    ctaHref: '/services',
    spotlightColor: '#f59e0b',
  },
  {
    id: 'denting-painting',
   
    title: 'Denting & Painting',
    description: 'Precision dent removal, panel beating, anti-rust underbody treatment, and factory-finish painting in an illuminated paint booth.',
    imageSrc: '/services/denting-painting.jpg',
    imageAlt: 'VahanXpert Indian auto painter refinishing car panel in modern paint booth',
    ctaText: 'Bodyshop Care',
    ctaHref: '/services',
    spotlightColor: '#d97706',
  },
  {
    id: 'ac-service',
   
    title: 'Car AC Repair & Climate Care',
    description: 'AC gas leak detection, compressor maintenance, automated refrigerant recharge, cooling coil cleaning, and cabin disinfection.',
    imageSrc: '/services/ac-service.jpg',
    imageAlt: 'VahanXpert Indian AC technician recharging refrigerant in car workshop',
    ctaText: 'Book AC Service',
    ctaHref: '/services',
    spotlightColor: '#f59e0b',
  },
  {
    id: 'brake-suspension',
   
    title: 'Brake & Suspension Care',
    description: 'Brake pad replacement, disc rotor skimming, shock absorber overhaul, bushing checkups, and precision wheel balancing.',
    imageSrc: '/services/brake-suspension.jpg',
    imageAlt: 'VahanXpert Indian mechanic servicing disc brake and suspension on car lift',
    ctaText: 'Inspect Brakes',
    ctaHref: '/services',
    spotlightColor: '#d97706',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badgePill}>
            <span>✦</span> BEST CAR SERVICE & REPAIR IN NOHAR
          </div>
          <h2 id="services-heading" className={styles.title}>
            Nohar&apos;s Best <span className={styles.titleHighlight}>Car Services</span>
          </h2>
          <p className={styles.subtitle}>
            From routine multi-brand car repair to seamless cashless insurance claims, explore Nohar&apos;s top-rated automotive solutions near you.
          </p>
        </header>

        {/* 3-Column Service Card Grid using SpotlightCard & 2nd Image Layout */}
        <div className={styles.grid}>
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
