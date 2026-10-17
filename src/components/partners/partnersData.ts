import { Partner, SectionContent } from './types';

/**
 * Section copy and headings.
 * Styled in golden-yellowish tones with balanced line wraps.
 */
export const sectionContent: SectionContent = {
  badge: 'TRUSTED ECOSYSTEM',
  titlePart1: 'Our Trusted',
  titleHighlight: 'Insurance Partners',
  subtitle:
    'We collaborate with the nation’s premier insurance providers to deliver seamless cashless claims, instant policy approvals, and all-around financial security.',
  centerCardTitle: 'Instant Claim Settlement',
  centerCardSubtitle: 'Connected directly to 50+ IRDAI approved insurers',
  centerCardBadge: '100% Cashless Network',
};

/**
 * 8 Insurance partners matching the exact layout arrangement of the reference image:
 * - 4 floating cards on the left of the phone (2 columns / staggered rows)
 * - 4 floating cards on the right of the phone (2 columns / staggered rows)
 *
 * NOTE FOR USER:
 * To replace placeholders with your own partner logos or images:
 * 1. Place your image files in the `public/partners/` folder (e.g. `public/partners/star-health.png`).
 * 2. Set the `imageSrc` property below (e.g. `imageSrc: '/partners/star-health.png'`).
 * 3. The card will automatically display your image! If left blank, it shows the golden placeholder icon.
 */
export const insurancePartners: Partner[] = [
  // --- LEFT SIDE CARDS ---
  {
    id: 'icici-lombard',
    name: 'ICICI Lombard',
    category: 'Motor & Auto',
    highlight: 'Cashless Claims',
    position: 'tl-outer',
    imageSrc: '/insu_partners/ICICI Lombard.webp',
    floatDelay: 0,
  },
  {
    id: 'hdfc-ergo',
    name: 'HDFC ERGO',
    category: 'Motor & Auto',
    highlight: 'Instant Approval',
    position: 'tl-inner',
    imageSrc: '/insu_partners/HDFC ERGO.png',
    floatDelay: 1.2,
  },
  {
    id: 'bajaj-general',
    name: 'Bajaj Allianz',
    category: 'Motor & Auto',
    highlight: 'Zero-Dep Cover',
    position: 'bl-outer',
    imageSrc: '/insu_partners/Bajaj General.png',
    floatDelay: 0.6,
  },
  {
    id: 'sbi-general',
    name: 'SBI General',
    category: 'Motor & Auto',
    highlight: 'Express Survey',
    position: 'bl-inner',
    imageSrc: '/insu_partners/SBI General.png',
    floatDelay: 1.8,
  },

  // --- RIGHT SIDE CARDS ---
  {
    id: 'reliance-general',
    name: 'Reliance General',
    category: 'Motor & Auto',
    highlight: 'Cashless Garage',
    position: 'tr-inner',
    imageSrc: '/insu_partners/Reliance.jpeg',
    floatDelay: 0.8,
  },
  {
    id: 'chola-ms',
    name: 'Chola MS',
    category: 'Motor & Auto',
    highlight: 'Accidental Cover',
    position: 'tr-outer',
    imageSrc: '/insu_partners/Chola MS.png',
    floatDelay: 2.1,
  },
  {
    id: 'united-india',
    name: 'United India',
    category: 'Motor & Auto',
    highlight: 'Govt. Authorized',
    position: 'br-inner',
    imageSrc: '/insu_partners/United India.webp',
    floatDelay: 1.5,
  },
  {
    id: 'liberty-general',
    name: 'Liberty General',
    category: 'Motor & Auto',
    highlight: 'Quick Settlement',
    position: 'br-outer',
    imageSrc: '/insu_partners/Liberty.jpeg',
    floatDelay: 0.3,
  },

  // --- ADDITIONAL TIE-UPS SHOWCASED IN GRID ---
  {
    id: 'future-generali',
    name: 'Future Generali',
    category: 'Motor & Auto',
    highlight: '100% Cashless',
    position: 'extra',
    imageSrc: '/insu_partners/FGI.jpg',
    floatDelay: 0.5,
  },
  {
    id: 'zuno-general',
    name: 'Zuno General',
    category: 'Motor & Auto',
    highlight: 'Digital Claims',
    position: 'extra',
    imageSrc: '/insu_partners/Zuno.png',
    floatDelay: 1.1,
  },
  {
    id: 'magma-hdi',
    name: 'Magma HDI',
    category: 'Motor & Auto',
    highlight: 'Hassle-Free',
    position: 'extra',
    imageSrc: '/insu_partners/Magma General.jpeg',
    floatDelay: 1.7,
  },
  {
    id: 'raheja-qbe',
    name: 'Raheja QBE',
    category: 'Motor & Auto',
    highlight: 'Complete Cover',
    position: 'extra',
    imageSrc: '/insu_partners/Raheja QBE.png',
    floatDelay: 0.9,
  },
];
