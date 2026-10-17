'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Wrench,
  HeartHandshake,
  Users,
} from 'lucide-react';
import styles from './AboutPage.module.css';

// Stats Data
const STATS = [
  { number: '500+', label: 'Happy Customers', isGold: false },
  { number: '6+', label: 'Months Experience', isGold: false },
  { number: '50+', label: 'Services', isGold: false },
  { number: '100%', label: 'Quality Focus', isGold: false },
];

// Expertise Badges
const EXPERTISE_BADGES = [
  'Professional Technicians',
  'Quality-Focused Work',
  'Modern Equipment',
  'Customer Focused',
  'Clear Process',
  'Complete Support',
  'Trusted Care',
  'Built around your vehicle',
];

// Who We Are Bullet Points
const WHO_WE_ARE_POINTS = [
  'Professional service approach',
  'Transparent service process',
  'Quality-focused workmanship',
  'Complete car care solutions',
  'Customer-focused support',
  'Convenient service experience',
];

// What We Do Cards
const SERVICES_DATA = [
  {
    step: '01',
    title: 'Car Service & Maintenance',
    desc: 'Regular servicing, inspections and maintenance support to help keep your vehicle ready for everyday driving.',
    link: '/services',
  },
  {
    step: '02',
    title: 'Accident Repair',
    desc: 'Professional assistance for accident-damaged vehicles with a structured repair and restoration process.',
    link: '/services',
  },
  {
    step: '03',
    title: 'Insurance Claims',
    desc: 'Support throughout the insurance claim process so customers can navigate documentation and repair coordination more easily.',
    link: '/services',
  },
  {
    step: '04',
    title: 'Car Detailing',
    desc: 'Detailing and appearance-focused care to help your vehicle look clean, maintained and presentable.',
    link: '/services',
  },
];

// How It Works Steps
const HOW_IT_WORKS_STEPS = [
  {
    num: '01',
    title: 'Tell Us About Your Car',
    desc: 'Share your vehicle details and the service or repair support you need.',
  },
  {
    num: '02',
    title: 'Get Service Guidance',
    desc: 'Our team helps you understand the relevant service requirements and next steps.',
  },
  {
    num: '03',
    title: 'Professional Care',
    desc: 'Your vehicle moves through the required service, repair or assistance process.',
  },
  {
    num: '04',
    title: 'Drive With Confidence',
    desc: 'Complete the process with clear communication and customer-focused support.',
  },
];

// Why VahanXpert Pillars
const WHY_US_PILLARS = [
  {
    title: 'Genuine Care',
    desc: 'Quality-focused service designed around the long-term health, safety and performance of your vehicle.',
    icon: HeartHandshake,
  },
  {
    title: 'Expert Service',
    desc: 'Professional automotive support for routine maintenance, repairs, inspections and other car care needs.',
    icon: Wrench,
  },
  {
    title: 'Transparent Process',
    desc: 'Clear communication, understandable service information and a straightforward customer experience.',
    icon: ShieldCheck,
  },
  {
    title: 'Customer First',
    desc: 'Every interaction is built around convenience, trust and making vehicle care easier for customers.',
    icon: Users,
  },
];

