
import Link from 'next/link';
import styles from './SparePartsInventoryContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes controls for receiving, recording, storing, issuing, transferring, counting, reconciling and disposing of spare parts and related workshop inventory. The objective is to maintain appropriate stock availability, traceability, condition, accountability and cost control.',
    ],
  },
  {
    title: 'Scope',
    paragraphs: [
      'This Policy applies to vehicle spare parts, genuine/OEM-equivalent parts, consumables, lubricants, filters, batteries, tyres, accessories, workshop materials and other inventory held or controlled by VahanXpert Services.',
    ],
  },
  {
    title: 'Inventory Classification',
    bullets: [
      'Inventory may be classified by part category, vehicle application, part number, brand, supplier, movement frequency, value or other operational criteria.',
      'Fast-moving, critical or high-value parts may receive additional stock controls.',
      'Damaged, defective, returned, warranty-claim, obsolete and quarantined items should be separately identifiable.',
    ],
  },
  {
    title: 'Stock Records',
    paragraphs: [
      'Appropriate inventory records should be maintained for material stock items. Records may include part name, part number, description, quantity, supplier, purchase date, purchase cost, storage location, issue details and applicable warranty/return information.',
    ],
  },
  {
    title: 'Receiving Stock',
    bullets: [
      'Received parts should be checked, where reasonably practicable, against the purchase order, invoice, delivery note or other procurement record.',
      'Quantity, visible condition, packaging, part number and apparent suitability should be checked before stock acceptance where practicable.',
      'Shortages, excess quantities, damaged goods or incorrect parts should be recorded and referred to the supplier/procurement process.',
    ],
  },
  {
    title: 'Genuine / OEM / Other Parts',
    paragraphs: [
      'Inventory records should identify the relevant part type where this distinction is material to procurement, Customer approval, warranty or repair records. Part selection and authenticity controls shall follow the applicable Vehicle Spare Parts Procurement, Genuine Parts & Parts Replacement Policy.',
    ],
  },
  {
    title: 'Storage and Preservation',
    bullets: [
      'Parts should be stored in suitable locations that protect them from moisture, dust, impact, contamination, heat or other foreseeable damage.',
      'Batteries, lubricants, chemicals and other sensitive items should be stored according to their applicable handling requirements.',
      'Heavy parts should be stored in a manner that reduces falling or handling risks.',
    ],
  },
  {
    title: 'Stock Identification and Location',
    paragraphs: [
      'Storage locations, shelves, bins or other designated areas may be labelled or otherwise identified to facilitate efficient retrieval and accurate stock counts.',
    ],
  },
  {
    title: 'Issue of Parts',
    bullets: [
      'Parts should ordinarily be issued against an authorised vehicle job, repair order, purchase/service requirement or other approved purpose.',
      'The part number and quantity issued should be recorded where reasonably practicable.',
      'Unauthorised removal or personal use of stock is prohibited.',
    ],
  },
  {
    title: 'Parts Issued to Customer Vehicles',
    paragraphs: [
      'Where a spare part is issued for installation in a Customer vehicle, the relevant job card, repair record or inventory record should identify the part where reasonably practicable. Customer approval requirements shall follow the applicable estimate and additional-work policies.',
    ],
  },
  {
    title: 'Returns to Stock',
    paragraphs: [
      'Unused parts may be returned to stock where they are in suitable condition, identifiable and eligible for return. Returned items should be inspected before being added back to available stock.',
    ],
  },
  {
    title: 'Defective, Damaged and Quarantined Stock',
    bullets: [
      'Defective, damaged, suspected counterfeit or otherwise unsuitable parts should be segregated from usable stock.',
      'Such items should be identified as quarantined, returned, warranty-claim or disposal stock as applicable.',
      'Quarantined items should not be issued for Customer repairs unless appropriately cleared and authorised.',
    ],
  },
  {
    title: 'Warranty and Supplier Returns',
    paragraphs: [
      'Parts requiring supplier or manufacturer warranty review should be retained and documented as appropriate. Relevant invoices, part numbers, purchase records and failure details may be preserved to support a warranty or return claim.',
    ],
  },
  {
    title: 'Stock Transfers',
    paragraphs: [
      'Where inventory is moved between workshop locations, storage areas or authorised sites, the movement should be recorded where reasonably practicable to preserve traceability and accountability.',
    ],
  },
  {
    title: 'Stock Counting',
    bullets: [
      'Physical stock counts may be conducted periodically based on inventory value, movement, risk and operational requirements.',
      'High-value, critical or fast-moving items may be counted more frequently.',
      'Differences between physical stock and records should be reviewed and appropriately documented.',
    ],
  },
  {
    title: 'Stock Reconciliation',
    paragraphs: [
      'Inventory discrepancies should be investigated where material. Possible causes may include data-entry errors, unrecorded issues/returns, supplier shortages, damage, theft, misplacement or counting errors. Appropriate corrective action should be documented.',
    ],
  },
  {
    title: 'Minimum / Reorder Levels',
    paragraphs: [
      'VahanXpert Services may establish minimum, maximum or reorder levels for frequently used or critical parts based on historical consumption, vehicle service requirements, supplier lead times, seasonality and operational needs.',
    ],
  },
  {
    title: 'Overstock and Slow-Moving Stock',
    bullets: [
      'Slow-moving or excess stock may be periodically reviewed.',
      'Where commercially appropriate, VahanXpert Services may return, transfer, use, discount or otherwise dispose of eligible excess stock.',
      'No stock should be disposed of contrary to warranty, contractual, environmental or legal requirements.',
    ],
  },
  {
    title: 'Obsolete Parts',
    paragraphs: [
      'Obsolete or discontinued parts should be identified and assessed for return, transfer, warranty, approved use or disposal. Such parts should not be represented as current or suitable where compatibility is uncertain.',
    ],
  },
  {
    title: 'Inventory Fraud and Loss Prevention',
    bullets: [
      'Unauthorised stock removal, falsification of stock records, deliberate miscounting or diversion of parts is prohibited.',
      'Access to high-value or sensitive inventory may be restricted.',
      'Material suspected loss, theft or fraud should be reported to management.',
    ],
  },
  {
    title: 'Scrap and Used Parts',
    paragraphs: [
      'Used or removed parts shall be handled according to applicable repair, warranty, Customer handover, environmental and waste-disposal requirements. Parts subject to a warranty inspection or Customer request should not be discarded prematurely.',
    ],
  },
  {
    title: 'Inventory and Vendor Coordination',
    paragraphs: [
      'Procurement and inventory personnel should coordinate with approved vendors to manage availability, delivery schedules, returns, shortages and warranty claims. Vendor management shall follow the Vendor & Supplier Management Policy.',
    ],
  },
  {
    title: 'Record Retention',
    bullets: [
      'Purchase records, stock registers, issue records, return records, adjustment records and relevant warranty documentation may be retained.',
      'Records should be maintained for operational, accounting, audit, warranty, dispute and compliance purposes as applicable.',
    ],
  },
  {
    title: 'Responsibility',
    bullets: [
      'Management: establish overall inventory controls and review material discrepancies.',
      'Authorised procurement/vendor personnel: coordinate purchasing and supplier matters.',
      'Store/inventory personnel: receive, record, store, issue and reconcile stock as assigned.',
      'Technicians: use and record parts responsibly and report defective or incorrect parts.',
      'All staff: protect inventory and report suspected loss, damage or misuse.',
    ],
  },
  {
    title: 'Customer Protection',
    paragraphs: [
      'Inventory records and part issue processes should support accurate billing, warranty handling and repair traceability. Customers should not be charged for parts that were not authorised or legitimately used, subject to the applicable estimate, insurance or service terms.',
    ],
  },
  {
    title: 'Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on inventory practices, supplier arrangements, workshop requirements, audit findings, operational experience or applicable legal and business requirements.',
    ],
  },
];

