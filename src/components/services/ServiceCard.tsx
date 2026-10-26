'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { Share01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import SpotlightCard from './SpotlightCard';
import styles from './ServiceCard.module.css';

export interface ServiceItem {
  id: string;
  number?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
  spotlightColor?: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export default function ServiceCard({ service, className = '' }: ServiceCardProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (navigator.share) {
      navigator.share({
        title: service.title,
        text: service.description,
        url: typeof window !== 'undefined' ? window.location.href : '',
      }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <SpotlightCard
      theme="light"
      spotlightColor={service.spotlightColor ?? '#f59e0b'}
      intensity={0.22}
      spotlightSize={260}
      softness={0.75}
      shape="circle"
      borderGlow={0.7}
      proximity={90}
      smoothing={0.25}
      grain={0}
      ambient={false}
      flare
      noPadding={true}
      className={className}
    >
      <div className={styles.cardInner}>
        {/* Top Half Portion: Image with Floating Action Badges */}
        <div className={styles.imageWrapper}>
          <Image
            src={service.imageSrc}
            alt={service.imageAlt ?? service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.serviceImage}
            priority={false}
          />

          {/* Top-Right Floating Actions: Number Badge & Share Icon */}
          <div className={styles.topActions}>
            {service.number && (
              <div className={styles.numberBadge} aria-label={`Service index ${service.number}`}>
                {service.number}
              </div>
            )}

            <button
              type="button"
              className={styles.shareButton}
              onClick={handleShare}
              aria-label={`Share ${service.title}`}
              title="Share Service"
            >
              <HugeiconsIcon icon={Share01Icon} size={18} strokeWidth={2} />
              {copied && <span className={styles.shareTooltip}>Link Copied!</span>}
            </button>
          </div>
        </div>

        {/* Content Portion: Heading, Subheading, Divider, and Bottom CTA */}
        <div className={styles.contentArea}>
          <h3 className={styles.heading}>{service.title}</h3>
          <p className={styles.subheading}>{service.description}</p>

          {/* Subtle Horizontal Divider */}
          <div className={styles.divider} />

          {/* Bottom Action Row: CTA Text & Golden Circle Arrow Button */}
          <Link href={service.ctaHref ?? '/services'} className={styles.bottomRow}>
            <span className={styles.ctaText}>{service.ctaText ?? 'View Service'}</span>
            <div className={styles.arrowButton} aria-hidden="true">
              <HugeiconsIcon className={styles.arrowIcon} icon={ArrowRight01Icon} size={20} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
}
