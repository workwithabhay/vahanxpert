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
  Camera,
  FileCheck,
} from 'lucide-react';
import styles from './CCTVPolicy.module.css';

const CCTV_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes controls for the use, operation, access, protection, retention and appropriate disclosure of CCTV footage and security recordings at VahanXpert Services. The objective is to support workshop security, protection of Customer vehicles and property, employee and visitor safety, incident investigation and prevention of unauthorised access or loss.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to CCTV cameras, recording equipment, storage systems, monitors, related security footage and authorised personnel who install, operate, access, review, export or otherwise handle CCTV recordings at VahanXpert Services premises.',
    ],
  },
  {
    number: '03',
    title: 'CCTV Purpose',
    bullets: [
      'Protection of Customer vehicles, keys, property, workshop assets and equipment.',
      'Monitoring of workshop entry, exit, parking and designated operational areas.',
      'Support for investigation of theft, damage, accidents, disputes, safety incidents or other security events.',
      'Deterrence and investigation of unauthorised access or suspicious activity.',
    ],
  },
  {
    number: '04',
    title: 'Camera Placement',
    paragraphs: [
      'Cameras may be positioned in areas where surveillance is reasonably required for security and operational purposes, such as entrances, exits, parking areas, vehicle movement areas, reception, workshop access points, stores and other designated locations. Cameras should not be deliberately positioned in areas where a high expectation of personal privacy would ordinarily exist, such as toilets or changing areas.',
    ],
  },
  {
    number: '05',
    title: 'CCTV Notice',
    paragraphs: [
      'Where CCTV is in operation, VahanXpert Services may display appropriate signage or notice informing Customers, employees, vendors and visitors that CCTV surveillance is being used for security and related purposes.',
    ],
  },
  {
    number: '06',
    title: 'Recording and System Operation',
    bullets: [
      'CCTV systems should be configured and operated in accordance with the available equipment and operational requirements.',
      'Recording systems should be protected against unauthorised access, tampering or avoidable loss of footage.',
      'System date and time should be maintained reasonably accurately where the equipment permits.',
      'Cameras and recording equipment should be periodically checked for operational condition.',
    ],
  },
  {
    number: '07',
    title: 'Access to CCTV Footage',
    paragraphs: [
      'Access to CCTV recordings shall be limited to authorised management or designated personnel with a legitimate business, security, incident-investigation or legal requirement to access the footage.',
    ],
  },
  {
    number: '08',
    title: 'Monitoring',
    paragraphs: [
      'Live monitoring may be performed where operationally required. Routine monitoring should be limited to legitimate security and operational purposes and should not be used for inappropriate personal observation.',
    ],
  },
  {
    number: '09',
    title: 'Viewing and Review of Recordings',
    bullets: [
      'Recorded footage may be reviewed in response to an incident, Customer complaint, vehicle damage, theft concern, safety event, security issue, suspected misconduct or other legitimate requirement.',
      'Personnel reviewing footage shall maintain confidentiality and avoid unnecessary disclosure.',
      'Footage should be reviewed only to the extent reasonably required for the relevant purpose.',
    ],
  },
  {
    number: '10',
    title: 'Export, Copying and Sharing',
    bullets: [
      'CCTV footage shall not be copied, photographed, downloaded or shared for personal purposes.',
      'Export of footage should be authorised by management or another designated person.',
      'Where footage is exported, the date, relevant camera/time period, reason and recipient may be recorded where appropriate.',
      'External sharing should occur only where there is an authorised business, insurance, legal, law-enforcement or other legitimate requirement.',
    ],
  },
  {
    number: '11',
    title: 'Customer Requests',
    paragraphs: [
      'A Customer may request that relevant CCTV footage be reviewed in connection with a vehicle, property, accident or service issue. Any request shall be assessed by authorised management, taking into account the rights and privacy of other individuals, security considerations and applicable requirements. CCTV footage shall not automatically be released merely because a request is made.',
    ],
  },
  {
    number: '12',
    title: 'Law-Enforcement and Legal Requests',
    paragraphs: [
      'Where footage is requested by police, courts, regulators, insurers or another authorised authority, VahanXpert Services may provide relevant footage subject to appropriate verification, lawful process and applicable requirements.',
    ],
  },
  {
    number: '13',
    title: 'CCTV Footage Retention',
    paragraphs: [
      'CCTV recordings may be retained for a reasonable operational period based on storage capacity, security requirements and the nature of the premises. Where footage is relevant to a known incident, dispute, insurance matter or legal request, the relevant recording may be preserved for as long as reasonably necessary, subject to applicable requirements.',
    ],
  },
  {
    number: '14',
    title: 'Secure Storage',
    bullets: [
      'Recording devices and storage systems should be located in a reasonably secure area.',
      'Access credentials should be restricted to authorised personnel.',
      'Default passwords should be changed where supported by the equipment.',
      'Remote access, if enabled, should be restricted and protected using appropriate authentication and security controls.',
    ],
  },
  {
    number: '15',
    title: 'CCTV System Maintenance',
    paragraphs: [
      'Cameras, recording devices, storage systems, power supplies and related equipment should be inspected or maintained as reasonably necessary. Faults affecting important security coverage should be reported and addressed where practicable.',
    ],
  },
  {
    number: '16',
    title: 'Tampering and Misuse',
    bullets: [
      'Unauthorised movement, disabling, covering, disconnecting or tampering with CCTV equipment is prohibited.',
      'Unauthorised deletion, alteration, copying or disclosure of footage is prohibited.',
      'Suspected tampering or misuse shall be reported to management.',
    ],
  },
  {
    number: '17',
    title: 'Employee and Technician Conduct',
    paragraphs: [
      'Employees and technicians shall not use CCTV footage to monitor colleagues or Customers for personal reasons, entertainment, harassment or unauthorised social-media content. CCTV information shall be handled professionally and confidentially.',
    ],
  },
  {
    number: '18',
    title: 'Customer Vehicle and Property Protection',
    paragraphs: [
      'Where cameras cover vehicle parking, service bays, reception or other vehicle-related areas, footage may be used to support investigation of vehicle damage, missing property, unauthorised movement, access or other incidents. CCTV does not replace the applicable vehicle custody, key control, parking, incident-reporting or handover procedures.',
    ],
  },
  {
    number: '19',
    title: 'Incident Investigation',
    bullets: [
      'Relevant footage may be reviewed following vehicle damage, theft, accident, fire, security incident, customer complaint or suspected misconduct.',
      'Where footage is relevant, it may be preserved and linked to the applicable incident or complaint record.',
      'Access and sharing should be limited to persons involved in the investigation or authorised decision-making.',
    ],
  },
  {
    number: '20',
    title: 'Privacy and Confidentiality',
    paragraphs: [
      'CCTV recordings may contain identifiable individuals, vehicles, registration numbers, Customer activity and other information. Such recordings shall be treated as confidential business/security records and handled consistently with the applicable Customer Data Privacy Policy and legitimate operational requirements.',
    ],
  },
  {
    number: '21',
    title: 'Third-Party Access',
    paragraphs: [
      'CCTV vendors, security contractors, technicians or system service providers may access CCTV equipment only where authorised and only to the extent necessary for installation, maintenance, troubleshooting or other approved services. Their access should be appropriately controlled.',
    ],
  },
  {
    number: '22',
    title: 'Evidence Integrity',
    bullets: [
      'Where footage is required for a serious incident, reasonable steps should be taken to preserve the original recording and avoid unnecessary alteration.',
      'Exported footage should be stored securely and should not be edited in a manner that could misrepresent the relevant event.',
      'Where practicable, relevant metadata or system information should be retained with exported evidence.',
    ],
  },
  {
    number: '23',
    title: 'Prohibited Uses',
    bullets: [
      'Using CCTV footage for personal entertainment or social-media content.',
      'Sharing recordings with unauthorised persons.',
      'Using cameras to intentionally monitor private areas.',
      'Deleting or manipulating relevant footage to conceal an incident.',
      'Providing footage to a third party without appropriate authorisation.',
    ],
  },
  {
    number: '24',
    title: 'Responsibilities',
    bullets: [
      'Management: approve CCTV use, access and material disclosures and oversee security controls.',
      'Designated CCTV/System Administrator: maintain access controls, system operation and authorised exports.',
      'Employees: respect CCTV equipment, privacy and confidentiality and report faults or suspected misuse.',
      'Security/Service Vendors: access equipment only for authorised work and protect information obtained during service.',
    ],
  },
  {
    number: '25',
    title: 'Records',
    paragraphs: [
      'Where appropriate, VahanXpert Services may maintain records of significant CCTV access, exported footage, material disclosures, system maintenance, incidents and requests. Records shall be handled according to applicable business and privacy requirements.',
    ],
  },
  {
    number: '26',
    title: 'Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on workshop security requirements, CCTV technology, incidents, operational experience and applicable legal or business requirements.',
    ],
  },
];

