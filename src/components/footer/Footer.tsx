'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, Call02Icon, Mail01Icon } from '@hugeicons/core-free-icons';
import { footerColumns, socialLinks } from './footerData';
import styles from './Footer.module.css';

/**
 * Clean SVG icons for social channels matching the rounded badges from Zomato's footer
 */
function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'LinkedIn':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
        </svg>
      );
    case 'Facebook':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
        </svg>
      );
    case 'X':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Apple Store & Google Play SVG Badges
 */
function AppleLogo() {
  return (
    <svg width="20" height="24" viewBox="0 0 170 170" fill="currentColor">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.71-7.98-12.03-14.69-5.74-9.04-10.28-19.34-13.6-30.89-3.32-11.55-4.99-22.37-4.99-32.47 0-14.19 3.65-26.06 10.96-35.6 7.31-9.54 16.59-14.43 27.84-14.67 4.93 0 10.37 1.23 16.32 3.68 5.95 2.45 9.87 3.73 11.77 3.84 1.57-.11 5.67-1.45 12.31-4.02 6.64-2.57 12.19-3.75 16.65-3.56 12.63.66 22.84 5.38 30.64 14.16-11.01 6.68-16.39 15.84-16.14 27.47.26 9.4 3.97 17.26 11.13 23.59 7.16 6.33 15.7 10 25.62 11.02-2.14 6.74-4.8 13.65-7.99 20.73zM119.22 31.84c0-7.05 2.6-13.78 7.8-20.19 5.2-6.41 11.83-10.59 19.89-12.54.51 1.34.77 2.76.77 4.25 0 7.05-2.69 13.97-8.07 20.76-5.38 6.79-12.18 10.8-20.39 12.03z" />
    </svg>
  );
}

function GooglePlayLogo() {
  return (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.793 12 3.61 22.186c-.378-.445-.61-.994-.61-1.603V3.417c0-.609.232-1.158.61-1.603zm11.242 11.244l2.42 2.42-11.45 6.611 9.03-9.031zm0-2.116L5.821 1.911l11.45 6.611-2.42 2.42zm1.488 1.058l4.498 2.598c.706.408.706 1.077 0 1.484l-4.498 2.598-2.128-2.128 2.128-2.128z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Site Footer">
      {/* Top Shimmer Line in Vexo Golden Theme */}
      <div className={styles.topBorderGlow} />
      <div className={styles.ambientAura} />

      <div className={styles.container}>
        {/* Top Row: Brand Logo & Regional Selectors (Matching Zomato UX) */}
        <div className={styles.topRow}>
          <Link href="/" className={styles.brandLogo} aria-label="VahanXpert Homepage">
            <Image
              src="/headerlogo.png"
              alt="VahanXpert"
              width={180}
              height={64}
              className={styles.footerLogoImg}
            />
          </Link>

       
        </div>

        {/* 5-Column Navigation Grid matching reference */}
        <div className={styles.linksGrid}>
          {footerColumns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.columnTitle}>{col.title}</h4>
              <ul className={styles.linkList}>
                {col.links.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <Link
                      href={link.href}
                      className={styles.linkAnchor}
                      onClick={(e) => {
                        if (link.label === 'Book a Service') {
                          e.preventDefault();
                          if (typeof window !== 'undefined') {
                            window.dispatchEvent(new CustomEvent('open-book-service-modal'));
                          }
                        }
                      }}
                    >
                      <span>{link.label}</span>
                      {link.badge && <span className={styles.linkBadge}>{link.badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us Column with Hugeicons */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <HugeiconsIcon icon={Location01Icon} size={18} strokeWidth={2} />
                </div>
                <a
                  href="https://www.google.com/maps/place/VAHANXPERT/@29.18732,74.7559444,17z/data=!3m1!4b1!4m6!3m5!1s0x39141d6f9291daa9:0x6d6cbb67084f0157!8m2!3d29.18732!4d74.7585193!16s%2Fg%2F11nr3f8bpv?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  aria-label="View VahanXpert workshop location on Google Maps"
                >
                  Ward No. 02, Shop No. 01, Khata, 23/20, Sahwa Bypass, near Shubham Hospital, Nohar, Rajasthan 335523
                </a>
              </li>

              <li className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <HugeiconsIcon icon={Call02Icon} size={18} strokeWidth={2} />
                </div>
                <a
                  href="tel:+918930293896"
                  className={styles.contactLink}
                  aria-label="Call VahanXpert support at +91 8930293896"
                >
                  +91 8930293896
                </a>
              </li>

              <li className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={2} />
                </div>
                <a
                  href="mailto:support@vahanxpert.in"
                  className={styles.contactLink}
                  aria-label="Email VahanXpert support at support@vahanxpert.in"
                >
                  support@vahanxpert.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={`${styles.column} ${styles.socialColumn}`}>
            <h4 className={styles.columnTitle}>Social Links</h4>

            {/* Circular Social Icons */}
            <div className={styles.socialRow}>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconBtn}
                  aria-label={`Follow VahanXpert on ${item.name}`}
                >
                  <SocialIcon name={item.name} />
                </a>
              ))}
            </div>

            {/* Mobile App Download Buttons (Exact Zomato style) */}
            {/* <div className={styles.appButtonsGroup}>
              <a
                href="https://apple.com/app-store"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appButton}
                aria-label="Download on the App Store"
              >
                <div className={styles.appButtonIcon}>
                  <AppleLogo />
                </div>
                <div className={styles.appButtonText}>
                  <span className={styles.appSubtitle}>Download on the</span>
                  <span className={styles.appTitle}>App Store</span>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appButton}
                aria-label="Get it on Google Play"
              >
                <div className={styles.appButtonIcon}>
                  <GooglePlayLogo />
                </div>
                <div className={styles.appButtonText}>
                  <span className={styles.appSubtitle}>GET IT ON</span>
                  <span className={styles.appTitle}>Google Play</span>
                </div>
              </a>
            </div> */}
          </div>
        </div>

        {/* Full Width Subtle Divider */}
        <div className={styles.divider} />

        {/* Bottom Legal & Copyright Information */}
        <div className={styles.bottomLegal}>
          
          <div className={styles.copyrightRow}>
            <span>2026 © Vahaxpert™ All rights reserved.</span>

            
          </div>
        </div>
      </div>

      {/* Very Bottom Center Graphic - Flush to the bottom with 0px space */}
      <div className={styles.bottomImageContainer}>
        <Image
          src="/vx_footer.svg"
          alt="Vexo Footer Graphic"
          width={2933}
          height={1482}
          className={styles.bottomImage}
          priority={false}
        />
      </div>
    </footer>
  );
}
