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
  FileSpreadsheet,
} from 'lucide-react';
import styles from './InsuranceCoordinationPolicy.module.css';

const INS_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes the process for coordinating vehicle insurance and cashless repair claims handled through VahanXpert Services. It is intended to support accurate documentation, transparent communication, timely coordination with insurers/surveyors and proper repair authorisation while making clear that claim approval and settlement remain subject to the applicable insurance policy and the insurer\'s decision.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to accidental vehicle repair cases where VahanXpert Services assists a Customer with insurance claim documentation, surveyor coordination, cashless repair coordination, repair estimates, insurer communications or related claim processes.',
    ],
  },
  {
    number: '03',
    title: "Nature of VahanXpert's Role",
    bullets: [
      'VahanXpert Services may act as a workshop/service provider and claim-coordination support point for the Customer.',
      'VahanXpert does not determine whether an insurance claim is payable or admissible unless expressly authorised under a separate arrangement.',
      "Final claim approval, admissibility, deductions, depreciation, policy coverage and settlement remain subject to the insurer's applicable policy terms and authorised decision.",
    ],
  },
  {
    number: '04',
    title: 'Customer Responsibility',
    bullets: [
      'The Customer is responsible for providing accurate information and documents required for the insurance claim.',
      'The Customer should promptly report the accident/incident to the insurer or other required authority where applicable.',
      'The Customer remains responsible for complying with the terms, conditions, declarations and requirements of the applicable insurance policy.',
    ],
  },
  {
    number: '05',
    title: 'Initial Vehicle Assessment',
    paragraphs: [
      'Upon presentation of an accident-damaged vehicle, VahanXpert may conduct an initial inspection to document visible damage, vehicle condition and apparent repair requirements. The initial assessment is not a final insurance assessment and may change after dismantling, surveyor inspection or insurer review.',
    ],
  },
  {
    number: '06',
    title: 'Photographs and Documentation',
    bullets: [
      'Relevant photographs of the vehicle, damage and identification details may be taken for claim and repair records.',
      'Job cards, estimates, invoices, vehicle details and other required documents may be maintained as part of the claim file.',
      'Documents should be accurate and should not knowingly misrepresent the vehicle condition or incident.',
    ],
  },
  {
    number: '07',
    title: 'Insurance Documents',
    paragraphs: [
      'Depending on the insurer and claim circumstances, the Customer may be requested to provide documents such as insurance policy details, vehicle registration documents, identity/address documents where required, driving licence, claim reference information, accident details and other documents requested by the insurer or surveyor.',
    ],
  },
  {
    number: '08',
    title: 'Claim Registration and Coordination',
    bullets: [
      'Where authorised and operationally feasible, VahanXpert may assist the Customer with claim intimation or coordination.',
      'Claim/reference numbers and relevant insurer communication may be recorded in the job or claim file.',
      'The Customer should be informed when further action or information is required from them.',
    ],
  },
  {
    number: '09',
    title: 'Surveyor Coordination',
    paragraphs: [
      "VahanXpert may coordinate with the insurer's appointed surveyor for vehicle inspection, damage assessment, estimate review, photographs, documents and repair-related clarification. VahanXpert personnel shall cooperate with the surveyor without representing the surveyor or insurer.",
    ],
  },
  {
    number: '10',
    title: 'Repair Estimate',
    paragraphs: [
      'VahanXpert may prepare a repair estimate based on the visible and assessed damage. The estimate may be revised where additional damage is identified during inspection or dismantling. Repair work shall be subject to the applicable Customer approval and insurer/claim authorisation requirements.',
    ],
  },
  {
    number: '11',
    title: 'Cashless Repair',
    bullets: [
      'Cashless repair may be offered only where the insurer, policy, workshop arrangement and claim circumstances permit it.',
      'Cashless does not necessarily mean that the Customer has no payment obligation.',
      'Policy deductibles, depreciation, non-payable items, consumables, betterment, excess, exclusions or other amounts may remain payable by the Customer depending on the claim.',
    ],
  },
  {
    number: '12',
    title: 'Customer Payment Responsibility',
    paragraphs: [
      'Before or during repair, VahanXpert may inform the Customer of amounts that are expected to remain payable by the Customer based on available insurer/surveyor information. Final amounts may change where the insurer revises its assessment or where additional work is authorised.',
    ],
  },
  {
    number: '13',
    title: 'Additional Damage',
    paragraphs: [
      'If additional damage is discovered after dismantling or during repair, VahanXpert may document the additional damage and coordinate with the surveyor/insurer. Additional repair work should not be treated as insurer-approved merely because it appears necessary; the applicable approval and Customer consent process shall be followed.',
    ],
  },
  {
    number: '14',
    title: 'Parts and Repair Method',
    paragraphs: [
      "Parts selection, repair/replacement methodology and applicable warranty shall follow the insurer's authorised assessment where applicable, Customer approvals, vehicle requirements and VahanXpert's applicable spare-parts and repair policies. Parts warranty shall remain subject to the manufacturer, supplier or applicable warranty terms.",
    ],
  },
  {
    number: '15',
    title: 'Non-Cashless / Reimbursement Claims',
    paragraphs: [
      'Where cashless repair is unavailable or the Customer elects to claim reimbursement, VahanXpert may provide applicable estimates, invoices, repair documents and other records required by the Customer or insurer, subject to the applicable process.',
    ],
  },
  {
    number: '16',
    title: 'Insurance Deductions and Disallowances',
    bullets: [
      "VahanXpert shall not represent an insurer's deductions or disallowances as VahanXpert's own decision.",
      'Where the insurer disallows an item, the Customer may be informed of the applicable amount and reason communicated by the insurer/surveyor, where available.',
      "Any disagreement regarding claim admissibility or insurer settlement should be addressed through the insurer's applicable grievance/appeal process.",
    ],
  },
  {
    number: '17',
    title: 'No Guarantee of Claim Approval',
    paragraphs: [
      'Submission of documents, surveyor inspection, preparation of an estimate or initiation of a cashless process does not guarantee claim approval or a particular settlement amount. The outcome remains subject to the applicable insurance policy, facts of the incident and insurer/surveyor assessment.',
    ],
  },
  {
    number: '18',
    title: 'Fraud Prevention and Accurate Information',
    bullets: [
      'VahanXpert shall not knowingly submit false, inflated, fabricated or misleading claim information.',
      'Employees shall not conceal material damage or create artificial damage for the purpose of a claim.',
      'Any suspected fraudulent activity should be escalated to management and handled appropriately.',
    ],
  },
  {
    number: '19',
    title: 'Customer Communication',
    paragraphs: [
      'Communication regarding claim status, surveyor requirements, approvals, estimated Customer liability and repair progress should be made through appropriate channels. Staff should avoid making unauthorised promises regarding approval, settlement amount or delivery date.',
    ],
  },
  {
    number: '20',
    title: 'Insurance Company / Surveyor Communication',
    paragraphs: [
      'Only authorised personnel should make formal commitments or representations on behalf of VahanXpert Services. Records of material communications, approvals, survey reports or claim instructions should be retained where appropriate.',
    ],
  },
  {
    number: '21',
    title: 'Claim File and Records',
    bullets: [
      'The claim file may include claim/reference number, Customer details, vehicle details, photographs, estimate, surveyor observations, approvals, invoices, repair records and relevant correspondence.',
      'Records should be maintained in a manner that supports audit, customer service, insurer coordination and dispute resolution.',
      'Customer and insurance information shall be handled according to the applicable privacy and confidentiality requirements.',
    ],
  },
  {
    number: '22',
    title: 'Vehicle Custody During Claim',
    paragraphs: [
      'Vehicle keys, Customer property, parking, custody, movement and delivery shall continue to be governed by the applicable VahanXpert vehicle custody, key control, parking and handover policies.',
    ],
  },
  {
    number: '23',
    title: 'Claim Delays',
    paragraphs: [
      'Where repair is delayed due to surveyor inspection, insurer approval, parts availability, additional assessment or other claim-related reasons, the Customer should be informed where reasonably practicable. VahanXpert should not represent an insurer-controlled timeline as a guaranteed workshop commitment.',
    ],
  },
  {
    number: '24',
    title: 'Claim Closure and Vehicle Handover',
    bullets: [
      'Before delivery, applicable repair and quality checks should be completed.',
      'Customer-payable amounts should be settled or otherwise appropriately arranged.',
      'Relevant claim and repair documentation should be completed or provided as applicable.',
      'Vehicle handover shall follow the applicable Vehicle Delivery & Handover Policy.',
    ],
  },
  {
    number: '25',
    title: 'Network / Insurer Arrangements',
    paragraphs: [
      'Where VahanXpert Services has a formal cashless/network arrangement with an insurer or claims administrator, the specific contractual/network requirements shall also apply. In case of a conflict, the applicable contractual arrangement and lawful requirements shall govern the relevant claim process.',
    ],
  },
  {
    number: '26',
    title: 'Responsibilities',
    bullets: [
      'Management: oversee insurance/cashless arrangements and material claim issues.',
      'Claim Coordination Personnel: maintain documentation and coordinate with Customer, insurer and surveyor within authorised responsibilities.',
      'Technicians: accurately report observed damage and repair requirements.',
      'Customer: provide accurate information, required documents and Customer-payable amounts.',
    ],
  },
  {
    number: '27',
    title: 'Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on insurer/network arrangements, operational experience, claim requirements, customer feedback and applicable business or legal requirements.',
    ],
  },
];

