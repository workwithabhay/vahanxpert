'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import styles from './CustomDropdown.module.css';

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CustomDropdownProps {
  id?: string;
  name?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  accentColor?: 'amber' | 'red';
  className?: string;
}

export default function CustomDropdown({
  id,
  name,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  required = false,
  accentColor = 'amber',
  className = '',
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Keyboard support: Escape closes dropdown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      }
    }
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const accentClass = accentColor === 'red' ? styles.accentRed : styles.accentAmber;

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdownWrapper} ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Hidden input for native form validity checking if needed */}
      {name && (
        <input
          type="text"
          name={name}
          value={value}
          required={required}
          readOnly
          tabIndex={-1}
          className={styles.hiddenSelect}
          aria-hidden="true"
        />
      )}

      {/* Trigger Button */}
      <button
        ref={buttonRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${styles.triggerButton} ${isOpen ? `${styles.isOpen} ${accentClass}` : ''}`}
      >
        <div className={styles.triggerContent}>
          {selectedOption ? (
            <>
              {selectedOption.icon}
              <span className={styles.selectedText}>{selectedOption.label}</span>
            </>
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </div>

        <ChevronDown
          size={18}
          className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}
        />
      </button>

      {/* Floating Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="listbox"
            tabIndex={-1}
            className={styles.menuList}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  className={`${styles.optionItem} ${
                    isSelected ? `${styles.isSelected} ${accentClass}` : ''
                  }`}
                >
                  <span className={styles.optionLabel}>
                    {option.icon}
                    <span>{option.label}</span>
                  </span>

                  {isSelected && (
                    accentColor === 'red' ? (
                      <Check size={16} className={styles.checkIconRed} />
                    ) : (
                      <Check size={16} className={styles.checkIconAmber} />
                    )
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
