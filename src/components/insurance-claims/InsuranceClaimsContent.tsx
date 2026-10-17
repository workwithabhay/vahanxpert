'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ArrowRight,
  AlertTriangle,
  Camera,
  FileText,
  Clock,
  HelpCircle,
} from 'lucide-react';
import styles from './InsuranceClaimsPage.module.css';

const ACCIDENT_STEPS = [
  {
    step: '01',
    title: 'Stay Safe First',
    desc: 'Move to a safe location when possible and check whether anyone requires emergency assistance.',
  },
  {
    step: '02',
    title: 'Capture Evidence',
    desc: 'Take photographs of the vehicle damage, accident location, number plates and relevant surrounding details.',
  },
  {
    step: '03',
    title: 'Inform The Insurer',
    desc: 'Contact the insurance company through its official claim or customer-support channel as soon as practical.',
  },
  {
    step: '04',
    title: 'Keep Documents Ready',
    desc: 'Keep your policy information, registration details and other requested documents available.',
  },
];

const CASHLESS_POINTS = [
  'Vehicle is taken to an eligible network workshop',
  'Damage is inspected and claim is assessed',
  'Insurer approves admissible repair work',
  'Workshop coordinates the applicable billing process',
  'Customer pays applicable deductible and non-covered amounts',
];

const REIMBURSEMENT_POINTS = [
  'Repair route is confirmed with the insurer',
  'Vehicle is repaired as permitted under the policy',
  'Customer pays the applicable repair bill',
  'Required invoices and documents are collected',
  'Eligible amount is processed for reimbursement',
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function InsuranceClaimsContent() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowMid} />

      <div className={styles.container}>
        {/* ====================================================================
            1. HERO SECTION
            ==================================================================== */}
        <section className={styles.heroSection}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Claims
              </div>
            </motion.div>

            <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
              Stress Free <span className={styles.titleHighlight}>Insurance Claims</span>
            </motion.h1>

            <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
              From accident assistance to claim documentation, VahanXpert helps you navigate the insurance process with expert support and complete peace of mind.
            </motion.p>

            <motion.div className={styles.heroCtas} variants={fadeInUp}>
              <a href="tel:+918930293896" className={styles.primaryBtn}>
                <PhoneCall size={18} />
                <span>Call Claim Specialist</span>
              </a>
              <Link href="/contact" className={styles.secondaryBtn}>
                <span>Send An Enquiry</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ====================================================================
            2. WHAT EXACTLY IS A CLAIM?
            ==================================================================== */}
        <section className={styles.whatClaimSection}>
          <motion.div
            className={styles.claimInfoCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Policy Based Process
              </div>
            </motion.div>

            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              What Exactly <span className={styles.titleHighlight}>Is A Claim?</span>
            </motion.h2>

            <motion.p className={styles.claimParagraph} variants={fadeInUp}>
              A motor insurance claim is a formal request made to your insurance company when your insured vehicle suffers a covered loss or damage. The insurer reviews the incident, policy coverage, documents and assessed damage before determining the applicable claim outcome.
            </motion.p>

            <motion.p className={styles.claimParagraph} variants={fadeInUp}>
              The process can vary depending on whether the incident is an accident, theft, natural event or another covered situation. Your exact policy wording, add-ons, exclusions, deductibles and applicable conditions determine what is payable.
            </motion.p>

       
          </motion.div>
        </section>

        {/* ====================================================================
            3. ACCIDENT HO GAYA? PEHLE YE KARO
            ==================================================================== */}
        <section className={styles.accidentStepsSection}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Emergency Action Guide
              </div>
            </motion.div>

            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              Accident Ho Gaya? <span className={styles.titleHighlight}>Pehle Ye Karo</span>
            </motion.h2>

            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              Claim process start karne se pehle safety aur proper documentation important hai. Situation ke according emergency services ya police assistance bhi required ho sakti hai.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.stepsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {ACCIDENT_STEPS.map((step, idx) => (
              <motion.div key={idx} className={styles.stepCard} variants={fadeInUp}>
                <div className={styles.stepNumber}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ====================================================================
            4. CASHLESS VS REIMBURSEMENT
            ==================================================================== */}
        <section className={styles.comparisonSection}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Understanding Your Options
              </div>
            </motion.div>

            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              Cashless Vs <span className={styles.titleHighlight}>Reimbursement</span>
            </motion.h2>

            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              Motor insurance repair claims commonly involve a cashless network-workshop route or a reimbursement route. Availability and conditions depend on the insurer and policy.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.comparisonGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {/* Card 1: Cashless Claim */}
            <motion.div
              className={`${styles.compareCard} ${styles.compareCardFeatured}`}
              variants={fadeInUp}
            >
              <div className={`${styles.compareTag} ${styles.compareTagGold}`}>
                NETWORK WORKSHOP
              </div>
              <h3 className={styles.compareTitle}>Cashless Claim</h3>
              <p className={styles.compareDesc}>
                If your insurer permits cashless repair at an eligible network workshop, the repair bill is processed through the insurer/workshop arrangement according to the policy and approved claim amount.
              </p>

              <div className={styles.checkList}>
                {CASHLESS_POINTS.map((pt, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 2: Reimbursement Claim */}
            <motion.div className={styles.compareCard} variants={fadeInUp}>
              <div className={`${styles.compareTag} ${styles.compareTagNeutral}`}>
                CUSTOMER PAYS FIRST
              </div>
              <h3 className={styles.compareTitle}>Reimbursement Claim</h3>
              <p className={styles.compareDesc}>
                In a reimbursement route, the vehicle is repaired according to the applicable process and the customer pays the repair amount initially. Eligible expenses can then be submitted to the insurer for reimbursement.
              </p>

              <div className={styles.checkList}>
                {REIMBURSEMENT_POINTS.map((pt, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ====================================================================
            5. BOTTOM CTA BANNER
            ==================================================================== */}
        <section className={styles.ctaSection}>
          <motion.div
            className={styles.ctaCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <div className={styles.ctaGlow} />

            <motion.div className={styles.ctaEyebrow} variants={fadeInUp}>
              Need Claim Assistance?
            </motion.div>

            <motion.h2 className={styles.ctaTitle} variants={fadeInUp}>
              We&apos;re Here To Help You Drive With Confidence
            </motion.h2>

            <motion.p className={styles.ctaDesc} variants={fadeInUp}>
              Contact our claim desk directly for immediate towing dispatch, intimation guidance, or spot survey coordination.
            </motion.p>

            <motion.div className={styles.ctaActions} variants={fadeInUp}>
              <a href="tel:+918930293896" className={styles.ctaGoldBtn}>
                <PhoneCall size={18} />
                <span>Call +91 8930293896</span>
              </a>

              <a
                href="https://wa.me/918930293896?text=Hi%20VahanXpert,%20I%20need%20insurance%20claim%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondaryBtn}
              >
                <MessageSquare size={18} />
                <span>WhatsApp Assistance</span>
              </a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
