
import Link from 'next/link';
import styles from './RepairPartsWarrantyContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: 'Purpose',
    paragraphs: [
      'This Policy establishes the framework for handling warranty-related concerns arising from repair services and replacement parts supplied or installed by VahanXpert Services. It is intended to provide clarity regarding labour/workmanship warranty, manufacturer or supplier warranty on parts, warranty exclusions, claim handling and customer responsibilities.',
    ],
  },
  {
    title: 'Scope',
    paragraphs: [
      'This Policy applies to eligible repair, servicing and parts replacement work carried out by VahanXpert Services. The specific warranty applicable to a job shall depend on the nature of the repair, the invoice/job card, the relevant part or service terms, and any applicable manufacturer, supplier or insurer conditions.',
    ],
  },
  {
    title: 'Warranty on Spare Parts',
    bullets: [
      'Warranty on spare parts shall be governed by the applicable warranty terms and conditions of the respective manufacturer, authorised distributor or supplier.',
      'The warranty period, coverage, exclusions and claim procedure for a particular part may therefore vary from one manufacturer/supplier to another.',
      "VahanXpert Services does not independently extend, modify or guarantee a manufacturer's warranty beyond the terms actually provided by the relevant manufacturer, distributor or supplier, unless expressly stated in writing.",
      "Where a part is covered by manufacturer/supplier warranty, VahanXpert Services may assist the Customer with the applicable warranty claim process, subject to the manufacturer's/supplier's requirements.",
    ],
  },
  {
    title: 'Warranty on Repair Work / Labour',
    paragraphs: [
      'Where VahanXpert Services provides a specific workmanship or labour warranty for a repair, the applicable warranty period and scope shall be stated on the relevant invoice, job card, warranty document or other written communication. If no separate workmanship warranty is expressly stated, any warranty entitlement shall be determined according to the applicable service terms and the circumstances of the repair.',
    ],
  },
  {
    title: 'Warranty Commencement',
    bullets: [
      'The applicable warranty period shall ordinarily commence from the date of invoice, vehicle delivery or the date specified in the relevant manufacturer/supplier/service warranty terms.',
      "For parts supplied under a manufacturer/supplier warranty, the manufacturer's or supplier's stated commencement and duration rules shall prevail where applicable.",
      'The Customer should retain the invoice/job card and relevant warranty documentation as proof of purchase/service.',
    ],
  },
  {
    title: 'Conditions for Warranty Eligibility',
    bullets: [
      "The vehicle should have been used and maintained in a reasonable manner consistent with the manufacturer's operating requirements.",
      'The warranty claim should relate to the part, workmanship or service covered by the applicable warranty.',
      'The Customer should report the suspected warranty issue promptly after becoming aware of it.',
      'The vehicle may need to be presented to VahanXpert Services, the relevant manufacturer, authorised distributor or another authorised facility for inspection.',
      'Warranty eligibility may be subject to inspection, diagnosis and verification of the cause of the reported issue.',
    ],
  },
  {
    title: 'Manufacturer / Supplier Warranty Process',
    bullets: [
      'Where a replaced part is subject to manufacturer or supplier warranty, the part may need to be inspected, tested or returned to the manufacturer/supplier.',
      'Final acceptance or rejection of a manufacturer/supplier warranty claim may be determined by the relevant manufacturer, distributor or supplier according to its warranty policy.',
      'VahanXpert Services may coordinate or assist with documentation and communication but cannot guarantee acceptance of a third-party warranty claim.',
      'The Customer may be required to provide the invoice, vehicle details, service history or other documents reasonably required for processing the claim.',
    ],
  },
  {
    title: 'Warranty Inspection',
    paragraphs: [
      'Before accepting a warranty claim, VahanXpert Services may inspect and diagnose the vehicle or relevant part. If the inspection indicates that the reported issue is unrelated to the original repair or covered part, or is caused by an excluded circumstance, the claim may not qualify as a warranty claim. Applicable diagnostic or inspection charges, if any, should be communicated where reasonably practicable.',
    ],
  },
  {
    title: 'Warranty Exclusions',
    bullets: [
      'Normal wear and tear and consumable items may be excluded unless the applicable warranty expressly covers them.',
      'Damage caused by accident, collision, misuse, negligence, overloading, improper operation or external impact may be excluded.',
      'Damage arising from unauthorised modification, alteration, tampering or repair by an unauthorised person may be excluded.',
      'Damage resulting from continued use of the vehicle after a known warning, fault or abnormal condition may be excluded where it contributed to the damage.',
      'Defects or failures outside the scope of the original repair or covered part may not qualify.',
      'Manufacturer/supplier-specific exclusions shall apply to parts covered by their warranty.',
    ],
  },
  {
    title: 'Insurance and Accident Repairs',
    bullets: [
      "Insurance claim repairs may be subject to the insurer's policy terms, surveyor assessment and approved repair scope.",
      "A warranty claim does not automatically change or extend the insurer's liability or claim approval.",
      'Parts replaced under an insurance repair may carry the applicable manufacturer/supplier warranty where provided by that manufacturer/supplier.',
      'Customer-paid additional repairs shall be governed by the applicable repair and warranty terms for those repairs.',
    ],
  },
  {
    title: 'Warranty Claim Procedure',
    bullets: [
      'The Customer should contact VahanXpert Services as soon as a suspected warranty issue is identified.',
      'The Customer should provide the vehicle registration number, job card/invoice details and a description of the issue.',
      'The vehicle should be made available for inspection when reasonably requested.',
      'The Garage may diagnose the issue and determine whether it appears related to the covered repair or part.',
      "Where third-party manufacturer/supplier approval is required, the claim may be submitted according to that party's process.",
      'Any replacement, repair or reimbursement shall be subject to the applicable warranty decision and terms.',
    ],
  },
  {
    title: 'Emergency / Safety Issues',
    paragraphs: [
      'If the Customer observes a serious warning light, unusual noise, smoke, fluid leakage, loss of braking, steering difficulty or another apparent safety issue after service, the Customer should avoid continued use where reasonably necessary for safety and contact VahanXpert Services or appropriate roadside/emergency assistance. Warranty handling should not be delayed by continuing to operate a vehicle in a condition that may worsen the damage.',
    ],
  },
  {
    title: 'Warranty and Unauthorised Repairs',
    paragraphs: [
      'Where a Customer or third party carries out unauthorised repairs, dismantling, modification or part replacement that affects the relevant system or covered part, the applicable warranty may be affected or excluded to the extent permitted by the applicable warranty terms.',
    ],
  },
  {
    title: 'Warranty on Consumables',
    paragraphs: [
      'Consumables such as oils, filters, fluids, bulbs, wiper components, certain belts, brake consumables, tyres and similar items may have limited or manufacturer-specific warranty coverage. The applicable invoice, manufacturer/supplier terms or product warranty shall determine whether such items are covered.',
    ],
  },
  {
    title: 'Warranty on Replaced Parts',
    bullets: [
      "A replaced part approved under warranty may be repaired or replaced according to the manufacturer/supplier's warranty decision.",
      "The replacement part's warranty period, if any, shall be governed by the relevant manufacturer/supplier terms.",
      'Warranty replacement does not necessarily restart or extend the original warranty period unless the applicable manufacturer/supplier expressly provides otherwise.',
    ],
  },
  {
    title: 'Customer Responsibilities',
    bullets: [
      'Maintain the vehicle according to applicable manufacturer/service recommendations.',
      'Use the vehicle in a reasonable manner and avoid misuse or unauthorised modification.',
      'Keep invoices, job cards and warranty documents safely.',
      'Report suspected warranty issues promptly.',
      'Cooperate with inspection, diagnosis and manufacturer/supplier warranty procedures.',
    ],
  },
  {
    title: 'Warranty Claim Rejection',
    paragraphs: [
      'A warranty claim may be rejected where the applicable warranty terms do not cover the reported condition or where inspection establishes an excluded cause. For manufacturer/supplier warranty claims, the relevant manufacturer/supplier may make the final warranty determination. Where a claim is rejected, VahanXpert Services may communicate the available reason or assessment and provide an estimate for non-warranty repair where appropriate.',
    ],
  },
  {
    title: 'Warranty Dispute and Escalation',
    paragraphs: [
      'A Customer who disagrees with a warranty assessment may request a review by authorised management. Where the warranty is provided by a manufacturer, supplier or insurer, the Customer may also be required to follow that entity’s escalation or claim-review procedure. The Garage shall maintain relevant service records to support review of the issue.',
    ],
  },
  {
    title: 'Limitation',
    paragraphs: [
      'Nothing in this Policy is intended to remove or restrict any consumer or statutory right that cannot lawfully be excluded. Warranty rights shall be interpreted together with the applicable invoice, job card, manufacturer/supplier warranty and applicable law.',
    ],
  },
  {
    title: 'Records',
    bullets: [
      'VahanXpert Services may retain warranty claims, inspection reports, invoices, job cards, photographs, communication records and manufacturer/supplier correspondence for service history, warranty administration, dispute resolution, accounting and legal/compliance purposes.',
      'Warranty records should be linked to the relevant vehicle and job card wherever practicable.',
    ],
  },
];

