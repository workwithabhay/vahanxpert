'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Calendar,
  Layers,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  FileCheck,
} from 'lucide-react';
import styles from './PaymentBillingPolicy.module.css';

const FIN_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes a standard framework for estimates, billing, invoices, Customer payments, refunds, adjustments, insurance-related billing and financial records across all garages, workshops and service locations operated or managed by VahanXpert Services. The objective is to maintain transparent, accurate and consistent billing practices across multiple locations.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to all VahanXpert Services garages, workshops, service centres, branches and other operating locations, and to employees or authorised personnel involved in estimation, billing, invoicing, payment collection, refunds, insurance claim billing or financial reconciliation.',
    ],
  },
  {
    number: '03',
    title: 'Multi-Garage Billing Structure',
    bullets: [
      'Each garage/location should be identifiable through a unique branch, garage, location or internal code.',
      'Invoices and payment records should clearly identify the relevant VahanXpert location from which the service was provided.',
      'Where a central billing/accounting system is used, branch-level transaction identification should be maintained.',
      'A Customer transaction should not be shifted between locations without an appropriate business or accounting reason and supporting records.',
    ],
  },
  {
    number: '04',
    title: 'Customer Estimate',
    paragraphs: [
      'Where applicable, an estimate should be prepared before chargeable repair or service work begins. The estimate may include labour, parts, consumables, taxes and other applicable charges. Estimates are indicative unless specifically stated otherwise and may change when additional damage or requirements are identified.',
    ],
  },
  {
    number: '05',
    title: 'Customer Approval',
    bullets: [
      'Material additional work or cost should ordinarily be communicated to the Customer before execution, subject to emergency/safety requirements.',
      'Customer approval may be obtained through a signed document, digital approval, authorised communication or other approved system.',
      'Approval records should be linked to the relevant job card or service record where practicable.',
    ],
  },
  {
    number: '06',
    title: 'Job Card and Billing Linkage',
    paragraphs: [
      'Each service transaction should have an appropriate job card, repair order or service reference. Billing should be traceable to the relevant vehicle, Customer, garage/location and authorised services or parts.',
    ],
  },
  {
    number: '07',
    title: 'Invoice Generation',
    bullets: [
      'Invoices shall be generated only by authorised personnel or approved billing systems.',
      'Invoices should contain applicable business details, invoice number/date, relevant garage/location, Customer/vehicle information where appropriate, description of goods/services, applicable taxes and total amount.',
      'Invoice numbering should be controlled to reduce duplicate or unauthorised invoice generation.',
    ],
  },
  {
    number: '08',
    title: 'Parts and Labour Billing',
    paragraphs: [
      'Parts and labour should be billed based on the authorised repair/service record. Part descriptions, quantities and labour charges should be reasonably accurate and should not knowingly include work or parts that were not supplied or performed.',
    ],
  },
  {
    number: '09',
    title: 'Taxes and Statutory Charges',
    paragraphs: [
      'Applicable taxes and statutory charges shall be reflected in invoices in accordance with the tax registration and applicable requirements of VahanXpert Services. Tax treatment may differ depending on the nature of the transaction, Customer and service.',
    ],
  },
  {
    number: '10',
    title: 'Payment Methods',
    bullets: [
      'Payments may be accepted through authorised channels such as UPI, bank transfer, cards, approved payment links, cash or other approved methods.',
      'Employees shall not direct Customers to personal bank accounts, personal UPI IDs or unauthorised payment channels.',
      'Payment references or transaction identifiers should be recorded where reasonably practicable.',
    ],
  },
  {
    number: '11',
    title: 'Cash Handling',
    bullets: [
      'Cash collections should be recorded promptly and reconciled through the applicable branch process.',
      'Cash should be secured and deposited/transferred according to the organisation\'s financial controls.',
      'Personal retention or unauthorised use of Customer cash is prohibited.',
    ],
  },
  {
    number: '12',
    title: 'Digital Payment Verification',
    paragraphs: [
      'A payment should be treated as received only after appropriate verification through the authorised payment/banking system or other approved evidence. Screenshots or Customer-provided messages alone should not be treated as conclusive proof where independent verification is reasonably available.',
    ],
  },
  {
    number: '13',
    title: 'Advance / Part Payment',
    paragraphs: [
      'VahanXpert Services may collect an advance or part payment where appropriate, particularly for special-order parts, major repairs, Customer-requested work or other approved circumstances. The amount received should be recorded and adjusted against the final invoice.',
    ],
  },
  {
    number: '14',
    title: 'Insurance / Cashless Billing',
    paragraphs: [
      'For insurance or cashless repairs, billing shall be handled in accordance with the applicable insurer/network arrangement and the Insurance / Cashless Claim Coordination Policy. Customer-payable amounts such as applicable deductibles, non-payable items or other approved charges should be separately identified where appropriate.',
    ],
  },
  {
    number: '15',
    title: 'Discounts and Promotional Offers',
    bullets: [
      'Discounts should be applied only by authorised personnel or approved systems.',
      'Promotional offers, coupons or membership benefits should be applied according to their applicable terms.',
      'Unauthorised discounts, false billing or manipulation of invoice values is prohibited.',
    ],
  },
  {
    number: '16',
    title: 'Coupon / Membership Redemption',
    paragraphs: [
      'Where a Customer presents a valid VahanXpert coupon, membership or offer, the applicable benefit should be verified before billing. The discount or benefit should be reflected or documented appropriately, including any applicable validity, usage limitation or exclusions.',
    ],
  },
  {
    number: '17',
    title: 'Invoice Correction / Cancellation',
    paragraphs: [
      'If an invoice contains an error, correction, cancellation, credit note, debit note or other adjustment should be processed through an authorised accounting process. Employees should not delete or manipulate issued invoices without appropriate authority and audit trail.',
    ],
  },
  {
    number: '18',
    title: 'Refunds',
    bullets: [
      'Eligible refunds should be processed through an authorised process after verification of the original transaction and reason for refund.',
      'Refunds should ordinarily be made through an appropriate traceable channel.',
      'Refund approval may be subject to the applicable service, cancellation, insurance, payment and refund terms.',
    ],
  },
  {
    number: '19',
    title: 'Failed / Reversed Payments',
    paragraphs: [
      'Where a digital payment is failed, reversed, duplicated or disputed, the transaction status should be verified before determining whether the Customer remains payable or is entitled to a refund/adjustment.',
    ],
  },
  {
    number: '20',
    title: 'Duplicate Payments and Excess Collection',
    paragraphs: [
      'If a Customer makes a duplicate or excess payment, the transaction should be verified and the amount appropriately adjusted or refunded according to the applicable process.',
    ],
  },
  {
    number: '21',
    title: 'Billing Disputes',
    paragraphs: [
      'Customers may raise questions or disputes regarding charges, parts, labour, taxes, discounts or payments. Staff should review the relevant job card, estimate, approval, invoice and payment record and escalate unresolved matters to authorised management.',
    ],
  },
  {
    number: '22',
    title: 'No Unauthorised Charges',
    bullets: [
      'Customers should not be charged for unauthorised services or parts except where an applicable documented term permits the charge.',
      'Hidden or misleading charges are prohibited.',
      'Any mandatory or material additional charge should be appropriately communicated.',
    ],
  },
  {
    number: '23',
    title: 'Branch-Level Reconciliation',
    paragraphs: [
      'Each garage/location should periodically reconcile job cards, invoices, collections, digital payments, cash, refunds, credit adjustments and other relevant transactions. Material discrepancies should be investigated and escalated.',
    ],
  },
  {
    number: '24',
    title: 'Central Finance Reconciliation',
    paragraphs: [
      'Where VahanXpert uses central finance/accounting operations, branch records should be reconciled with central records at appropriate intervals. Differences should be documented and resolved through authorised accounting procedures.',
    ],
  },
  {
    number: '25',
    title: 'Invoice and Payment Records',
    bullets: [
      'Relevant estimates, approvals, job cards, invoices, receipts, payment references, refunds and adjustments may be retained.',
      'Records should be accessible for accounting, audit, Customer service, insurance coordination, dispute resolution and applicable statutory purposes.',
      'Access to financial records should be limited to authorised personnel.',
    ],
  },
  {
    number: '26',
    title: 'Fraud Prevention',
    bullets: [
      'Employees shall not create fictitious invoices, alter payment records, divert Customer payments, issue unauthorised discounts or conceal collections.',
      'Suspected financial fraud or material irregularity should be reported to management.',
      'Branch-level controls should support traceability of collections and billing.',
    ],
  },
  {
    number: '27',
    title: 'Employee Responsibilities',
    bullets: [
      'Use authorised billing and payment systems.',
      'Provide accurate information to Customers.',
      'Maintain supporting records.',
      'Do not use personal payment accounts for Customer collections.',
      'Escalate billing discrepancies and suspected fraud.',
    ],
  },
  {
    number: '28',
    title: 'Management Responsibilities',
    bullets: [
      'Maintain appropriate controls across all garages.',
      'Define authorised personnel and approval limits.',
      'Review branch-level financial reconciliation.',
      'Monitor material discrepancies, refunds, discounts and unusual transactions.',
    ],
  },
  {
    number: '29',
    title: 'Customer Communication',
    paragraphs: [
      'Customers should be provided with appropriate estimates, invoices and payment confirmations. Staff should explain material charges in a clear manner and avoid guaranteeing amounts that remain subject to insurance approval, additional inspection or other external determination.',
    ],
  },
  {
    number: '30',
    title: 'Data Confidentiality',
    paragraphs: [
      'Customer financial information, invoices, payment references, bank details and related records shall be handled confidentially and accessed only for legitimate business purposes.',
    ],
  },
  {
    number: '31',
    title: 'Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on the number of operating locations, accounting systems, payment methods, customer requirements, insurer arrangements and applicable legal or business requirements.',
    ],
  },
];

