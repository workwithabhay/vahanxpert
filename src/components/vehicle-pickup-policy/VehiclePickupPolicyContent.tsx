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
  Truck,
} from 'lucide-react';
import styles from './VehiclePickupPolicy.module.css';

const PICKUP_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes the process for customer vehicle pickup, delivery and transportation services arranged or facilitated by VahanXpert Services. It is intended to provide a consistent framework for vehicle handover, authorised movement, safety, documentation and communication with the Customer.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      "This Policy applies where VahanXpert Services or an authorised representative provides or arranges pickup of a Customer's vehicle from an agreed location, transportation to the workshop, movement for an authorised service purpose, or delivery of the completed vehicle to the Customer or an authorised representative.",
    ],
  },
  {
    number: '03',
    title: 'Pickup Request and Confirmation',
    bullets: [
      'Pickup/drop service may be subject to availability, location, vehicle condition, staffing and operational feasibility.',
      'The Customer should provide accurate pickup/drop location, contact details, vehicle registration number and other information reasonably required for the service.',
      'The agreed pickup or delivery time may be an estimated time and may change due to traffic, weather, vehicle condition, operational requirements or other circumstances.',
      'The Garage may confirm the pickup/drop arrangement through phone, WhatsApp, email, SMS or another available communication channel.',
    ],
  },
  {
    number: '04',
    title: 'Authorised Driver',
    bullets: [
      "Only an authorised and appropriately licensed person should drive the Customer's vehicle.",
      'The vehicle should be used only for the agreed service, pickup/drop or other authorised workshop purpose.',
      "Unauthorised personal use of the Customer's vehicle is prohibited.",
    ],
  },
  {
    number: '05',
    title: 'Vehicle Condition at Pickup',
    bullets: [
      'Where reasonably practicable, the vehicle condition should be recorded before or at pickup.',
      'The record may include registration number, odometer reading, fuel level, key count and visible external/interior condition.',
      'Photographs or video may be taken to document pre-existing damage and support service, insurance and dispute resolution.',
      'Customers are advised to remove cash, jewellery, electronics, documents and other valuables before handing over the vehicle.',
    ],
  },
  {
    number: '06',
    title: 'Key and Document Handover',
    bullets: [
      "Keys received during pickup should be handled according to the Garage's key-control process.",
      'Any documents specifically required for service or insurance work may be recorded where reasonably practicable.',
      'Customers should not hand over unnecessary personal documents or valuables.',
    ],
  },
  {
    number: '07',
    title: 'Transportation to Workshop',
    paragraphs: [
      'After pickup, the vehicle should be transported or driven to the designated workshop or another authorised location using a reasonable route. Unnecessary detours, personal errands or unrelated use of the vehicle are prohibited.',
    ],
  },
  {
    number: '08',
    title: 'Vehicle Safety During Transportation',
    bullets: [
      'The driver should follow applicable traffic laws and road-safety requirements.',
      'The vehicle should not be driven where an apparent safety condition makes continued driving unsafe; towing or recovery may be considered where appropriate.',
      'Seat belts and other legally required safety measures should be used.',
      'Driving while impaired by alcohol, drugs or other substances is prohibited.',
    ],
  },
  {
    number: '09',
    title: 'Pickup of Non-Running or Damaged Vehicles',
    paragraphs: [
      'If a vehicle is not roadworthy, accident-damaged or otherwise unsafe to drive, VahanXpert Services may require towing, recovery assistance or another suitable transportation method. Any additional transportation cost, where applicable, should be communicated to the Customer.',
    ],
  },
  {
    number: '10',
    title: 'Delivery of Completed Vehicle',
    bullets: [
      'A completed vehicle should be delivered to the Customer or an authorised representative at the agreed location, subject to operational feasibility.',
      'The Customer or representative may be requested to confirm receipt of the vehicle.',
      'Where practicable, the delivery record may include date/time, odometer reading, key count and relevant handover observations.',
    ],
  },
  {
    number: '11',
    title: 'Authorised Representative',
    paragraphs: [
      "Where the Customer nominates another person to receive the vehicle, VahanXpert Services may request reasonable confirmation of that person's authorisation. The Garage may use OTP, phone confirmation, written authority, digital confirmation or another reasonable verification method.",
    ],
  },
  {
    number: '12',
    title: 'Delivery Delays',
    paragraphs: [
      'Delivery may be delayed due to traffic, weather, vehicle condition, repair status, insurer/surveyor requirements, parts availability, operational constraints or other circumstances beyond reasonable control. The Customer should be informed of material delays where reasonably practicable.',
    ],
  },
  {
    number: '13',
    title: 'Vehicle Inspection at Handover',
    bullets: [
      'The Customer or authorised representative should have a reasonable opportunity to inspect the vehicle at delivery.',
      'Any immediately visible discrepancy should be brought to the attention of the service representative as soon as practicable.',
      'Where appropriate, the delivery condition may be compared with the pickup/intake record.',
    ],
  },
  {
    number: '14',
    title: 'Fuel and Mileage',
    paragraphs: [
      'Pickup, delivery and authorised road-test activity may result in reasonable changes in mileage and fuel level. Where pickup/drop involves substantial travel or towing, any applicable charges should be communicated in accordance with the agreed service terms.',
    ],
  },
  {
    number: '15',
    title: 'Accident or Incident During Pickup/Delivery',
    bullets: [
      'In the event of an accident or material incident, immediate safety and applicable legal requirements take priority.',
      'The incident should be promptly reported to authorised management.',
      'Relevant photographs, location details, witness information and other available evidence should be recorded where reasonably practicable.',
      'Insurance, police, roadside assistance or other applicable reporting procedures may be followed depending on the circumstances.',
    ],
  },
  {
    number: '16',
    title: 'Customer Property',
    paragraphs: [
      'Customers are advised to remove personal belongings before pickup. Items not specifically recorded as handed over to the Garage remain the Customer\'s responsibility, subject to applicable law and the actual circumstances.',
    ],
  },
  {
    number: '17',
    title: 'Cancellation or Rescheduling',
    bullets: [
      'The Customer should inform the Garage as early as reasonably practicable if pickup or delivery needs to be cancelled or rescheduled.',
      'The Garage may reschedule pickup/drop where staffing, traffic, weather, vehicle condition or other operational circumstances make the original arrangement impracticable.',
      'Any applicable transportation or cancellation charges shall be handled according to the agreed service terms and applicable law.',
    ],
  },
  {
    number: '18',
    title: 'Charges',
    paragraphs: [
      'Pickup, delivery, towing or transportation may be complimentary, chargeable or included within a particular service package depending on the agreed arrangement. Any material charge should be communicated to the Customer before the service is undertaken where reasonably practicable.',
    ],
  },
  {
    number: '19',
    title: 'Records and Tracking',
    bullets: [
      'VahanXpert Services may maintain pickup requests, driver details, vehicle condition records, photographs, delivery confirmations and incident records.',
      'Records may be used for service history, quality control, insurance, dispute resolution, accounting and legal/compliance purposes.',
      'Where tracking or location information is used for operational purposes, it should be handled according to applicable privacy requirements.',
    ],
  },
  {
    number: '20',
    title: 'Customer Responsibilities',
    bullets: [
      'Provide accurate pickup/drop information and contact details.',
      'Remove valuables and personal belongings before vehicle handover.',
      'Disclose known safety issues or special vehicle conditions.',
      'Ensure that the vehicle is reasonably accessible at the agreed pickup location.',
      'Inspect the vehicle at delivery and promptly report any material discrepancy.',
    ],
  },
  {
    number: '21',
    title: 'Privacy and Confidentiality',
    paragraphs: [
      "Customer contact details, vehicle information, photographs, location information and delivery records shall be used for legitimate pickup, delivery, service, safety, insurance, dispute-resolution and legal/compliance purposes and accessed by authorised personnel, subject to applicable law and VahanXpert Services' privacy practices.",
    ],
  },
  {
    number: '22',
    title: 'Dispute and Escalation',
    paragraphs: [
      'Any dispute regarding pickup, transportation, mileage, vehicle condition, delay, damage or delivery should be reviewed using available job-card records, pickup/delivery records, photographs, communication records, incident reports and other relevant evidence. The matter may be escalated to authorised management for review.',
    ],
  },
  {
    number: '23',
    title: 'Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on workshop operations, transportation arrangements, customer feedback, insurance requirements or applicable legal requirements.',
    ],
  },
];

