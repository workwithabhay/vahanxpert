export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  imageSrc: string;
  altText: string;
  duration: string;
  highlights: string[];
  backDescription: string;
  badge: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'inspection',
    stepNumber: '01',
    title: 'Inspection',
    tagline: '40-Point Digital Scan',
    imageSrc: '/process/step-1-inspection.jpg',
    altText: 'Technician carrying out vehicle inspection',
    duration: '30 Mins',
    badge: 'Step 01',
    backDescription: 'Comprehensive bumper-to-bumper diagnostics identifying internal and external damage with precision.',
    highlights: [
      'Full electronic OBD-II sensor diagnostics',
      'Structural chassis & body panel mapping',
      'HD photos & video upload to your portal',
    ],
  },
  {
    id: 'estimate',
    stepNumber: '02',
    title: 'Estimate',
    tagline: '100% Transparent Quote',
    imageSrc: '/process/step-2-estimate.jpg',
    altText: 'Service advisor presenting cost estimate',
    duration: '15 Mins',
    badge: 'Step 02',
    backDescription: 'Itemized, transparent cost breakdown with zero hidden fees. OEM vs OES parts options upfront.',
    highlights: [
      'Itemized transparent part-by-part pricing',
      'Direct insurer cashless policy claim check',
      'No work starts without your digital consent',
    ],
  },
  {
    id: 'approval',
    stepNumber: '03',
    title: 'Approval',
    tagline: 'Instant Cashless Greenlight',
    imageSrc: '/process/step-3-approval.jpg',
    altText: 'Digital cashless insurance claim approval',
    duration: '< 15 Mins',
    badge: 'Step 03',
    backDescription: 'Fast digital sanction through our network of 50+ IRDAI approved insurance carriers.',
    highlights: [
      'Direct insurer paperless synchronization',
      'Zero-wait claim verification & approval',
      'Dedicated claim supervisor assigned',
    ],
  },
  {
    id: 'repair',
    stepNumber: '04',
    title: 'Repair',
    tagline: 'Precision Craftsmanship',
    imageSrc: '/process/step-4-repair.jpg',
    altText: 'Certified mechanics repairing vehicle',
    duration: '24-48 Hours',
    badge: 'Step 04',
    backDescription: 'Factory-trained technicians utilizing genuine OEM components in climate-controlled workshops.',
    highlights: [
      '100% genuine manufacturer parts used',
      'Live photo/video milestone tracking on app',
      'Multi-stage computerized quality control audit',
    ],
  },
  {
    id: 'delivery',
    stepNumber: '05',
    title: 'Delivery',
    tagline: 'Doorstep Handover',
    imageSrc: '/process/step-5-delivery.jpg',
    altText: 'Car keys handover to customer',
    duration: 'Scheduled Time',
    badge: 'Step 05',
    backDescription: 'Fully detailed, sanitized vehicle returned to your doorstep with our unconditional service warranty.',
    highlights: [
      'Complimentary vacuuming & sanitization',
      '6-Month / 10,000 km unconditional warranty',
      'Digital invoice & warranty certificate',
    ],
  },
];
