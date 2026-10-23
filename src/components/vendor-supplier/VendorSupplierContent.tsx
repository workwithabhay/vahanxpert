
import styles from "./VendorSupplierContent.module.css";

const sections = [
  {
    title: "1. Purpose",
    paragraphs: [
      "This Policy establishes a consistent framework for identifying, selecting, onboarding, approving, monitoring and managing vendors and suppliers engaged by VahanXpert Services. The objective is to support reliable supply, suitable quality, reasonable commercial terms, transparency, traceability and continuity of workshop operations.",
    ],
  },
  {
    title: "2. Scope",
    paragraphs: [
      "This Policy applies to vendors and suppliers providing spare parts, consumables, lubricants, batteries, tyres, tools, equipment, workshop materials, cleaning products, outsourced services, towing/transport support, technology services and other goods or services used for VahanXpert Services operations.",
    ],
  },
  {
    title: "3. Vendor Selection Principles",
    bullets: [
      "Vendors should be selected based on the nature of the requirement, suitability, quality, availability, commercial terms, service capability and reliability.",
      "Where relevant, preference may be given to manufacturers, authorised distributors or established suppliers.",
      "Vendor selection should be conducted fairly and without unauthorised personal benefit or favouritism.",
    ],
  },
  {
    title: "4. Vendor Due Diligence",
    paragraphs: [
      "Before onboarding a material or recurring vendor, VahanXpert Services may obtain and review information appropriate to the nature and risk of the relationship, such as legal/business name, contact details, GST details where applicable, PAN or other tax information where required, bank details, business credentials, product information, warranty terms and references.",
    ],
  },
  {
    title: "5. Vendor Onboarding",
    bullets: [
      "Material vendors should be approved by an authorised person before regular procurement.",
      "Vendor information should be recorded in the applicable vendor/supplier register or procurement records.",
      "Required documents should be retained according to applicable record-keeping requirements.",
    ],
  },
  {
    title: "6. Authorised Vendors",
    paragraphs: [
      "VahanXpert Services may maintain an approved vendor list for frequently purchased parts, materials and services. Employees should ordinarily procure through approved sources unless an exception is authorised.",
    ],
  },
  {
    title: "7. Spare Parts and Genuine Parts",
    paragraphs: [
      "Where vehicle repair requirements call for genuine, OEM-equivalent or other suitable parts, procurement should follow the applicable Vehicle Spare Parts Procurement, Genuine Parts & Parts Replacement Policy. Vendor selection should also consider part authenticity, compatibility, warranty support and traceability.",
    ],
  },
  {
    title: "8. Quality and Product Verification",
    bullets: [
      "Goods received should be checked, where reasonably practicable, for quantity, visible condition, part number/specification, packaging and apparent suitability.",
      "Incorrect, damaged, defective or materially inconsistent goods should be reported and handled through the supplier return/replacement process.",
      "Repeated quality issues may result in vendor review or suspension.",
    ],
  },
  {
    title: "9. Pricing and Commercial Terms",
    paragraphs: [
      "Vendor prices, taxes, delivery charges, payment terms, discounts, warranty terms and other material commercial conditions should be documented where appropriate. Purchases should be made on commercially reasonable terms consistent with the authorised requirement.",
    ],
  },
  {
    title: "10. Purchase Approval",
    paragraphs: [
      "Procurement should be supported by an authorised requirement, quotation, purchase order, approval, invoice or other appropriate record depending on the value and nature of the purchase. Employees should not create unauthorised purchasing commitments on behalf of VahanXpert Services.",
    ],
  },
  {
    title: "11. Conflict of Interest",
    paragraphs: [
      "Employees involved in vendor selection or purchasing should disclose material personal, family or financial relationships with vendors that could create a conflict of interest. Such employees may be removed from the relevant decision where management considers it appropriate.",
    ],
  },
  {
    title: "12. Gifts, Commission and Improper Benefits",
    bullets: [
      "Employees shall not demand or accept unauthorised commissions, kickbacks, cash benefits or personal favours from vendors.",
      "Reasonable business hospitality or gifts, where lawful and permitted by company rules, should not influence procurement decisions.",
      "Suspected improper payments or benefits should be reported to management.",
    ],
  },
  {
    title: "13. Vendor Performance Monitoring",
    paragraphs: [
      "Vendors may be reviewed based on factors such as product quality, availability, delivery performance, pricing, warranty support, responsiveness, documentation, complaint history and adherence to agreed terms.",
    ],
  },
  {
    title: "14. Vendor Complaints and Corrective Action",
    bullets: [
      "Material vendor issues should be documented where appropriate.",
      "Vendors may be asked to replace defective goods, correct service deficiencies or provide clarification.",
      "Repeated or serious failures may result in corrective action, temporary suspension or removal from the approved vendor list.",
    ],
  },
  {
    title: "15. Delivery and Receiving",
    paragraphs: [
      "Goods should be received through an appropriate workshop or designated receiving process. Quantity, condition and relevant documentation should be checked where reasonably practicable before acceptance.",
    ],
  },
  {
    title: "16. Invoice and Payment Records",
    bullets: [
      "Vendor invoices should be checked against the relevant purchase, delivery and service records where applicable.",
      "Bank details and payment instructions should be handled carefully to reduce payment fraud or misdirection risk.",
      "Changes to vendor bank details should be verified through an appropriate independent or established communication channel before payment where reasonably practicable.",
    ],
  },
  {
    title: "17. Warranty and Returns",
    paragraphs: [
      "Where supplied goods carry manufacturer, distributor or supplier warranty, warranty and return claims should be handled according to the applicable terms. Relevant invoices, part numbers and supporting records may be retained to facilitate claims.",
    ],
  },
  {
    title: "18. Confidentiality",
    paragraphs: [
      "Vendor quotations, pricing, contracts, commercial information and other confidential business information should be shared only with persons who have an authorised business need to access it.",
    ],
  },
  {
    title: "19. Vendor Access to Workshop",
    bullets: [
      "Third-party vendors or service personnel entering workshop areas should follow applicable safety and access instructions.",
      "Access to Customer vehicles, keys, records and workshop systems should be limited to what is necessary for the authorised service.",
      "Vendors should not independently move or use Customer vehicles unless specifically authorised.",
    ],
  },
  {
    title: "20. Outsourced Services",
    paragraphs: [
      "Where services such as towing, transport, specialised repairs, equipment servicing or other outsourced work are assigned to third parties, the relevant scope, responsibility, commercial terms and service expectations should be communicated appropriately.",
    ],
  },
  {
    title: "21. Vendor Data and Records",
    bullets: [
      "Vendor records may include contact information, tax/business documents, quotations, purchase records, invoices, warranty records and performance information.",
      "Records should be stored and accessed according to applicable business and privacy requirements.",
      "Records may be retained for accounting, audit, warranty, dispute resolution and operational purposes.",
    ],
  },
  {
    title: "22. Vendor Suspension or Termination",
    paragraphs: [
      "VahanXpert Services may suspend or discontinue a vendor relationship where there are repeated quality failures, non-performance, material misrepresentation, suspected fraud, unauthorised conduct, safety concerns, serious contractual issues or other legitimate business reasons, subject to applicable contractual terms.",
    ],
  },
  {
    title: "23. Emergency / Alternative Supplier",
    paragraphs: [
      "Where a critical part or service is unavailable, VahanXpert Services may use an alternative supplier after appropriate approval. Emergency procurement should still maintain reasonable records of the supplier, item/service, price and approval.",
    ],
  },
  {
    title: "24. Employee Responsibilities",
    bullets: [
      "Use authorised vendors where required.",
      "Do not split purchases or manipulate procurement records to avoid approval requirements.",
      "Maintain accurate purchase and vendor documentation.",
      "Report suspected counterfeit goods, fraud, conflicts of interest or serious vendor misconduct.",
    ],
  },
  {
    title: "25. Management Responsibilities",
    bullets: [
      "Maintain appropriate oversight of material vendor relationships.",
      "Review significant vendor performance issues.",
      "Approve exceptions where required.",
      "Ensure appropriate controls for procurement, payments and vendor records.",
    ],
  },
  {
    title: "26. Policy Review",
    paragraphs: [
      "This Policy shall be reviewed periodically and may be updated based on vendor arrangements, workshop requirements, procurement practices, operational experience or applicable legal and business requirements.",
    ],
  },
];

