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
      { label: 'Delete Account', href: '/delete-account' },
    ],
  },
];

export const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/vahanxpert_nohar/', icon: 'instagram' },
  { name: 'Facebook', href: 'https://www.instagram.com/vahanxpert_nohar/', icon: 'facebook' },
  { name: 'YouTube', href: 'https://www.instagram.com/vahanxpert_nohar/', icon: 'youtube' },
  { name: 'LinkedIn', href: 'https://www.instagram.com/vahanxpert_nohar/', icon: 'linkedin' },
];
