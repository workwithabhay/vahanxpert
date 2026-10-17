'use client';

import React from 'react';
import Link from 'next/link';
import {
  Truck,
  FileCheck,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  MessageSquare,
  ArrowRight,
  Clock,
} from 'lucide-react';
import AnimatedContent from '@/components/common/AnimatedContent';
import styles from './InsuranceClaimSection.module.css';

const CLAIM_PILLARS = [
  {
    step: '01',
    tag: '24/7 Rapid Intimation',
    title: 'Free On-Spot Towing & Intimation',
    desc: 'Call our emergency hotline. We dispatch immediate towing assistance and file your initial insurance intimation within 15 minutes.',
    icon: Truck,
  },
  {
    step: '02',
    tag: 'Zero Queues',
    title: 'Direct Surveyor Coordination',
    desc: 'Our dedicated claims manager coordinates directly with company surveyors for rapid digital and physical spot inspection.',
    icon: FileCheck,
  },
  {
    step: '03',
    tag: '100% Cashless',
    title: 'Zero Upfront Repair Cost',
    desc: 'Cashless repairs with 25+ insurance providers. Every replacement is 100% genuine OEM with complete manufacturer warranty.',
    icon: ShieldCheck,
  },
  {
    step: '04',
    tag: 'Real-Time Updates',
    title: 'WhatsApp Tracking & Handover',
    desc: 'Live photo and video updates at every stage — from dent removal to robotic paint-booth curing — until pristine showroom delivery.',
    icon: Sparkles,
  },
];

const CLAIM_STATS = [
  { value: '₹2.5Cr+', label: 'Claims Settled Cashless', isGold: false },
  { value: '99.4%', label: 'Claim Approval Rate', isGold: false },
  { value: '25+', label: 'Cashless Insurance Tie-ups', isGold: false },
  { value: '< 48h', label: 'Average Survey Turnaround', isGold: false },
];

export default function InsuranceClaimSection() {
  return (
    <section className={styles.section} id="insurance-claims" aria-labelledby="claims-heading">
      {/* Warm Ambient Glows */}
      <div className={styles.ambientGlow} />
      <div className={styles.ambientGlowBottom} />

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
          <div className={styles.badgePill}>
            <span className={styles.badgeIcon}>✦</span> BEST INSURANCE CLAIM ASSISTANCE IN NOHAR
          </div>

          <h2 id="claims-heading" className={styles.title}>
            Accident or Dent? Get{' '}
            <span className={styles.titleHighlight}>100% Cashless Claims in Nohar</span>
          </h2>

          <p className={styles.subtitle}>
            Don&apos;t stress over tedious paperwork or chasing insurance surveyors.
            From on-spot accident towing in Nohar to 100% cashless claim approvals, we handle the entire process effortlessly.
          </p>
        </AnimatedContent>

        {/* Animated Stats Ribbon */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.7}
          ease="power3.out"
          stagger={0.09}
          threshold={0.12}
          className={styles.statsRibbon}
        >
          {CLAIM_STATS.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={`${styles.statValue} ${stat.isGold ? styles.statValueGold : ''}`}>
                {stat.value}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </AnimatedContent>

        {/* Animated 4-Card Claim Pillars Grid */}
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={0.85}
          ease="power3.out"
          stagger={0.12}
          threshold={0.1}
          className={styles.grid}
        >
          {CLAIM_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.step} className={styles.card}>
                {/* <span className={styles.cardStepNumber}>STEP {pillar.step}</span> */}

                <div className={styles.iconWrapper}>
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <span className={styles.cardTag}>{pillar.tag}</span>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.desc}</p>
              </div>
            );
          })}
        </AnimatedContent>

      </div>
    </section>
  );
}