const documentDetails = [
  ['Document Name', 'Spare Parts Inventory & Stock Management Policy'],
  ['Organisation', 'VahanXpert Services'],
  ['Policy Number', 'VXS/INV/028'],
  ['Version / Effective Date', '1.0 / 20/09/2026'],
  [
    'Review Frequency',
    'At least annually or whenever inventory/procurement requirements change',
  ],
];

export default function SparePartsInventoryContent() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> Back to Home
        </Link>

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            VAHANXPERT SERVICES
          </div>

          <h1>Spare Parts Inventory &amp; Stock Management Policy</h1>

          <p className={styles.subtitle}>
            Inventory control, stock traceability and responsible parts
            management.
          </p>

          <div className={styles.metaBar}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Policy No.</span>
              <span className={styles.metaValue}>VXS/INV/028</span>
            </div>

            <span className={styles.metaDivider} />

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Version</span>
              <span className={styles.metaValue}>1.0</span>
            </div>

            <span className={styles.metaDivider} />

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Effective Date</span>
              <span className={styles.metaValue}>20/09/2026</span>
            </div>
          </div>
        </header>

        <div className={styles.introCard}>
          <span className={styles.introAccent} />
          <div>
            <h2>About this policy</h2>
            <p>
              This policy outlines the inventory controls used by VahanXpert
              Services to support appropriate stock availability, traceability,
              condition, accountability and cost control.
            </p>
          </div>
        </div>

        <div className={styles.sectionList}>
          {sections.map((section, index) => (
            <section className={styles.policyCard} key={section.title}>
              <div className={styles.sectionNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className={styles.sectionContent}>
                <h2>{section.title}</h2>

                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <section className={`${styles.policyCard} ${styles.contactCard}`}>
          <div className={styles.sectionNumber}>27</div>
          <div className={styles.sectionContent}>
            <h2>Business Contact</h2>
            <p>
              <strong>VahanXpert Services</strong>
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Address</span>
                <p>
                  D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh –
                  226010
                </p>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:info.vahanxpert@gmail.com">
                  info.vahanxpert@gmail.com
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Mobile</span>
                <a href="tel:+918930293896">+91 8930293896</a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.policyCard} ${styles.documentCard}`}>
          <div className={styles.sectionNumber}>28</div>
          <div className={styles.sectionContent}>
            <h2>Document Control</h2>

            <div className={styles.tableWrapper}>
              <table className={styles.documentTable}>
                <tbody>
                  {documentDetails.map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <footer className={styles.policyFooter}>
          <span className={styles.footerLine} />
          <p>
            VahanXpert Services <span>·</span> Spare Parts Inventory &amp; Stock
            Management Policy
          </p>
          <span className={styles.footerPolicyNo}>VXS/INV/028</span>
        </footer>
      </div>
    </div>
  );
}