export default function RepairPartsWarrantyContent() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <nav className={styles.backNav} aria-label="Policy navigation">
          <Link href="/refund-cancellation-policy" className={styles.backLink}>
            <span aria-hidden="true">←</span>
            Back to Policies
          </Link>
        </nav>

        <header className={styles.header}>
          <span className={styles.badge}>
            Warranty &amp; Service Protection
          </span>

          <h1 className={styles.title}>
            Repair &amp; Parts Warranty Policy
          </h1>

          <div className={styles.metaBar}>
            <span className={styles.metaItem}>Policy No.: VXS/WP/006</span>
            <span className={styles.metaDivider} aria-hidden="true">|</span>
            <span className={styles.metaItem}>Version: 1.0</span>
            <span className={styles.metaDivider} aria-hidden="true">|</span>
            <span className={styles.metaItem}>
              Effective Date: 20/09/2026
            </span>
          </div>
        </header>

        <main className={styles.contentCard}>
          {sections.map((section, index) => (
            <section className={styles.sectionCard} key={section.title}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className={styles.sectionTitle}>
                  {section.title}
                </h2>
              </div>

              <div className={styles.sectionBody}>
                {section.paragraphs?.map((paragraph) => (
                  <p className={styles.paragraph} key={paragraph}>
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className={styles.bulletList}>
                    {section.bullets.map((bullet) => (
                      <li className={styles.bulletItem} key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section className={styles.contactCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>21</span>
              <h2 className={styles.sectionTitle}>Business Contact</h2>
            </div>

            <h3 className={styles.businessName}>VahanXpert Services</h3>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Address</span>
                <p className={styles.contactValue}>
                  D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010
                </p>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a
                  className={styles.contactValue}
                  href="mailto:info.vahanxpert@gmail.com"
                >
                  info.vahanxpert@gmail.com
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Mobile</span>
                <a className={styles.contactValue} href="tel:+918930293896">
                  +91 8930293896
                </a>
              </div>
            </div>
          </section>

          <section className={styles.docControlCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>22</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>

            <div className={styles.tableResponsive}>
              <table className={styles.docTable}>
                <tbody>
                  <tr>
                    <th>Document Name</th>
                    <td>Repair &amp; Parts Warranty Policy</td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/WP/006</td>
                  </tr>
                  <tr>
                    <th>Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th>Review Frequency</th>
                    <td>
                      At least annually or whenever operational/legal
                      requirements change
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className={styles.footerNote}>
            VahanXpert Services | Repair &amp; Parts Warranty Policy
          </p>
        </main>
      </div>
    </div>
  );
}
