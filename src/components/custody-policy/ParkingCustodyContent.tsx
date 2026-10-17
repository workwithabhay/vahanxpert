'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  ShieldCheck,
  Calendar,
  Layers,
  Phone,
  Mail,
  MapPin,
  Car,
  Key,
  Lock,
  Camera,
  AlertTriangle,
  FileCheck,
} from 'lucide-react';
import styles from './ParkingCustody.module.css';

const TOC_SECTIONS = [
  { id: 'sec-1', label: '1. Purpose' },
  { id: 'sec-2', label: '2. Scope' },
  { id: 'sec-3', label: '3. Vehicle Intake & Custody Record' },
  { id: 'sec-4', label: '4. Parking & Designated Areas' },
  { id: 'sec-5', label: '5. Key Control' },
  { id: 'sec-6', label: '6. Movement Within Premises' },
  { id: 'sec-7', label: '7. Movement Outside Premises' },
  { id: 'sec-8', label: '8. Security & Access Control' },
  { id: 'sec-9', label: '9. Customer Belongings' },
  { id: 'sec-10', label: '10. Weather, Fire & Environmental Risks' },
  { id: 'sec-11', label: '11. Vehicle Damage During Custody' },
  { id: 'sec-12', label: '12. Theft, Loss or Security Incident' },
  { id: 'sec-13', label: '13. Vehicle Condition & Personal Property' },
  { id: 'sec-14', label: '14. Completed Vehicle Parking' },
  { id: 'sec-15', label: '15. Vehicle Release' },
  { id: 'sec-16', label: '16. Uncollected Vehicles' },
  { id: 'sec-17', label: '17. Emergency Access & Evacuation' },
  { id: 'sec-18', label: '18. Records & Monitoring' },
  { id: 'sec-19', label: '19. Customer Responsibilities' },
  { id: 'sec-20', label: '20. Privacy & Confidentiality' },
  { id: 'sec-21', label: '21. Liability & Exceptions' },
  { id: 'sec-22', label: '22. Dispute & Escalation' },
  { id: 'sec-23', label: '23. Policy Review' },
  { id: 'sec-24', label: '24. Business Contact' },
  { id: 'sec-25', label: '25. Document Control' },
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

export default function ParkingCustodyContent() {
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
              <span className={styles.badgeIcon}>✦</span> Workshop Security Policy
            </div>
          </motion.div>

          <motion.h1 className={styles.pageTitle} variants={fadeInUp}>
            Vehicle Parking, Custody &{' '}
            <span className={styles.titleHighlight}>Security Policy</span>
          </motion.h1>

          <motion.div className={styles.metaBadgesRow} variants={fadeInUp}>
            <span className={`${styles.metaBadge} ${styles.metaBadgeHighlight}`}>
              Policy No.: VXS/PCS/011
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
            aria-label="Jump to custody policy section"
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
              <h4 className={styles.sidebarHelpTitle}>Custody & Key Queries?</h4>
              <p className={styles.sidebarHelpDesc}>
                Contact our workshop supervisor or security desk directly for vehicle assistance.
              </p>
              <Link href="/contact" className={styles.sidebarHelpBtn}>
                <Phone size={13} />
                <span>Contact Security Desk</span>
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
                This Policy establishes procedures for the safe receipt, parking, custody, movement, monitoring and release of customer vehicles kept at VahanXpert Services for inspection, servicing, repair, insurance work, diagnosis or other authorised services. It is intended to reduce avoidable risk of loss, damage, unauthorised use and misidentification of vehicles.
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
                This Policy applies to customer vehicles, keys, documents and relevant accessories that are left at or brought under the custody of VahanXpert Services during the service or repair process.
              </p>
            </motion.section>

            {/* 3. Vehicle Intake and Custody Record */}
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
                <h2 className={styles.sectionTitleText}>Vehicle Intake and Custody Record</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  A job card or other service record should be created for vehicles accepted into workshop custody.
                </li>
                <li className={styles.policyListItem}>
                  Where reasonably practicable, the intake record should note the vehicle registration number, make/model, date and time received, odometer reading, fuel level, key count and visible condition.
                </li>
                <li className={styles.policyListItem}>
                  Photographs or videos may be taken to document pre-existing condition and support service, insurance and dispute-resolution records.
                </li>
                <li className={styles.policyListItem}>
                  Material valuables or personal belongings noticed in the vehicle may be recorded where necessary, but customers are advised to remove valuables before leaving the vehicle.
                </li>
              </ul>
            </motion.section>

            {/* 4. Parking and Designated Areas */}
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
                <h2 className={styles.sectionTitleText}>Parking and Designated Areas</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Vehicles should be parked in areas reasonably designated for customer vehicles, service vehicles, completed vehicles, accident-repair vehicles or other operational categories.
                </li>
                <li className={styles.policyListItem}>
                  Vehicles should not be parked in a manner that unnecessarily blocks emergency access, workshop exits, public pathways or other safety routes.
                </li>
                <li className={styles.policyListItem}>
                  Keys should be handled according to the Garage&apos;s internal key-control process.
                </li>
              </ul>
            </motion.section>

            {/* 5. Key Control */}
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
                <h2 className={styles.sectionTitleText}>Key Control</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Keys received from a Customer should be kept in a controlled location or with authorised personnel when not required for service work.
                </li>
                <li className={styles.policyListItem}>
                  Key identification should be linked to the relevant job card or vehicle where practicable.
                </li>
                <li className={styles.policyListItem}>
                  Unauthorised use, copying or removal of customer vehicle keys is prohibited.
                </li>
                <li className={styles.policyListItem}>
                  Lost or misplaced keys should be reported to authorised management promptly and investigated according to the circumstances.
                </li>
              </ul>
            </motion.section>

            {/* 6. Vehicle Movement Within Premises */}
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
                <h2 className={styles.sectionTitleText}>Vehicle Movement Within Premises</h2>
              </div>
              <p className={styles.policyParagraph}>
                Vehicles should be moved within the premises only by authorised personnel and only for legitimate workshop purposes such as parking, inspection, servicing, washing, repair, loading/unloading or delivery preparation.
              </p>
            </motion.section>

            {/* 7. Vehicle Movement Outside Premises */}
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
                <h2 className={styles.sectionTitleText}>Vehicle Movement Outside Premises</h2>
              </div>
              <p className={styles.policyParagraph}>
                Any road test, pickup/drop or other external vehicle movement must comply with the Vehicle Test Drive &amp; Road Test Policy and should be limited to an authorised service purpose.
              </p>
            </motion.section>

            {/* 8. Security and Access Control */}
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
                <h2 className={styles.sectionTitleText}>Security and Access Control</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Access to parked customer vehicles should be reasonably restricted to employees, technicians, contractors and other persons who require access for legitimate workshop duties.
                </li>
                <li className={styles.policyListItem}>
                  Unauthorised persons should not be permitted to enter or use customer vehicles.
                </li>
                <li className={styles.policyListItem}>
                  The Garage may use locks, CCTV, lighting, access controls or other reasonable security measures where available and appropriate.
                </li>
                <li className={styles.policyListItem}>
                  Security measures may vary depending on the physical layout, operating hours and facilities of the workshop.
                </li>
              </ul>
            </motion.section>

            {/* 9. Customer Belongings */}
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
                <h2 className={styles.sectionTitleText}>Customer Belongings</h2>
              </div>
              <p className={styles.policyParagraph}>
                Customers are advised not to leave cash, jewellery, electronics, documents or other valuables inside vehicles. Where a valuable item is specifically handed over to the Garage for a service purpose, its receipt may be recorded separately where practicable.
              </p>
            </motion.section>

            {/* 10. Weather, Fire and Environmental Risks */}
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
                <h2 className={styles.sectionTitleText}>Weather, Fire and Environmental Risks</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  The Garage should take reasonable operational precautions against foreseeable risks such as fire, water ingress, extreme weather, unsafe parking and other environmental hazards.
                </li>
                <li className={styles.policyListItem}>
                  Vehicles should not be parked in areas presenting a known avoidable safety hazard where a reasonably safer alternative is available.
                </li>
                <li className={styles.policyListItem}>
                  Fire safety equipment and emergency access should be maintained according to applicable requirements.
                </li>
              </ul>
            </motion.section>

            {/* 11. Vehicle Damage During Custody */}
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
                <h2 className={styles.sectionTitleText}>Vehicle Damage During Custody</h2>
              </div>
              <p className={styles.policyParagraph}>
                If a vehicle appears to have suffered new damage while under workshop custody, the matter should be reported to authorised management and reviewed using the intake condition record, photographs, movement records and available staff information. The cause and responsibility should not be assumed without reasonable review.
              </p>
            </motion.section>

            {/* 12. Theft, Loss or Security Incident */}
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
                <h2 className={styles.sectionTitleText}>Theft, Loss or Security Incident</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Any suspected theft, attempted theft, missing component, lost key or other material security incident should be reported promptly to authorised management.
                </li>
                <li className={styles.policyListItem}>
                  Relevant records, photographs, CCTV footage where available and other information should be preserved where reasonably practicable.
                </li>
                <li className={styles.policyListItem}>
                  Where an incident may require police, insurer or other external reporting, the Garage may take appropriate action in accordance with applicable law and circumstances.
                </li>
              </ul>
            </motion.section>

            {/* 13. Vehicle Condition and Personal Property */}
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
                <h2 className={styles.sectionTitleText}>Vehicle Condition and Personal Property</h2>
              </div>
              <p className={styles.policyParagraph}>
                The Garage&apos;s custody relates primarily to the vehicle for the authorised service purpose. Personal belongings not recorded as specifically handed over remain the Customer&apos;s responsibility. Any material exception should be reviewed based on the actual circumstances and available records.
              </p>
            </motion.section>

            {/* 14. Completed Vehicle Parking */}
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
                <h2 className={styles.sectionTitleText}>Completed Vehicle Parking</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Completed vehicles should, where practicable, be moved to an appropriate ready-for-delivery area.
                </li>
                <li className={styles.policyListItem}>
                  Customers should be informed when the vehicle is ready for collection.
                </li>
                <li className={styles.policyListItem}>
                  Where vehicles remain uncollected, reminders may be issued and applicable storage/parking arrangements may apply according to the Garage&apos;s terms.
                </li>
              </ul>
            </motion.section>

            {/* 15. Vehicle Release */}
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
                <h2 className={styles.sectionTitleText}>Vehicle Release</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Vehicles should ordinarily be released to the Customer or an authorised representative after completion of the applicable delivery and payment process.
                </li>
                <li className={styles.policyListItem}>
                  Reasonable identification or authorisation may be requested where appropriate.
                </li>
                <li className={styles.policyListItem}>
                  The release should be recorded through a delivery acknowledgement, signature, OTP, digital confirmation or another verifiable method where practicable.
                </li>
              </ul>
            </motion.section>

            {/* 16. Uncollected Vehicles */}
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
                <h2 className={styles.sectionTitleText}>Uncollected Vehicles</h2>
              </div>
              <p className={styles.policyParagraph}>
                Where a completed vehicle is not collected within a reasonable period, VahanXpert Services may contact the Customer through available communication channels. Any applicable storage or parking charges should be communicated in accordance with the Garage&apos;s terms and applicable law.
              </p>
            </motion.section>

            {/* 17. Emergency Access and Evacuation */}
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
                <h2 className={styles.sectionTitleText}>Emergency Access and Evacuation</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  Workshop staff should keep emergency exits, fire access routes and other designated safety paths reasonably clear.
                </li>
                <li className={styles.policyListItem}>
                  In an emergency, vehicle movement may be undertaken as necessary to protect people and property, subject to safety considerations.
                </li>
                <li className={styles.policyListItem}>
                  Emergency incidents should be documented and escalated according to the circumstances.
                </li>
              </ul>
            </motion.section>

            {/* 18. Records and Monitoring */}
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
                <h2 className={styles.sectionTitleText}>Records and Monitoring</h2>
              </div>
              <ul className={styles.policyList}>
                <li className={styles.policyListItem}>
                  VahanXpert Services may maintain job cards, intake photographs, key records, vehicle movement records, delivery acknowledgements and relevant incident records.
                </li>
                <li className={styles.policyListItem}>
                  CCTV or other security records, where available, may be retained and accessed for legitimate security, service, dispute-resolution or legal/compliance purposes.
                </li>
                <li className={styles.policyListItem}>
                  Records should be linked to the relevant vehicle/job card where practicable.
                </li>
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
                <li className={styles.policyListItem}>
                  Remove valuables and personal belongings before leaving the vehicle.
                </li>
                <li className={styles.policyListItem}>
                  Provide accurate vehicle and contact details.
                </li>
                <li className={styles.policyListItem}>
                  Disclose special vehicle conditions or security requirements known to the Customer.
                </li>
                <li className={styles.policyListItem}>
                  Collect the vehicle and keys within the communicated period after completion.
                </li>
                <li className={styles.policyListItem}>
                  Inform the Garage promptly if any discrepancy is noticed at handover.
                </li>
              </ul>
            </motion.section>

            {/* 20. Privacy and Confidentiality */}
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
                <h2 className={styles.sectionTitleText}>Privacy and Confidentiality</h2>
              </div>
              <p className={styles.policyParagraph}>
                Vehicle records, photographs, CCTV records, contact details and security information shall be handled for legitimate workshop, safety, security, insurance, dispute-resolution and legal/compliance purposes. Access should be limited to authorised personnel, subject to applicable law and VahanXpert Services&apos; privacy practices.
              </p>
            </motion.section>

            {/* 21. Liability and Exceptions */}
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
                <h2 className={styles.sectionTitleText}>Liability and Exceptions</h2>
              </div>
              <p className={styles.policyParagraph}>
                VahanXpert Services shall take reasonable operational precautions in relation to vehicles under its custody. Any liability, exclusion or remedy shall be determined according to the applicable service terms, insurance arrangements, documented circumstances and applicable law. Nothing in this Policy is intended to exclude a statutory right that cannot lawfully be excluded.
              </p>
            </motion.section>

            {/* 22. Dispute and Escalation */}
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
                <h2 className={styles.sectionTitleText}>Dispute and Escalation</h2>
              </div>
              <p className={styles.policyParagraph}>
                Custody, parking, key, damage or security disputes should be reviewed by authorised management using the available job card, photographs, CCTV or movement records and other relevant information. Where appropriate, the matter may be referred to an insurer, police authority or other competent third party.
              </p>
            </motion.section>

            {/* 23. Policy Review */}
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
                <h2 className={styles.sectionTitleText}>Policy Review</h2>
              </div>
              <p className={styles.policyParagraph}>
                This Policy shall be reviewed periodically and may be updated based on workshop operations, security arrangements, customer feedback, insurance requirements or applicable legal requirements.
              </p>
            </motion.section>

            {/* 24. Business Contact */}
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
                <h2 className={styles.sectionTitleText}>Business Contact</h2>
              </div>
              <p className={styles.policyParagraph}>
                For queries, custody confirmations or key security assistance regarding VahanXpert Services:
              </p>

              <div className={styles.contactDetailsCard}>
                <div className={styles.contactItemRow}>
                  <MapPin size={18} className={styles.contactIcon} />
                  <div>
                    <strong>VahanXpert Services</strong>
                    <br />
                    D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010
                  </div>
                </div>

                <div className={styles.contactItemRow}>
                  <Mail size={18} className={styles.contactIcon} />
                  <div>
                    Email:{' '}
                    <a href="mailto:info.vahanxpert@gmail.com" className={styles.contactLink}>
                      info.vahanxpert@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItemRow}>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    Mobile:{' '}
                    <a href="tel:+918930293896" className={styles.contactLink}>
                      +91 8930293896
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 25. Document Control */}
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
                <h2 className={styles.sectionTitleText}>Document Control</h2>
              </div>
              <p className={styles.policyParagraph}>
                Official governance and version metadata for this Vehicle Parking, Custody &amp; Security Policy:
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
                      <td>Vehicle Parking, Custody &amp; Security Policy</td>
                    </tr>
                    <tr>
                      <td className={styles.tableKey}>Organisation</td>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <td className={styles.tableKey}>Policy Number</td>
                      <td className={styles.tableValueHighlight}>VXS/PCS/011</td>
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
