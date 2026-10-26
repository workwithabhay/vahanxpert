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
  Megaphone,
} from 'lucide-react';
import styles from './MarketingConsentPolicy.module.css';

const MARKETING_SECTIONS = [
  {
    number: '01',
    title: 'Purpose',
    paragraphs: [
      'This Policy explains how VahanXpert Services may obtain and manage Customer consent for promotional and marketing communications, including offers, discounts, service campaigns, membership/coupon offers, new services and other promotional information through permitted communication channels.',
    ],
  },
  {
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy applies to Customers, prospective Customers and Membership/Coupon Book Customers who voluntarily provide or submit their contact information and choose to provide promotional communication consent through a website, form, membership registration, service process, digital interface, physical form or other authorised channel.',
    ],
  },
  {
    number: '03',
    title: 'Promotional Communication',
    paragraphs: [
      "Subject to applicable law and the Customer's consent or other lawful basis, promotional communications may include information about discounts, service offers, seasonal campaigns, membership benefits, coupon books, vehicle care packages, new services, special events, customer benefits and other VahanXpert Services promotions.",
    ],
  },
  {
    number: '04',
    title: 'Communication Channels',
    bullets: [
      'SMS / text messages.',
      'Email.',
      'WhatsApp or other permitted messaging platforms.',
      'Voice calls or other telephone-based promotional communication where permitted.',
      'App notifications or digital notifications, where applicable.',
      'Other electronic or communication channels permitted under applicable law and supported by VahanXpert Services.',
    ],
  },
  {
    number: '05',
    title: 'Consent',
    paragraphs: [
      'Where the Customer is presented with a promotional consent option, the Customer may voluntarily choose whether to accept promotional communications. Consent should be captured through an appropriate mechanism such as a checkbox, button, written declaration, digital confirmation, OTP confirmation or other verifiable method, as applicable.',
    ],
  },
  {
    number: '06',
    title: 'Suggested Consent Wording',
    paragraphs: [
      'The following standard consent declaration reflects the scope of promotional communications accepted by Customers:',
    ],
    quote:
      '“I agree to receive promotional and marketing communications from VahanXpert Services regarding offers, discounts, services, membership benefits, coupon offers, service reminders and other promotional information through SMS, email, WhatsApp, phone calls and other permitted communication channels. I understand that I may withdraw my promotional communication consent at any time, subject to applicable law.”',
  },
  {
    number: '07',
    title: 'Separate Service Communications',
    paragraphs: [
      'Service-related communications necessary to provide or administer a requested service, such as appointment confirmation, estimate approval, invoice, repair status, warranty communication, vehicle pickup/delivery or complaint handling, may be treated separately from promotional marketing consent where permitted by applicable law.',
    ],
  },
  {
    number: '08',
    title: 'Voluntary Nature of Marketing Consent',
    paragraphs: [
      'Promotional consent should not be presented as mandatory for receiving a service where the applicable service can reasonably be provided without such marketing consent, unless a specific lawful and clearly disclosed arrangement provides otherwise.',
    ],
  },
  {
    number: '09',
    title: 'Consent Records',
    bullets: [
      'VahanXpert Services may record the date and time of consent, communication channel, relevant form/page or source and the Customer contact detail to which the consent relates.',
      'Where technically available, records may also include the version of the consent wording accepted by the Customer.',
      'Consent records may be retained for compliance, communication management, customer support and dispute-resolution purposes.',
    ],
  },
  {
    number: '10',
    title: 'Use of Customer Contact Information',
    paragraphs: [
      'Contact information collected for promotional communication should be used for the stated promotional purposes and related customer communication activities. VahanXpert Services should avoid using contact information for unrelated purposes without an appropriate lawful basis or consent where required.',
    ],
  },
  {
    number: '11',
    title: 'Third-Party Service Providers',
    paragraphs: [
      'VahanXpert Services may use authorised service providers for sending SMS, email, WhatsApp or other communications. Such providers may process Customer contact information only as reasonably necessary to provide the communication service and subject to applicable contractual, security and legal requirements.',
    ],
  },
  {
    number: '12',
    title: 'Marketing Frequency',
    paragraphs: [
      'VahanXpert Services may determine the reasonable frequency and timing of promotional communications based on campaign requirements, customer preferences, operational considerations and applicable communication requirements. The Garage should avoid excessive or misleading promotional communication.',
    ],
  },
  {
    number: '13',
    title: 'Opt-Out / Withdrawal of Consent',
    bullets: [
      'A Customer may request withdrawal of promotional communication consent at any time through an available unsubscribe, opt-out, reply instruction, email request, phone request or other authorised mechanism.',
      'After a valid opt-out request is processed, VahanXpert Services should stop or suppress promotional communications through the relevant channel within a reasonable operational period, subject to technical limitations and applicable law.',
      'Withdrawal of marketing consent does not necessarily stop essential service, transaction, warranty, safety or legally required communications.',
    ],
  },
  {
    number: '14',
    title: 'Channel-Specific Opt-Out',
    paragraphs: [
      'Where technically supported, a Customer may opt out from one promotional channel while continuing to receive promotional communication through another channel, unless the Customer requests a broader withdrawal. VahanXpert Services may maintain channel-specific communication preferences.',
    ],
  },
  {
    number: '15',
    title: 'Accuracy and Customer Responsibility',
    paragraphs: [
      'Customers should provide accurate contact information and notify VahanXpert Services if their mobile number or email address changes. VahanXpert Services is not responsible for communications sent to an outdated contact detail where the Customer has not provided an updated detail, subject to applicable law.',
    ],
  },
  {
    number: '16',
    title: 'Personalisation',
    paragraphs: [
      "Promotional communications may be tailored based on the Customer's service history, vehicle category, membership/coupon participation, previously selected preferences or other information lawfully available for the relevant purpose. Personalisation should remain within the scope permitted by applicable law and the relevant consent or lawful basis.",
    ],
  },
  {
    number: '17',
    title: 'No Sale of Personal Information',
    paragraphs: [
      'VahanXpert Services shall not sell Customer personal information for unrelated marketing purposes. Information may be shared with authorised communication service providers where reasonably necessary to send approved communications, subject to applicable contractual and legal requirements.',
    ],
  },
  {
    number: '18',
    title: 'Unauthorised or Fraudulent Messages',
    paragraphs: [
      'Customers should verify that promotional communications claiming to be from VahanXpert Services originate through an authorised channel. VahanXpert Services should take reasonable measures to protect its communication systems against unauthorised use or fraudulent promotional messages.',
    ],
  },
  {
    number: '19',
    title: 'Complaints Regarding Marketing Communication',
    paragraphs: [
      'Customers may contact VahanXpert Services if they believe they are receiving unwanted promotional communications, if an opt-out request has not been reflected, or if they have a concern regarding the use of their contact information.',
    ],
  },
  {
    number: '20',
    title: 'Privacy and Data Protection',
    paragraphs: [
      "Promotional communication information shall be handled in accordance with VahanXpert Services' applicable privacy practices. Customer contact details, consent records, communication preferences and campaign records should be accessed only by authorised personnel or service providers for legitimate purposes.",
    ],
  },
  {
    number: '21',
    title: 'Consent Does Not Guarantee a Particular Offer',
    paragraphs: [
      'Providing marketing consent does not guarantee that the Customer will receive any particular offer, discount, coupon, membership benefit or promotional campaign. Offers remain subject to their individual terms, availability and validity.',
    ],
  },
  {
    number: '22',
    title: 'Membership / Coupon Book',
    paragraphs: [
      'Where a Customer purchases or registers for a VahanXpert Services Membership or Coupon Book, promotional communication consent may be collected separately or as part of the membership registration process, provided the consent mechanism clearly identifies the promotional nature of the communication and any applicable choice available to the Customer.',
    ],
  },
  {
    number: '23',
    title: 'Changes to this Policy',
    paragraphs: [
      'VahanXpert Services may update this Policy to reflect changes in communication practices, technology, service providers or applicable legal requirements. The latest applicable version should be used for future consent collection.',
    ],
  },
];

