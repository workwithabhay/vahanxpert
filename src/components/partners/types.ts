export type PartnerPosition =
  | 'tl-outer' // Top Left Outer (e.g. Healthy in reference)
  | 'tl-inner' // Top Left Inner (e.g. Veg Mode in reference)
  | 'bl-outer' // Bottom Left Outer (e.g. Plan a Party in reference)
  | 'bl-inner' // Bottom Left Inner (e.g. Gift Cards in reference)
  | 'tr-inner' // Top Right Inner (e.g. Gourmet in reference)
  | 'tr-outer' // Top Right Outer (e.g. Offers in reference)
  | 'br-inner' // Bottom Right Inner (e.g. Food on Train in reference)
  | 'br-outer' // Bottom Right Outer (e.g. Collections in reference)
  | 'extra';

export type PartnerCategory =
  | 'Health Insurance'
  | 'Life & Term'
  | 'Motor & Auto'
  | 'Travel Shield'
  | 'Home & Property'
  | 'Family Care'
  | 'Corporate & Group'
  | 'Zero-Dep Cover';

export interface Partner {
  id: string;
  name: string;
  category: PartnerCategory;
  /**
   * Path to the partner logo or image (e.g. '/partners/hdfc-ergo.png').
   * If left blank or image fails to load, a premium golden-themed placeholder badge is displayed.
   */
  imageSrc?: string;
  /**
   * Short tagline or highlight (e.g. "98.7% Claim Ratio", "12,000+ Hospitals")
   */
  highlight?: string;
  /**
   * Position around the central phone mockup matching the reference layout
   */
  position: PartnerPosition;
  /**
   * Animation delay offset in seconds for organic floating motion
   */
  floatDelay?: number;
}

export interface SectionContent {
  badge?: string;
  titlePart1: string;
  titleHighlight: string;
  subtitle: string;
  centerCardTitle: string;
  centerCardSubtitle: string;
  centerCardBadge: string;
}
