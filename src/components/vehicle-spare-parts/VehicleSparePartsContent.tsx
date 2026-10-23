
import styles from './VehicleSparePartsContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes the framework for sourcing, selecting, approving, receiving, inspecting, installing and replacing vehicle spare parts used in Customer vehicles at VahanXpert Services. It is intended to support appropriate part selection, traceability, quality control and transparent Customer communication.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to spare parts, components, assemblies, consumables and accessories procured or supplied by VahanXpert Services for servicing, repair, accidental repair, insurance work, warranty work or other authorised vehicle services.',
    ],
  },
  {
    title: '3. Part Selection',
    bullets: [
      'Parts should be selected based on vehicle make/model, variant, year, technical specifications, part number and the repair requirement.',
      'Where available, manufacturer or authorised distributor information may be used to verify compatibility.',
      'The selected part should be reasonably suitable for the intended vehicle and repair.',
    ],
  },
  {
    title: '4. Genuine / OEM / Aftermarket Parts',
    paragraphs: [
      'Depending on availability, Customer approval, vehicle requirements and applicable service terms, VahanXpert Services may use genuine manufacturer parts, OEM-equivalent parts, aftermarket parts or other suitable components. The type of part and applicable terms should be communicated to the Customer where material to the estimate or service decision.',
    ],
  },
  {
    title: '5. Customer Approval',
    bullets: [
      'Where a part replacement is chargeable, the replacement should ordinarily be included in the approved estimate or separately approved by the Customer.',
      'Approval may be obtained through signed documentation, email, WhatsApp, SMS, digital approval, OTP, system confirmation or another authorised method.',
      'The approval record should identify the relevant part or replacement work where reasonably practicable.',
    ],
  },
  {
    title: '6. Procurement Sources',
    paragraphs: [
      'Parts may be procured from manufacturers, authorised distributors, established suppliers, insurers, approved vendors or other commercially suitable sources. Vendor selection may consider availability, compatibility, price, quality, warranty support and delivery requirements.',
    ],
  },
  {
    title: '7. Part Verification',
    bullets: [
      'Where reasonably practicable, received parts should be checked for part number, packaging, visible condition and apparent compatibility.',
      'Damaged, incorrect or visibly unsuitable parts should be identified before installation where reasonably practicable.',
      'Invoices or purchase records may be retained for traceability.',
    ],
  },
  {
    title: '8. Counterfeit / Suspected Non-Genuine Parts',
    paragraphs: [
      "VahanXpert Services should take reasonable steps to avoid knowingly installing counterfeit or falsely represented parts. If a part's authenticity or suitability is materially doubtful, the workshop may seek supplier/manufacturer confirmation or select an alternative source.",
    ],
  },
  {
    title: '9. Customer-Provided Parts',
    bullets: [
      'Customer-provided parts may be accepted subject to inspection and compatibility.',
      'VahanXpert Services may decline installation of a part that appears unsafe, incompatible, damaged, defective or unsuitable.',
      'Warranty for Customer-provided parts generally remains with the relevant manufacturer/supplier unless VahanXpert Services expressly provides otherwise in writing.',
    ],
  },
  {
    title: '10. Part Replacement and Removed Parts',
    paragraphs: [
      'Where practicable, replaced parts may be made available for Customer inspection upon request, subject to safety, warranty return requirements, supplier/manufacturer inspection, insurance procedures, disposal requirements or other applicable restrictions.',
    ],
  },
  {
    title: '11. Warranty on Spare Parts',
    paragraphs: [
      'Warranty for spare parts shall remain subject to the applicable manufacturer, authorised distributor or supplier warranty policy. VahanXpert Services does not independently extend, modify or override such warranty unless a separate written warranty is expressly provided by VahanXpert Services.',
    ],
  },
  {
    title: '12. Warranty Claim Support',
    paragraphs: [
      'Where a supplied part is suspected to have failed within its applicable warranty period, VahanXpert Services may assist the Customer in raising or coordinating the relevant manufacturer, distributor or supplier claim. Final warranty eligibility, approval and remedy shall remain subject to the applicable warranty terms.',
    ],
  },
  {
    title: '13. Parts Availability and Substitution',
    paragraphs: [
      'If the approved part is unavailable, discontinued or subject to unreasonable delay, VahanXpert Services may propose an alternative part. A material change in part type, specification or price should be communicated to the Customer and approved where applicable before installation.',
    ],
  },
  {
    title: '14. Insurance Repairs',
    paragraphs: [
      "For insurance-related repairs, part selection may be affected by the insurer's approved estimate, surveyor assessment, policy terms and repair authorisation. Any insurance-approved part arrangement remains subject to the relevant insurer and repair documentation.",
    ],
  },
  {
    title: '15. Pricing and Estimate',
    bullets: [
      'Part prices may vary based on supplier pricing, availability, taxes, freight and market conditions.',
      'The estimate should identify the applicable part charge where reasonably practicable.',
      'Additional part requirements discovered during repair should be communicated and approved according to the Vehicle Service Estimate, Customer Approval & Job Card Policy.',
    ],
  },
  {
    title: '16. Storage and Handling',
    bullets: [
      'Parts should be stored in a manner reasonably suitable for their condition and type.',
      'Sensitive parts should be protected from moisture, contamination, impact or other foreseeable damage.',
      'Parts should be identified or linked to the relevant job/order where reasonably practicable.',
    ],
  },
  {
    title: '17. Installation',
    paragraphs: [
      'Parts should be installed by appropriately trained personnel using suitable tools and procedures. Manufacturer or technical instructions may be followed where available and relevant to the repair.',
    ],
  },
  {
    title: '18. Compatibility and Modification',
    paragraphs: [
      'A part should not be knowingly installed where it is materially incompatible with the vehicle or creates an unreasonable safety risk. Modifications required to accommodate a non-standard part should be disclosed to the Customer where material and approved where applicable.',
    ],
  },
  {
    title: '19. Quality Check',
    paragraphs: [
      'After replacement, the relevant repair may be inspected or tested as appropriate. Diagnostic checks, functional tests or road testing may be performed where reasonably necessary and safe.',
    ],
  },
  {
    title: '20. Defective or Incorrect Part',
    bullets: [
      'If a part is found defective, incorrect or unsuitable before installation, it should ordinarily be returned or replaced through the applicable supplier process.',
      'If a defect becomes apparent after installation, the vehicle may be inspected and the applicable warranty or supplier process may be initiated.',
      'Additional repair work resulting from an unrelated fault should be treated separately from a parts warranty claim.',
    ],
  },
  {
    title: '21. Records and Traceability',
    bullets: [
      'Relevant part numbers, supplier details, purchase records, invoices and installation information may be retained.',
      'Records may be used for warranty, service history, insurance, accounting, quality control and dispute resolution.',
      'Customer approval and final invoice records should correspond reasonably with parts supplied and installed.',
    ],
  },
  {
    title: '22. Customer Communication',
    paragraphs: [
      'Where a part choice materially affects price, warranty, availability, expected service life or compatibility, the Customer should be informed before installation where reasonably practicable.',
    ],
  },
  {
    title: '23. Customer Responsibilities',
    bullets: [
      'Provide accurate vehicle information.',
      'Inform the workshop of prior modifications or non-standard components where relevant.',
      'Review and approve the proposed part replacement where required.',
      'Retain invoices and warranty documents where applicable.',
      'Follow manufacturer/service instructions after replacement.',
    ],
  },
  {
    title: '24. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on supplier arrangements, manufacturer requirements, workshop operations, warranty processes or applicable legal requirements.',
    ],
  },
];

export default function VehicleSparePartsContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>
            Vehicle Spare Parts Procurement, Genuine Parts &amp; Parts
            Replacement Policy
          </h1>

          <div className={styles.policyMeta}>
            <span>
              <strong>Policy No.:</strong> VXS/SPR/030
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
            <td>
              Vehicle Spare Parts Procurement, Genuine Parts &amp; Parts
              Replacement Policy
            </td>
          </tr>
          <tr>
            <th scope="row">Organisation</th>
            <td>VahanXpert Services</td>
          </tr>
          <tr>
            <th scope="row">Policy Number</th>
            <td>VXS/SPR/030</td>
          </tr>
          <tr>
            <th scope="row">Version / Effective Date</th>
            <td>1.0 / 20/09/2026</td>
          </tr>
          <tr>
            <th scope="row">Review Frequency</th>
            <td>
              At least annually or whenever parts/procurement requirements
              change
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p className={styles.footerText}>
    VahanXpert Services | Vehicle Spare Parts Procurement, Genuine Parts &amp;
    Parts Replacement Policy
  </p>
</div>

      </div>
    </section>
  );
}
