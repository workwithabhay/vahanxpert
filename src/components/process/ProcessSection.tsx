'use client';

import React from 'react';
import TiltedCard, { TiltedCardLayer } from './TiltedCard';
import { processSteps } from './processData';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  return (
    <section className={styles.section} id="process" aria-labelledby="process-heading">
      <div className={styles.topBorderGlow} />
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <div className={styles.badgePill}>
            <span>✦</span> HOW IT WORKS
          </div>
          <h2 id="process-heading" className={styles.title}>
            Our Seamless <span className={styles.titleHighlight}>5-Step Process</span>
          </h2>
          <p className={styles.subtitle}>
            From the initial transparent inspection to cashless insurance approval and handover designed for speed and peace of mind.
          </p>
        </header>

        {/* Desktop Visual Timeline Indicator */}
        {/* <div className={styles.timelineBar} aria-hidden="true">
          <div className={styles.timelineLine} />
          {processSteps.map((step) => (
            <div key={step.id} className={styles.timelineStep}>
              <span className={styles.stepDot} />
              <span>{step.stepNumber}. {step.title}</span>
            </div>
          ))}
        </div> */}

        {/* 5 Cards in One Row using TiltedCard with 3D Tilt & Flip */}
        <div className={styles.rowContainer}>
          {processSteps.map((step) => (
            <TiltedCard
              key={step.id}
              imageSrc={step.imageSrc}
              altText={step.altText}
              captionText={step.title}
              containerHeight="380px"
              containerWidth="100%"
              imageHeight="380px"
              imageWidth="100%"
              rotateAmplitude={14}
              scaleOnHover={1.04}
              glare={0.45}
              glareColor="#f59e0b"
              shadow={0.55}
              radius={22}
              flipOnHover={true}
              flipOnClick={true}
              backContent={
                /* Back Content: Displayed dynamically when hovered */
                <div className={styles.backCard}>
                  <div className={styles.backHeader}>
                    <span className={styles.backBadge}>{step.badge}</span>
                    <span className={styles.durationPill}>⏱ {step.duration}</span>
                  </div>

                  <h3 className={styles.backTitle}>{step.title}</h3>
                  <p className={styles.backDescription}>{step.backDescription}</p>

                  <ul className={styles.highlightsList}>
                    {step.highlights.map((item, idx) => (
                      <li key={idx} className={styles.highlightItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.backFooter}>
                    <span className={styles.guaranteeBadge}>
                      <span>✦</span> Vahanxpert Certified
                    </span>
                  </div>
                </div>
              }
            >
              {/* Front Content Overlay: Image with Title & Tagline */}
              <TiltedCardLayer depth={28}>
                <div className={styles.frontOverlay}>
                  <div className={styles.frontTopBadge}>
                    <span className={styles.stepNumberPill}>{step.stepNumber}</span>
                    {/* <span className={styles.hoverHint}>Hover for details ↻</span> */}
                  </div>

                  <div className={styles.frontBottomInfo}>
                    <h3 className={styles.frontTitle}>{step.title}</h3>
                    <span className={styles.frontTagline}>{step.tagline}</span>
                  </div>
                </div>
              </TiltedCardLayer>
            </TiltedCard>
          ))}
        </div>

        {/* Interactive Helper Hint */}
        <div className={styles.footerHint}>
          
        </div>
      </div>
    </section>
  );
}
