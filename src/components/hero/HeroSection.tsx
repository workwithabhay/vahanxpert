'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero Section">
      <div className={styles.container}>
        {/* ==================================================================
            Left Column: Headline, Copy & Action Block
            ================================================================== */}
        <motion.div
          className={styles.leftCol}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow Tag with Golden Accent Bar */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowBar} />
            <span>No.1 Cashless Insurance & Auto Care Platform in Nohar</span>
          </div>

          {/* Main Headline (Razorpay Style with Golden Highlight) */}
          <h1 className={styles.headline}>
            Your Car Deserves {' '}
            <span className={styles.headlineHighlight}>
              Better Care.
            </span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subheadline}>
Experience professional car servicing, quality repairs, and hassle-free insurance claim assistance at VahanXpert your one-stop car care destination in Nohar, Rajasthan.
          </p>

          {/* Action CTAs in One Row */}
          <div className={styles.ctaRow}>
            {/* Primary CTA: Book Your Service */}
            <motion.button
              type="button"
              className={styles.primaryBtn}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Book a Service</span>
              <span aria-hidden="true" className={styles.btnArrow}></span>
            </motion.button>

            {/* Secondary CTA: Get Insurance Help (LiquidButton) */}
            <LiquidButton
              variant="secondary"
              size="lg"
              onClick={() => {
                const el = document.getElementById('partners') || document.getElementById('process');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <PlusIcon className="w-4 h-4" />
              <span>Get Insurance Claim</span>
            </LiquidButton>
          </div>

          {/* Trust Highlights */}
          <div className={styles.trustBadgesRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>★</span>
              <span>Expert Car Service & Repairs</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>★</span>
              <span>Cashless Insurance Assistance</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>★</span>
              <span>Transparent Pricing & Quality </span>
            </div>

          </div>
        </motion.div>

        {/* ==================================================================
            Right Column: Unified 3D Stage + Mechanic Pop-out + Offer Stamp
            ================================================================== */}
        <div className={styles.rightCol}>
          <div className={styles.stageCanvas}>
            {/* Natural Ground Contact Shadow underneath car & boots */}
            <div className={styles.groundShadow} />

            {/* Pop-Out Foreground Mechanic with Open-hood VW (Shifted Right) */}
            <motion.div
              className={styles.mechanicImageWrapper}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/mechanic-vw.png"
                alt="Smiling Mechanic with Open-hood VW"
                width={1122}
                height={1402}
                priority
                className={styles.mechanicImg}
              />
            </motion.div>

            {/* Rotating Circular Stamp ("LIMITED PERIOD OFFER" - Razorpay Style) */}
            <motion.div
              className={styles.stampWrapper}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* <div className={styles.stampCircle}>
                <motion.svg
                  viewBox="0 0 140 140"
                  className={styles.stampSvg}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <path
                    id="circlePath"
                    d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    fill="none"
                  />
                  <text fill="#b45309" fontSize="10.5" fontWeight="800" letterSpacing="2.2">
                    <textPath href="#circlePath" startOffset="0%">
                      LIMITED PERIOD OFFER // LIMITED PERIOD OFFER //
                    </textPath>
                  </text>
                </motion.svg>

                <div className={styles.stampCenter}>
                  <span>LIMITED</span>
                  <span className={styles.stampHighlight}>PERIOD</span>
                  <span>OFFER</span>
                </div>
              </div> */}
            </motion.div>

            {/* Interactive Floating Badge 1 (Motion Div) */}
            <motion.div
              className={styles.floatingBadge1}
            
            >
              <span style={{ color: '#d97706', fontSize: '1.1rem' }}>✦</span>
              <span>50+ Network Insurers</span>
            </motion.div>

            {/* Interactive Floating Badge 2 (Motion Div) */}
            <motion.div
              className={styles.floatingBadge2}

            >
              <span className={styles.activeDot} />
              <span>100% Cashless Approval</span>
            </motion.div>

            {/* Micro footnote */}
          </div>
        </div>
      </div>
    </section>
  );
}
