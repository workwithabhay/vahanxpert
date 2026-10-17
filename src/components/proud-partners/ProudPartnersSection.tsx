'use client';

import React from 'react';
import { Award, ShieldCheck, Wrench, Sparkles } from 'lucide-react';
import ProfileCard from './ProfileCard';
import AnimatedContent from '@/components/common/AnimatedContent';
import styles from './ProudPartnersSection.module.css';

const PARTNER_ADVANTAGES = [
  {
    icon: Award,
    title: 'Certified OEM Standards',
    desc: 'Audited & certified under rigorous Mahindra & myTVS quality protocols for 100% multi-brand perfection.',
  },
  {
    icon: ShieldCheck,
    title: 'Pan-India Warranty',
    desc: 'Repairs and service warranty recognized and honored across 1,000+ partner workshops nationwide.',
  },
  {
    icon: Wrench,
    title: 'Computerized Diagnostics',
    desc: 'Equipped with original OBD scanner suites, 3D wheel alignment, and computerized paint matching booths.',
  },
  {
    icon: Sparkles,
    title: '100% Genuine Spare Parts',
    desc: 'Direct supply chain integration ensuring original parts with manufacturer warranty on every vehicle.',
  },
];

export default function ProudPartnersSection() {
  return (
    <section className={styles.section} id="proud-partners" aria-labelledby="proud-partners-heading">
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Animated Section Header */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          stagger={0.08}
          threshold={0.12}
          className={styles.header}
        >
        

          <h2 id="proud-partners-heading" className={styles.title}>
            Our Proud <span className={styles.titleHighlight}>Partner</span>
          </h2>

          <p className={styles.subtitle}>
            Authorized franchise of <strong>Mahindra First Choice Services Pvt. Ltd.</strong> and proud subsidiary alliance of{' '}
            <strong>myTVS Automobile Solutions Pvt. Ltd.</strong> bringing India&apos;s largest certified multi-brand service infrastructure to your doorstep.
          </p>
        </AnimatedContent>

        {/* 3D Holographic Profile Cards Row */}
        <div className={styles.cardsRow}>
          <div className={styles.cardContainer}>
            <ProfileCard
              name="myTVS Automobile"
              title="Subsidiary Network Alliance"
              handle="mytvs.india"
              status=""
              statusColor="#22c55e"
           
              avatarUrl="/partners/mytvs.png"
              holo={0.7}
              glare={0.4}
              tiltStrength={14}
              parallax={8}
              radius={18}
              enableTilt
              intro
              showUserInfo
              theme="light"
              onContactClick={() => {
                if (typeof window !== 'undefined') {
                  window.open('https://www.mytvs.in', '_blank');
                }
              }}
            />
          </div>

     
        </div>

   
      </div>
    </section>
  );
}