export default function CCTVPolicyContent() {
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
            <span>Workshop Safety & Security Governance</span>
          </div>

          <h1 className={styles.title}>
            CCTV Surveillance & <span className={styles.titleHighlight}>Security Recording Policy</span>
          </h1>

          <div className={styles.metaRow}>
            <div className={`${styles.metaPill} ${styles.metaPillPrimary}`}>
              <ShieldCheck size={14} />
              <span>Policy No.: VXS/CCTV/030</span>
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
              <Camera size={14} />
              <span>Security Class: Confidential</span>
            </div>
          </div>
        </header>

        {/* Centered Content Area (No Table of Contents Sidebar) */}
        <main className={styles.contentArea}>
          {CCTV_SECTIONS.map((sec) => (
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

          {/* Section 27: Business Contact Card */}
          <motion.article
            className={styles.contactCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>27</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>
            <div className={styles.sectionBody}>
              <p>
                For questions, clarifications, incident reviews, or requests regarding this CCTV Surveillance & Security Recording Policy, please reach out to our dedicated support office:
              </p>
              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <MapPin size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>OFFICE ADDRESS</strong>
                    <span>Ward No. 02, Shop No. 01, Khata, 23/20, Sahwa Bypass, near Shubham Hospital, Nohar, Rajasthan 335523</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Mail size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>EMAIL CONTACT</strong>
                    <a href="mailto:info.vahanxpert@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      info.vahanxpert@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem} style={{ gridColumn: '1 / -1' }}>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>DIRECT HELPLINE</strong>
                    <a href="tel:+918930293896" style={{ color: 'inherit', fontWeight: 700 }}>
                      +91 8930293896
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Section 28: Document Control */}
          <motion.article
            className={styles.sectionCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>28</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.docTableWrapper}>
                <table className={styles.docTable}>
                  <tbody>
                    <tr>
                      <th>Document Name</th>
                      <td>CCTV Surveillance & Security Recording Policy</td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/CCTV/030</td>
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

          {/* Back to Top / Back to Policies Footer Bar */}
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