// Animation variant helper with explicit Variants type
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function AboutContent() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowMid} />

      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> About VahanXpert
              </div>
            </motion.div>

            <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
              More Than A Garage{' '}
              <span className={styles.titleHighlight}>A Trusted Partner</span>
            </motion.h1>

            <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
              VahanXpert is built around one simple idea — making car care easier, more transparent and more reliable. From regular maintenance and repairs to insurance assistance and detailing, we bring professional automotive support together under one roof.
            </motion.p>

            <motion.div className={styles.heroCtas} variants={fadeInUp}>
              <Link href="/services" className={styles.primaryBtn}>
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+919876543210" className={styles.secondaryBtn}>
                Talk To Our Team
              </a>
            </motion.div>

           
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          2. STATS SECTION (Guidetax visual style)
          ==================================================================== */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {STATS.map((stat, idx) => (
              <motion.div key={idx} className={styles.statCard} variants={fadeInUp}>
                <div
                  className={`${styles.statNumber} ${
                    stat.isGold ? styles.statNumberGold : ''
                  }`}
                >
                  {stat.number}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          3. OVERVIEW / YOUR CAR. OUR EXPERTISE.
          ==================================================================== */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.overviewContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
               <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Overview 
              </div>
            </motion.div>
            </motion.div>

            <motion.h2 className={styles.overviewTitle} variants={fadeInUp}>
              Your Car. <span className={styles.titleHighlight}>Our Expertise.</span>
            </motion.h2>

            <motion.p className={styles.overviewDesc} variants={fadeInUp}>
              A complete approach to everyday vehicle care, combining professional service, practical support and a customer-first experience.
            </motion.p>

            <motion.div className={styles.overviewPillsGrid} variants={fadeInUp}>
              {EXPERTISE_BADGES.map((badge, idx) => (
                <div key={idx} className={styles.overviewPill}>
                  <CheckCircle2 size={16} className={styles.pillCheckIcon} />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          4. WHO WE ARE (Centered)
          ==================================================================== */}
      <section className={styles.whoSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.whoContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Who We Are
              </div>
            </motion.div>

            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              Car Care Made <span className={styles.titleHighlight}>Simple & Reliable</span>
            </motion.h2>

            <motion.p className={styles.whoParagraph} variants={fadeInUp}>
              At VahanXpert, we understand that your car is more than just a vehicle. It is part of your daily routine, your work and your everyday life. That is why our approach combines automotive expertise with a customer experience built around clarity and trust.
            </motion.p>

            <motion.p className={styles.whoParagraph} variants={fadeInUp}>
              From scheduled maintenance and accident repairs to detailing and insurance claim assistance, our goal is to make the complete process more convenient and dependable.
            </motion.p>

            <motion.div className={styles.whoList} variants={fadeInUp}>
              {WHO_WE_ARE_POINTS.map((pt, idx) => (
                <div key={idx} className={styles.whoListItem}>
                  <CheckCircle2 size={16} className={styles.whoListIcon} />
                  <span>{pt}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/services" className={styles.primaryBtn}>
                Discover Our Services
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          5. WHAT WE DO
          ==================================================================== */}
      <section className={styles.whatSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> What We Do
              </div>
            </motion.div>
            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              Complete Car Care <span className={styles.titleHighlight}>Under One Roof</span>
            </motion.h2>
            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              From regular maintenance to repairs and support, VahanXpert brings different parts of the vehicle care journey together.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.servicesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {SERVICES_DATA.map((srv, idx) => (
              <motion.div key={idx} className={styles.serviceCard} variants={fadeInUp}>
                <div>
                  <span className={styles.serviceStepNum}>{srv.step}</span>
                  <h3 className={styles.serviceTitle}>{srv.title}</h3>
                  <p className={styles.serviceDesc}>{srv.desc}</p>
                </div>
                <Link href={srv.link} className={styles.cardLink}>
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          6. WHAT DRIVES US (Mission & Vision)
          ==================================================================== */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> What Drives Us
              </div>
            </motion.div>
            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              Our <span className={styles.titleHighlight}>Mission & Vision</span>
            </motion.h2>
            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              The principles that shape the way we approach automotive service and the experience we want customers to have.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.missionGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {/* Mission Card */}
            <motion.div className={styles.missionCard} variants={fadeInUp}>
              <div className={styles.missionTag}>Our Purpose</div>
              <h3 className={styles.missionHeading}>Our Mission</h3>
              <p className={styles.missionText}>
                To provide dependable, professional and transparent car care services that help customers maintain their vehicles with confidence and peace of mind.
              </p>
              <div className={styles.missionPointsList}>
                <div className={styles.missionPointItem}>
                  <CheckCircle2 size={16} className={styles.pillCheckIcon} />
                  <span>Professional service</span>
                </div>
                <div className={styles.missionPointItem}>
                  <CheckCircle2 size={16} className={styles.pillCheckIcon} />
                  <span>Clear communication</span>
                </div>
                <div className={styles.missionPointItem}>
                  <CheckCircle2 size={16} className={styles.pillCheckIcon} />
                  <span>Customer-focused experience</span>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div className={styles.missionCard} variants={fadeInUp}>
              <div className={styles.missionTag}>Looking Ahead</div>
              <h3 className={styles.missionHeading}>Our Vision</h3>
              <p className={styles.missionText}>
                To build a trusted automotive service ecosystem where quality, technology and customer experience come together to redefine everyday car care.
              </p>
              <div className={styles.missionPointsList}>
                <div className={styles.missionPointItem}>
                  <CheckCircle2 size={16} className={styles.pillCheckIcon} />
                  <span>Technology-enabled service</span>
                </div>
                <div className={styles.missionPointItem}>
                  <CheckCircle2 size={16} className={styles.pillCheckIcon} />
                  <span>Quality-driven approach</span>
                </div>
                <div className={styles.missionPointItem}>
                  <CheckCircle2 size={16} className={styles.pillCheckIcon} />
                  <span>Better customer experience</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          7. HOW IT WORKS
          ==================================================================== */}
      <section className={styles.howSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> How It Works
              </div>
            </motion.div>
            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              Simple Process. <span className={styles.titleHighlight}>Better Experience.</span>
            </motion.h2>
            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              We keep the service journey simple, structured and easy to understand from the first conversation to completion.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.stepsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <motion.div key={idx} className={styles.stepCard} variants={fadeInUp}>
                <div className={styles.stepNumber}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          8. WHY VAHANXPERT
          ==================================================================== */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Why VahanXpert
              </div>
            </motion.div>
            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              Built Around <span className={styles.titleHighlight}>Trust</span>
            </motion.h2>
            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              Every part of our service approach is designed around quality, transparency, reliability and customer convenience.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.pillarsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {WHY_US_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={idx} className={styles.pillarCard} variants={fadeInUp}>
                  <div className={styles.pillarIconWrapper}>
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


    </div>
  );
}
