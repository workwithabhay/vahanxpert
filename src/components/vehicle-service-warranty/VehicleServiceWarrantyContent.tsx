
import styles from './VehicleServiceWarrantyContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy sets out the general framework for warranty claims relating to services, workmanship and replacement parts supplied or installed by VahanXpert Services. It is intended to provide Customers with a clear process for raising warranty-related concerns and to define the conditions under which a claim may be reviewed.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to eligible repair, service and workmanship activities performed by VahanXpert Services and to replacement parts supplied or installed through the workshop, subject to the specific warranty terms applicable to the relevant service or part.',
    ],
  },
  {
    title: '3. Parts Warranty',
    paragraphs: [
      "Warranty on spare parts shall remain strictly subject to the applicable warranty policy and terms of the relevant manufacturer, authorised distributor or supplier. VahanXpert Services does not independently extend, alter or override a manufacturer's or supplier's warranty unless a separate written warranty is expressly provided by VahanXpert Services.",
    ],
  },
  {
    title: '4. Workmanship Warranty',
    paragraphs: [
      'Where VahanXpert Services expressly provides a workmanship warranty for a particular job, the applicable warranty period, scope and exclusions may be stated on the invoice, job card, warranty document, service package or other written communication. If no separate workmanship warranty is expressly provided, the applicable service terms shall govern.',
    ],
  },
  {
    title: '5. Warranty Start Date',
    paragraphs: [
      'Unless a specific written warranty states otherwise, the applicable warranty period may be calculated from the date of service completion, invoice date or the date specified in the relevant warranty record. The exact warranty start and expiry dates should be verified from the applicable service documentation.',
    ],
  },
  {
    title: '6. Warranty Claim Process',
    bullets: [
      'The Customer should contact VahanXpert Services as soon as a suspected warranty-related issue is noticed.',
      'The Customer may be asked to provide the invoice, job-card number, vehicle registration number and relevant service details.',
      'The vehicle may need to be brought to the workshop for inspection and diagnosis.',
      'The warranty decision should be based on the applicable warranty terms and inspection findings.',
    ],
  },
  {
    title: '7. Inspection and Diagnosis',
    paragraphs: [
      'A warranty claim does not automatically establish that the reported issue is covered. VahanXpert Services may inspect, diagnose and test the vehicle to determine whether the issue is related to the covered service, workmanship or part and whether any exclusion applies.',
    ],
  },
  {
    title: '8. Covered Workmanship Issue',
    paragraphs: [
      'Where an inspection establishes that an eligible workmanship issue is covered under an expressly provided VahanXpert Services workmanship warranty, the workshop may, subject to the applicable terms, rectify the relevant workmanship issue without charging the covered labour again.',
    ],
  },
  {
    title: '9. Manufacturer / Supplier Part Claim',
    paragraphs: [
      "Where the suspected failure relates to a replacement part carrying manufacturer, distributor or supplier warranty, VahanXpert Services may assist the Customer with the applicable claim process. Approval, replacement and other remedies shall remain subject to the relevant manufacturer's, distributor's or supplier's warranty conditions.",
    ],
  },
  {
    title: '10. Common Exclusions',
    bullets: [
      'Normal wear and tear or consumable deterioration.',
      'Damage caused by accident, collision, misuse, negligence or improper operation.',
      'Damage caused by unauthorised modification, alteration or repair by another person or workshop.',
      'Failure caused by use of unsuitable parts, fluids, fuel or accessories where relevant.',
      'Damage caused by continued operation after a warning sign, abnormal noise or known fault where continued use contributed to the damage.',
      'Damage caused by external events, flooding, fire, theft, vandalism, rodents or other circumstances outside the covered service/workmanship scope.',
      'Items or parts expressly excluded by the applicable warranty terms.',
    ],
  },
  {
    title: '11. Customer Responsibilities During Warranty',
    bullets: [
      "Follow the vehicle manufacturer's recommended operating and maintenance instructions.",
      'Use the vehicle appropriately and avoid knowingly operating it with a serious unresolved fault.',
      'Return the vehicle for inspection when requested for a warranty assessment.',
      "Provide accurate information regarding the vehicle's use, previous repairs and relevant symptoms.",
      'Do not authorise third-party repairs that may affect diagnosis of the warranty issue without informing VahanXpert Services where reasonably practicable.',
    ],
  },
  {
    title: '12. Third-Party Repairs',
    paragraphs: [
      "If a vehicle or the relevant component is repaired, modified or dismantled by another workshop or unauthorised person after VahanXpert Services' work, the effect on warranty eligibility may be assessed under the applicable warranty terms. This does not automatically remove any statutory or other rights that cannot lawfully be excluded.",
    ],
  },
  {
    title: '13. Warranty Repair and Additional Work',
    paragraphs: [
      'If inspection identifies a warranty-covered issue together with unrelated faults or additional Customer-requested work, the covered and non-covered work should be identified separately. Customer approval may be required for chargeable work outside the warranty scope.',
    ],
  },
  {
    title: '14. Towing / Recovery',
    paragraphs: [
      'Where a vehicle becomes unsafe or immobile due to a suspected warranty issue, the Customer should contact VahanXpert Services for guidance. Any towing, roadside assistance or recovery benefit shall depend on the applicable service package, warranty terms or separate arrangement.',
    ],
  },
  {
    title: '15. No Automatic Cash Refund',
    paragraphs: [
      'A warranty remedy will generally be provided through inspection, rectification, repair, replacement or another remedy permitted under the applicable warranty terms. A cash refund is not automatically available merely because a warranty claim is raised, unless required by the applicable agreement or law.',
    ],
  },
  {
    title: '16. Warranty Transferability',
    paragraphs: [
      'Whether a warranty can be transferred to another owner or vehicle user shall depend on the specific warranty terms applicable to the service or part. Manufacturer or supplier warranty transfer rules shall apply to the relevant part.',
    ],
  },
  {
    title: '17. Warranty Documentation',
    bullets: [
      'The Customer should retain the original invoice, job card and relevant warranty documentation.',
      'VahanXpert Services may maintain service and warranty records for verification, quality control, dispute resolution and legal/compliance purposes.',
      'Warranty records may include photographs, diagnostic results, parts details and inspection findings where relevant.',
    ],
  },
  {
    title: '18. Warranty Claim Decision',
    paragraphs: [
      'The warranty outcome may be communicated after the relevant inspection and, where required, consultation with the manufacturer, distributor, supplier, insurer or technical specialist. The decision should identify, where reasonably practicable, whether the reported issue falls within the applicable warranty scope.',
    ],
  },
  {
    title: '19. Customer Disagreement',
    paragraphs: [
      "If a Customer disagrees with a warranty decision, the Customer may request a review through VahanXpert Services' customer grievance process. Relevant records, inspection findings, warranty terms and communications may be reviewed.",
    ],
  },
  {
    title: '20. Service and Maintenance Outside Warranty',
    paragraphs: [
      'Regular servicing, maintenance, consumable replacement and repairs not covered by a warranty remain chargeable according to the applicable estimate, service package or price terms.',
    ],
  },
  {
    title: '21. Policy Does Not Replace Manufacturer Warranty',
    paragraphs: [
      "This Policy is a workshop-level framework and does not replace or override the written warranty terms of any vehicle manufacturer, spare-parts manufacturer, distributor, supplier or insurer. Where a specific written warranty contains different terms, those specific terms shall apply to the relevant product or service, subject to applicable law.",
    ],
  },
  {
    title: '22. Customer Communication',
    paragraphs: [
      'Warranty terms, where applicable, should be communicated through the invoice, job card, service package, warranty document or other appropriate customer communication. Customers should be given a reasonable opportunity to understand applicable exclusions and claim requirements.',
    ],
  },
  {
    title: '23. Privacy',
    paragraphs: [
      "Information collected during warranty inspection and claim handling shall be handled according to VahanXpert Services' applicable privacy practices and may be shared with relevant manufacturers, suppliers, insurers or technical service providers where reasonably necessary to assess or process the claim.",
    ],
  },
  {
    title: '24. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on service arrangements, manufacturer/supplier warranty requirements, workshop operations or applicable legal requirements.',
    ],
  },
];

export default function VehicleServiceWarrantyContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>
            Vehicle Service Warranty &amp; Workmanship Warranty Policy
          </h1>

          <div className={styles.policyMeta}>
            <span>
              <strong>Policy No.:</strong> VXS/WAR/026
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

        <article className={styles.document}>
          {sections.map((section) => (
            <section className={styles.policySection} key={section.title}>
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

          <section className={styles.policySection}>
            <h2>25. Business Contact</h2>
            <div className={styles.contact}>
              <strong>VahanXpert Services</strong>
              <p>
                D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh –
                226010
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

          <section className={styles.policySection}>
            <h2>26. Document Control</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th scope="row">Document Name</th>
                    <td>
                      Vehicle Service Warranty &amp; Workmanship Warranty
                      Policy
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th scope="row">Policy Number</th>
                    <td>VXS/WAR/026</td>
                  </tr>
                  <tr>
                    <th scope="row">Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th scope="row">Review Frequency</th>
                    <td>
                      At least annually or whenever warranty/service
                      arrangements change
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className={styles.footerText}>
            VahanXpert Services | Vehicle Service Warranty &amp; Workmanship
            Warranty Policy
          </p>
        </article>
      </div>
    </section>
  );
}
