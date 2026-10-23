
import styles from './VehicleRepairWarrantyContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy sets out the warranty framework applicable to repair and service work performed by VahanXpert Services and to spare parts supplied or installed as part of such work. It is intended to clearly distinguish workshop workmanship obligations from manufacturer, authorised distributor or supplier warranty terms applicable to individual parts.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to vehicle servicing, repairs, parts replacement, mechanical and electrical work, AC work, accidental repairs, insurance-related repairs and other services for which a warranty is expressly provided in the applicable estimate, invoice, job card or other written communication.',
    ],
  },
  {
    title: '3. Warranty on Repair Workmanship',
    bullets: [
      'Where VahanXpert Services expressly provides a workmanship/service warranty, the applicable period and scope shall be as stated on the relevant invoice, job card, warranty document or other written communication.',
      'The workmanship warranty relates to the specific repair/service performed and does not automatically cover unrelated vehicle components or subsequent failures.',
      'Where no separate workmanship warranty period is expressly stated, any warranty entitlement shall be determined according to the applicable service terms and applicable law.',
    ],
  },
  {
    title: '4. Warranty on Spare Parts',
    paragraphs: [
      'Warranty for spare parts shall be governed by the applicable warranty policy and terms of the respective manufacturer, authorised distributor or supplier. The warranty period, coverage, exclusions, claim requirements and remedy may differ from one part or supplier to another.',
    ],
  },
  {
    title: '5. Manufacturer / Supplier Warranty',
    bullets: [
      'VahanXpert Services does not independently extend, modify or guarantee a third-party manufacturer/supplier warranty unless expressly agreed in writing.',
      'Where a part is covered by a manufacturer, authorised distributor or supplier warranty, VahanXpert Services may assist the Customer in coordinating the warranty claim where reasonably practicable.',
      "The final acceptance, inspection and warranty decision for a third-party part remains subject to the applicable manufacturer's, distributor's or supplier's terms and procedures.",
    ],
  },
  {
    title: '6. Warranty Period',
    paragraphs: [
      'The applicable warranty period should be verified from the invoice, warranty document, manufacturer/supplier terms or other applicable documentation. Different parts installed on the same vehicle may have different warranty periods.',
    ],
  },
  {
    title: '7. Warranty Claim Process',
    bullets: [
      'The Customer should contact VahanXpert Services as soon as a suspected warranty issue is identified.',
      'The vehicle or relevant component may need to be presented for inspection and diagnosis.',
      'The Garage may inspect the repair history, part details, invoice, job card and applicable warranty conditions before determining the appropriate next step.',
      'The manufacturer, distributor or supplier may require photographs, testing, physical inspection or return of the part before approving a warranty claim.',
    ],
  },
  {
    title: '8. Warranty Inspection',
    paragraphs: [
      'A warranty claim does not automatically establish that the repair or part is defective. VahanXpert Services may conduct a reasonable inspection to identify the reported problem and determine whether it appears related to the original repair or part. Where a third-party warranty applies, the supplier/manufacturer’s assessment may also be required.',
    ],
  },
  {
    title: '9. Warranty on Replacement Part',
    paragraphs: [
      'Where a defective part is replaced under an applicable manufacturer/supplier warranty, the replacement part shall generally remain subject to the applicable warranty terms of that manufacturer/supplier. The replacement does not automatically create a new independent warranty period from VahanXpert Services unless expressly stated.',
    ],
  },
  {
    title: '10. Exclusions',
    bullets: [
      'Normal wear and tear, consumables and maintenance items may be excluded where permitted by the applicable warranty terms.',
      'Damage caused by accident, misuse, negligence, overloading, racing, improper operation or unauthorised modification may be excluded.',
      'Damage resulting from continued use after a known warning sign or failure may be excluded where permitted by applicable warranty terms.',
      'Failures caused by unrelated components or pre-existing vehicle conditions may fall outside the scope of the original repair warranty.',
      'Manufacturer/supplier-specific exclusions shall apply to parts covered by third-party warranties.',
    ],
  },
  {
    title: '11. Unauthorised Repair or Modification',
    paragraphs: [
      'Where a warranty claim concerns a component that has been modified, dismantled, repaired or replaced by an unauthorised third party, the applicable warranty may be affected or rejected subject to the relevant warranty terms and applicable law.',
    ],
  },
  {
    title: '12. Customer Responsibilities',
    bullets: [
      'Use the vehicle in accordance with the manufacturer’s operating and maintenance recommendations.',
      'Follow recommended maintenance intervals where applicable.',
      'Report suspected defects promptly and avoid unnecessary continued use where continued operation may worsen the issue.',
      'Produce the relevant invoice, warranty document or job-card details when making a claim.',
      'Make the vehicle available for reasonable inspection, testing or diagnosis.',
    ],
  },
  {
    title: '13. Maintenance and Service History',
    paragraphs: [
      'Where a warranty condition requires periodic maintenance, the Customer may be required to provide relevant service records. VahanXpert Services may review its own job records and invoices for work performed at the Garage. Maintenance performed elsewhere may be subject to the applicable manufacturer/supplier warranty terms.',
    ],
  },
  {
    title: '14. Insurance Repair Warranty',
    bullets: [
      'Warranty for insurance-related repairs shall apply according to the applicable repair scope, parts warranty and workshop workmanship terms.',
      'Insurance approval does not by itself alter the manufacturer/supplier warranty applicable to a part.',
      'Any insurer-specific process or surveyor requirement shall be followed where relevant.',
    ],
  },
  {
    title: '15. Warranty and Consumables',
    paragraphs: [
      'Consumables such as oils, filters, lubricants, coolants, bulbs, fuses and similar items may have limited or specific warranty coverage depending on the item and manufacturer/supplier terms. The applicable invoice or supplier warranty terms should be referred to for coverage.',
    ],
  },
  {
    title: '16. Warranty Transfer',
    paragraphs: [
      'Any transferability of a warranty to a subsequent vehicle owner shall depend on the applicable manufacturer, supplier or workshop warranty terms. VahanXpert Services does not guarantee transferability unless expressly stated in writing.',
    ],
  },
  {
    title: '17. Warranty Claim Costs',
    bullets: [
      'Where a valid warranty claim is accepted, the covered remedy shall be handled according to the applicable warranty terms.',
      'Costs outside the warranty scope, including unrelated repairs, excluded components, diagnostic requirements or other non-covered items, may be chargeable where applicable.',
      'Any material charge identified during warranty inspection should be communicated before chargeable work is undertaken where reasonably practicable.',
    ],
  },
  {
    title: '18. Roadside Assistance / Towing',
    paragraphs: [
      'If a suspected warranty failure makes the vehicle unsafe or impractical to drive, the Customer should avoid unnecessary driving and may arrange appropriate roadside assistance or towing. Any reimbursement or coverage for such costs depends on the applicable warranty, insurance or assistance terms.',
    ],
  },
  {
    title: '19. Warranty Claim Rejection',
    paragraphs: [
      'If a manufacturer, supplier or authorised warranty administrator rejects a claim, the reasons provided by that party may be communicated to the Customer where appropriate. The Customer may pursue any review or appeal process offered by the relevant manufacturer, supplier, insurer or other responsible party.',
    ],
  },
  {
    title: '20. Dispute and Escalation',
    paragraphs: [
      'If a Customer disputes a warranty decision, VahanXpert Services may review the job card, invoice, part details, inspection findings, warranty terms and relevant communications. Where the warranty is provided by a manufacturer, distributor or supplier, the matter may also be referred to that party for determination.',
    ],
  },
  {
    title: '21. No Waiver of Statutory Rights',
    paragraphs: [
      'Nothing in this Policy is intended to exclude, restrict or waive any consumer or statutory right that cannot lawfully be excluded or waived. The applicable remedy shall be determined according to the relevant contractual terms, warranty terms and applicable law.',
    ],
  },
  {
    title: '22. Records and Documentation',
    bullets: [
      'Warranty claims, inspection reports, photographs, supplier communications, replacement records, invoices and job cards may be retained for warranty administration and dispute resolution.',
      'Records should be linked to the relevant vehicle and job card where practicable.',
      'Warranty records may be shared with manufacturers, distributors, suppliers, insurers or authorised service partners where reasonably necessary to process a claim.',
    ],
  },
  {
    title: '23. Privacy and Confidentiality',
    paragraphs: [
      "Customer, vehicle, warranty and service information shall be used for legitimate service, warranty, insurance, dispute-resolution and legal/compliance purposes and accessed or shared only as reasonably necessary, subject to applicable law and VahanXpert Services' privacy practices.",
    ],
  },
  {
    title: '24. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on manufacturer/supplier warranty arrangements, workshop operations, customer feedback, insurance requirements or applicable legal requirements.',
    ],
  },
];

export default function VehicleRepairWarrantyContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>Vehicle Repair &amp; Parts Warranty Policy</h1>

          <div className={styles.policyMeta}>
            <span>
              <strong>Policy No.:</strong> VXS/WP/016
            </span>
            <span aria-hidden="true">|</span>
            <span>
              <strong>Version:</strong> 1.0
            </span>
            <span aria-hidden="true">|</span>
            <span>
              <strong>Effective Date:</strong> 20/09/2026
            </span>
          </div>
        </header>

        
<div className={styles.documentCards}>
  {sections.map((section) => (
    <section
      className={`${styles.document} ${styles.policySection}`}
      key={section.title}
    >
      <h2>{section.title}</h2>

      {section.paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {section.bullets && (
        <ul>
          {section.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </section>
  ))}

  <section className={`${styles.document} ${styles.policySection}`}>
    <h2>25. Business Contact</h2>

    <div className={styles.contact}>
      <strong>VahanXpert Services</strong>
      <p>
        D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010
      </p>
      <p>
        Email:{' '}
        <a href="mailto:info.vahanxpert@gmail.com">
          info.vahanxpert@gmail.com
        </a>
      </p>
      <p>
        Mobile:{' '}
        <a href="tel:+918930293896">+91 8930293896</a>
      </p>
    </div>
  </section>

  <section className={`${styles.document} ${styles.policySection}`}>
    <h2>26. Document Control</h2>

    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th scope="row">Document Name</th>
            <td>Vehicle Repair &amp; Parts Warranty Policy</td>
          </tr>
          <tr>
            <th scope="row">Organisation</th>
            <td>VahanXpert Services</td>
          </tr>
          <tr>
            <th scope="row">Policy Number</th>
            <td>VXS/WP/016</td>
          </tr>
          <tr>
            <th scope="row">Version / Effective Date</th>
            <td>1.0 / 20/09/2026</td>
          </tr>
          <tr>
            <th scope="row">Review Frequency</th>
            <td>
              At least annually or whenever operational/legal requirements
              change
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p className={styles.footerText}>
    VahanXpert Services | Vehicle Repair &amp; Parts Warranty Policy
  </p>
</div>

      </div>
    </section>
  );
}
