'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  FileText,
  SlidersHorizontal,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import styles from './AllPolicies.module.css';

export interface PolicyItem {
  id: string;
  title: string;
  category: 'Safety & Workshop' | 'Customer & Privacy' | 'Parts & Warranty' | 'Vehicle Movement' | 'Claims & Billing';
  points: string[];
  link: string;
  isInternal?: boolean;
}

export const ALL_POLICIES_DATA: PolicyItem[] = [
  {
    id: '01',
    title: 'CCTV Surveillance & Security Recording Policy',
    category: 'Safety & Workshop',
    points: [
      'CCTV may be used for workshop, vehicle and asset security.',
      'Access to CCTV recordings is restricted to authorised persons.',
      'Relevant footage may be preserved for incidents, insurance or legal requirements.',
      'Unauthorised sharing or misuse of CCTV footage is prohibited.',
    ],
    link: '/cctv-policy',
    isInternal: true,
  },
  {
    id: '02',
    title: 'Complaint, Grievance & Dispute Resolution Policy',
    category: 'Customer & Privacy',
    points: [
      'Customers may raise complaints regarding service, billing, repairs or delays.',
      'Complaints are recorded and reviewed through an appropriate process.',
      'Material or unresolved complaints may be escalated to management.',
      'Customers are provided appropriate channels for grievance resolution.',
    ],
    link: '/complaint-grievance-policy',
    isInternal: true,
  },
  {
    id: '03',
    title: 'Customer Promotional Communication & Marketing Consent Policy',
    category: 'Customer & Privacy',
    points: [
      'Promotional messages may include offers, service reminders and membership benefits.',
      'Approved communication channels are used where applicable.',
      'Appropriate opt-out mechanisms may be provided.',
      'Customer contact information is not used for unauthorised marketing.',
    ],
    link: '/marketing-consent-policy',
    isInternal: true,
  },
  {
    id: '04',
    title: 'Customer Vehicle Damage & Incident Reporting Policy',
    category: 'Vehicle Movement',
    points: [
      'Vehicle condition and relevant incidents should be documented.',
      'Damage or incidents identified during service are reported appropriately.',
      'Customers may be notified regarding material incidents.',
      'Relevant records and evidence may be preserved for review.',
    ],
    link: '/vehicle-damage-incident-policy',
    isInternal: true,
  },
  {
    id: '05',
    title: 'Customer Vehicle Pickup, Delivery & Transportation Policy',
    category: 'Vehicle Movement',
    points: [
      'Pickup and delivery are handled through authorised personnel.',
      'Vehicle condition and keys are checked during movement.',
      'Transportation follows applicable safety procedures.',
      'Delivery is made to the Customer or authorised representative.',
    ],
    link: '/vehicle-pickup-delivery-policy',
    isInternal: true,
  },
  {
    id: '06',
    title: 'Environmental & Used Oil / Waste Disposal Policy',
    category: 'Safety & Workshop',
    points: [
      'Used oil, fluids, batteries, tyres and workshop waste are segregated.',
      'Hazardous and contaminated materials are handled appropriately.',
      'Waste is stored and transferred through suitable channels.',
      'Automotive fluids must not be discharged into drains, soil or open ground.',
    ],
    link: '/environmental-waste-policy',
    isInternal: true,
  },
  {
    id: '07',
    title: 'Garage Services Terms & Conditions Policy',
    category: 'Customer & Privacy',
    points: [
      'Defines the general terms applicable to garage services.',
      'Covers service estimates, approvals and customer responsibilities.',
      'Explains repair, payment and vehicle handover conditions.',
      'Applicable warranty and service conditions are addressed.',
    ],
    link: '/terms',
    isInternal: true,
  },
  {
    id: '08',
    title: 'Insurance / Cashless Claim Coordination Policy',
    category: 'Claims & Billing',
    points: [
      'VahanXpert may coordinate with insurers and surveyors where authorised.',
      'Claim approval remains subject to the applicable insurance policy.',
      'Cashless repair may still involve Customer payment obligations.',
      'Deductibles, depreciation and non-payable items may apply.',
    ],
    link: '/insurance-coordination-policy',
    isInternal: true,
  },
  {
    id: '09',
    title: 'Membership & Coupon Book Terms, Offer & Validity Policy',
    category: 'Claims & Billing',
    points: [
      'Defines membership and coupon book validity conditions.',
      'Explains coupon redemption and usage restrictions.',
      'Coupons and benefits are subject to applicable offer conditions.',
      'Expired or misused coupons may not be accepted.',
    ],
    link: '/membership-coupon-policy',
    isInternal: true,
  },
  {
    id: '10',
    title: 'Payment, Billing & Invoice Policy',
    category: 'Claims & Billing',
    points: [
      'Invoices are generated through authorised systems or personnel.',
      'Customer payments are accepted through authorised channels.',
      'Employees must not direct Customers to personal payment accounts.',
      'Billing, refunds and payment records are reconciled appropriately.',
    ],
    link: '/payment-billing-policy',
    isInternal: true,
  },
  {
    id: '11',
    title: 'Refund & Cancellation Policy',
    category: 'Claims & Billing',
    points: [
      'Cancellation requests are handled according to applicable service terms.',
      'Refund eligibility may depend on work completed and parts ordered.',
      'Refunds should ordinarily use traceable authorised channels.',
      'Insurance and payment status may affect cancellation handling.',
    ],
    link: '/refund-cancellation-policy',
    isInternal: true,
  },
  {
    id: '12',
    title: 'Repair Approval & Additional Work Authorization Policy',
    category: 'Customer & Privacy',
    points: [
      'Customer approval is obtained before applicable repair work.',
      'Material additional work or cost should be communicated.',
      'Approvals may be signed, digital or through authorised communication.',
      'Unauthorised material work should not be performed.',
    ],
    link: '/Repair_Approval_Additional_Work_Authorization_Policy/',
    isInternal: true,
  },
  
{
  id: '13',
  title: 'Repair & Parts Warranty Policy',
  category: 'Parts & Warranty',
  points: [
    'Warranty may apply to eligible repair work and spare parts.',
    'Warranty conditions and exclusions are applicable.',
    'Manufacturer or supplier warranty terms may also apply.',
    'Warranty claims may require inspection and supporting records.',
  ],
  link: '/Repair_Parts_Warranty_Policy',
  isInternal: true,
},

  
{
  id: '14',
  title: 'Spare Parts Inventory & Stock Management Policy',
  category: 'Parts & Warranty',
  points: [
    'Parts inventory is recorded and appropriately stored.',
    'Stock movements and parts issued to vehicles are tracked.',
    'Defective or damaged stock is segregated where required.',
    'Inventory may be periodically counted and reconciled.',
  ],
  link: '/Spare_Parts_Inventory_Stock_Management_Policy',
  isInternal: true,
},

  
{
  id: '15',
  title: 'Spare Parts Procurement, Replacement & Return Policy',
  category: 'Parts & Warranty',
  points: [
    'Parts are selected according to vehicle and repair requirements.',
    'Customer approval may be required before procurement.',
    'Defective or incorrect parts are handled through applicable procedures.',
    'Unused parts may be returned subject to applicable conditions.',
  ],
  link: '/Spare_Parts_Procurement_Replacement_Return_Policy',
  isInternal: true,
},

  
{
  id: '16',
  title: 'Staff / Technician Code of Conduct Policy',
  category: 'Safety & Workshop',
  points: [
    'Staff are expected to act professionally and honestly.',
    'Customer information and property must be handled confidentially.',
    'Unauthorised vehicle use, payment diversion and record manipulation are prohibited.',
    'Workshop safety and operational procedures must be followed.',
  ],
  link: '/Staff_Technician_Code_of_Conduct_Policy',
  isInternal: true,
},

  
{
  id: '17',
  title: 'Vehicle Abandoned / Uncollected Vehicle Policy',
  category: 'Vehicle Movement',
  points: [
    'Defines the process for vehicles not collected after service or inspection.',
    'Requires documented customer contact attempts and written notices where appropriate.',
    'Explains vehicle storage, customer property protection and release procedures.',
    'Prohibits unauthorised sale or disposal of customer vehicles.',
  ],
  link: '/Vehicle_Abandoned_Uncollected_Vehicle_Policy',
  isInternal: true,
},

  
{
  id: '18',
  title: 'Vehicle Damage, Loss & Incident Reporting Policy',
  category: 'Vehicle Movement',
  points: [
    'Defines the process for reporting and investigating vehicle damage or loss.',
    'Covers accidents, missing property, keys, documents and security incidents.',
    'Explains customer notification, evidence preservation and incident investigation.',
    'Outlines claim review, corrective action and staff responsibilities.',
  ],
  link: '/Vehicle_Damage_Loss_Incident_Reporting_Policy',
  isInternal: true,
},

  
{
  id: '19',
  title: 'Vehicle Delivery & Handover Policy',
  category: 'Vehicle Movement',
  points: [
    'Defines final vehicle inspection and quality checks before delivery.',
    'Covers final invoicing, payment verification and insurance-related handover.',
    'Explains key, document and accessory handover procedures.',
    'Outlines delivery disputes, pending work and post-service concerns.',
  ],
  link: '/Vehicle_Delivery_Handover_Policy',
  isInternal: true,
},

  
{
  id: '20',
  title: 'Vehicle Inspection, Road Test & Test Drive Safety Policy',
  category: 'Vehicle Movement',
  points: [
    'Defines safety checks and authorisation for vehicle road tests.',
    'Covers diagnostic testing, route limits and safe driving practices.',
    'Explains accident reporting, damage assessment and record keeping.',
    'Sets requirements for driver competence, customer consent and privacy.',
  ],
  link: '/Vehicle_Inspection_Road_Test_Test_Drive_Safety_Policy',
  isInternal: true,
},

  
{
  id: '21',
  title: 'Vehicle Job Card & Work Authorization Policy',
  category: 'Vehicle Movement',
  points: [
    'Defines vehicle intake, job card creation and condition recording.',
    'Covers initial estimates and approval for additional repair work.',
    'Explains insurance job records, spare parts tracking and job closure.',
    'Sets requirements for customer approvals, record integrity and privacy.',
  ],
  link: '/Vehicle_Job_Card_Work_Authorization_Policy',
  isInternal: true,
},

  {
  id: '22',
  title: 'Vehicle Key, Customer Property & Vehicle Custody Policy',
  category: 'Vehicle Movement',
  points: [
    'Defines vehicle key recording, secure storage and authorised access.',
    'Covers customer property, vehicle documents and removable accessories.',
    'Explains vehicle custody, parking, pickup, delivery and final handover.',
    'Sets responsibilities for missing property, incidents and confidentiality.',
  ],
  link: '/Vehicle_Key_Customer_Property_Vehicle_Custody_Policy',
  isInternal: true,
},
  {
  id: '23',
  title: 'Vehicle Pickup, Delivery & Transportation Safety Policy',
  category: 'Vehicle Movement',
  points: [
    'Defines authorised vehicle pickup, delivery and transportation procedures.',
    'Covers vehicle condition checks, keys, documents and safe driving.',
    'Explains towing, breakdowns, accidents and transportation incidents.',
    'Sets customer, driver and transportation partner responsibilities.',
  ],
  link: '/Vehicle_Pickup_Delivery_Transportation_Safety_Policy',
  isInternal: true,
},
  {
    id: '24',
    title: 'Vehicle Pickup, Delivery & Transportation Safety Policy',
    category: 'Vehicle Movement',
    points: [
      'Pickup and delivery are performed by authorised personnel.',
      'Vehicle condition and keys are checked before movement.',
      'Transportation follows safe driving and towing procedures.',
      'Delivery condition is verified with the receiving person.',
    ],
    link: 'https://www.vahanxpert.in/policies/Vehicle_Pickup_Delivery_Transportation_Safety_Policy/',
  },
  
  
  
{
  id: '25',
  title: 'Vehicle Repair & Parts Warranty Policy',
  category: 'Customer & Privacy',
  points: [
    'Explains warranty coverage for repair workmanship and spare parts.',
    'Covers warranty claims, inspection, exclusions and replacement parts.',
    'Defines customer responsibilities and manufacturer/supplier warranty terms.',
    'Outlines dispute escalation, records and applicable statutory rights.',
  ],
  link: '/Vehicle_Repair_Parts_Warranty_Policy',
  isInternal: true,
},

  
{
  id: '28',
  title: 'Vehicle Service Warranty & Workmanship Warranty Policy',
  category: 'Parts & Warranty',
  points: [
    'Explains workmanship warranty and spare-parts warranty conditions.',
    'Covers warranty claims, inspection, diagnosis and common exclusions.',
    'Defines customer responsibilities and third-party repair considerations.',
    'Outlines warranty decisions, documentation and customer review options.',
  ],
  link: '/Vehicle_Service_Warranty_Workmanship_Warranty_Policy',
  isInternal: true,
},

  
{
  id: '29',
  title:
    'Vehicle Spare Parts Procurement, Genuine Parts & Parts Replacement Policy',
  category: 'Parts & Warranty',
  points: [
    'Explains spare parts sourcing, compatibility and part verification.',
    'Covers genuine, OEM-equivalent, aftermarket and customer-provided parts.',
    'Defines customer approval, pricing, installation and quality checks.',
    'Outlines warranty support, traceability and replacement procedures.',
  ],
  link: '/Vehicle_Spare_Parts_Procurement_Policy',
  isInternal: true,
},

  

{
  id: '30',
  title: 'Vehicle Test Drive & Road Test Policy',
  category: 'Vehicle Movement',
  points: [
    'Road tests are performed only for authorised service purposes.',
    'Pre-test vehicle checks are completed where applicable.',
    'Safe driving and route requirements must be followed.',
    'Accidents, breakdowns or damage during testing are reported.',
  ],
  link: '/Vehicle_Test_Drive_Road_Test_Policy',
  isInternal: true,
},


  
{
  id: '31',
  title:
    'Vehicle Washing, Cleaning, Detailing & Customer Property Protection Policy',
  category: 'Safety & Workshop',
  points: [
    'Vehicle cleaning and detailing follow applicable service procedures.',
    'Vehicle surfaces and interiors are handled with reasonable care.',
    'Customer belongings are protected during cleaning activities.',
    'Any damage or incident identified during the process is reported.',
  ],
  link:
    '/Vehicle_Washing_Cleaning_Detailing_Customer_Property_Protection_Policy',
  isInternal: true,
},

  
{
  id: '32',
  title: 'Vendor & Supplier Management Policy',
  category: 'Parts & Warranty',
  points: [
    'Defines vendor selection, due diligence and onboarding procedures.',
    'Covers purchasing approvals, pricing and conflict-of-interest controls.',
    'Outlines supplier quality checks, delivery, invoices and warranty returns.',
    'Establishes vendor performance monitoring and suspension procedures.',
  ],
  link: '/Vendor_Supplier_Management_Policy',
  isInternal: true,
},

  
{
  id: "33",
  title: "Workshop Fire Safety, Emergency Response & Evacuation Policy",
  category: "Safety & Workshop",
  points: [
    "Fire prevention and safe storage of flammable materials",
    "Emergency alarms, evacuation routes and assembly procedures",
    "Vehicle fires, electrical emergencies and chemical spills",
    "Fire equipment maintenance, training and incident reporting",
  ],
  link: "/Workshop_Fire_Safety_Emergency_Response_Evacuation_Policy",
  isInternal: true,
},

  
{
  id: "34",
  title: "Workshop Health, Safety & Fire Prevention Policy",
  category: "Safety & Workshop",
  points: [
    "Workplace safety, PPE and vehicle lifting procedures",
    "Electrical, battery, fuel and chemical safety",
    "Fire prevention, extinguishers and emergency evacuation",
    "First aid, incident reporting, training and maintenance",
  ],
  link: "/Workshop_Health_Safety_Fire_Prevention_Policy",
  isInternal: true,
},

  {
    id: '35',
    title: 'Workshop Tools, Equipment & Machinery Safety and Maintenance Policy',
    category: 'Safety & Workshop',
    points: [
      'Workshop equipment is used only by authorised personnel.',
      'Tools and machinery should be inspected before use.',
      'Defective equipment should be isolated and reported.',
      'Maintenance, calibration and safety records should be maintained.',
    ],
    link: 'https://www.vahanxpert.in/policies/Workshop_Tools_Equipment_Machinery_Safety_and_Maintenance_Policy/',
  },
];

