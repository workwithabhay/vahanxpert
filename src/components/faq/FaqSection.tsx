'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from '@/components/animate-ui/components/base/accordion';
import { FAQ_ITEMS, type FaqItem } from './faqData';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  return (
    <section id="faq" className={styles.faqSection} aria-label="Frequently Asked Questions">
      {/* Ambient background lighting */}
      <div className={styles.ambientGlow1} />

      <div className={styles.container}>
        {/* ==================================================================
            Centered Section Header (Heading & Subheading)
            ================================================================== */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow Badge */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowIcon}>✦</span>
            <span>Got Questions?</span>
          </div>

          {/* Heading */}
          <h2 className={styles.headline}>
            Frequently Asked{' '}
            <span className={styles.headlineHighlight}>Questions.</span>
          </h2>

          {/* Subheading */}
          <p className={styles.subheadline}>
            Clear answers about cashless insurance claims, turnaround times, multi-brand car repairs, and transparent pricing at VahanXpert Nohar.
          </p>
        </motion.div>

        {/* ==================================================================
            Centered Animate UI Base Accordion (6 Curated FAQs)
            ================================================================== */}
        <motion.div
          className={styles.accordionWrapper}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion
            multiple={false}
            defaultValue="faq-1"
            className={styles.accordionList}
          >
            {FAQ_ITEMS.map((faq: FaqItem) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={styles.accordionCard}
              >
                <AccordionTrigger
                  showArrow={true}
                  className={styles.accordionTriggerBtn}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionPanel keepRendered={false}>
                  <div className={styles.answerContent}>
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                    {faq.highlight && (
                      <div className={styles.highlightPill}>
                        <span style={{ color: '#d97706' }}>✓</span>
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      
      </div>
    </section>
  );
}
