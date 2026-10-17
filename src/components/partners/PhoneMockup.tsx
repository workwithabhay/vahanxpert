'use client';

import React from 'react';
import styles from './InsurancePartners.module.css';

interface PhoneMockupProps {
  cardTitle: string;
  cardSubtitle: string;
  cardBadge: string;
}

export default function PhoneMockup({ cardTitle, cardSubtitle, cardBadge }: PhoneMockupProps) {
  return (
    <div className={styles.phoneWrapper} aria-label="Insurance App Mobile Preview">
      {/* Outer Phone Hardware Chassis */}
      <div className={styles.phoneChassis}>
        {/* Subtle glass screen glare */}
        <div className={styles.screenGlare} />

        {/* Dynamic Island / Notch */}
        <div className={styles.dynamicIsland}>
          <div className={styles.cameraLens} />
          <div className={styles.sensorDot} />
        </div>

        {/* Phone Display Screen */}
        <div className={styles.phoneScreen}>
          {/* Top iOS Status Bar */}
          <div className={styles.statusBar}>
            <span className={styles.statusTime}>9:41</span>
            <div className={styles.statusIcons}>
              {/* Cellular Signal */}
              <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="0.75" />
                <rect x="4.3" y="6" width="3" height="6" rx="0.75" />
                <rect x="8.6" y="3" width="3" height="9" rx="0.75" />
                <rect x="13" y="0" width="3" height="12" rx="0.75" />
              </svg>
              {/* Wifi */}
             
              {/* Battery with Golden Fill */}
              <div className={styles.batteryIcon}>
                <div className={styles.batteryLevel} />
              </div>
            </div>
          </div>

          {/* In-App Header Preview */}
          <div className={styles.appHeader}>
           
          </div>

          {/* Center Card inside Phone (Matching the Reference Layout) */}
          <div className={styles.phoneCenterCard}>
            <div className={styles.phoneCardIconContainer}>
              {/* Golden Shield & Clock Icon */}
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="16" fill="url(#phoneCardIconGrad)" />
                <path
                  d="M28 14L38 18.5V26.5C38 33.5 33.7 39.8 28 41.5C22.3 39.8 18 33.5 18 26.5V18.5L28 14Z"
                  fill="#ffffff"
                  fillOpacity="0.95"
                />
                <circle cx="28" cy="28" r="6" stroke="#D97706" strokeWidth="2.5" />
                <path d="M28 25V28H31" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="phoneCardIconGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FBBF24" />
                    <stop offset="0.5" stopColor="#F59E0B" />
                    <stop offset="1" stopColor="#D97706" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3 className={styles.phoneCardTitle}>{cardTitle}</h3>
            <p className={styles.phoneCardSubtitle}>{cardSubtitle}</p>

            <div className={styles.phoneCardTag}>
              <span className={styles.activeDot} />
              {cardBadge}
            </div>
          </div>

          {/* Bottom App Mini Feed / Bar Preview */}
          <div className={styles.phoneBottomPreview}>
            <div className={styles.partnerAvatars}>
              <span className={styles.avatarPill}>HDFC</span>
              <span className={styles.avatarPill}>STAR</span>
          
              <span className={styles.avatarPillMore}>+47</span>
            </div>
          </div>

          {/* iOS Bottom Swipe Indicator */}
          <div className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
}
