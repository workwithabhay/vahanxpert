'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Ticket,
  Calendar,
  Layers,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  FileCheck,
  FileSpreadsheet,
} from 'lucide-react';
import styles from './MembershipCouponPolicy.module.css';

const MCB_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy governs the sale, issue, activation, validity, use, redemption and expiry of VahanXpert Services Membership / Coupon Books offered to Customers. The Coupon Book may be issued in physical or digital form and may contain multiple service offers, discounts, benefits or coupons subject to the individual terms printed on the Coupon Book or communicated at the time of purchase.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to all Membership or Coupon Books sold, issued, distributed or activated by VahanXpert Services, whether physical, digital or in another authorised format.',
    ],
  },
  {
    number: '03',
    title: 'Nature of Membership / Coupon Book',
    bullets: [
      'The Coupon Book is a promotional membership product containing one or more offers or benefits.',
      'Each Coupon Book may contain multiple coupons with different offers, discount amounts, service benefits, usage limits or conditions.',
      'The Customer may carry and use the Membership / Coupon Book in physical form, digital form, or both, subject to the applicable verification process.',
      'The Coupon Book is not automatically equivalent to cash and cannot be treated as a cash balance unless a particular offer expressly states otherwise.',
    ],
  },
  {
    number: '04',
    title: 'Validity Period',
    paragraphs: [
      'The validity period of the Membership / Coupon Book shall be determined at the time of sale/activation and may be for one year, two years, or another period specifically stated on the Coupon Book, invoice, digital membership record or purchase confirmation.',
    ],
    bullets: [
      'The exact Start Date and Expiry Date should be clearly recorded or displayed at the time of purchase/activation.',
      'The Customer may use eligible coupons only during the stated validity period.',
      'Once the Coupon Book reaches its stated Expiry Date, unused coupons and benefits shall ordinarily expire automatically unless VahanXpert Services expressly extends the validity in writing.',
      'The validity period printed on the physical Coupon Book or shown in the authorised digital record shall prevail for verification, subject to correction of an obvious administrative error.',
    ],
  },
  {
    number: '05',
    title: 'Start Date',
    paragraphs: [
      'Unless otherwise specified at the time of purchase, the Start Date shall be the date on which the Membership / Coupon Book is sold or activated. Where a future activation date is expressly agreed, that agreed date may be treated as the Start Date and should be recorded in the purchase or membership record.',
    ],
  },
  {
    number: '06',
    title: 'Expiry Date',
    paragraphs: [
      'The Expiry Date shall be calculated or expressly specified based on the validity period selected at the time of purchase. The Customer is responsible for checking the stated Expiry Date and using eligible coupons before expiry.',
    ],
  },
  {
    number: '07',
    title: 'Offers and Coupons',
    bullets: [
      'Each coupon may carry its own offer description, discount, service benefit, minimum purchase/service requirement, usage limit and other conditions.',
      'The specific terms printed on the coupon or displayed in the authorised digital membership system shall apply to that coupon.',
      'Offers may be applicable only to selected services, vehicle categories, products, days, locations or transaction values where specifically stated.',
      'A coupon cannot be used for a service or item that is expressly excluded from that coupon.',
    ],
  },
  {
    number: '08',
    title: 'Coupon Redemption',
    bullets: [
      'The Customer should present the physical Coupon Book, relevant coupon, digital membership record, coupon code, QR code, OTP or other authorised proof of membership when redeeming an offer.',
      'VahanXpert Services may verify the membership number, coupon number, Customer details or vehicle details before applying an offer.',
      'A coupon should be marked, digitally recorded or otherwise treated as redeemed after valid use to prevent unauthorised repeated use where the coupon is intended for one-time redemption.',
    ],
  },
  {
    number: '09',
    title: 'Physical and Digital Use',
    paragraphs: [
      'A Membership / Coupon Book may be provided in physical, digital or dual format. Where both formats exist, VahanXpert Services may verify the membership using its internal record. The Customer should not attempt to redeem the same coupon more than once where the coupon is expressly limited to one redemption.',
    ],
  },
  {
    number: '10',
    title: 'One Coupon Per Transaction / Service',
    paragraphs: [
      'Unless a specific coupon states otherwise, multiple coupons may not be combined for the same transaction or service. The applicable coupon terms, offer communication or invoice shall determine whether coupons can be combined with other discounts, promotional offers or memberships.',
    ],
  },
  {
    number: '11',
    title: 'Transferability',
    paragraphs: [
      'The Membership / Coupon Book shall be personal or transferable only according to the terms stated at the time of purchase. If no transferability is expressly provided, VahanXpert Services may require the original purchaser or registered Customer to use the membership. Any transfer approved by the Garage may require updating of the membership record.',
    ],
  },
  {
    number: '12',
    title: 'Sale and Purchase Record',
    bullets: [
      'The purchase record may include Customer name, mobile number, membership/coupon number, sale date, Start Date, Expiry Date, validity period and applicable membership price.',
      'The record may also identify whether the Membership / Coupon Book was issued in physical, digital or dual format.',
      'The Customer should retain the invoice, receipt or digital confirmation as evidence of purchase.',
    ],
  },
  {
    number: '13',
    title: 'Loss, Damage or Misplacement',
    bullets: [
      'If a physical Coupon Book is lost, stolen or damaged, the Customer should notify VahanXpert Services as soon as reasonably practicable.',
      'Where an identifiable digital or membership record exists, VahanXpert Services may verify the membership and, at its discretion, reissue or restore eligible unused coupons after reasonable verification.',
      'The Garage is not responsible for unauthorised use occurring before a loss is reported where the Customer failed to protect the physical or digital membership information.',
    ],
  },
  {
    number: '14',
    title: 'Digital Membership Security',
    bullets: [
      'The Customer should keep OTPs, passwords, coupon codes and digital membership credentials confidential.',
      'The Customer should not share screenshots, codes or access credentials where doing so could permit unauthorised redemption.',
      'VahanXpert Services may suspend or review a membership where there is a reasonable indication of misuse, duplication, fraud or unauthorised redemption.',
    ],
  },
  {
    number: '15',
    title: 'Offer Restrictions',
    paragraphs: [
      'Certain offers may be subject to minimum service value, specific vehicle models, selected services, appointment requirements, availability, non-combinability with other offers, maximum discount limits or other conditions. Such restrictions should be clearly stated on the relevant coupon or communicated at the time of sale.',
    ],
  },
  {
    number: '16',
    title: 'Parts, Labour and Additional Charges',
    paragraphs: [
      'Unless a coupon expressly states otherwise, an offer or discount may apply only to the service component specifically described in the coupon. Parts, consumables, taxes, insurance deductibles, external vendor charges or other items may remain chargeable where applicable and where not expressly included in the offer.',
    ],
  },
  {
    number: '17',
    title: 'Manufacturer / Supplier Warranty',
    paragraphs: [
      'Use of a Coupon Book or membership offer does not change or extend the warranty applicable to any spare part. Parts warranty shall remain subject to the applicable manufacturer, authorised distributor or supplier warranty policy and terms.',
    ],
  },
  {
    number: '18',
    title: 'Non-Cash and Non-Refundable Benefit',
    paragraphs: [
      'Coupons and promotional benefits are generally intended to be used against eligible services or purchases and do not represent a cash balance. Unless a specific written offer or applicable law requires otherwise, unused coupons are not exchangeable for cash and no cash refund shall be provided merely because a Customer does not use a coupon before expiry.',
    ],
  },
  {
    number: '19',
    title: 'Refund / Cancellation of Membership',
    bullets: [
      'Any refund or cancellation request shall be handled according to the applicable purchase terms and the Refund & Cancellation Policy.',
      'If one or more coupons have already been redeemed, the refund amount, if any, may be affected by the value of benefits already used, subject to applicable law.',
      'A promotional membership may be non-refundable after activation where this has been clearly disclosed at purchase and is legally permissible.',
    ],
  },
  {
    number: '20',
    title: 'Expired Coupons',
    paragraphs: [
      'After the Expiry Date, coupons should not ordinarily be redeemed. VahanXpert Services may, at its discretion, extend a particular coupon or membership in writing; such extension is not automatic and should be recorded with the revised validity date.',
    ],
  },
  {
    number: '21',
    title: 'Modification or Withdrawal of Offers',
    paragraphs: [
      'VahanXpert Services may modify future promotional offers, discontinue an offer or introduce new Coupon Books. However, a coupon already sold should ordinarily be honoured according to the terms stated for that coupon during its stated validity, except where a change is required by law, safety, supplier discontinuation, fraud prevention or circumstances beyond reasonable control.',
    ],
  },
  {
    number: '22',
    title: 'Fraud, Misuse and Duplicate Redemption',
    bullets: [
      'VahanXpert Services may reject or suspend a coupon where there is reasonable evidence of forgery, duplication, alteration, unauthorised copying, fraudulent use or other misuse.',
      'A physically altered or digitally manipulated coupon may be treated as invalid.',
      'Where a coupon has already been recorded as redeemed, further redemption may be rejected unless an internal error is established.',
    ],
  },
  {
    number: '23',
    title: 'Customer Responsibilities',
    bullets: [
      'Check the Start Date, Expiry Date and individual coupon conditions before purchase and use.',
      'Keep the physical Coupon Book and digital membership details secure.',
      'Present the required coupon or membership proof when claiming an offer.',
      'Use coupons only for the eligible services and within the stated validity period.',
      'Inform VahanXpert Services promptly about suspected loss, theft or unauthorised use.',
    ],
  },
  {
    number: '24',
    title: 'Business Responsibilities',
    bullets: [
      'Clearly communicate the validity period selected at the time of sale.',
      'Maintain reasonable membership/coupon records.',
      'Apply the stated coupon conditions consistently, subject to legitimate corrections and applicable law.',
      'Provide customers with the relevant offer terms and applicable exclusions.',
    ],
  },
  {
    number: '25',
    title: 'Customer Complaints',
    paragraphs: [
      'Any complaint regarding non-acceptance, incorrect redemption, validity, offer terms or membership status may be raised through the Customer Complaint & Grievance Redressal process. The membership number, coupon number, purchase record and relevant communications may be reviewed.',
    ],
  },
  {
    number: '26',
    title: 'Privacy',
    paragraphs: [
      'Customer information collected for membership registration, coupon issuance, redemption, communication, fraud prevention, accounting and customer support shall be handled in accordance with VahanXpert Services\' applicable privacy practices and law.',
    ],
  },
  {
    number: '27',
    title: 'Policy and Offer Interpretation',
    paragraphs: [
      'If a specific Coupon Book, coupon, invoice or digital membership record contains a more specific term concerning an offer, validity, usage limit or eligibility, that specific term shall apply to the relevant coupon, subject to applicable law. General policy terms shall apply to matters not specifically covered by the individual offer.',
    ],
  },
];