export default function VendorSupplierContent() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>Vendor &amp; Supplier Management Policy</h1>

          <div className={styles.policyMeta}>
            <span><strong>Policy No.:</strong> VXS/VSM/027</span>
            <span aria-hidden="true">|</span>
            <span><strong>Version:</strong> 1.0</span>
            <span aria-hidden="true">|</span>
            <span><strong>Effective Date:</strong> 20/09/2026</span>
          </div>
        </header>

        
<div className={styles.documentCards}>
  {sections.map((section) => (
    <section
      className={`${styles.document} ${styles.policySection}`}
      key={section.title}
    >
      <h2>{section.title}</h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {section.bullets && (
        <ul>
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </section>
  ))}

  <section className={`${styles.document} ${styles.policySection}`}>
    <h2>27. Business Contact</h2>

    <div className={styles.contact}>
      <strong>VahanXpert Services</strong>
      <p>
        D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010
      </p>
      <p>
        Email:{" "}
        <a href="mailto:info.vahanxpert@gmail.com">
          info.vahanxpert@gmail.com
        </a>
      </p>
      <p>
        Mobile:{" "}
        <a href="tel:+918930293896">+91 8930293896</a>
      </p>
    </div>
  </section>

  <section className={`${styles.document} ${styles.policySection}`}>
    <h2>28. Document Control</h2>

    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th scope="row">Document Name</th>
            <td>Vendor &amp; Supplier Management Policy</td>
          </tr>
          <tr>
            <th scope="row">Organisation</th>
            <td>VahanXpert Services</td>
          </tr>
          <tr>
            <th scope="row">Policy Number</th>
            <td>VXS/VSM/027</td>
          </tr>
          <tr>
            <th scope="row">Version / Effective Date</th>
            <td>1.0 / 20/09/2026</td>
          </tr>
          <tr>
            <th scope="row">Review Frequency</th>
            <td>
              At least annually or whenever procurement/vendor requirements
              change
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p className={styles.footerText}>
    VahanXpert Services | Vendor &amp; Supplier Management Policy
  </p>
</div>

      </div>
    </div>
  );
}