export default function InsuranceCoordinationPolicyContent() {
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
            <span>Claims, Billing & Insurer Coordination</span>
          </div>

          <h1 className={styles.title}>
            Insurance / Cashless{' '}
            <span className={styles.titleHighlight}>Claim Coordination Policy</span>
          </h1>

          <div className={styles.metaRow}>
            <div className={`${styles.metaPill} ${styles.metaPillPrimary}`}>
              <ShieldCheck size={14} />
              <span>Policy No.: VXS/INS/031</span>
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
              <FileSpreadsheet size={14} />
              <span>Class: Claims & Billing</span>
            </div>
          </div>
        </header>

        {/* Centered Content Area (No Table of Contents Sidebar) */}
        <main className={styles.contentArea}>
          {INS_SECTIONS.map((sec) => (
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

          {/* Section 28: Business Contact Card */}
          <motion.article
            className={styles.contactCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>28</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>
            <div className={styles.sectionBody}>
              <p>
                For cashless insurance claims assistance, surveyor coordination status, or documentation inquiries, please reach out to our dedicated insurance desk:
              </p>
              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <MapPin size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>WORKSHOP LOCATION</strong>
                    <span>Ward No. 02, Shop No. 01, Khata, 23/20, Sahwa Bypass, near Shubham Hospital, Nohar, Rajasthan 335523</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Mail size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>INSURANCE CLAIMS EMAIL</strong>
                    <a href="mailto:info.vahanxpert@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      info.vahanxpert@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem} style={{ gridColumn: '1 / -1' }}>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>CASHLESS HELPLINE</strong>
                    <a href="tel:+918930293896" style={{ color: 'inherit', fontWeight: 700 }}>
                      +91 8930293896
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Section 29: Document Control */}
          <motion.article
            className={styles.sectionCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>29</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.docTableWrapper}>
                <table className={styles.docTable}>
                  <tbody>
                    <tr>
                      <th>Document Name</th>
                      <td>Insurance / Cashless Claim Coordination Policy</td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/INS/031</td>
                    </tr>
                    <tr>
                      <th>Version / Effective Date</th>
                      <td>1.0 / 20/09/2026</td>
                    </tr>
                    <tr>
                      <th>Review Frequency</th>
                      <td>At least annually or whenever insurer/network/claim requirements change</td>
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
