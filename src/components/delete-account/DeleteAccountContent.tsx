'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  Trash2,
  Lock,
  Clock,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import CustomDropdown, { type DropdownOption } from '@/components/ui/CustomDropdown';
import styles from './DeleteAccount.module.css';

const DELETION_REASONS: DropdownOption[] = [
  { value: 'no-longer-needed', label: 'No longer need car repair or services' },
  { value: 'sold-vehicle', label: 'Sold or replaced my vehicle' },
  { value: 'switched-provider', label: 'Switched to another car service provider' },
  { value: 'privacy-concerns', label: 'Privacy or data security concerns' },
  { value: 'too-many-notifications', label: 'Too many notifications or promotional communications' },
  { value: 'technical-issues', label: 'Experienced technical difficulties or bugs' },
  { value: 'other', label: 'Other reason' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
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
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export default function DeleteAccountContent() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    reason: '',
    feedback: '',
    acknowledged: false,
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.acknowledged) {
      return;
    }
    // Purely static client-side operation — no external API call
    setSubmittedEmail(formData.email);
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Reset form after closing
    setFormData({
      email: '',
      phone: '',
      reason: '',
      feedback: '',
      acknowledged: false,
    });
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowMid} />

      <div className={styles.container}>
        {/* Page Header */}
        <motion.div
          className={styles.pageHeader}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className={styles.badgePill}>
              <span className={styles.badgeIcon}>✦</span> Account Management
            </div>
          </motion.div>

          <motion.h1 className={styles.pageTitle} variants={fadeInUp}>
            Delete <span className={styles.titleHighlight}>Account</span>
          </motion.h1>

          <motion.h2 className={styles.subHeading} variants={fadeInUp}>
            VahanXpert account deletion request
          </motion.h2>

          <motion.p className={styles.pageSubtitle} variants={fadeInUp}>
            Please enter your registered details to request account deletion. Your
            identity will need to be verified before the request can be processed.
          </motion.p>
        </motion.div>

        {/* Card Stage */}
        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.card}>
            {/* Left Accent Sidebar Card */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarGlow} />

              <div className={styles.sidebarTop}>
                
                <h3 className={styles.sidebarHeading}>Account Review & Retention</h3>
                <p className={styles.sidebarSubtitle}>
                  Please review what happens after your request is initiated.
                </p>
              </div>

              <div className={styles.infoPointsList}>
                <div className={styles.infoPointItem}>
                  <div className={styles.infoPointIconWrapper}>
                    <Lock size={18} />
                  </div>
                  <div className={styles.infoPointContent}>
                    <span className={styles.infoPointTitle}>Identity Verification</span>
                    <span className={styles.infoPointDesc}>
                      We ensure only verified account owners can authorize permanent data removal.
                    </span>
                  </div>
                </div>

                <div className={styles.infoPointItem}>
                  <div className={styles.infoPointIconWrapper}>
                    <Clock size={18} />
                  </div>
                  <div className={styles.infoPointContent}>
                    <span className={styles.infoPointTitle}>Applicable Grace Period</span>
                    <span className={styles.infoPointDesc}>
                      A temporary window allows request reversal before permanent deletion.
                    </span>
                  </div>
                </div>

                <div className={styles.infoPointItem}>
                  <div className={styles.infoPointIconWrapper}>
                    <FileCheck size={18} />
                  </div>
                  <div className={styles.infoPointContent}>
                    <span className={styles.infoPointTitle}>Statutory Records</span>
                    <span className={styles.infoPointDesc}>
                      Certain GST tax invoices & legal records are retained per Indian regulations.
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.sidebarFooter}>
                <span className={styles.sidebarSupportNote}>
                  Need help before deleting?
                </span>
                <Link href="/contact" className={styles.sidebarSupportLink}>
                  <span>Contact VahanXpert Support</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Form Area */}
            <div className={styles.formSection}>
              {/* Warning Notice Box */}
              <div className={styles.warningBox}>
                <AlertTriangle size={20} className={styles.warningIcon} />
                <div className={styles.warningText}>
                  <span className={styles.warningHighlight}>Before submitting,</span> save
                  any information you may need. Permanently deleted data may not be recoverable.
                </div>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Registered Email Address */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    <span>Registered Email Address</span>
                    <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={styles.inputField}
                    autoComplete="email"
                  />
                  <span className={styles.helperText}>
                    Use the email address associated with your account.
                  </span>
                </div>

                {/* Registered Mobile Number */}
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Registered Mobile Number (Optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={styles.inputField}
                    autoComplete="tel"
                  />
                </div>

                {/* Reason for Leaving */}
                <div className={styles.formGroup}>
                  <label htmlFor="reason" className={styles.label}>
                    Reason for Leaving (Optional)
                  </label>
                  <CustomDropdown
                    id="reason"
                    name="reason"
                    options={DELETION_REASONS}
                    value={formData.reason}
                    onChange={(val) => setFormData((prev) => ({ ...prev, reason: val }))}
                    placeholder="Select a reason"
                    accentColor="red"
                  />
                </div>

                {/* Additional Feedback */}
                <div className={styles.formGroup}>
                  <div className={styles.labelRow}>
                    <label htmlFor="feedback" className={styles.label}>
                      Additional Feedback (Optional)
                    </label>
                    <span className={styles.charCount}>
                      {formData.feedback.length}/1000
                    </span>
                  </div>
                  <textarea
                    id="feedback"
                    name="feedback"
                    maxLength={1000}
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="Share any feedback you would like us to know."
                    className={styles.textareaField}
                  />
                </div>

                {/* Acknowledgment Checkbox */}
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    name="acknowledged"
                    checked={formData.acknowledged}
                    onChange={handleChange}
                    required
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkboxLabel}>
                    I understand that this request will initiate an account deletion review.
                    My account and eligible associated data may be permanently deleted after
                    verification and the applicable grace period, subject to legal and regulatory
                    retention requirements.
                  </span>
                </label>

                {/* Actions & Help Note */}
                <div className={styles.actionsArea}>
                  <button
                    type="submit"
                    disabled={!formData.acknowledged || !formData.email}
                    className={styles.submitBtn}
                  >
                    <Trash2 size={18} />
                    <span>Continue to Delete Account</span>
                  </button>

                  <p className={styles.supportNote}>
                    If you need help,{' '}
                    <Link href="/contact" className={styles.supportLink}>
                      contact VahanXpert support
                    </Link>{' '}
                    before proceeding.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Pop-up Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className={styles.modalCard}
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-modal-title"
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalGlow} />

              <div className={styles.modalIconWrapper}>
                <CheckCircle2 size={36} />
              </div>

              <h3 id="success-modal-title" className={styles.modalTitle}>
                Request Submitted
              </h3>

              <p className={styles.modalDescription}>
                Your account deletion request for{' '}
                <span className={styles.modalUserDetail}>
                  {submittedEmail || 'your account'}
                </span>{' '}
                has been received. Our team will verify your identity before
                the request is processed.
              </p>

              <button
                type="button"
                onClick={handleCloseModal}
                className={styles.modalOkBtn}
                autoFocus
              >
                Okay
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
