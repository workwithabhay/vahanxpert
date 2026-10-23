
import styles from './VehicleDamageIncidentContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes the process for recording, reporting, investigating and resolving incidents involving Customer vehicles while they are in the custody, control or authorised movement of VahanXpert Services. It covers vehicle damage, loss of property, missing keys or documents, accidents, theft-related concerns and other material incidents.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies from vehicle intake/pickup until authorised delivery or handover, including vehicle movement within the workshop, authorised road testing, pickup/drop, towing coordination, parking and other authorised custody or movement of the vehicle.',
    ],
  },
  {
    title: '3. Pre-Intake Condition Recording',
    bullets: [
      "Where reasonably practicable, the vehicle's visible condition should be recorded at intake.",
      'Records may include photographs/video, exterior and interior condition, existing dents/scratches, glass condition, tyres, accessories, fuel level, odometer reading, key count and other relevant observations.',
      'Customer-reported pre-existing damage may be noted on the job card or inspection record.',
      'Customers should remove valuables and personal belongings before handing over the vehicle.',
    ],
  },
  {
    title: '4. Vehicle Custody',
    paragraphs: [
      'Once the vehicle is formally accepted for service, VahanXpert Services should take reasonable measures to keep the vehicle in designated or authorised areas and limit access and movement to legitimate workshop purposes.',
    ],
  },
  {
    title: '5. Types of Incidents Covered',
    bullets: [
      'Accident or collision involving the Customer vehicle.',
      'New visible damage identified while the vehicle is in workshop custody.',
      'Damage occurring during authorised pickup, delivery or road testing.',
      'Missing vehicle accessories or other Customer property reported to be inside the vehicle.',
      'Missing, damaged or lost vehicle keys, documents or service-related items.',
      'Theft, attempted theft, unauthorised movement or security incident.',
      'Fire, flood or other material event affecting the vehicle.',
      'Any other incident reasonably likely to cause material loss, damage or dispute.',
    ],
  },
  {
    title: '6. Immediate Incident Reporting',
    paragraphs: [
      'Any employee or representative who becomes aware of a material vehicle incident should report it to authorised management as soon as reasonably practicable. Where an incident presents an immediate safety risk, safety and emergency response should take priority over documentation.',
    ],
  },
  {
    title: '7. Incident Record',
    bullets: [
      'The incident record should, where reasonably practicable, include date/time, vehicle registration number, job card/reference number, location, persons involved, description of events and initial observations.',
      'Photographs, CCTV footage where available, driver details, witness information, repair records and other relevant evidence may be attached to the incident record.',
      'The record should distinguish observed facts from unverified statements or allegations.',
    ],
  },
  {
    title: '8. Damage Assessment',
    paragraphs: [
      "Where new damage is reported, VahanXpert Services may compare the vehicle's condition with the intake photographs, inspection record, job card and other available evidence. A technical or management inspection may be conducted to identify the apparent nature and extent of the damage.",
    ],
  },
  {
    title: '9. Customer Notification',
    paragraphs: [
      'Where a material incident affecting the Customer vehicle is identified, the Customer should be informed as soon as reasonably practicable with the information available at that stage. Initial notification does not by itself constitute an admission of liability.',
    ],
  },
  {
    title: '10. Missing Personal Property',
    bullets: [
      'Customers are advised to remove cash, jewellery, electronics, documents and other valuables before vehicle handover.',
      'If a Customer reports missing property, the complaint should be recorded and relevant available evidence may be reviewed.',
      'CCTV, intake records, photographs and staff statements may be reviewed where available and appropriate.',
      'Items not recorded as being handed over may be difficult to verify; the investigation should rely on available evidence and applicable law.',
    ],
  },
  {
    title: '11. Keys and Vehicle Documents',
    paragraphs: [
      'Keys, remote controls and documents received during intake should be recorded where reasonably practicable. Loss or damage involving a recorded item should be escalated to authorised management for review and appropriate action.',
    ],
  },
  {
    title: '12. Accident / Collision',
    bullets: [
      'In the event of a road accident, immediate safety and applicable legal requirements take priority.',
      'The vehicle should be secured and moved only where safe and appropriate.',
      'Police, insurer, roadside assistance or other relevant authorities may be contacted where required by the circumstances.',
      'Photographs, location information, vehicle details and other relevant evidence should be preserved where reasonably practicable.',
    ],
  },
  {
    title: '13. Fire, Flood or Other Major Event',
    paragraphs: [
      'If the vehicle is affected by fire, flooding, natural events or another major incident, emergency response and protection of people take priority. VahanXpert Services may notify the Customer, insurer, emergency services or other relevant parties as appropriate.',
    ],
  },
  {
    title: '14. Security and Unauthorised Movement',
    bullets: [
      'Vehicle movement should be limited to authorised workshop, pickup/drop, diagnostic, testing, parking or other legitimate purposes.',
      'Suspected unauthorised movement or access should be reported to management.',
      'Available CCTV, access records, key records and vehicle movement information may be reviewed.',
    ],
  },
  {
    title: '15. Investigation',
    bullets: [
      'Authorised management may interview relevant employees, drivers, contractors or witnesses.',
      'Available job cards, photographs, CCTV, movement records, repair records and communications may be reviewed.',
      'Where technically appropriate, an external assessor, insurer, manufacturer or other specialist may be involved.',
      'The investigation should document material findings and distinguish established facts from unresolved matters.',
    ],
  },
  {
    title: '16. Insurance and Third-Party Reporting',
    paragraphs: [
      'Where an incident may be covered by motor insurance or involves a third party, the relevant insurer, surveyor, police authority or other appropriate party may be notified or consulted according to the circumstances and applicable requirements.',
    ],
  },
  {
    title: '17. Customer Claim',
    bullets: [
      'A Customer seeking resolution should provide relevant details and supporting evidence where available.',
      'The claim may be reviewed against workshop records and the circumstances of the incident.',
      'Where liability or coverage depends on an insurer, manufacturer, supplier or other third party, the matter may be referred to that party for determination.',
    ],
  },
  {
    title: '18. Resolution and Corrective Action',
    paragraphs: [
      'Depending on the findings and applicable terms, resolution may include repair assessment, rectification, insurance processing, replacement of an affected recorded item, reimbursement where appropriate, explanation, or another suitable corrective action. Any remedy remains subject to the facts, applicable contractual terms and law.',
    ],
  },
  {
    title: '19. No Automatic Admission of Liability',
    paragraphs: [
      'Recording an incident, inspecting damage or assisting with an insurance claim does not by itself establish liability. Responsibility should be determined on the basis of available evidence, applicable agreements, insurance terms and law.',
    ],
  },
  {
    title: '20. Vehicle Delivery After Incident',
    paragraphs: [
      'Where an incident has occurred before delivery, the vehicle should be inspected and the relevant status communicated to the Customer before or at handover where reasonably practicable. Any pending insurance, repair or assessment process should be explained where relevant.',
    ],
  },
  {
    title: '21. Records and Evidence Preservation',
    bullets: [
      'Incident records, photographs, CCTV extracts where lawfully retained, job cards, communications and related documents may be preserved for service, insurance, dispute-resolution and legal/compliance purposes.',
      'Relevant evidence should not be intentionally altered or destroyed while a material incident or dispute is under review.',
      'Access to incident records should be limited to authorised personnel and relevant parties.',
    ],
  },
  {
    title: '22. Privacy and Confidentiality',
    paragraphs: [
      'Incident records may contain Customer, employee, vehicle, insurance and third-party information. Such information should be handled confidentially and used only for legitimate investigation, service, insurance, safety, dispute-resolution or legal/compliance purposes, subject to applicable law.',
    ],
  },
  {
    title: '23. Customer Responsibilities',
    bullets: [
      'Remove valuables and personal belongings before vehicle handover.',
      'Provide accurate information about the vehicle and any pre-existing damage known to the Customer.',
      'Promptly report suspected damage, loss or other incident after discovery.',
      'Cooperate reasonably with inspection, documentation and insurance procedures.',
    ],
  },
  {
    title: '24. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on incident experience, workshop operations, insurance requirements, security controls or applicable legal requirements.',
    ],
  },
];

export default function VehicleDamageIncidentContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>

          <h1>Vehicle Damage, Loss &amp; Incident Reporting Policy</h1>

          <div className={styles.policyMeta}>
            <strong>Policy No.: VXS/DIR/022</strong>
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
    <h2>25. Business Contact</h2>

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
        Mobile: <a href="tel:+918930293896">+91 8930293896</a>
      </p>
    </div>
  </section>

  <section className={`${styles.document} ${styles.policySection}`}>
    <h2>26. Document Control</h2>

    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Document Name</th>
            <td>Vehicle Damage, Loss &amp; Incident Reporting Policy</td>
          </tr>
          <tr>
            <th>Organisation</th>
            <td>VahanXpert Services</td>
          </tr>
          <tr>
            <th>Policy Number</th>
            <td>VXS/DIR/022</td>
          </tr>
          <tr>
            <th>Version / Effective Date</th>
            <td>1.0 / 20/09/2026</td>
          </tr>
          <tr>
            <th>Review Frequency</th>
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
    VahanXpert Services | Vehicle Damage, Loss &amp; Incident Reporting Policy
  </p>
</div>
      </div>
    </section>
  );
}
