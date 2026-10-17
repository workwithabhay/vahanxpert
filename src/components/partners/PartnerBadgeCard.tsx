'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Partner } from './types';
import styles from './InsurancePartners.module.css';

interface PartnerBadgeCardProps {
  partner: Partner;
  className?: string;
}

/**
 * Custom golden-yellow themed vector illustrations for each insurance category.
 * Used as high-end visual placeholders until the user provides custom partner logo images.
 */
function PartnerIconPlaceholder({ category }: { category: Partner['category'] }) {
  switch (category) {
    case 'Health Insurance':
      return (
        <svg viewBox="0 0 48 48" className={styles.iconSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="url(#goldGradient)" fillOpacity="0.15" />
          <path d="M24 10C17.37 10 12 15.37 12 22C12 30.5 24 38 24 38C24 38 36 30.5 36 22C36 15.37 30.63 10 24 10Z" fill="url(#goldGradient)" />
          <path d="M24 16V26M19 21H29" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="goldGradient" x1="12" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Life & Term':
      return (
        <svg viewBox="0 0 48 48" className={styles.iconSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="url(#lifeGrad)" fillOpacity="0.15" />
          <path d="M24 12L34 16.5V23.5C34 30.2 29.7 36.3 24 38C18.3 36.3 14 30.2 14 23.5V16.5L24 12Z" fill="url(#lifeGrad)" />
          <path d="M20 25L23 28L28 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="lifeGrad" x1="14" y1="12" x2="34" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Motor & Auto':
      return (
        <svg viewBox="0 0 48 48" className={styles.iconSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="url(#motorGrad)" fillOpacity="0.15" />
          <path d="M14 28L16.5 19.5C17 17.5 18.8 16 21 16H27C29.2 16 31 17.5 31.5 19.5L34 28" stroke="url(#motorGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="12" y="27" width="24" height="7" rx="3.5" fill="url(#motorGrad)" />
          <circle cx="17" cy="30.5" r="1.5" fill="#ffffff" />
          <circle cx="31" cy="30.5" r="1.5" fill="#ffffff" />
          <defs>
            <linearGradient id="motorGrad" x1="12" y1="16" x2="36" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Travel Shield':
      return (
        <svg viewBox="0 0 48 48" className={styles.iconSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="url(#travelGrad)" fillOpacity="0.15" />
          <path d="M24 14L32 23L27 24L29 34L24 28L19 34L21 24L16 23L24 14Z" fill="url(#travelGrad)" />
          <circle cx="24" cy="24" r="12" stroke="url(#travelGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <defs>
            <linearGradient id="travelGrad" x1="16" y1="14" x2="32" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EAB308" />
              <stop offset="1" stopColor="#CA8A04" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Home & Property':
      return (
        <svg viewBox="0 0 48 48" className={styles.iconSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="url(#homeGrad)" fillOpacity="0.15" />
          <path d="M14 22L24 13L34 22V33C34 34.1 33.1 35 32 35H16C14.9 35 14 34.1 14 33V22Z" fill="url(#homeGrad)" />
          <path d="M21 35V25H27V35" fill="#ffffff" />
          <defs>
            <linearGradient id="homeGrad" x1="14" y1="13" x2="34" y2="35" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Zero-Dep Cover':
      return (
        <svg viewBox="0 0 48 48" className={styles.iconSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="url(#zeroGrad)" fillOpacity="0.15" />
          <circle cx="24" cy="24" r="12" stroke="url(#zeroGrad)" strokeWidth="3" />
          <path d="M19 24H29M24 19V29" stroke="url(#zeroGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M30 14L34 18" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="zeroGrad" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" className={styles.iconSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="url(#defGrad)" fillOpacity="0.15" />
          <path d="M24 13C18 13 13 18 13 24C13 32 24 37 24 37C24 37 35 32 35 24C35 18 30 13 24 13Z" fill="url(#defGrad)" />
          <path d="M21 24L23.5 26.5L27.5 21.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="defGrad" x1="13" y1="13" x2="35" y2="37" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}

export default function PartnerBadgeCard({ partner, className = '' }: PartnerBadgeCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(partner.imageSrc && !imgError);

  const styleOverride = {
    animationDelay: `${partner.floatDelay || 0}s`,
  };

  return (
    <div
      className={`${styles.card} ${styles[`pos_${partner.position}`]} ${className}`}
      style={styleOverride}
      role="article"
      aria-label={`Partner: ${partner.name}`}
    >
      <div className={styles.cardGlow} />

      {/* Visual Container: Shows user image if provided; otherwise shows modern golden placeholder */}
      <div className={styles.iconWrapper}>
        {hasImage ? (
          <div className={styles.imageContainer}>
            <Image
              src={partner.imageSrc!}
              alt={`${partner.name} logo`}
              width={56}
              height={56}
              className={styles.partnerImg}
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className={styles.placeholderContainer} title="Image Placeholder - replace in partnersData.ts">
            <PartnerIconPlaceholder category={partner.category} />
            <span className={styles.placeholderBadge}>LOGO</span>
          </div>
        )}
      </div>

      {/* Label underneath - styled matching the reference image typography */}
      <div className={styles.cardContent}>
        <span className={styles.partnerName}>{partner.name}</span>
        {partner.highlight && <span className={styles.partnerHighlight}>{partner.highlight}</span>}
      </div>
    </div>
  );
}
