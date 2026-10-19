'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  Lock,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';
import styles from './PrivacyPolicy.module.css';

const TOC_SECTIONS = [
  { id: 'sec-1', label: '1. Purpose' },
  { id: 'sec-2', label: '2. Scope' },
  { id: 'sec-3', label: '3. Information Collected' },
  { id: 'sec-4', label: '4. Purpose of Collection' },
  { id: 'sec-5', label: '5. Consent & Communication' },
  { id: 'sec-6', label: '6. Vehicle Condition Records' },
  { id: 'sec-7', label: '7. Payment & Financial Data' },
  { id: 'sec-8', label: '8. Insurance & Third Parties' },
  { id: 'sec-9', label: '9. Service Providers & Vendors' },
  { id: 'sec-10', label: '10. Data Security' },
  { id: 'sec-11', label: '11. Staff Responsibilities' },
  { id: 'sec-12', label: '12. Data Retention' },
  { id: 'sec-13', label: '13. Deletion & Disposal' },
  { id: 'sec-14', label: '14. Customer Requests' },
  { id: 'sec-15', label: '15. Accuracy of Information' },
  { id: 'sec-16', label: '16. Confidentiality' },
  { id: 'sec-17', label: '17. CCTV & Security Records' },
  { id: 'sec-18', label: '18. Data Breach / Incidents' },
  { id: 'sec-19', label: '19. Customer Responsibilities' },
  { id: 'sec-20', label: '20. Marketing Communication' },
  { id: 'sec-21', label: '21. Children & Sensitive Data' },
  { id: 'sec-22', label: '22. Privacy Complaints' },
  { id: 'sec-23', label: '23. Policy Changes' },
  { id: 'sec-24', label: '24. No Unauthorised Disclosure' },
  { id: 'sec-25', label: '25. Business Contact' },
  { id: 'sec-26', label: '26. Document Control' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

export default function PrivacyPolicyContent() {
  const [activeSection, setActiveSection] = useState<string>('sec-1');

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible sections
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Take the one nearest to top
          const topEntry = visibleEntries.reduce((prev, curr) =>
            curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev
          );
          setActiveSection(topEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-90px 0px -60% 0px',
        threshold: [0, 0.2],
      }
    );

    TOC_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler with offset for fixed navbar
  const handleScrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement> | null, id: string) => {
    if (e) e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  // Auto-scroll the active TOC link into view in the sidebar
  useEffect(() => {
    const activeEl = document.querySelector(`[data-toc-id="${activeSection}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowMid} />

      <div className={styles.container}>
        {/* Header Section */}
        <motion.div
          className={styles.pageHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className={styles.badgePill}>
              <span className={styles.badgeIcon}>✦</span> Privacy Policy
            </div>
          </motion.div>

          <motion.h1 className={styles.pageTitle} variants={fadeInUp}>
            Vehicle Service & Customer Data{' '}
            <span className={styles.titleHighlight}>Privacy Policy</span>
          </motion.h1>

          <motion.div className={styles.metaBadgesRow} variants={fadeInUp}>
            <span className={`${styles.metaBadge} ${styles.metaBadgeHighlight}`}>
              Policy No.: VXS/DP/018
            </span>
            <span className={styles.metaBadge}>Version: 1.0</span>
            <span className={styles.metaBadge}>
              <Calendar size={14} /> Effective Date: 20/09/2026
            </span>
            <span className={styles.metaBadge}>
              <ShieldCheck size={14} /> VahanXpert Services
            </span>
          </motion.div>
        </motion.div>

        {/* Mobile / Tablet Sticky Quick Jump */}
        <div className={styles.mobileStickyToc}>
          <div className={styles.mobileTocHeader}>
            <Layers size={14} />
            <span>Table of Contents ({TOC_SECTIONS.length} Sections)</span>
          </div>
          <select
            className={styles.mobileTocSelect}
            value={activeSection}
            onChange={(e) => handleScrollTo(null, e.target.value)}
            aria-label="Jump to policy section"
          >
            {TOC_SECTIONS.map((sec) => (
              <option key={sec.id} value={sec.id}>
                {sec.label}
              </option>
            ))}
          </select>
        </div>

        {/* Two-Column Grid: Sticky TOC + Policy Body */}
        <div className={styles.contentLayout}>
          {/* Left Sticky Sidebar Table of Contents */}
          <aside className={styles.tocSidebar} aria-label="Table of contents">
            <h3 className={styles.tocTitle}>
              <Layers size={16} /> Table of Contents
            </h3>
            <ul className={styles.tocList}>
              {TOC_SECTIONS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-toc-id={item.id}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className={`${styles.tocLink} ${
                      activeSection === item.id ? styles.tocLinkActive : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.sidebarHelpCard}>
              <h4 className={styles.sidebarHelpTitle}>Have Privacy Questions?</h4>
              <p className={styles.sidebarHelpDesc}>
                Contact our dedicated data protection officer for privacy requests.
              </p>
              <a
                href="mailto:info.vahanxpert@gmail.com"
                className={styles.sidebarHelpBtn}
              >
                <Mail size={13} />
                <span>Email Privacy Desk</span>
              </a>
            </div>
          </aside>

          {/* Right Main Policy Content */}
          <main className={styles.policyBody}>
            {/* 1. Purpose */}
            <motion.section
              id="sec-1"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>01</span>
                <h2 className={styles.sectionTitleText}>Purpose</h2>
              </div>
              <p className={styles.policyParagraph}>
                This Policy describes how VahanXpert Services may collect, use, store, access, share and protect Customer and vehicle-related information obtained during vehicle servicing, repair, insurance coordination, pickup/drop, billing, warranty and customer support activities.
              </p>
            </motion.section>

            {/* 2. Scope */}
            <motion.section
              id="sec-2"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>02</span>
                <h2 className={styles.sectionTitleText}>Scope</h2>
              </div>
              <p className={styles.policyParagraph}>
                This Policy applies to Customer information and vehicle/service information collected through workshop visits, job cards, estimates, invoices, warranty records, phone calls, email, WhatsApp or other official communication channels, digital systems, website interactions and authorised service processes.
              </p>
            </motion.section>

            {/* 3. Information That May Be Collected */}
            <motion.section
              id="sec-3"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>03</span>
                <h2 className={styles.sectionTitleText}>Information That May Be Collected</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>Customer name and contact details such as mobile number, email address and communication details.</li>
                <li className={styles.policyListItem}>Vehicle information such as registration number, make, model, variant, vehicle identification details where required, odometer reading and service history.</li>
                <li className={styles.policyListItem}>Job card, estimate, invoice, payment and warranty information.</li>
                <li className={styles.policyListItem}>Vehicle condition photographs, inspection records, diagnostic information and service-related videos where reasonably required.</li>
                <li className={styles.policyListItem}>Insurance-related information where the Customer requests or requires insurance repair assistance.</li>
                <li className={styles.policyListItem}>Pickup/drop details and authorised representative information where applicable.</li>
                <li className={styles.policyListItem}>Complaint, feedback and communication records.</li>
                <li className={styles.policyListItem}>Information required for legal, accounting, insurance, warranty, safety or dispute-resolution purposes.</li>
              </ul>
            </motion.section>

            {/* 4. Purpose of Collection and Use */}
            <motion.section
              id="sec-4"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>04</span>
                <h2 className={styles.sectionTitleText}>Purpose of Collection and Use</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>To identify the Customer and vehicle and create service records.</li>
                <li className={styles.policyListItem}>To provide vehicle servicing, repair, inspection, warranty and related services.</li>
                <li className={styles.policyListItem}>To prepare estimates, invoices and payment records.</li>
                <li className={styles.policyListItem}>To coordinate insurance repairs or manufacturer/supplier warranty claims where requested or required.</li>
                <li className={styles.policyListItem}>To arrange vehicle pickup, delivery and transportation.</li>
                <li className={styles.policyListItem}>To communicate service updates, approvals, delays, invoices and other service-related information.</li>
                <li className={styles.policyListItem}>To investigate complaints, incidents, damage claims and disputes.</li>
                <li className={styles.policyListItem}>To maintain service history, quality records and operational records.</li>
                <li className={styles.policyListItem}>To comply with applicable legal, tax, accounting, insurance or regulatory requirements.</li>
              </ul>
            </motion.section>

            {/* 5. Customer Consent and Communication */}
            <motion.section
              id="sec-5"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>05</span>
                <h2 className={styles.sectionTitleText}>Customer Consent and Communication</h2>
              </div>
              <p className={styles.policyParagraph}>
                Where consent or another lawful basis is required for a particular processing activity, VahanXpert Services may seek the appropriate consent or rely on another legally permitted basis. Service-related communications may be sent where reasonably necessary to provide or administer the requested service. Marketing communications, where applicable, should be handled in accordance with applicable consent and communication requirements.
              </p>
            </motion.section>

            {/* 6. Photographs and Vehicle Condition Records */}
            <motion.section
              id="sec-6"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>06</span>
                <h2 className={styles.sectionTitleText}>Photographs and Vehicle Condition Records</h2>
              </div>
              <p className={styles.policyParagraph}>
                Photographs or videos may be taken to record the vehicle&apos;s condition, pre-existing damage, repair progress, final condition, insurance documentation, quality control or incident evidence. Such records should be used for legitimate service, insurance, dispute-resolution, safety or legal purposes.
              </p>
            </motion.section>

            {/* 7. Payment and Financial Information */}
            <motion.section
              id="sec-7"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>07</span>
                <h2 className={styles.sectionTitleText}>Payment and Financial Information</h2>
              </div>
              <p className={styles.policyParagraph}>
                Payment information may be processed or recorded to the extent necessary for billing and reconciliation. Where payment is made through a third-party payment provider, relevant payment information may be processed by that provider under its applicable terms and privacy practices. VahanXpert Services should avoid unnecessarily retaining sensitive payment credentials such as card PINs, CVVs or passwords.
              </p>
            </motion.section>

            {/* 8. Insurance and Third-Party Sharing */}
            <motion.section
              id="sec-8"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>08</span>
                <h2 className={styles.sectionTitleText}>Insurance and Third-Party Sharing</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>Information may be shared with insurers, surveyors, vehicle manufacturers, authorised distributors, parts suppliers, roadside assistance providers or other service partners where reasonably necessary to provide the requested service or process a claim.</li>
                <li className={styles.policyListItem}>Only information reasonably relevant to the applicable purpose should be shared where practicable.</li>
                <li className={styles.policyListItem}>Third parties may process information under their own applicable privacy and contractual terms.</li>
              </ul>
            </motion.section>

            {/* 9. Service Providers and Vendors */}
            <motion.section
              id="sec-9"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>09</span>
                <h2 className={styles.sectionTitleText}>Service Providers and Vendors</h2>
              </div>
              <p className={styles.policyParagraph}>
                VahanXpert Services may use third-party service providers for software, communication, cloud storage, payment processing, accounting, towing, insurance coordination or other operational functions. Such providers may access information only to the extent reasonably necessary for the services they provide, subject to applicable contractual, security and legal requirements.
              </p>
            </motion.section>

            {/* 10. Data Security */}
            <motion.section
              id="sec-10"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>10</span>
                <h2 className={styles.sectionTitleText}>Data Security</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>Reasonable administrative, technical and organisational safeguards should be used to protect Customer and vehicle information against unauthorised access, loss, misuse, alteration or disclosure.</li>
                <li className={styles.policyListItem}>Access to service records should be limited to authorised personnel based on operational need.</li>
                <li className={styles.policyListItem}>Passwords, system credentials and access information should not be shared improperly.</li>
                <li className={styles.policyListItem}>Physical documents containing Customer information should be stored and disposed of in a reasonably secure manner.</li>
              </ul>
            </motion.section>

            {/* 11. Employee and Staff Responsibilities */}
            <motion.section
              id="sec-11"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>11</span>
                <h2 className={styles.sectionTitleText}>Employee and Staff Responsibilities</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>Staff should access Customer information only for legitimate work purposes.</li>
                <li className={styles.policyListItem}>Customer information should not be disclosed to unauthorised persons.</li>
                <li className={styles.policyListItem}>Staff should follow applicable access-control, device-security and record-handling procedures.</li>
                <li className={styles.policyListItem}>Suspected data loss, unauthorised access or disclosure should be reported to management promptly.</li>
              </ul>
            </motion.section>

            {/* 12. Data Retention */}
            <motion.section
              id="sec-12"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>12</span>
                <h2 className={styles.sectionTitleText}>Data Retention</h2>
              </div>
              <p className={styles.policyParagraph}>
                Customer and vehicle records may be retained for service history, warranty, insurance, accounting, tax, complaint handling, dispute resolution, quality control, legal/compliance and other legitimate business purposes for an appropriate period considering the nature of the record and applicable requirements.
              </p>
            </motion.section>

            {/* 13. Data Deletion and Disposal */}
            <motion.section
              id="sec-13"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>13</span>
                <h2 className={styles.sectionTitleText}>Data Deletion and Disposal</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>When records are no longer required for legitimate business, legal, warranty, insurance or dispute purposes, they may be securely deleted, destroyed or anonymised where reasonably practicable.</li>
                <li className={styles.policyListItem}>Paper records should be disposed of in a manner reasonably designed to prevent unauthorised disclosure.</li>
                <li className={styles.policyListItem}>Electronic records should be deleted or access-disabled using appropriate system controls where feasible.</li>
              </ul>
            </motion.section>

            {/* 14. Customer Requests */}
            <motion.section
              id="sec-14"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>14</span>
                <h2 className={styles.sectionTitleText}>Customer Requests</h2>
              </div>
              <p className={styles.policyParagraph}>
                A Customer may contact VahanXpert Services to ask about personal information held by the Garage or to raise a privacy-related concern. Requests may be subject to reasonable identity verification and to applicable legal, contractual and record-retention requirements.
              </p>
            </motion.section>

            {/* 15. Accuracy of Information */}
            <motion.section
              id="sec-15"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>15</span>
                <h2 className={styles.sectionTitleText}>Accuracy of Information</h2>
              </div>
              <p className={styles.policyParagraph}>
                Customers should provide accurate and updated contact, vehicle and service information. Where a Customer identifies an error in relevant service records, VahanXpert Services may review and correct the information where appropriate and reasonably practicable.
              </p>
            </motion.section>

            {/* 16. Confidentiality */}
            <motion.section
              id="sec-16"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>16</span>
                <h2 className={styles.sectionTitleText}>Confidentiality</h2>
              </div>
              <p className={styles.policyParagraph}>
                Customer information, vehicle records, service history, photographs, invoices, insurance information and complaint records should be treated as confidential and should not be disclosed except for legitimate service purposes, authorised third-party processing, legal requirements or other permitted purposes.
              </p>
            </motion.section>

            {/* 17. CCTV and Security Records */}
            <motion.section
              id="sec-17"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>17</span>
                <h2 className={styles.sectionTitleText}>CCTV and Security Records</h2>
              </div>
              <p className={styles.policyParagraph}>
                Where CCTV or other security monitoring is used at workshop premises, recordings may be used for security, incident investigation, vehicle custody, safety, dispute resolution and legal/compliance purposes, subject to applicable requirements. Access to such records should be restricted to authorised personnel and legitimate purposes.
              </p>
            </motion.section>

            {/* 18. Data Breach or Privacy Incident */}
            <motion.section
              id="sec-18"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>18</span>
                <h2 className={styles.sectionTitleText}>Data Breach or Privacy Incident</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>Suspected loss, unauthorised access, accidental disclosure or other material privacy incident should be reported internally to authorised management.</li>
                <li className={styles.policyListItem}>The incident may be investigated to identify the information affected, circumstances, containment measures and appropriate corrective action.</li>
                <li className={styles.policyListItem}>Where notification or other action is required under applicable law, VahanXpert Services may take such action within the applicable requirements.</li>
              </ul>
            </motion.section>

            {/* 19. Customer Responsibilities */}
            <motion.section
              id="sec-19"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>19</span>
                <h2 className={styles.sectionTitleText}>Customer Responsibilities</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>Do not share unnecessary passwords, PINs or other sensitive credentials with workshop personnel.</li>
                <li className={styles.policyListItem}>Remove unnecessary personal documents and valuables from the vehicle before handing it over.</li>
                <li className={styles.policyListItem}>Keep contact information updated for service communications.</li>
                <li className={styles.policyListItem}>Inform the Garage if a communication channel should no longer be used for service-related communication.</li>
              </ul>
            </motion.section>

            {/* 20. Marketing and Promotional Communication */}
            <motion.section
              id="sec-20"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>20</span>
                <h2 className={styles.sectionTitleText}>Marketing and Promotional Communication</h2>
              </div>
              <p className={styles.policyParagraph}>
                Where VahanXpert Services sends promotional or marketing communication, such communication should be handled in accordance with applicable consent, preference and communication requirements. Customers may contact the Garage to raise a marketing communication preference or opt-out request where such option is applicable.
              </p>
            </motion.section>

            {/* 21. Children and Sensitive Information */}
            <motion.section
              id="sec-21"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>21</span>
                <h2 className={styles.sectionTitleText}>Children and Sensitive Information</h2>
              </div>
              <p className={styles.policyParagraph}>
                The Garage does not intentionally seek unnecessary sensitive personal information. If information relating to a child or other sensitive information is provided incidentally, it should be handled only to the extent reasonably necessary for the relevant service, safety, legal or support purpose.
              </p>
            </motion.section>

            {/* 22. Privacy Complaints */}
            <motion.section
              id="sec-22"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>22</span>
                <h2 className={styles.sectionTitleText}>Privacy Complaints</h2>
              </div>
              <p className={styles.policyParagraph}>
                Privacy-related concerns may be raised through the official contact details below. VahanXpert Services may review relevant records, communications and system information and provide an appropriate response subject to applicable law and legitimate confidentiality requirements.
              </p>
            </motion.section>

            {/* 23. Policy Changes */}
            <motion.section
              id="sec-23"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>23</span>
                <h2 className={styles.sectionTitleText}>Policy Changes</h2>
              </div>
              <p className={styles.policyParagraph}>
                This Policy may be updated from time to time to reflect changes in workshop operations, technology, service providers, legal requirements or privacy practices. The latest applicable version should be used for ongoing processing.
              </p>
            </motion.section>

            {/* 24. No Unauthorised Disclosure */}
            <motion.section
              id="sec-24"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>24</span>
                <h2 className={styles.sectionTitleText}>No Unauthorised Disclosure</h2>
              </div>
              <p className={styles.policyParagraph}>
                Customer data must not be sold, disclosed or shared for unrelated purposes without an appropriate lawful basis, consent where required, or other permitted justification.
              </p>
              <div className={styles.noticeBox}>
                <Lock size={18} className={styles.noticeIcon} />
                <span>Zero Compromise: We strictly adhere to data protection norms and never monetize or trade your personal records.</span>
              </div>
            </motion.section>

            {/* 25. Business Contact */}
            <motion.section
              id="sec-25"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>25</span>
                <h2 className={styles.sectionTitleText}>Business Contact</h2>
              </div>
              <p className={styles.policyParagraph}>
                For privacy inquiries, rights enforcement, or official communications, please reach out directly:
              </p>

              <div className={styles.contactDetailsGrid}>
                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>Entity Name</span>
                  <span className={styles.contactDetailValue}>VahanXpert Services</span>
                </div>

                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>Official Email</span>
                  <a href="mailto:info.vahanxpert@gmail.com" className={styles.contactDetailValue}>
                    info.vahanxpert@gmail.com
                  </a>
                </div>

                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>Contact Phone</span>
                  <a href="tel:+918930293896" className={styles.contactDetailValue}>
                    +91 8930293896
                  </a>
                </div>

                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>Registered Office</span>
                  <span className={styles.contactDetailValue}>
                    Ward No. 02, Shop No. 01, Khata, 23/20, Sahwa Bypass, near Shubham Hospital, Nohar, Rajasthan 335523
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 26. Document Control */}
            <motion.section
              id="sec-26"
              className={styles.policyCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <div className={styles.policyCardHeader}>
                <span className={styles.sectionNumberBadge}>26</span>
                <h2 className={styles.sectionTitleText}>Document Control</h2>
              </div>
              <p className={styles.policyParagraph}>
                Official document versioning and regulatory administration index:
              </p>

              <div className={styles.docTableWrapper}>
                <table className={styles.docTable}>
                  <tbody>
                    <tr>
                      <th>Document Name</th>
                      <td>Vehicle Service & Customer Data Privacy Policy</td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/DP/018</td>
                    </tr>
                    <tr>
                      <th>Version / Effective Date</th>
                      <td>1.0 / 20/09/2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}
