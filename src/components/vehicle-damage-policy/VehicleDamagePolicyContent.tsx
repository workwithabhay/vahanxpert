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
  Car,
  AlertTriangle,
} from 'lucide-react';
import styles from './VehicleDamagePolicy.module.css';

const DAMAGE_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes a structured process for identifying, recording, reporting, investigating and resolving incidents involving customer vehicles while they are at, or under the operational custody of, VahanXpert Services. It is intended to support prompt communication, evidence preservation, fair assessment and appropriate corrective action.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to incidents involving customer vehicles during vehicle intake, parking, servicing, repair, washing, road testing, pickup/drop, movement within the workshop, insurance repair activity, delivery preparation or other authorised workshop operations.',
    ],
  },
  {
    number: '03',
    title: 'Types of Incidents Covered',
    bullets: [
      'New visible damage to the vehicle while under workshop custody.',
      'Damage occurring during internal vehicle movement or road testing.',
      'Accident, collision or third-party incident involving a customer vehicle.',
      'Loss or damage to a component, accessory or item specifically recorded as received by the Garage.',
      'Key loss, suspected theft or other material security incident affecting the vehicle.',
      'Fire, flood, electrical incident or other event affecting the vehicle.',
      'Any other material incident that may reasonably affect the condition, safety or custody of the vehicle.',
    ],
  },
  {
    number: '04',
    title: 'Immediate Safety Actions',
    bullets: [
      'Protection of people and immediate safety shall take priority over administrative reporting.',
      'Where necessary, the vehicle should be stopped or moved to a safe location.',
      'Emergency services, roadside assistance or other appropriate support may be contacted where required.',
      'Further use of a damaged or unsafe vehicle should be avoided where continued operation may create additional risk.',
    ],
  },
  {
    number: '05',
    title: 'Internal Incident Reporting',
    paragraphs: [
      'Any employee or authorised person who becomes aware of a material vehicle incident should report it promptly to the service/workshop manager or other designated management representative. The report should be made as soon as reasonably practicable after the incident is identified.',
    ],
  },
  {
    number: '06',
    title: 'Incident Record',
    bullets: [
      'Vehicle registration number and job card/invoice reference.',
      'Date, approximate time and location of incident.',
      'Description of the incident and circumstances known at the time.',
      'Person(s) involved or responsible for vehicle movement, where known.',
      'Photographs or video of the vehicle condition and relevant area, where reasonably practicable.',
      'Existing intake photographs or condition records for comparison.',
      'Details of any third party, witness, police report, insurer or roadside assistance involvement, where applicable.',
    ],
  },
  {
    number: '07',
    title: 'Pre-Existing Damage Verification',
    paragraphs: [
      "Before attributing responsibility for newly observed damage, VahanXpert Services may compare the vehicle's condition with intake photographs, job-card notes, inspection reports and other available records. The existence of a complaint or newly reported damage alone shall not be treated as conclusive proof of when or how the damage occurred.",
    ],
  },
  {
    number: '08',
    title: 'Customer Notification',
    bullets: [
      'Where a material incident affecting the vehicle is identified, the Customer should be informed within a reasonable operational period after the relevant facts are sufficiently known.',
      'The initial communication should provide factual information available at that time and should avoid unsupported conclusions about responsibility.',
      'Further information may be provided after investigation, inspection or insurer assessment.',
    ],
  },
  {
    number: '09',
    title: 'Investigation',
    bullets: [
      'Authorised management may review job cards, photographs, CCTV where available, road-test records, key records, staff statements, customer statements and other relevant evidence.',
      'The relevant technician, driver or service advisor may be asked to provide an incident account.',
      'Where an insurance or third-party claim is involved, relevant insurer or authority procedures may be followed.',
      'The investigation should distinguish, where reasonably possible, between pre-existing damage, service-related damage, road incidents, third-party causes and other circumstances.',
    ],
  },
  {
    number: '10',
    title: 'Insurance and Third-Party Reporting',
    paragraphs: [
      'Where an incident may be covered by an applicable insurance policy or involves a third party, VahanXpert Services may initiate or assist with the relevant claim/reporting process. Any insurer\'s assessment, policy terms, deductible, exclusions or surveyor findings may affect the available remedy.',
    ],
  },
  {
    number: '11',
    title: 'Customer Vehicle Accident During Road Test',
    bullets: [
      'The driver should first take reasonable steps to protect people and comply with applicable legal requirements.',
      'The incident should be reported to authorised workshop management promptly.',
      'Relevant vehicle and scene photographs may be collected where lawful and reasonably safe.',
      'Police, insurer, roadside assistance or other authorities may be contacted where required by the circumstances or applicable law.',
      'The vehicle should not be repaired or altered in a manner that unnecessarily destroys relevant evidence before an inspection where an insurance or dispute investigation is pending, except where necessary for safety.',
    ],
  },
  {
    number: '12',
    title: 'Damage During Workshop Operations',
    paragraphs: [
      "Where damage is alleged to have occurred during parking, washing, lifting, servicing, repair or other workshop operations, the Garage may inspect the relevant area, review the vehicle's intake condition and obtain statements from personnel involved. Any corrective action or remedy shall be determined after reasonable review of the facts and applicable terms.",
    ],
  },
  {
    number: '13',
    title: 'Loss of Parts or Customer Property',
    paragraphs: [
      "If an item specifically recorded as received by VahanXpert Services is reported missing or damaged, the Garage may investigate the custody record, relevant personnel access and available evidence. Personal belongings that were not recorded as handed over to the Garage remain the Customer's responsibility, subject to applicable law and the actual circumstances.",
    ],
  },
  {
    number: '14',
    title: 'Repair and Remedial Action',
    bullets: [
      'Where a service-related issue is established and the Garage is responsible, an appropriate corrective action may be considered in accordance with applicable warranty, service and legal terms.',
      'Possible corrective action may include inspection, rectification, repair, replacement or another mutually appropriate solution.',
      "Where the cause is outside the Garage's responsibility, the Customer may be informed of the findings and relevant third-party process.",
    ],
  },
  {
    number: '15',
    title: 'Evidence Preservation',
    bullets: [
      'Relevant photographs, CCTV records where available, job cards, estimates, invoices, road-test records, communications and incident notes should be preserved where reasonably practicable.',
      'Records should not be intentionally altered or destroyed after a material incident is reported.',
      'Access to incident records should be restricted to authorised personnel and legitimate claim/investigation purposes.',
    ],
  },
  {
    number: '16',
    title: 'Customer Cooperation',
    bullets: [
      'Provide accurate information about the reported incident.',
      'Make the vehicle available for reasonable inspection.',
      "Provide relevant documents, photographs or information in the Customer's possession.",
      'Avoid unauthorised alteration or repair of the disputed area where an inspection is pending, except where immediate safety requires action.',
    ],
  },
  {
    number: '17',
    title: 'Dispute and Escalation',
    paragraphs: [
      'If the Customer disagrees with the incident assessment, the matter may be escalated to authorised management for review. The review may consider all available evidence and, where applicable, the findings of an insurer, manufacturer, supplier, surveyor, police authority or other competent third party.',
    ],
  },
  {
    number: '18',
    title: 'No Automatic Admission of Liability',
    paragraphs: [
      'Reporting or investigating an incident does not by itself constitute an admission of liability by VahanXpert Services. Responsibility shall be considered based on the available evidence, applicable contractual terms, insurance arrangements and applicable law.',
    ],
  },
  {
    number: '19',
    title: 'Privacy and Confidentiality',
    paragraphs: [
      "Incident records may contain personal, vehicle, insurance, CCTV or other information. Such information shall be used for safety, service, investigation, insurance, dispute resolution and legal/compliance purposes and handled subject to applicable law and VahanXpert Services' privacy practices.",
    ],
  },
  {
    number: '20',
    title: 'Records and Retention',
    paragraphs: [
      "Incident records may be retained with the relevant job card or vehicle record for service history, quality control, insurance, dispute resolution, accounting and legal/compliance purposes for the period considered appropriate under the Garage's record-retention practices and applicable law.",
    ],
  },
  {
    number: '21',
    title: 'Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on incident experience, insurance requirements, workshop operations, customer feedback, security arrangements or applicable legal requirements.',
    ],
  },
];

