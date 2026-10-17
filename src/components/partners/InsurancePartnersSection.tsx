'use client';

import React from 'react';
import { insurancePartners, sectionContent } from './partnersData';
// import PartnerBadgeCard from './PartnerBadgeCard';
// import PhoneMockup from './PhoneMockup';
import LogoLoop, { LogoItem } from './LogoLoop';
import styles from './InsurancePartners.module.css';

export default function InsurancePartnersSection() {
  /*
  // --- COMMENTED OUT PREVIOUS UI LOGIC ---
  // Separate partners into left and right groups according to position
  const leftPartners = insurancePartners.filter((p) => p.position.startsWith('tl') || p.position.startsWith('bl'));
  const rightPartners = insurancePartners.filter((p) => p.position.startsWith('tr') || p.position.startsWith('br'));
  */

  // Map all insurance partners into LogoLoop items
  const allPartnerLogos: LogoItem[] = insurancePartners.map((partner) => ({
    src: partner.imageSrc || '',
    alt: `${partner.name} Cashless Insurance Partner`,
    title: partner.name,
  }));

  const reversedPartnerLogos: LogoItem[] = [...allPartnerLogos].reverse();

  // Premium Card Renderer for each partner logo in LogoLoop - purely the logo in a spacious chip
  const renderPartnerCard = (item: LogoItem) => {
    const src = 'src' in item ? item.src : '';
    const alt = 'alt' in item ? item.alt ?? '' : '';

    return (
      <div
        className="group flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200/70 shadow-[0_4px_16px_rgba(245,158,11,0.08)] hover:shadow-[0_8px_26px_rgba(245,158,11,0.22)] hover:border-amber-400/90 transition-all duration-300 min-w-[200px] sm:min-w-[230px] h-[76px] sm:h-[86px]"
      >
        {src && (
          <img
            src={src}
            alt={alt}
            className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[170px] object-contain pointer-events-none select-none transition-transform duration-300 group-hover:scale-105"
            draggable={false}
          />
        )}
      </div>
    );
  };

  return (
    <section className={styles.section} id="insurance-partners" aria-labelledby="partners-heading">
      {/* Golden Aura Ambient Radial Glow */}
      <div className={styles.ambientGlow} />
      <div className={styles.ambientGlowSecondary} />

      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          {sectionContent.badge && (
            <div className={styles.badgePill}>
              <span className={styles.badgeDot}>✦</span>
              {sectionContent.badge}
            </div>
          )}

          <h2 id="partners-heading" className={styles.title}>
            <span className={styles.titleRegular}>{sectionContent.titlePart1}</span>
            <span className={styles.titleGold}>{sectionContent.titleHighlight}</span>
          </h2>

          <p className={styles.subtitle}>{sectionContent.subtitle}</p>
        </header>

        {/* =========================================================================
            LogoLoop UI: Infinite smooth multi-directional partner carousel
           ========================================================================= */}
        <div className="w-full relative overflow-hidden flex flex-col gap-8 sm:gap-10 py-6 z-10">
          {/* Track 1: Moving Left */}
          <LogoLoop
            logos={allPartnerLogos}
            speed={45}
            direction="left"
            gap={48}
            logoHeight={86}
            hoverSpeed={0}
            
            fadeOut
          
            draggable
            renderItem={renderPartnerCard}
            ariaLabel="Insurance partners carousel row 1"
          />

          {/* Track 2: Moving Right */}
          <LogoLoop
            logos={reversedPartnerLogos}
            speed={45}
            direction="right"
            gap={48}
            logoHeight={86}
            hoverSpeed={0}
           
            fadeOut
           
            draggable
            renderItem={renderPartnerCard}
            ariaLabel="Insurance partners carousel row 2"
          />

          {/* Trust Highlights Strip below loops */}
          
        </div>

        {/* =========================================================================
            PREVIOUS UI COMMENTED OUT AS REQUESTED:
           ========================================================================= */}
        {/*
        <div className={styles.stage}>
          <div className={`${styles.cardsColumn} ${styles.cardsColumnLeft}`}>
            {leftPartners.map((partner) => (
              <PartnerBadgeCard key={partner.id} partner={partner} />
            ))}
          </div>

          <div className={styles.phoneColumn}>
            <PhoneMockup
              cardTitle={sectionContent.centerCardTitle}
              cardSubtitle={sectionContent.centerCardSubtitle}
              cardBadge={sectionContent.centerCardBadge}
            />
          </div>

          <div className={`${styles.cardsColumn} ${styles.cardsColumnRight}`}>
            {rightPartners.map((partner) => (
              <PartnerBadgeCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>

        <div className={styles.mobileCardsGrid}>
          {insurancePartners.map((partner) => (
            <PartnerBadgeCard key={partner.id} partner={partner} className={styles.mobileCard} />
          ))}
        </div>
        */}

      </div>
    </section>
  );
}
