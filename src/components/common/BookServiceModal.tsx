'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';
import CustomDropdown, { type DropdownOption } from '@/components/ui/CustomDropdown';
import styles from './BookServiceModal.module.css';

const SERVICE_OPTIONS: DropdownOption[] = [
  { value: 'Periodic Car Maintenance & Service', label: 'Periodic Car Maintenance & Service' },
  { value: 'Accident Repair & Bodywork', label: 'Accident Repair & Bodywork' },
  { value: 'Cashless Insurance Claim', label: 'Cashless Insurance Claim' },
  { value: 'Car AC Service & Gas Refill', label: 'Car AC Service & Gas Refill' },
  { value: 'Denting & Painting', label: 'Denting & Painting' },
  { value: 'Wheel Alignment & Balancing', label: 'Wheel Alignment & Balancing' },
  { value: 'Diagnostics & Electrical Scan', label: 'Diagnostics & Electrical Scan' },
  { value: 'Car Wash & Full Detailing', label: 'Car Wash & Full Detailing' },
  { value: 'Other', label: 'Other' },
];

interface BookServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookServiceModal({ isOpen, onClose }: BookServiceModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    service: '',
    message: '',
  });

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const targetPhone = '918930293896';
    const lines = [
      '*New Service Booking Request - VahanXpert*',
      '',
      `👤 *Full Name:* ${formData.fullName.trim()}`,
      `📞 *Phone Number:* ${formData.phoneNumber.trim()}`,
      formData.emailAddress.trim() ? `✉️ *Email Address:* ${formData.emailAddress.trim()}` : null,
      `🛠️ *Service:* ${formData.service || 'General Service / Other'}`,
      formData.message.trim() ? `💬 *Message:* ${formData.message.trim()}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${text}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Close and reset
    onClose();
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      service: '',
      message: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalWrapper}
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-service-modal-title"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.ambientGlow} />

            {/* Close Button */}
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className={styles.header}>
              
              <h2 id="book-service-modal-title" className={styles.title}>
                Book a <span className={styles.titleHighlight}>Service</span>
              </h2>
              <p className={styles.subtitle}>
                Fill in your details and connect directly with our workshop team.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Full Name & Phone Number */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="modal-fullName" className={styles.label}>
                    Full Name<span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="modal-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={styles.inputField}
                    autoComplete="name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-phoneNumber" className={styles.label}>
                    Phone Number<span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="modal-phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className={styles.inputField}
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className={styles.formGroup}>
                <label htmlFor="modal-emailAddress" className={styles.label}>
                  Email Address
                </label>
                <input
                  id="modal-emailAddress"
                  name="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className={styles.inputField}
                  autoComplete="email"
                />
              </div>

              {/* Service Dropdown */}
              <div className={styles.formGroup}>
                <label htmlFor="modal-service" className={styles.label}>
                  Service<span className={styles.requiredStar}>*</span>
                </label>
                <CustomDropdown
                  id="modal-service"
                  options={SERVICE_OPTIONS}
                  value={formData.service}
                  onChange={(val) => setFormData((prev) => ({ ...prev, service: val }))}
                  placeholder="Select service"
                  accentColor="amber"
                  required
                />
              </div>

              {/* Message */}
              <div className={styles.formGroup}>
                <label htmlFor="modal-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className={styles.textareaField}
                />
              </div>

              {/* CTA Button */}
              <button type="submit" className={styles.submitBtn}>
                
                <span>Book Now</span>
              </button>

             
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