export default function PaymentBillingPolicyContent() {
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
            <CreditCard size={14} className="text-amber-500" />
            <span>Official Policy Document</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={styles.title}
          >
            Payment, Billing & Invoice Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={styles.metaBar}
          >
            <div className={styles.metaItem}>
              <FileCheck size={16} className="text-amber-500" />
              <span>Policy No.: <strong>VXS/FIN/032</strong></span>
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
          {FIN_SECTIONS.map((section, idx) => (
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

          {/* Section 32: Business Contact */}
          <motion.section
            id="section-32"
            className={styles.contactCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>32</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>
            <p className={styles.paragraph}>
              For any questions, invoice clarifications, billing adjustments or payment queries regarding VahanXpert Services, please contact our accounts team:
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span className={styles.contactLabel}>Workshop Address</span>
                <span className={styles.contactValue}>
                  VahanXpert Services<br />
                  Ward No. 02, Shop No. 01, Khata, 23/20,<br />
                  Sahwa Bypass, near Shubham Hospital,<br />
                  Nohar, Rajasthan – 335523
                </span>
              </div>

              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span className={styles.contactLabel}>Accounts Email</span>
                <span className={styles.contactValue}>
                  <a href="mailto:info.vahanxpert@gmail.com">info.vahanxpert@gmail.com</a>
                </span>
              </div>

              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span className={styles.contactLabel}>Accounts Helpline</span>
                <span className={styles.contactValue}>
                  <a href="tel:+918930293896">+91 8930293896</a>
                </span>
              </div>
            </div>
          </motion.section>

          {/* Section 33: Document Control Table */}
          <motion.section
            id="section-33"
            className={styles.docControlCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>33</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>

            <div className={styles.tableResponsive}>
              <table className={styles.docTable}>
                <tbody>
                  <tr>
                    <th>Document Name</th>
                    <td>Payment, Billing & Invoice Policy</td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/FIN/032</td>
                  </tr>
                  <tr>
                    <th>Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th>Review Frequency</th>
                    <td>At least annually or whenever billing/payment processes materially change</td>
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
