'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  FileText,
  ShieldCheck,
  Calendar,
  Layers,
  Phone,
  Mail,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Wrench,
  Car,
} from 'lucide-react';
import styles from './TermsConditions.module.css';

const TOC_SECTIONS = [
  { id: 'sec-1', label: '1. Purpose' },
  { id: 'sec-2', label: '2. Scope' },
  { id: 'sec-3', label: '3. Customer Consent & Authorization' },
  { id: 'sec-4', label: '4. Vehicle Inspection & Estimate' },
  { id: 'sec-5', label: '5. Repair & Service Charges' },
  { id: 'sec-6', label: '6. Spare Parts & Consumables' },
  { id: 'sec-7', label: '7. Insurance & Cashless Repair' },
  { id: 'sec-8', label: '8. Vehicle Custody, Parking & Security' },
  { id: 'sec-9', label: '9. Test Drive & Road Testing' },
  { id: 'sec-10', label: '10. Customer Approval for Additional Work' },
  { id: 'sec-11', label: '11. Delivery & Vehicle Handover' },
  { id: 'sec-12', label: '12. Payment Terms' },
  { id: 'sec-13', label: '13. Warranty on Repair & Parts' },
  { id: 'sec-14', label: '14. Customer Responsibilities' },
  { id: 'sec-15', label: '15. Limitation of Responsibility' },
  { id: 'sec-16', label: '16. Customer Complaints & Grievances' },
  { id: 'sec-17', label: '17. Cancellation & Refund' },
  { id: 'sec-18', label: '18. Personal Data & Customer Info' },
  { id: 'sec-19', label: '19. Force Majeure' },
  { id: 'sec-20', label: '20. Policy Changes' },
  { id: 'sec-21', label: '21. Governing Law & Jurisdiction' },
  { id: 'sec-22', label: '22. Customer Acknowledgement' },
  { id: 'sec-23', label: '23. Document Control' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

export default function TermsConditionsContent() {
  const [activeSection, setActiveSection] = useState<string>('sec-1');

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
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
              <span className={styles.badgeIcon}>✦</span> Terms & Conditions
            </div>
          </motion.div>

          <motion.h1 className={styles.pageTitle} variants={fadeInUp}>
            Garage Services{' '}
            <span className={styles.titleHighlight}>Terms & Conditions</span>
          </motion.h1>

          <motion.div className={styles.metaBadgesRow} variants={fadeInUp}>
            <span className={`${styles.metaBadge} ${styles.metaBadgeHighlight}`}>
              Policy No.: VXS/TC/001
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
            aria-label="Jump to terms section"
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
              <h4 className={styles.sidebarHelpTitle}>Questions About Terms?</h4>
              <p className={styles.sidebarHelpDesc}>
                Reach out to our customer support or workshop desk for any clarification.
              </p>
              <Link href="/contact" className={styles.sidebarHelpBtn}>
                <Phone size={13} />
                <span>Contact Workshop</span>
              </Link>
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
                This Garage Services Terms & Conditions Policy establishes the terms under which VahanXpert Services (&quot;Garage&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) provides vehicle inspection, servicing, repair, maintenance, accidental repair, insurance-claim support and related workshop services to customers (&quot;Customer&quot;, &quot;you&quot; or &quot;your&quot;). The purpose of this policy is to ensure transparency regarding estimates, approvals, parts, labour, payments, vehicle custody, warranty, insurance claims, delivery and customer responsibilities.
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
                These Terms & Conditions apply to all vehicles brought to VahanXpert Services for inspection, servicing, repair, maintenance, accidental repair, detailing or related services, whether the work is paid directly by the Customer, arranged through an insurer, or otherwise authorised by a third party.
              </p>
            </motion.section>

            {/* 3. Customer Consent and Work Authorization */}
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
                <h2 className={styles.sectionTitleText}>Customer Consent and Work Authorization</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  A job card/work order may be prepared before work begins and shall record the vehicle details, reported concern, visible condition and requested services.
                </li>
                <li className={styles.policyListItem}>
                  The Customer authorises the Garage to inspect and diagnose the vehicle and to perform only the work approved by the Customer or the applicable authorised party.
                </li>
                <li className={styles.policyListItem}>
                  Where additional defects or repair requirements are identified, additional work may be carried out only after obtaining appropriate approval, except where immediate action is reasonably necessary to protect the vehicle or prevent further damage and the Customer cannot reasonably be contacted.
                </li>
                <li className={styles.policyListItem}>
                  The Customer is responsible for providing accurate contact, vehicle and ownership information.
                </li>
              </ul>
            </motion.section>

            {/* 4. Vehicle Inspection and Estimate */}
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
                <h2 className={styles.sectionTitleText}>Vehicle Inspection and Estimate</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Inspection findings and estimates are based on the condition of the vehicle at the time of inspection.
                </li>
                <li className={styles.policyListItem}>
                  An estimate is an indicative calculation unless expressly stated as a final quotation.
                </li>
                <li className={styles.policyListItem}>
                  Hidden defects, internal damage, corrosion, prior repairs or additional damage may become apparent after dismantling or testing and may result in additional costs.
                </li>
                <li className={styles.policyListItem}>
                  Taxes, consumables, parts, labour, diagnostic charges, towing or other applicable charges may be separately identified in the estimate/invoice.
                </li>
              </ul>
            </motion.section>

            {/* 5. Repair and Service Charges */}
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
                <h2 className={styles.sectionTitleText}>Repair and Service Charges</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  The Customer shall pay applicable labour, spare-parts, consumables, diagnostic and other authorised charges.
                </li>
                <li className={styles.policyListItem}>
                  Prices may vary if the Customer approves additional work or if the scope of work changes.
                </li>
                <li className={styles.policyListItem}>
                  Applicable taxes and statutory charges, if any, shall be payable in addition to the base service charges unless specifically stated otherwise.
                </li>
                <li className={styles.policyListItem}>
                  No employee or representative is authorised to waive or alter charges without approval from the Garage&apos;s authorised management.
                </li>
              </ul>
            </motion.section>

            {/* 6. Spare Parts and Consumables */}
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
                <h2 className={styles.sectionTitleText}>Spare Parts and Consumables</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Parts may be new, manufacturer-approved, equivalent-quality or otherwise specifically approved by the Customer, depending on availability and the approved repair scope.
                </li>
                <li className={styles.policyListItem}>
                  Where an insurance claim is involved, parts selection and replacement may also be subject to the applicable insurer&apos;s policy, surveyor approval and claim terms.
                </li>
                <li className={styles.policyListItem}>
                  The Customer may request replacement of a particular part subject to availability, technical suitability and applicable charges.
                </li>
                <li className={styles.policyListItem}>
                  Old/replaced parts may be retained for inspection, returned to the Customer where requested and legally/operationally permissible, or handled in accordance with insurer, supplier and waste-disposal requirements.
                </li>
              </ul>
            </motion.section>

            {/* 7. Insurance and Cashless Repair */}
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
                <h2 className={styles.sectionTitleText}>Insurance and Cashless Repair</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  For insurance-related repairs, the Garage may assist with surveyor coordination, documentation, estimate preparation and claim-related communication.
                </li>
                <li className={styles.policyListItem}>
                  Insurance approval is subject to the insurer&apos;s policy terms, surveyor assessment, deductibles, depreciation, exclusions and other applicable conditions.
                </li>
                <li className={styles.policyListItem}>
                  Cashless processing, where offered, does not mean that every repair cost will necessarily be paid by the insurer.
                </li>
                <li className={styles.policyListItem}>
                  The Customer remains responsible for deductibles, non-payable items, depreciation, policy exclusions, additional approved work and other amounts not covered by the insurer.
                </li>
                <li className={styles.policyListItem}>
                  The Garage does not guarantee claim approval or the amount payable by an insurer.
                </li>
              </ul>
            </motion.section>

            {/* 8. Vehicle Custody, Parking and Security */}
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
                <h2 className={styles.sectionTitleText}>Vehicle Custody, Parking and Security</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Reasonable care will be taken while the vehicle is in the Garage&apos;s custody.
                </li>
                <li className={styles.policyListItem}>
                  The Customer should remove cash, valuables, documents and personal belongings before handing over the vehicle.
                </li>
                <li className={styles.policyListItem}>
                  The Garage shall not ordinarily be responsible for loss of personal belongings left inside the vehicle unless liability is established under applicable law.
                </li>
                <li className={styles.policyListItem}>
                  Vehicles may be moved within the workshop premises or driven for inspection, testing, diagnosis or road testing where reasonably necessary and authorised.
                </li>
                <li className={styles.policyListItem}>
                  Parking/storage beyond the agreed period may attract applicable charges after reasonable notice to the Customer.
                </li>
              </ul>
            </motion.section>

            {/* 9. Test Drive and Road Testing */}
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
                <h2 className={styles.sectionTitleText}>Test Drive and Road Testing</h2>
              </div>
              <p className={styles.policyParagraph}>
                Where reasonably necessary for diagnosis, quality checking or verification of repairs, the Garage may conduct a controlled road test using authorised personnel and subject to applicable law. The Customer shall disclose known safety issues, mechanical defects or special operating instructions that could materially affect safe testing.
              </p>
            </motion.section>

            {/* 10. Customer Approval for Additional Work */}
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
                <h2 className={styles.sectionTitleText}>Customer Approval for Additional Work</h2>
              </div>
              <p className={styles.policyParagraph}>
                If additional repair work is identified after commencement, the Garage will, where reasonably practicable, communicate the requirement and estimated additional cost before proceeding. Approval may be recorded through a signed job card, written communication, digital confirmation or other verifiable method.
              </p>
            </motion.section>

            {/* 11. Delivery and Vehicle Handover */}
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
                <h2 className={styles.sectionTitleText}>Delivery and Vehicle Handover</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  The vehicle will ordinarily be delivered after completion of the approved work, final inspection and settlement of applicable outstanding dues.
                </li>
                <li className={styles.policyListItem}>
                  The Customer or an authorised representative may be required to provide proof of identity/authority at delivery.
                </li>
                <li className={styles.policyListItem}>
                  The Customer should inspect the vehicle and invoice at the time of handover and promptly report any visible discrepancy.
                </li>
                <li className={styles.policyListItem}>
                  Documents, keys, removed parts and other items shall be handed over as applicable to the job and subject to insurer/supplier requirements.
                </li>
              </ul>
            </motion.section>

            {/* 12. Payment Terms */}
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
                <h2 className={styles.sectionTitleText}>Payment Terms</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Payment is due according to the agreed billing terms and before delivery unless a written credit arrangement has been approved.
                </li>
                <li className={styles.policyListItem}>
                  Accepted payment methods may include cash, bank transfer, UPI, card or other methods made available by the Garage.
                </li>
                <li className={styles.policyListItem}>
                  Any disputed amount should be raised promptly with supporting details; undisputed amounts remain payable.
                </li>
                <li className={styles.policyListItem}>
                  Where payment is overdue, the Garage may, subject to applicable law, suspend further work or delay delivery until outstanding authorised dues are settled.
                </li>
              </ul>
            </motion.section>

            {/* 13. Warranty on Repair and Parts */}
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
                <h2 className={styles.sectionTitleText}>Warranty on Repair and Parts</h2>
              </div>
              <p className={styles.policyParagraph}>
                Any warranty on labour or parts shall be governed by the specific warranty terms communicated on the invoice/job card or by the relevant manufacturer, supplier or insurer. Warranty may not apply to damage caused by accident, misuse, negligence, unauthorised modification, normal wear and tear, external causes, continued operation after a known fault, or repair by an unauthorised third party. The applicable warranty period and exclusions should be checked on the final invoice/job card.
              </p>
            </motion.section>

            {/* 14. Customer Responsibilities */}
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
                <h2 className={styles.sectionTitleText}>Customer Responsibilities</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Provide accurate vehicle, ownership, contact and insurance information.
                </li>
                <li className={styles.policyListItem}>
                  Disclose previous repairs, known defects, modifications, warning lights and relevant vehicle history to the best of the Customer&apos;s knowledge.
                </li>
                <li className={styles.policyListItem}>
                  Follow maintenance and operating instructions provided after service.
                </li>
                <li className={styles.policyListItem}>
                  Collect the vehicle within the agreed or reasonably notified period.
                </li>
                <li className={styles.policyListItem}>
                  Pay all authorised and applicable charges.
                </li>
              </ul>
            </motion.section>

            {/* 15. Limitation of Responsibility */}
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
                <h2 className={styles.sectionTitleText}>Limitation of Responsibility</h2>
              </div>
              <p className={styles.policyParagraph}>
                The Garage will exercise reasonable care and provide services in accordance with the approved scope. To the extent permitted by applicable law, the Garage shall not be responsible for pre-existing defects, normal wear and tear, latent mechanical/electrical faults, manufacturer defects, damage unrelated to the authorised work, loss of personal belongings, or consequential loss arising outside the Garage&apos;s reasonable control. Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded or limited.
              </p>
            </motion.section>

            {/* 16. Customer Complaints and Grievances */}
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
                <h2 className={styles.sectionTitleText}>Customer Complaints and Grievances</h2>
              </div>
              <p className={styles.policyParagraph}>
                Customers may raise service-related concerns with the Garage management/customer support team. Complaints should include the job card/invoice number, vehicle registration number, date of service and a description of the concern. The Garage will review the available records and communicate the outcome within a reasonable period, subject to the nature and complexity of the complaint.
              </p>
            </motion.section>

            {/* 17. Cancellation and Refund */}
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
                <h2 className={styles.sectionTitleText}>Cancellation and Refund</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Cancellation before commencement of work may be considered subject to any inspection, diagnosis, parts procurement or other charges already incurred.
                </li>
                <li className={styles.policyListItem}>
                  Refunds, where applicable, will be processed according to the actual services performed, parts ordered/used and applicable payment terms.
                </li>
                <li className={styles.policyListItem}>
                  Insurance claim cancellations may additionally be subject to insurer procedures and documentation.
                </li>
              </ul>
            </motion.section>

            {/* 18. Personal Data and Customer Information */}
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
                <h2 className={styles.sectionTitleText}>Personal Data and Customer Information</h2>
              </div>
              <p className={styles.policyParagraph}>
                Customer information collected for service, billing, insurance processing, communication, warranty, security and legal/compliance purposes will be handled in accordance with applicable law and the Garage&apos;s privacy practices. CCTV or other security systems may operate at the premises for safety and security purposes.
              </p>
            </motion.section>

            {/* 19. Force Majeure */}
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
                <h2 className={styles.sectionTitleText}>Force Majeure</h2>
              </div>
              <p className={styles.policyParagraph}>
                The Garage shall not be responsible for delay caused by events beyond reasonable control, including natural disasters, fire, flood, strikes, government restrictions, major supply disruptions, accidents, system outages or other similar events. The Garage will take reasonable steps to minimise the impact of such events.
              </p>
            </motion.section>

            {/* 20. Policy Changes */}
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
                <h2 className={styles.sectionTitleText}>Policy Changes</h2>
              </div>
              <p className={styles.policyParagraph}>
                VahanXpert Services may update these Terms & Conditions from time to time to reflect operational, legal, regulatory or service changes. The version applicable to a particular service order shall ordinarily be the version communicated or made applicable at the time of the order.
              </p>
            </motion.section>

            {/* 21. Governing Law and Jurisdiction */}
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
                <h2 className={styles.sectionTitleText}>Governing Law and Jurisdiction</h2>
              </div>
              <p className={styles.policyParagraph}>
                These Terms & Conditions shall be interpreted in accordance with the applicable laws of India. Any dispute shall be subject to the jurisdiction of the competent courts/authorities having jurisdiction over the relevant location of the Garage, subject to applicable law.
              </p>
            </motion.section>

            {/* 22. Customer Acknowledgement */}
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
                <h2 className={styles.sectionTitleText}>Customer Acknowledgement</h2>
              </div>
              <p className={styles.policyParagraph}>
                By submitting a vehicle to VahanXpert Services and/or approving a job card, estimate, repair order or service request, the Customer acknowledges that they have had an opportunity to understand these Terms & Conditions and agrees to the applicable terms for the services requested.
              </p>
            </motion.section>

            {/* 23. Document Control */}
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
                <h2 className={styles.sectionTitleText}>Document Control</h2>
              </div>
              <p className={styles.policyParagraph}>
                Official governance and version metadata for this Garage Services Policy document:
              </p>

              <div className={styles.tableResponsive}>
                <table className={styles.controlTable}>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.tableKey}>Document Name</td>
                      <td>Garage Services Terms & Conditions Policy</td>
                    </tr>
                    <tr>
                      <td className={styles.tableKey}>Organisation</td>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <td className={styles.tableKey}>Policy Number</td>
                      <td className={styles.tableValueHighlight}>VXS/TC/001</td>
                    </tr>
                    <tr>
                      <td className={styles.tableKey}>Version / Effective Date</td>
                      <td className={styles.tableValueHighlight}>1.0 / 20/09/2026</td>
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