export default function VehicleDamagePolicyContent() {
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
            <span>Vehicle Custody & Incident Management</span>
          </div>

          <h1 className={styles.title}>
            Customer Vehicle Damage &{' '}
            <span className={styles.titleHighlight}>Incident Reporting Policy</span>
          </h1>

          <div className={styles.metaRow}>
            <div className={`${styles.metaPill} ${styles.metaPillPrimary}`}>
              <ShieldCheck size={14} />
              <span>Policy No.: VXS/IR/012</span>
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
              <Car size={14} />
              <span>Class: Vehicle Movement</span>
            </div>
          </div>
        </header>

        {/* Centered Content Area (No Table of Contents Sidebar) */}
        <main className={styles.contentArea}>
          {DAMAGE_SECTIONS.map((sec) => (
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

          {/* Section 22: Business Contact Details Card */}
          <motion.article
            className={styles.contactCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>22</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>
            <div className={styles.sectionBody}>
              <p>
                To report a vehicle condition incident, submit inspection evidence, or request escalation under this Policy, please reach out to our workshop management:
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
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>INCIDENT DESK EMAIL</strong>
                    <a href="mailto:info.vahanxpert@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      info.vahanxpert@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem} style={{ gridColumn: '1 / -1' }}>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>EMERGENCY & INCIDENT HELPLINE</strong>
                    <a href="tel:+918930293896" style={{ color: 'inherit', fontWeight: 700 }}>
                      +91 8930293896
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Section 23: Document Control */}
          <motion.article
            className={styles.sectionCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>23</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.docTableWrapper}>
                <table className={styles.docTable}>
                  <tbody>
                    <tr>
                      <th>Document Name</th>
                      <td>Customer Vehicle Damage & Incident Reporting Policy</td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/IR/012</td>
                    </tr>
                    <tr>
                      <th>Version / Effective Date</th>
                      <td>1.0 / 20/09/2026</td>
                    </tr>
                    <tr>
                      <th>Review Frequency</th>
                      <td>At least annually or whenever operational/legal requirements change</td>
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
