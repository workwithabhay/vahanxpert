'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  Wrench,
  Gauge,
  Disc,
  Wind,
  Paintbrush,
  Sparkles,
  ShieldCheck,
  Truck,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Cpu,
  HeartHandshake,
  Calendar,
  MapPin,
  Smile,
} from 'lucide-react';
import styles from './ServicesPage.module.css';

// 8 Services Data
const SERVICES = [
  {
    title: 'Periodic Maintenance',
    desc: 'Keep your car in top condition with scheduled service.',
    icon: Wrench,
    link: '/contact',
  },
  {
    title: 'Engine Repair',
    desc: 'Expert diagnostics and engine repair solutions.',
    icon: Gauge,
    link: '/contact',
  },
  {
    title: 'Brake & Suspension',
    desc: 'Smooth and safe driving with expert brake service.',
    icon: Disc,
    link: '/contact',
  },
  {
    title: 'AC Service',
    desc: 'Stay cool with complete AC check-up and repair.',
    icon: Wind,
    link: '/contact',
  },
  {
    title: 'Denting & Painting',
    desc: "Restore your car's original look with precision.",
    icon: Paintbrush,
    link: '/contact',
  },
  {
    title: 'Car Detailing',
    desc: 'Give your car a fresh and premium look.',
    icon: Sparkles,
    link: '/contact',
  },
  {
    title: 'Insurance Claim Support',
    desc: 'Hassle-free claim processing with complete assistance.',
    icon: ShieldCheck,
    link: '/insurance-claims',
  },
  {
    title: 'Roadside Assistance',
    desc: "Stuck anywhere? We're just a call away 24/7.",
    icon: Truck,
    link: 'tel:+918930293896',
  },
];

// Why Choose VahanXpert Pillars
const WHY_CHOOSE = [
  {
    title: 'Skilled Professionals',
    desc: 'Trained & Certified Team',
    icon: Wrench,
  },
  {
    title: 'Advanced Equipment',
    desc: 'Latest Diagnostic Tools',
    icon: Cpu,
  },
  {
    title: 'Genuine Spare Parts',
    desc: 'Quality You Can Trust',
    icon: ShieldCheck,
  },
  {
    title: 'Customer First',
    desc: 'Your Satisfaction Matters',
    icon: HeartHandshake,
  },
];

// How It Works Steps
const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Select Service',
    desc: 'Choose the service you need',
    icon: Wrench,
  },
  {
    step: '2',
    title: 'Pick Date & Time',
    desc: 'Schedule as per your convenience',
    icon: Calendar,
  },
  {
    step: '3',
    title: 'Visit Our Workshop',
    desc: 'Drop your car at our service center',
    icon: MapPin,
  },
  {
    step: '4',
    title: 'Drive Happy',
    desc: 'Get back on the road with confidence.',
    icon: Smile,
  },
];

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

export default function ServicesPageContent() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowMid} />

      <div className={styles.container}>
        {/* ====================================================================
            1. HERO SECTION
            ==================================================================== */}
        <section className={styles.heroSection}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Complete Car Care
              </div>
            </motion.div>

            <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
              Complete Car Care <span className={styles.titleHighlight}>Under One Roof</span>
            </motion.h1>

            <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
              From routine maintenance to major repairs, VahanXpert ensures expert service, genuine care and complete peace of mind for your vehicle.
            </motion.p>

           
            <motion.div className={styles.heroCtas} variants={fadeInUp}>
              <Link href="/contact" className={styles.primaryBtn}>
                <span>Book a Service Now</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#services-list" className={styles.secondaryBtn}>
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Stats Ribbon */}
            <motion.div className={styles.statsGrid} variants={fadeInUp}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Happy Customers</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>6+</div>
                <div className={styles.statLabel}>Months of Experience</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Quality Assurance</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>✦</div>
                <div className={styles.statLabel}>Trusted Car Care Experts</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ====================================================================
            2. SERVICES GRID (8 Services - All Centered)
            ==================================================================== */}
        <section className={styles.servicesSection} id="services-list">
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Our Services
              </div>
            </motion.div>

            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              Services <span className={styles.titleHighlight}>We Offer</span>
            </motion.h2>

            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              Professional solutions for every car need
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.servicesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={idx} variants={fadeInUp}>
                  <Link href={service.link} className={styles.serviceCard}>
                    <div className={styles.serviceIconWrapper}>
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                    <span className={styles.serviceCardAction}>
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ====================================================================
            3. WHY CHOOSE VAHANXPERT
            ==================================================================== */}
        <section className={styles.whySection}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className={styles.badgePill}>
                <span className={styles.badgeIcon}>✦</span> Why Choose VahanXpert
              </div>
            </motion.div>

            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              More Than A Garage <span className={styles.titleHighlight}>A Trusted Partner</span>
            </motion.h2>

            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              We combine expertise, advanced technology and genuine care to give your car the best service experience.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.whyGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {WHY_CHOOSE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={idx} className={styles.whyCard} variants={fadeInUp}>
                  <div className={styles.whyIconWrapper}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ====================================================================
            4. HOW IT WORKS (Booking A Service Is Easy)
            ==================================================================== */}
        <section className={styles.howSection}>
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
              Booking A Service <span className={styles.titleHighlight}>Is Easy</span>
            </motion.h2>

            <motion.p className={styles.sectionSubtitle} variants={fadeInUp}>
              Get your car serviced in just a few simple steps
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
                <div className={styles.stepBadgeNum}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
}
