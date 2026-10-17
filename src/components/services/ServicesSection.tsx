'use client';

import React from 'react';
import ServiceCard, { ServiceItem } from './ServiceCard';
import styles from './ServicesSection.module.css';

export const servicesData: ServiceItem[] = [
  {
    id: 'periodic-maintenance',

    title: 'Periodic Maintenance',
    description: 'Keep your car running smoothly with regular scheduled maintenance and manufacturer-standard checks.',
    imageSrc: '/services/periodic-maintenance.jpg',
    imageAlt: 'Periodic Maintenance Service',
    ctaText: 'View Service',
    ctaHref: '/services/periodic-maintenance',
    spotlightColor: '#f59e0b',
  },
  {
    id: 'claim-assistance',

    title: 'Insurance Claim Assistance',
    description: 'Fast, hassle-free 100% cashless claims processed directly at our certified network workshops.',
    imageSrc: '/services/claim-assistance.jpg',
    imageAlt: 'Insurance Claim Assistance',
    ctaText: 'View Service',
    ctaHref: '/services/claim-assistance',
    spotlightColor: '#d97706',
  },
  {
    id: 'engine-diagnostics',

    title: 'Engine & Diagnostics',
    description: 'High-tech computerized system diagnostics, battery analysis, and electronic calibration.',
    imageSrc: '/services/diagnostics.jpg',
    imageAlt: 'Engine and Battery Diagnostics',
    ctaText: 'View Service',
    ctaHref: '/services/diagnostics',
    spotlightColor: '#f59e0b',
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
