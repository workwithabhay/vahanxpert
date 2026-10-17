'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Calendar,
  Layers,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  FileCheck,
  Recycle,
} from 'lucide-react';
import styles from './EnvironmentalPolicy.module.css';

const ENV_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes controls for environmentally responsible handling, storage, collection, recycling, recovery and disposal of used oil, filters, batteries, tyres, contaminated materials, chemical containers and other workshop waste generated through vehicle servicing and repair activities.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to all VahanXpert Services employees, technicians, trainees, contractors and service providers involved in workshop operations that generate, handle, store, transport or dispose of waste.',
    ],
  },
  {
    number: '03',
    title: 'Environmental Responsibility',
    bullets: [
      'Workshop activities should be conducted in a manner that reduces avoidable environmental contamination and waste.',
      'Waste should be segregated, stored and transferred through appropriate channels.',
      'Employees shall follow applicable environmental, safety and waste-handling requirements communicated by management.',
    ],
  },
  {
    number: '04',
    title: 'Waste Identification and Segregation',
    paragraphs: [
      'Waste should be separated according to its nature and handling requirements. Where applicable, categories may include used lubricating oil, oil filters, coolant and other fluids, used batteries, tyres, metal parts, contaminated absorbents/cloth, chemical containers, general recyclable waste and general non-recyclable waste.',
    ],
  },
  {
    number: '05',
    title: 'Used Engine Oil and Lubricants',
    bullets: [
      'Used oil shall be collected in suitable, leak-resistant and clearly identified containers.',
      'Used oil shall not be poured onto soil, drains, roads, open ground or ordinary waste bins.',
      'Containers should remain closed or otherwise protected from contamination and accidental spillage when not being used.',
      'Used oil shall be transferred only through an appropriate authorised/reputed waste handler or channel, as applicable.',
    ],
  },
  {
    number: '06',
    title: 'Oil and Chemical Spills',
    bullets: [
      'Spills should be controlled promptly to reduce the risk of soil, drainage or water contamination.',
      'Suitable absorbent material or spill-control equipment should be used where available.',
      'Contaminated absorbents should be collected and handled as appropriate waste.',
      'Material spills or incidents should be reported to the responsible supervisor/management.',
    ],
  },
  {
    number: '07',
    title: 'Used Oil Filters and Contaminated Materials',
    paragraphs: [
      'Used oil filters, contaminated rags, absorbents and similar materials should be segregated from general waste and stored in designated containers or areas until appropriate collection, recycling or disposal.',
    ],
  },
  {
    number: '08',
    title: 'Used Batteries',
    bullets: [
      'Used batteries should be stored in a secure, designated area protected from avoidable damage and leakage.',
      'Battery terminals should be handled to reduce the risk of short circuit or accidental contact.',
      'Used batteries should be returned, recycled or disposed of through an appropriate authorised/reputed channel, as applicable.',
      'Battery handling shall also follow applicable workshop safety procedures.',
    ],
  },
  {
    number: '09',
    title: 'Used Tyres',
    paragraphs: [
      'Used tyres should be segregated from general waste and stored in a manner that reduces fire, obstruction and environmental risks. Where feasible, they should be transferred through an appropriate recycling, retreading or authorised disposal channel.',
    ],
  },
  {
    number: '10',
    title: 'Scrap Metal and Used Parts',
    paragraphs: [
      'Scrap metal and removed vehicle parts should be segregated where practical. Parts subject to Customer handover, warranty inspection, insurance requirements or dispute resolution should not be discarded until the applicable requirement has been completed.',
    ],
  },
  {
    number: '11',
    title: 'Coolant, Brake Fluid and Other Fluids',
    bullets: [
      'Used coolant, brake fluid and other automotive fluids should not be discharged into drains, soil or general waste.',
      'Such fluids should be collected in suitable labelled containers and handled through an appropriate disposal/recovery channel.',
      'Different waste liquids should not be mixed where mixing could create a safety, handling or disposal problem.',
    ],
  },
  {
    number: '12',
    title: 'Chemical Containers and Packaging',
    paragraphs: [
      'Containers that have held oils, chemicals, solvents or other workshop substances should be handled according to their contents and residual contamination. They should not be reused for food, drinking water or unrelated personal use.',
    ],
  },
  {
    number: '13',
    title: 'General Workshop Waste',
    bullets: [
      'Paper, cardboard, packaging and other recyclable material should be separated where practicable.',
      'General waste should be placed in designated bins.',
      'Waste accumulation should not obstruct vehicle movement, emergency exits, fire equipment or work areas.',
    ],
  },
  {
    number: '14',
    title: 'Storage Area Requirements',
    bullets: [
      'Waste storage areas should be clearly identified and kept orderly.',
      'Containers should be suitable for the waste type and maintained in serviceable condition.',
      'Waste should be protected from avoidable leakage, rainwater exposure, ignition sources and unauthorised access.',
    ],
  },
  {
    number: '15',
    title: 'Waste Collection and Handover',
    paragraphs: [
      'Waste should be handed over to an appropriate recycler, authorised/reputed waste handler, supplier take-back programme or other suitable channel, depending on the waste type and applicable requirements. Where records are available, collection or handover details should be retained.',
    ],
  },
  {
    number: '16',
    title: 'Records and Documentation',
    bullets: [
      'Where appropriate, records may include waste type, approximate quantity, date of collection, receiving party, invoice/receipt and relevant supporting documentation.',
      'Records relating to used oil, batteries or other regulated waste should be maintained where required by applicable requirements or business controls.',
      'Waste records may be reviewed during internal inspections.',
    ],
  },
  {
    number: '17',
    title: 'Environmental Incident Reporting',
    paragraphs: [
      'Any significant spill, leakage, improper disposal, fire involving waste, suspected environmental contamination or other material environmental incident should be reported promptly to management and handled through the applicable incident response process.',
    ],
  },
  {
    number: '18',
    title: 'Fire and Emergency Safety',
    paragraphs: [
      'Waste containing oil, solvents, contaminated cloth or other combustible materials should be kept away from ignition sources. Emergency response and fire safety shall follow the applicable Workshop Health, Safety & Fire Prevention and Emergency Response requirements.',
    ],
  },
  {
    number: '19',
    title: 'Employee Responsibilities',
    bullets: [
      'Segregate waste correctly.',
      'Use designated containers and storage areas.',
      'Do not pour used oil or automotive fluids into drains or onto open ground.',
      'Report leaks, spills, damaged containers or unsafe waste accumulation.',
      'Follow supervisor instructions and workshop safety procedures.',
    ],
  },
  {
    number: '20',
    title: 'Contractor and Waste Handler Responsibilities',
    paragraphs: [
      'Where an external waste handler or recycler is engaged, VahanXpert Services should use an appropriate service provider and retain available transaction or collection records. Contractors entering the workshop must follow applicable safety and access requirements.',
    ],
  },
  {
    number: '21',
    title: 'Training and Awareness',
    paragraphs: [
      'Relevant personnel should receive basic instructions on waste segregation, used oil handling, spill prevention, storage and emergency reporting. Additional training may be provided for personnel handling higher-risk materials.',
    ],
  },
  {
    number: '22',
    title: 'Environmental Housekeeping',
    bullets: [
      'Work areas should be kept reasonably clean and free from avoidable oil, chemical and waste accumulation.',
      'Drainage systems should be protected from preventable contamination.',
      'Waste bins and containers should be emptied or transferred before unsafe accumulation occurs.',
    ],
  },
  {
    number: '23',
    title: 'Prohibited Practices',
    bullets: [
      'Dumping used oil, coolant, brake fluid or other workshop fluids onto soil or into drains.',
      'Burning waste or used oil in an unauthorised manner.',
      'Mixing incompatible wastes where it creates a safety or disposal risk.',
      'Discarding Customer/warranty/insurance-sensitive removed parts before applicable requirements are completed.',
      'Allowing waste to create a foreseeable fire, spill, obstruction or contamination hazard.',
    ],
  },
  {
    number: '24',
    title: 'Supplier and Procurement Coordination',
    paragraphs: [
      'Where suppliers offer take-back, recycling or return programmes for batteries, tyres, lubricants, containers or other products, VahanXpert Services may use such programmes where appropriate. Vendor management shall follow the Vendor & Supplier Management Policy.',
    ],
  },
  {
    number: '25',
    title: 'Review and Continuous Improvement',
    paragraphs: [
      'The workshop may periodically review waste generation, segregation practices, spills, collection arrangements and opportunities to reduce avoidable waste. This Policy may be updated based on operational experience, environmental requirements and applicable legal/business requirements.',
    ],
  },
];