export default function MembershipCouponPolicyContent() {
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
            <Ticket size={14} className="text-amber-500" />
            <span>Official Policy Document</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={styles.title}
          >
            Membership & Coupon Book Terms, Offer & Validity Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={styles.metaBar}
          >
            <div className={styles.metaItem}>
              <FileCheck size={16} className="text-amber-500" />
              <span>Policy No.: <strong>VXS/MCB/019</strong></span>
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
          {MCB_SECTIONS.map((section, idx) => (
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

          {/* Section 28: Business Contact */}
          <motion.section
            id="section-28"
            className={styles.contactCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>28</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>
            <p className={styles.paragraph}>
              For any questions, verifications, coupon reissues or inquiries regarding your VahanXpert Membership or Coupon Book, please reach out to our team:
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
                <span className={styles.contactLabel}>Email Inquiries</span>
                <span className={styles.contactValue}>
                  <a href="mailto:info.vahanxpert@gmail.com">info.vahanxpert@gmail.com</a>
                </span>
              </div>

              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span className={styles.contactLabel}>Helpline Number</span>
                <span className={styles.contactValue}>
                  <a href="tel:+918930293896">+91 8930293896</a>
                </span>
              </div>
            </div>
          </motion.section>

          {/* Section 29: Document Control Table */}
          <motion.section
            id="section-29"
            className={styles.docControlCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>29</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>

            <div className={styles.tableResponsive}>
              <table className={styles.docTable}>
                <tbody>
                  <tr>
                    <th>Document Name</th>
                    <td>Membership & Coupon Book Terms, Offer & Validity Policy</td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/MCB/019</td>
                  </tr>
                  <tr>
                    <th>Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th>Review Frequency</th>
                    <td>At least annually or whenever the membership/offer model or applicable requirements change</td>
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
