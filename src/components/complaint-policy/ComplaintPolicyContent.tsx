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
  MessageSquareWarning,
} from 'lucide-react';
import styles from './ComplaintPolicy.module.css';

const COMPLAINT_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes a transparent and structured process for receiving, recording, reviewing and resolving Customer complaints, grievances and service-related disputes concerning VahanXpert Services.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to complaints relating to vehicle servicing, repairs, estimates, invoices, workmanship, parts, warranty, pickup and delivery, vehicle condition, Customer property, staff conduct, service delays, insurance-related coordination and other workshop services.',
    ],
  },
  {
    number: '03',
    title: 'Complaint Channels',
    bullets: [
      'Customers may raise a complaint through the workshop, email, telephone, WhatsApp or another officially communicated channel.',
      "Written complaints should preferably include the Customer's name, contact details, vehicle registration number, job-card/ invoice number and a description of the issue.",
      'A complaint may also be recorded by workshop staff when a Customer raises an issue verbally.',
    ],
  },
  {
    number: '04',
    title: 'Contact Details',
    isContactCard: true,
  },
  {
    number: '05',
    title: 'Complaint Registration',
    paragraphs: [
      'Complaints should be recorded with sufficient information to identify the matter. Where appropriate, a complaint/reference number may be assigned for tracking.',
    ],
  },
  {
    number: '06',
    title: 'Acknowledgement',
    paragraphs: [
      "VahanXpert Services should acknowledge receipt of a complaint within a reasonable period where contact details are available. Acknowledgement may confirm that the matter has been received without representing that the Customer's allegation has been accepted.",
    ],
  },
  {
    number: '07',
    title: 'Complaint Classification',
    bullets: [
      'Service quality or workmanship complaint.',
      'Estimate, invoice or payment dispute.',
      'Warranty or spare-part complaint.',
      'Vehicle damage, loss or missing property complaint.',
      'Pickup, delivery or transportation complaint.',
      'Staff conduct or communication complaint.',
      'Service delay or appointment complaint.',
      'Insurance or cashless repair coordination complaint.',
      'Any other service-related grievance.',
    ],
  },
  {
    number: '08',
    title: 'Initial Review',
    paragraphs: [
      'The complaint may be reviewed against the relevant job card, estimate, Customer approval, invoice, photographs, inspection records, warranty terms, communication records and other available information.',
    ],
  },
  {
    number: '09',
    title: 'Investigation',
    bullets: [
      'Relevant employees, technicians, drivers or managers may be asked to provide information.',
      'The vehicle may be inspected where the complaint concerns damage, workmanship or technical performance.',
      'Available CCTV, photographs, diagnostic reports and other records may be reviewed where relevant and lawfully available.',
      'Where a matter concerns a manufacturer, supplier, insurer or other third party, relevant information may be referred to that party for review.',
    ],
  },
  {
    number: '10',
    title: 'Customer Cooperation',
    paragraphs: [
      'Customers may be requested to provide documents, photographs, invoices, service history or other information reasonably necessary to investigate the complaint. Customers may also be requested to present the vehicle for inspection where the issue cannot reasonably be assessed remotely.',
    ],
  },
  {
    number: '11',
    title: 'Resolution',
    bullets: [
      'Depending on the findings, resolution may include clarification, correction of an invoice or record, rectification of eligible workmanship, warranty processing, repair assessment, service correction, refund or adjustment where applicable, or another appropriate remedy.',
      'The remedy will depend on the facts, applicable service terms, warranty terms, insurance arrangements and applicable law.',
      'A complaint being investigated does not automatically establish liability or entitlement to a particular remedy.',
    ],
  },
  {
    number: '12',
    title: 'Warranty Complaints',
    paragraphs: [
      'Warranty complaints shall be handled according to the applicable warranty terms. Spare-part warranty remains subject to the relevant manufacturer, authorised distributor or supplier policy. VahanXpert Services may assist with the applicable claim process.',
    ],
  },
  {
    number: '13',
    title: 'Damage or Loss Complaints',
    paragraphs: [
      'Complaints involving vehicle damage, missing keys, documents or Customer property shall be reviewed in accordance with the Vehicle Damage, Loss & Incident Reporting Policy and the Vehicle Key, Customer Property & Vehicle Custody Policy.',
    ],
  },
  {
    number: '14',
    title: 'Estimate and Invoice Disputes',
    paragraphs: [
      'Where a Customer disputes an estimate, additional work, invoice or payment, the relevant job card, Customer approval, estimate, additional-work communication and final invoice may be reviewed before a response is issued.',
    ],
  },
  {
    number: '15',
    title: 'Insurance-Related Complaints',
    paragraphs: [
      "Where a complaint relates to an insurer, surveyor, cashless approval, claim assessment or insurance settlement, VahanXpert Services may coordinate with the relevant insurer or surveyor. Matters determined solely by the insurer may remain subject to the insurer's policy and claims process.",
    ],
  },
  {
    number: '16',
    title: 'Complaint Response',
    paragraphs: [
      'The Customer should be informed of the outcome or current status after reasonable review. Where a final decision cannot be provided immediately because technical inspection, insurer review, manufacturer review or additional information is pending, the Customer may be informed of the pending stage.',
    ],
  },
  {
    number: '17',
    title: 'Escalation',
    bullets: [
      'A Customer may request escalation where the initial response does not resolve the concern.',
      'Escalated complaints may be reviewed by a senior manager or authorised management representative.',
      'Management may request a fresh inspection, additional evidence or third-party assessment where appropriate.',
    ],
  },
  {
    number: '18',
    title: 'External Review / Third Party',
    paragraphs: [
      'Where appropriate, VahanXpert Services may recommend or coordinate an independent assessor, manufacturer, insurer, authorised supplier, technical expert or other relevant third party. Any external determination will remain subject to the authority and terms of that party.',
    ],
  },
  {
    number: '19',
    title: 'No Retaliation',
    paragraphs: [
      'Customers should be able to raise genuine complaints without unfair retaliation. Staff should not discourage a Customer from making a legitimate complaint or intentionally withhold relevant complaint information.',
    ],
  },
  {
    number: '20',
    title: 'False or Abusive Complaints',
    paragraphs: [
      'VahanXpert Services may request supporting evidence where allegations are serious or disputed. Threatening, abusive, fraudulent or intentionally misleading conduct may be handled separately, while genuine complaints will continue to be considered on their merits.',
    ],
  },
  {
    number: '21',
    title: 'Confidentiality and Privacy',
    paragraphs: [
      'Complaint information may contain personal, vehicle, payment, insurance or employee information. Such information should be accessed only by authorised persons and used for complaint handling, service improvement, legal/compliance, insurance or other legitimate purposes.',
    ],
  },
  {
    number: '22',
    title: 'Records and Retention',
    bullets: [
      'Complaint records may include the original complaint, acknowledgement, communications, evidence, investigation notes, decisions and resolution details.',
      'Records may be retained for customer service, quality control, warranty, insurance, dispute resolution, accounting, legal and compliance purposes.',
      'Electronic records should be protected against unauthorised alteration or access.',
    ],
  },
  {
    number: '23',
    title: 'Service Improvement',
    paragraphs: [
      'Material or recurring complaints may be reviewed to identify opportunities for improvement in service quality, workshop processes, staff training, customer communication, safety or documentation.',
    ],
  },
  {
    number: '24',
    title: 'Customer Responsibilities',
    bullets: [
      'Provide accurate and complete information.',
      'Raise concerns as soon as reasonably practicable.',
      'Provide relevant documents or evidence when available.',
      'Cooperate reasonably with vehicle inspection or technical assessment.',
      'Maintain respectful communication with workshop personnel.',
    ],
  },
  {
    number: '25',
    title: 'Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on Customer feedback, operational experience, warranty arrangements, insurance requirements or applicable legal requirements.',
    ],
  },
];