export default function VehiclePickupPolicyContent() {
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
            <span>Vehicle Movement & Logistics</span>
          </div>

          <h1 className={styles.title}>
            Customer Vehicle Pickup, Delivery &{' '}
            <span className={styles.titleHighlight}>Transportation Policy</span>
          </h1>

          <div className={styles.metaRow}>
            <div className={`${styles.metaPill} ${styles.metaPillPrimary}`}>
              <ShieldCheck size={14} />
              <span>Policy No.: VXS/PDT/015</span>
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
              <Truck size={14} />
              <span>Class: Vehicle Movement</span>
            </div>
          </div>
        </header>

        {/* Centered Content Area (No Table of Contents Sidebar) */}
        <main className={styles.contentArea}>
          {PICKUP_SECTIONS.map((sec) => (
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

          {/* Section 24: Business Contact Card */}
          <motion.article
            className={styles.contactCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>24</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>
            <div className={styles.sectionBody}>
              <p>
                For pickup or delivery bookings, rescheduling, transit inquiries or concerns under this Policy, please contact our dispatch desk:
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
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>DISPATCH EMAIL</strong>
                    <a href="mailto:info.vahanxpert@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      info.vahanxpert@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem} style={{ gridColumn: '1 / -1' }}>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>PICKUP & DROP HELPLINE</strong>
                    <a href="tel:+918930293896" style={{ color: 'inherit', fontWeight: 700 }}>
                      +91 8930293896
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Section 25: Document Control */}
          <motion.article
            className={styles.sectionCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>25</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.docTableWrapper}>
                <table className={styles.docTable}>
                  <tbody>
                    <tr>
                      <th>Document Name</th>
                      <td>Customer Vehicle Pickup, Delivery & Transportation Policy</td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/PDT/015</td>
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
