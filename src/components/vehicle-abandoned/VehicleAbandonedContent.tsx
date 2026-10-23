
import styles from './VehicleAbandonedContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes a consistent process for vehicles that remain at any VahanXpert Services garage or workshop after completion of authorised work, after a repair estimate or inspection, after an insurance claim process, or where the Customer does not collect the vehicle or cannot reasonably be contacted. The Policy is intended to protect Customer property, maintain records, manage workshop space and ensure that any further action is taken through an appropriate and lawful process.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to all VahanXpert Services garages, workshops, branches, service locations and authorised personnel handling Customer vehicles. It applies to repaired, partially repaired, accident-damaged, insurance-related, disputed, unpaid, unclaimed or otherwise uncollected vehicles.',
    ],
  },
  {
    title: '3. Definition',
    paragraphs: [
      "For this Policy, an 'Uncollected Vehicle' means a Customer vehicle that remains at a VahanXpert location beyond the reasonable collection period communicated to the Customer. An 'Abandoned Vehicle' means a vehicle for which the Customer or responsible owner/authorised person has not collected the vehicle and, after reasonable documented attempts to contact them, the vehicle continues to remain at the workshop without an active agreed repair or other documented reason.",
    ],
  },
  {
    title: '4. Multiple Garage / Location Control',
    bullets: [
      'Each VahanXpert garage should maintain an identifiable record of vehicles physically located at that garage.',
      'A vehicle should not be moved from one VahanXpert location to another without an operational reason and appropriate internal record.',
      'Where a vehicle is transferred between garages, the receiving location should record the vehicle condition, keys, job reference and transfer details where practicable.',
    ],
  },
  {
    title: '5. Vehicle Intake and Identification',
    paragraphs: [
      'At the time of vehicle acceptance, VahanXpert should record available vehicle identification and service information, such as registration number, make/model, Customer details, job card number, date of receipt, reported work, visible condition and key/accessory information where applicable.',
    ],
  },
  {
    title: '6. Normal Collection Process',
    bullets: [
      'The Customer should be informed when the vehicle is ready for collection or when further action is required.',
      'The Customer should be provided with applicable outstanding payment information and collection requirements.',
      'Vehicle delivery should follow the applicable Vehicle Delivery & Handover Policy.',
    ],
  },
  {
    title: '7. When a Vehicle Becomes Uncollected',
    paragraphs: [
      'A vehicle may be classified as uncollected when it remains at the workshop after the communicated collection date or after the repair/service has reasonably reached a stage at which Customer action is required. The classification should be documented rather than based solely on an informal assumption.',
    ],
  },
  {
    title: '8. Customer Contact Attempts',
    bullets: [
      'VahanXpert should make reasonable attempts to contact the Customer through available authorised contact details.',
      'Contact attempts may include telephone calls, SMS, WhatsApp, email or other approved communication channels.',
      'The date, method and general outcome of material contact attempts should be recorded.',
    ],
  },
  {
    title: '9. Written Notice',
    paragraphs: [
      'Where a vehicle remains uncollected despite reasonable contact attempts, VahanXpert may issue a written notice requesting collection or a response within a specified reasonable period. The notice should identify the vehicle, relevant job/service reference, location, outstanding action and contact details for resolution.',
    ],
  },
  {
    title: '10. Outstanding Repair Work',
    paragraphs: [
      'If the vehicle cannot be completed because of Customer instructions, non-availability of parts, pending insurance approval, non-payment, dispute or another documented reason, the reason should be recorded. VahanXpert should not represent an incomplete vehicle as ready for collection when material authorised work remains pending.',
    ],
  },
  {
    title: '11. Unpaid Charges',
    bullets: [
      'Where amounts remain payable, VahanXpert may communicate the outstanding amount and the basis of the charge.',
      'Any storage or additional charges should be imposed only where supported by applicable terms, prior communication, Customer agreement or other lawful basis.',
      'The workshop should not use unlawful retention or disposal practices to recover payment.',
    ],
  },
  {
    title: '12. Storage and Parking',
    paragraphs: [
      'Uncollected vehicles should be kept in an area that is reasonably secure and suitable for the vehicle and workshop capacity. VahanXpert may move vehicles within or between authorised locations where reasonably necessary for safety, operational requirements or space management, while maintaining appropriate records.',
    ],
  },
  {
    title: '13. Vehicle Condition',
    bullets: [
      'Reasonable care should be taken to protect uncollected vehicles from avoidable damage while in VahanXpert custody.',
      'Where a vehicle remains for an extended period, its condition may be periodically documented.',
      'Pre-existing damage, newly observed damage and vehicle contents should not be confused; available intake and inspection records should be referred to.',
    ],
  },
  {
    title: '14. Customer Property',
    paragraphs: [
      'Customer belongings found in an uncollected vehicle should be handled with reasonable care and should not be used, removed or disposed of without appropriate authority. Where practical, valuable or sensitive property may be documented and secured.',
    ],
  },
  {
    title: '15. Insurance / Cashless Vehicles',
    paragraphs: [
      'Where the vehicle is connected with an insurance or cashless claim, VahanXpert should continue to coordinate with the Customer, insurer and/or surveyor as appropriate. The vehicle should not be treated as abandoned merely because an insurance process is delayed where there is an active documented claim or Customer engagement.',
    ],
  },
  {
    title: '16. Disputed Vehicles',
    paragraphs: [
      'Where the Customer disputes the repair, invoice, damage, insurance settlement or other matter, the vehicle should be handled through the applicable complaint/dispute process. Staff should not use threats, intimidation or unauthorised disposal to force settlement of a dispute.',
    ],
  },
  {
    title: '17. Vehicle Release',
    bullets: [
      'Vehicle release should be made only to the Customer, registered owner or appropriately authorised person after the applicable identity/authority and payment/settlement requirements are satisfied.',
      'Keys, documents and accessories should be handed over according to the applicable vehicle handover procedure.',
      'The release date and recipient should be recorded.',
    ],
  },
  {
    title: '18. Extended Uncollected Vehicles',
    paragraphs: [
      'If a vehicle remains uncollected after repeated documented contact attempts and written notice, management may classify the matter as an extended uncollected vehicle and determine appropriate next steps based on the circumstances, contractual terms and applicable law.',
    ],
  },
  {
    title: '19. Legal / Law-Enforcement / Regulatory Matters',
    paragraphs: [
      'If ownership is disputed, the vehicle is subject to a police matter, court order, seizure, lien, finance interest, accident investigation or other legal restriction, VahanXpert shall follow the applicable lawful instructions and should not independently dispose of or transfer the vehicle.',
    ],
  },
  {
    title: '20. No Unauthorised Sale or Disposal',
    paragraphs: [
      'VahanXpert Services shall not sell, transfer, dismantle, scrap or otherwise dispose of a Customer vehicle merely because it has remained at the workshop. Any disposal or recovery process must have an appropriate contractual or lawful basis and follow applicable legal requirements and documented approvals.',
    ],
  },
  {
    title: '21. Abandoned Vehicle Escalation',
    bullets: [
      'Workshop/location personnel should escalate long-standing uncollected vehicles to authorised management.',
      'Management should review the job status, Customer communications, payment/dispute position, insurance status, vehicle ownership information available to the workshop and any legal restrictions.',
      'Further action should be documented before being taken.',
    ],
  },
  {
    title: '22. Storage Charges',
    paragraphs: [
      "Where storage charges are applicable under the Customer's agreed terms or another lawful basis, the applicable rate and circumstances should be communicated appropriately. Storage charges should not be presented as an automatic entitlement where no applicable basis exists.",
    ],
  },
  {
    title: '23. Record Keeping',
    bullets: [
      'Vehicle intake records, job cards, photographs, estimates, invoices, communication attempts, notices, payment records and handover records may be retained.',
      'For extended uncollected vehicles, material actions and management decisions should be documented.',
      'Records should be maintained according to the applicable record-keeping requirements.',
    ],
  },
  {
    title: '24. Staff Responsibilities',
    bullets: [
      'Protect vehicles and Customer property while in workshop custody.',
      'Maintain accurate vehicle and job records.',
      'Make reasonable Customer contact attempts when instructed.',
      'Do not threaten, misuse or dispose of vehicles without authorisation.',
      'Escalate legal, ownership, safety and dispute issues to management.',
    ],
  },
  {
    title: '25. Management Responsibilities',
    bullets: [
      'Maintain consistent procedures across all VahanXpert garages.',
      'Review extended uncollected vehicles.',
      'Approve material escalation and communications where required.',
      'Ensure that any recovery or disposal action has an appropriate lawful and contractual basis.',
    ],
  },
  {
    title: '26. Policy Relationship',
    paragraphs: [
      'This Policy should be read together with the Vehicle Delivery & Handover Policy, Customer Grievance / Dispute Policy, Payment, Billing & Invoice Policy, Insurance / Cashless Claim Coordination Policy, CCTV Surveillance & Security Recording Policy and applicable vehicle custody/key-control procedures.',
    ],
  },
  {
    title: '27. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on operational experience, workshop capacity, customer requirements, contractual arrangements and applicable legal requirements.',
    ],
  },
];

export default function VehicleAbandonedContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>Vehicle Abandoned / Uncollected Vehicle Policy</h1>
          <div className={styles.policyMeta}>
            <strong>Policy No.: VXS/VEH/033</strong>
            <span>|</span>
            <span>Version: 1.0</span>
            <span>|</span>
            <span>Effective Date: 20/09/2026</span>
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
    <h2>28. Business Contact</h2>

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
    <h2>29. Document Control</h2>

    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Document Name</th>
            <td>Vehicle Abandoned / Uncollected Vehicle Policy</td>
          </tr>
          <tr>
            <th>Organisation</th>
            <td>VahanXpert Services</td>
          </tr>
          <tr>
            <th>Policy Number</th>
            <td>VXS/VEH/033</td>
          </tr>
          <tr>
            <th>Version / Effective Date</th>
            <td>1.0 / 20/09/2026</td>
          </tr>
          <tr>
            <th>Review Frequency</th>
            <td>
              At least annually or whenever vehicle custody/collection
              requirements change
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p className={styles.footerText}>
    VahanXpert Services | Vehicle Abandoned / Uncollected Vehicle Policy
  </p>
</div>
      </div>
    </section>
  );
}