export default function MarketingConsentPolicyContent() {
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
            <span>Customer Communications & Consent</span>
          </div>

          <h1 className={styles.title}>
            Customer Promotional Communication &{' '}
            <span className={styles.titleHighlight}>Marketing Consent Policy</span>
          </h1>

          <div className={styles.metaRow}>
            <div className={`${styles.metaPill} ${styles.metaPillPrimary}`}>
              <ShieldCheck size={14} />
              <span>Policy No.: VXS/MKT/020</span>
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
              <Megaphone size={14} />
              <span>Class: Marketing Governance</span>
            </div>
          </div>
        </header>

        {/* Centered Content Area (No Table of Contents Sidebar) */}
        <main className={styles.contentArea}>
          {MARKETING_SECTIONS.map((sec) => (
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

                {sec.quote && (
                  <div className={styles.quoteBox}>
                    <p>{sec.quote}</p>
                  </div>
                )}

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

          {/* Section 24: Contact Details Card */}
          <motion.article
            className={styles.contactCard}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>24</span>
              <h2 className={styles.sectionTitle}>Contact</h2>
            </div>
            <div className={styles.sectionBody}>
              <p>
                To withdraw consent, manage your promotional communication preferences, or submit inquiries regarding this Policy, please contact our support office:
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
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>CONSENT / OPT-OUT EMAIL</strong>
                    <a href="mailto:info.vahanxpert@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      info.vahanxpert@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem} style={{ gridColumn: '1 / -1' }}>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#92400e' }}>HELPLINE</strong>
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
                      <td>Customer Promotional Communication & Marketing Consent Policy</td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/MKT/020</td>
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
