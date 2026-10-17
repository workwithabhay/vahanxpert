'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import styles from './ContactPage.module.css';

const MAP_URL =
  'https://maps.google.com/?cid=7884883098814316887&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF';

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=cid:7884883098814316887&t=&z=15&ie=UTF8&iwloc=&output=embed';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        service: '',
        message: '',
      });
    }, 700);
  };

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
              <span className={styles.badgeIcon}>✦</span> Send An Enquiry
            </div>
          </motion.div>

          <motion.h1 className={styles.pageTitle} variants={fadeInUp}>
            Contact <span className={styles.titleHighlight}>Our Team</span>
          </motion.h1>

          <motion.p className={styles.pageSubtitle} variants={fadeInUp}>
            Fill in your details and we&apos;ll get back to you.
          </motion.p>
        </motion.div>

        {/* Elevated Contact Card (Matching Screenshot Structure with Theme) */}
        <motion.div
          className={styles.contactStage}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.contactCard}>
            {/* Left Accent Sidebar Card */}
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarGlow} />

              <div className={styles.sidebarTop}>
                <h3 className={styles.sidebarHeading}>Contact Us</h3>
                <p className={styles.sidebarSubtitle}>
                  Have a question or need emergency support? Reach out directly.
                </p>
              </div>

              <div className={styles.contactInfoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.infoTextCol}>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>
                      Shop No. 01, Khata, near Shubham Hospital, Nohar, Rajasthan 335523
                    </span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.infoTextCol}>
                    <span className={styles.infoLabel}>Email Us</span>
                    <a href="mailto:support@vahanxpert.in" className={styles.infoValue}>
                      support@vahanxpert.in
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.infoTextCol}>
                    <span className={styles.infoLabel}>Call Support</span>
                    <a href="tel:+918930293896" className={styles.infoValue}>
                      +91 8930293896
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Clock size={20} />
                  </div>
                  <div className={styles.infoTextCol}>
                    <span className={styles.infoLabel}>Working Hours</span>
                    <span className={styles.infoValue}>
                      All day 24x7
                    </span>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Right Form Area */}
            <div className={styles.formSection}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send An Enquiry</h2>
                <p className={styles.formSubtitle}>
                  Fill in your details and we&apos;ll get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 size={22} />
                  <span>
                    Thank you! Your enquiry has been received. Our team will contact you shortly.
                  </span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.formGrid}>
                  <div className={styles.formRowTwo}>
                    <div className={styles.formGroup}>
                      <label htmlFor="fullName" className={styles.formLabel}>
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phoneNumber" className={styles.formLabel}>
                        Phone Number
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className={styles.inputField}
                      />
                    </div>
                  </div>

                  <div className={styles.formRowTwo}>
                    <div className={styles.formGroup}>
                      <label htmlFor="emailAddress" className={styles.formLabel}>
                        Email Address
                      </label>
                      <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        required
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="service" className={styles.formLabel}>
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={styles.selectField}
                      >
                        <option value="" disabled>
                          Select service
                        </option>
                        <option value="Car Service & Maintenance">
                          Car Service & Maintenance
                        </option>
                        <option value="Accident Repair">Accident Repair</option>
                        <option value="Insurance Claims Assistance">
                          Insurance Claims Assistance
                        </option>
                        <option value="Car Detailing">Car Detailing</option>
                        <option value="Diagnostics & Inspection">
                          Diagnostics & Inspection
                        </option>
                        <option value="Other Assistance">Other Assistance</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className={styles.textareaField}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.submitBtn}
                  >
                    <span>{loading ? 'Sending...' : 'Send Enquiry'}</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Google Map Section (Just Below Form with Center CTA - Get Direction) */}
        <motion.div
          className={styles.mapSection}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.mapWrapper}>
            <iframe
              title="VahanXpert Google Maps Location"
              src={MAP_EMBED_URL}
              className={styles.mapIframe}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Middle CTA - Get Direction on which open google maps */}
            <div className={styles.mapOverlayCta}>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.getDirectionBtn}
                aria-label="Get Direction to VahanXpert on Google Maps"
              >
                <Navigation size={18} className={styles.directionIcon} />
                <span>Get Direction</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
