'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  RotateCcw,
  Calendar,
  Layers,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  FileCheck,
} from 'lucide-react';
import styles from './RefundCancellationPolicy.module.css';

const RC_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy sets out the principles and process for cancellation requests, advance payments, refunds, adjustments and related customer requests for services provided by VahanXpert Services. The Policy is intended to provide clarity while recognising that the outcome of a refund or cancellation request may depend on the stage of service, parts procurement, work already performed, third-party charges, insurance processing and applicable law.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to paid vehicle servicing, repairs, inspections, estimates, parts procurement, denting-painting, AC work, battery and tyre services, accidental repairs, insurance-related services, pickup/drop services, breakdown assistance, accessories, modification/customization and other services provided by VahanXpert Services.',
    ],
  },
  {
    number: '03',
    title: 'General Cancellation Principle',
    bullets: [
      'A Customer may request cancellation of a service before work begins, subject to the applicable service terms and any costs already incurred.',
      'Cancellation after inspection, diagnosis, procurement of parts, commencement of labour or other service activity may be subject to deductions or charges corresponding to work already performed or costs already incurred.',
      'Cancellation of an insurance-related repair may also be subject to insurer/surveyor processes and third-party costs.',
      'A cancellation request does not automatically create a right to a full refund.',
    ],
  },
  {
    number: '04',
    title: 'Cancellation Before Work Commences',
    paragraphs: [
      'Where a Customer cancels before any chargeable work, inspection, diagnosis, procurement or other committed expense has been incurred, VahanXpert Services may process an eligible refund of an advance payment after verifying the transaction and any applicable non-refundable third-party charges.',
    ],
  },
  {
    number: '05',
    title: 'Cancellation After Work Has Commenced',
    bullets: [
      'If inspection, diagnosis, labour or other chargeable work has already been performed, the applicable charges may be adjusted against any advance received.',
      'If parts or materials have already been ordered or purchased specifically for the Customer\'s vehicle, the related amount may be adjusted or retained to the extent permitted by the applicable terms and law.',
      'If a part can reasonably be cancelled or returned to the supplier, the refund treatment may depend on the supplier\'s return terms and actual recovery.',
      'The Customer should be informed of material deductions where reasonably practicable.',
    ],
  },
  {
    number: '06',
    title: 'Cancellation of Special-Order Parts',
    paragraphs: [
      'Parts specially ordered, customised, non-returnable, non-refundable or procured specifically for a vehicle may not be eligible for a full refund where the supplier does not accept cancellation or return. Any applicable manufacturer/supplier terms shall be considered.',
    ],
  },
  {
    number: '07',
    title: 'Refund Eligibility',
    bullets: [
      'Refunds may be considered where an eligible service is cancelled before material performance or where an amount has been collected in error or is otherwise refundable under the applicable terms.',
      'Refunds may be subject to deduction of completed services, diagnostic/inspection charges, non-refundable third-party costs, parts costs and other legitimately incurred charges, subject to applicable law.',
      'Where a refund is required because of an established billing or payment error, the Garage may process an appropriate correction.',
    ],
  },
  {
    number: '08',
    title: 'Non-Refundable or Deductible Charges',
    paragraphs: [
      'Where applicable, charges relating to completed inspection/diagnosis, labour already performed, specially procured parts, third-party charges, transaction/processing costs that cannot be recovered, or other costs expressly disclosed to the Customer may be deducted from an advance, subject to applicable law and the specific service terms.',
    ],
  },
  {
    number: '09',
    title: 'Refund Method',
    bullets: [
      'Refunds should ordinarily be processed to the original payment method or to another method reasonably permitted by the applicable payment process.',
      'Cash refunds may be subject to internal controls and applicable legal/accounting requirements.',
      'The Customer may be requested to provide transaction details or reasonable information necessary to verify the payment and process the refund.',
    ],
  },
  {
    number: '10',
    title: 'Refund Processing Time',
    paragraphs: [
      'Eligible refunds should be initiated within a reasonable operational period after approval of the refund and completion of necessary verification. The actual credit time may depend on the bank, card network, UPI/payment service provider or other payment intermediary.',
    ],
  },
  {
    number: '11',
    title: 'Insurance and Cashless Repair Cancellation',
    bullets: [
      'Insurance-related repairs may involve surveyor inspection, insurer approval, parts ordering and other third-party processes.',
      'Cancellation of an insurance repair does not automatically cancel charges already incurred or obligations arising under the insurer\'s process.',
      'Any refund or adjustment shall be reconciled with insurer-approved amounts, customer-paid amounts and applicable third-party charges.',
      'VahanXpert Services does not guarantee reimbursement by an insurer where the insurer has not approved the relevant amount.',
    ],
  },
  {
    number: '12',
    title: 'Customer No-Show / Failure to Collect',
    paragraphs: [
      'Where a Customer fails to bring the vehicle for an approved appointment or does not collect a completed vehicle, applicable charges may continue to arise from work performed, parts procured or storage/parking arrangements where such charges have been communicated and are permissible.',
    ],
  },
  {
    number: '13',
    title: 'Duplicate or Excess Payment',
    paragraphs: [
      'If a Customer makes a duplicate payment or pays an amount in excess of the final applicable invoice, the excess amount may be adjusted against another authorised amount or refunded after verification of the payment records.',
    ],
  },
  {
    number: '14',
    title: 'Refund Request Procedure',
    bullets: [
      'The Customer should contact VahanXpert Services using the official contact details.',
      'The Customer should provide the job card/invoice number, vehicle registration number and payment details where applicable.',
      'The Garage may verify the service status, work performed, parts ordered, approvals and payment records.',
      'After verification, the Customer should be informed of the applicable refund/adjustment decision where reasonably practicable.',
      'Where approved, the refund should be processed through the applicable payment method.',
    ],
  },
  {
    number: '15',
    title: 'No Refund for Completed and Accepted Services',
    paragraphs: [
      'Charges for services that have been fully performed and accepted by the Customer will ordinarily not be refundable merely because the Customer later changes their preference, subject to any applicable warranty, statutory right, service-specific commitment or proven deficiency.',
    ],
  },
  {
    number: '16',
    title: 'Service Deficiency or Failed Repair',
    paragraphs: [
      'Where a Customer alleges that a paid repair or service was defective or incomplete, the matter should first be reviewed under the Customer Complaint & Grievance Redressal Policy and applicable Repair & Parts Warranty Policy. A refund, rework or other remedy, if appropriate, shall be determined after reviewing the facts and applicable terms.',
    ],
  },
  {
    number: '17',
    title: 'Payment Disputes and Chargebacks',
    paragraphs: [
      'Customers should contact VahanXpert Services first regarding a payment or refund concern so that the matter can be reviewed. Nothing in this Policy limits any statutory or contractual rights available to a Customer or any applicable rules of a bank, payment provider or card network.',
    ],
  },
  {
    number: '18',
    title: 'Records and Documentation',
    bullets: [
      'Refund requests, approvals, payment references, invoices, cancellation communications and refund confirmations may be retained for accounting, audit, dispute resolution, customer service and legal/compliance purposes.',
      'Refund records should be linked to the relevant job card or invoice where practicable.',
    ],
  },
  {
    number: '19',
    title: 'Privacy and Confidentiality',
    paragraphs: [
      'Payment and customer information shall be handled for legitimate service, billing, refund, dispute resolution, security and legal/compliance purposes and accessed only by authorised personnel, subject to applicable law and VahanXpert Services\' privacy practices.',
    ],
  },
  {
    number: '20',
    title: 'Exceptions',
    paragraphs: [
      'Any exception to this Policy may be approved by authorised management after considering the circumstances, applicable service terms, third-party costs and legal requirements. Any material exception should be documented.',
    ],
  },
  {
    number: '21',
    title: 'Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on operational experience, payment processes, customer feedback, insurance procedures or applicable legal requirements.',
    ],
  },
];