const CATEGORIES = [
  'All',
  'Customer & Privacy',
  'Vehicle Movement',
  'Parts & Warranty',
  'Safety & Workshop',
  'Claims & Billing',
] as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

export default function AllPoliciesContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPolicies = useMemo(() => {
    return ALL_POLICIES_DATA.filter((policy) => {
      const matchesCategory =
        selectedCategory === 'All' || policy.category === selectedCategory;
      const matchesSearch =
        policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        policy.id.includes(searchQuery) ||
        policy.points.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowMid} />

      <div className={styles.container}>
        {/* Page Header */}
        <motion.div
          className={styles.pageHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className={styles.badgePill}>
              <span className={styles.badgeIcon}>✦</span> Compliance & Standards
            </div>
          </motion.div>

          <motion.h1 className={styles.pageTitle} variants={fadeInUp}>
            VahanXpert Official{' '}
            <span className={styles.titleHighlight}>Policy Directory</span>
          </motion.h1>

          <motion.p className={styles.pageDescription} variants={fadeInUp}>
            Explore our comprehensive framework of 35 operational, safety, customer protection,
            and workshop governance policies designed to ensure transparent and reliable car care.
          </motion.p>
        </motion.div>

        {/* Filter & Search Bar */}
        <div className={styles.filterControls}>
          <div className={styles.searchBoxWrapper}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by policy title, number, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search policies"
            />
          </div>

          <div className={styles.categoryPillsRow}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`${styles.categoryPill} ${
                  selectedCategory === cat ? styles.categoryPillActive : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className={styles.resultsCountRow}>
          <span className={styles.resultsCount}>
            Showing <span className={styles.resultsHighlight}>{filteredPolicies.length}</span> of{' '}
            {ALL_POLICIES_DATA.length} Policies
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              style={{
                fontSize: '0.8rem',
                color: '#b45309',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Policies Grid */}
        {filteredPolicies.length > 0 ? (
          <motion.div
            className={styles.policiesGrid}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredPolicies.map((policy) => (
              <motion.div
                key={policy.id}
                className={styles.policyCard}
                variants={fadeInUp}
              >
                <div>
                  <div className={styles.policyCardTop}>
                    <span className={styles.numberBadge}>{policy.id}</span>
                    <span className={styles.categoryTag}>{policy.category}</span>
                  </div>

                  <h2 className={styles.policyTitle}>{policy.title}</h2>

                  <ul className={styles.policyBullets}>
                    {policy.points.map((pt, index) => (
                      <li key={index} className={styles.policyBulletItem}>
                        <span className={styles.bulletDot} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.policyCardBottom}>
                  {policy.isInternal ? (
                    <Link href={policy.link} className={styles.viewPolicyBtn}>
                      <span>View Policy</span>
                      <ArrowRight size={14} className={styles.btnArrow} />
                    </Link>
                  ) : (
                    <a
                      href={policy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewPolicyBtn}
                    >
                      <span>View Policy</span>
                      <ExternalLink size={13} className={styles.btnArrow} />
                    </a>
                  )}
                 
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className={styles.emptyState}>
            <BookOpen size={40} style={{ color: '#d4d4d8', marginBottom: 12 }} />
            <h3 className={styles.emptyStateTitle}>No policies match your search</h3>
            <p className={styles.emptyStateDesc}>
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              type="button"
              className={styles.resetBtn}
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
