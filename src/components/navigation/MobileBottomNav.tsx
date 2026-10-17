'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import GooeyNav, { GooeyNavItem } from './GooeyNav';
import styles from './MobileBottomNav.module.css';

const items: GooeyNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  // Determine active index based on current URL path
  const getActiveIndex = () => {
    if (!pathname) return 0;
    if (pathname === '/') return 0;
    if (pathname.startsWith('/services')) return 1;
    if (pathname.startsWith('/about')) return 2;
    if (pathname.startsWith('/contact')) return 3;
    if (pathname.startsWith('/insurance-claims')) return 1;
    return 0;
  };

  const activeIndex = getActiveIndex();

  return (
    <aside className={styles.bottomNavContainer} aria-label="Mobile Navigation Bar">
      <div className={styles.bottomNavInner}>
        <GooeyNav
          items={items}
          activeIndex={activeIndex}
          initialActiveIndex={activeIndex}
          theme="light"
          size="md"
          frame
          particleCount={15}
          spread={56}
          animationTime={600}
          timeVariance={300}
          gooeyness={0.5}
          wobble={0.5}
          hoverEffect
          onChange={(index, item) => {
            // Navigation handled by Next.js Link
          }}
        />
      </div>
    </aside>
  );
}