export default function RefundCancellationPolicyContent() {
  return (
    <div className={styles.pageWrapper}>
      {/* Ambient Radial Glowing Elements */}
      <div className={styles.ambientGlowTop} aria-hidden="true" />
      <div className={styles.ambientGlowMid} aria-hidden="true" />

      <main className={styles.container}>
        {/* Top Back Navigation Button */}
        <div className={styles.backNav}>
          <Link href="/policies" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to All Policies</span>
          </Link>
        </div>

        {/* Centered Hero Header */}
        <header className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.badge}
          >
            <RotateCcw size={14} className="text-amber-500" />
            <span>Official Policy Document</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={styles.title}
          >
            Refund & Cancellation Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={styles.metaBar}
          >
            <div className={styles.metaItem}>
              <FileCheck size={16} className="text-amber-500" />
              <span>Policy No.: <strong>VXS/RC/008</strong></span>
            </div>
            <span className={styles.metaDivider}>•</span>
            <div className={styles.metaItem}>
              <Layers size={16} className="text-amber-500" />
              <span>Version: <strong>1.0</strong></span>
            </div>
            <span className={styles.metaDivider}>•</span>
            <div className={styles.metaItem}>
              <Calendar size={16} className="text-amber-500" />
              <span>Effective Date: <strong>20/09/2026</strong></span>
            </div>
          </motion.div>
        </header>

        {/* Single-Column Centered Policy Content */}
        <div className={styles.contentCard}>
          {RC_SECTIONS.map((section, idx) => (
            <motion.section
              key={section.number}
              id={`section-${section.number}`}
              className={styles.sectionCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.3) }}
            >
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{section.number}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>

              <div className={styles.sectionBody}>
                {section.paragraphs?.map((para, pIdx) => (
                  <p key={pIdx} className={styles.paragraph}>
                    {para}
                  </p>
                ))}

                {section.bullets && (
                  <ul className={styles.bulletList}>
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className={styles.bulletItem}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.section>
          ))}

          {/* Section 22: Business Contact */}
          <motion.section
            id="section-22"
            className={styles.contactCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>22</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>
            <p className={styles.paragraph}>
              For any cancellation requests, advance payment inquiries, refund status or dispute resolution, please contact VahanXpert Services:
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span className={styles.contactLabel}>Workshop Address</span>
                <span className={styles.contactValue}>
                  VahanXpert Services<br />
                  D-29, Vibhuti Khand, Gomti Nagar,<br />
                  Lucknow, Uttar Pradesh – 226010
                </span>
              </div>

              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span className={styles.contactLabel}>Refund & Cancellation Email</span>
                <span className={styles.contactValue}>
                  <a href="mailto:info.vahanxpert@gmail.com">info.vahanxpert@gmail.com</a>
                </span>
              </div>

              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span className={styles.contactLabel}>Customer Helpline</span>
                <span className={styles.contactValue}>
                  <a href="tel:+918930293896">+91 8930293896</a>
                </span>
              </div>
            </div>
          </motion.section>

          {/* Section 23: Document Control Table */}
          <motion.section
            id="section-23"
            className={styles.docControlCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>23</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>

            <div className={styles.tableResponsive}>
              <table className={styles.docTable}>
                <tbody>
                  <tr>
                    <th>Document Name</th>
                    <td>Refund & Cancellation Policy</td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/RC/008</td>
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
          </motion.section>
        </div>
      </main>
    </div>
  );
}