export default function EnvironmentalPolicyContent() {
  return (
    <div className={styles.pageWrapper}>
      {/* Golden Aura Ambient Lighting */}
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowMid} />

      <div className={styles.container}>
        {/* Back Link */}
        <div className={styles.backLinkRow}>
          <Link href="/policies" className={styles.backLink}>
            <ArrowLeft size={14} />
            <span>Back to All Policies</span>
          </Link>
        </div>

        {/* Centered Page Header */}
        <header className={styles.header}>
          <div className={styles.badgePill}>
            <span className={styles.badgeDot}>✦</span>
            <span>Workshop Environmental Safety & Compliance</span>
          </div>

          <h1 className={styles.title}>
            Environmental & Used Oil /{' '}
            <span className={styles.titleHighlight}>Waste Disposal Policy</span>
          </h1>

          <div className={styles.metaRow}>
            <div className={`${styles.metaPill} ${styles.metaPillPrimary}`}>
              <ShieldCheck size={14} />
              <span>Policy No.: VXS/ENV/029</span>
            </div>
            <div className={styles.metaPill}>
              <Layers size={14} />
              <span>Version: 1.0</span>
            </div>
            <div className={styles.metaPill}>
              <Calendar size={14} />
              <span>Effective Date: 20/09/2026</span>
            </div>
            <div className={styles.metaPill}>
              <Recycle size={14} />
              <span>Class: Environmental Safety</span>
            </div>
          </div>
        </header>

        {/* Centered Content Area (No Table of Contents Sidebar) */}
        <main className={styles.contentArea}>
          {ENV_SECTIONS.map((sec) => (
            <motion.article
              key={sec.number}
              className={styles.sectionCard}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{sec.number}</span>
                <h2 className={styles.sectionTitle}>{sec.title}</h2>
              </div>

              <div className={styles.sectionBody}>
                {sec.paragraphs?.map((p, idx) => (
                  <p key={idx} style={{ marginBottom: idx < (sec.paragraphs?.length || 1) - 1 ? '12px' : 0 }}>
                    {p}
                  </p>
                ))}

                {sec.bullets && (
                  <ul className={styles.bulletList}>
                    {sec.bullets.map((b, idx) => (
                      <li key={idx} className={styles.bulletItem}>
                        <span className={styles.bulletDot} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}

          {/* Section 26: Business Contact Card */}
          <motion.article
            className={styles.contactCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>26</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>
            <div className={styles.sectionBody}>
              <p>
                For questions regarding workshop environmental practices, waste management records, or vendor disposal compliance, please contact our administrative desk:
              </p>
              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <MapPin size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>WORKSHOP LOCATION</strong>
                    <span>D-29, Vibhuti Khand, Gomti Nagar, Lucknow, UP – 226010</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Mail size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>ENVIRONMENT DESK EMAIL</strong>
                    <a href="mailto:info.vahanxpert@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      info.vahanxpert@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem} style={{ gridColumn: '1 / -1' }}>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>OFFICIAL HELPLINE</strong>
                    <a href="tel:+918930293896" style={{ color: 'inherit', fontWeight: 700 }}>
                      +91 8930293896
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Section 27: Document Control */}
          <motion.article
            className={styles.sectionCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>27</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.docTableWrapper}>
                <table className={styles.docTable}>
                  <tbody>
                    <tr>
                      <th>Document Name</th>
                      <td>Environmental & Used Oil / Waste Disposal Policy</td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/ENV/029</td>
                    </tr>
                    <tr>
                      <th>Version / Effective Date</th>
                      <td>1.0 / 20/09/2026</td>
                    </tr>
                    <tr>
                      <th>Review Frequency</th>
                      <td>At least annually or whenever environmental/waste-handling requirements change</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.article>

          {/* Back to Policies Button */}
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/policies" className={styles.backLink}>
              <FileCheck size={14} />
              <span>Explore All 35 Official Policies</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
