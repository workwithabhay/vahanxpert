export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Insurance Claims', href: '/insurance-claims' },
      { label: 'Book a Service', href: '/contact' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'All Policies', href: '/policies' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Custody & Parking Policy', href: '/parking-custody-policy' },
    ],
  },
];

export const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
];