export default function ComplaintPolicyContent() {
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
            <span>Customer Care & Dispute Governance</span>
          </div>

          <h1 className={styles.title}>
            Customer Complaint, Grievance &{' '}
            <span className={styles.titleHighlight}>Dispute Resolution Policy</span>
          </h1>

          <div className={styles.metaRow}>
            <div className={`${styles.metaPill} ${styles.metaPillPrimary}`}>
              <ShieldCheck size={14} />
              <span>Policy No.: VXS/CGR/028</span>
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
              <MessageSquareWarning size={14} />
              <span>Class: Customer Governance</span>
            </div>
          </div>
        </header>

        {/* Centered Content Area (No Table of Contents Sidebar) */}
        <main className={styles.contentArea}>
          {COMPLAINT_SECTIONS.map((sec) => {
            if (sec.isContactCard) {
              return (
                <motion.article
                  key={sec.number}
                  className={styles.contactCard}
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
                    <p>
                      Customers may lodge complaints or escalate service concerns directly with our management office via the following verified contact channels:
                    </p>
                    <div className={styles.contactGrid}>
                      <div className={styles.contactItem}>
                        <MapPin size={18} className={styles.contactIcon} />
                        <div>
                          <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>WORKSHOP / OFFICE</strong>
                          <span>D-29, Vibhuti Khand, Gomti Nagar, Lucknow, UP – 226010</span>
                        </div>
                      </div>

                      <div className={styles.contactItem}>
                        <Mail size={18} className={styles.contactIcon} />
                        <div>
                          <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>EMAIL GRIEVANCE</strong>
                          <a href="mailto:info.vahanxpert@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                            info.vahanxpert@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className={styles.contactItem} style={{ gridColumn: '1 / -1' }}>
                        <Phone size={18} className={styles.contactIcon} />
                        <div>
                          <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>CUSTOMER CARE HELPLINE</strong>
                          <a href="tel:+918930293896" style={{ color: 'inherit', fontWeight: 700 }}>
                            +91 8930293896
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            return (
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
            );
          })}

          {/* Section 26: Document Control */}
          <motion.article
            className={styles.sectionCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>26</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.docTableWrapper}>
                <table className={styles.docTable}>
                  <tbody>
                    <tr>
                      <th>Document Name</th>
                      <td>Customer Complaint, Grievance & Dispute Resolution Policy</td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/CGR/028</td>
                    </tr>
                    <tr>
                      <th>Version / Effective Date</th>
                      <td>1.0 / 20/09/2026</td>
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
