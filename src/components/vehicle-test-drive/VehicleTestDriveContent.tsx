
import styles from "./VehicleTestDriveContent.module.css";

const sections = [
  {
    title: "1. Purpose",
    paragraphs: [
      "This Policy establishes controls for road tests and vehicle movement undertaken by VahanXpert Services for diagnosis, repair verification, quality checks, inspection, pickup/drop or other authorised workshop purposes. It is intended to promote safe, documented and responsible vehicle movement.",
    ],
  },
  {
    title: "2. Scope",
    paragraphs: [
      "This Policy applies whenever an employee, technician, service advisor or other authorised person drives or moves a customer's vehicle on a public road, within the workshop premises or at another location for a legitimate service-related purpose.",
    ],
  },
  {
    title: "3. Authorisation",
    bullets: [
      "Only authorised and appropriately licensed personnel should drive a customer's vehicle.",
      "Vehicle movement should be limited to what is reasonably necessary for diagnosis, repair verification, inspection, parking, pickup/drop or another authorised purpose.",
      "Where a road test is not necessary, unnecessary vehicle movement should be avoided.",
    ],
  },
  {
    title: "4. Customer Consent and Job Card Record",
    bullets: [
      "Where reasonably practicable, the need for a road test should be recorded in the job card or service record.",
      "The Customer may be informed that a road test may be required to diagnose or verify the reported issue.",
      "Where a specific consent/authorization form is used by the Garage, the relevant record should be completed before the road test.",
    ],
  },
  {
    title: "5. Pre-Test Checks",
    bullets: [
      "The driver should carry a valid driving licence applicable to the vehicle category.",
      "The vehicle should be reasonably checked for obvious safety concerns before a road test.",
      "Where relevant, fuel level, vehicle condition, warning lights and existing damage may be recorded.",
      "Seat position, mirrors and other controls should be adjusted safely before movement.",
    ],
  },
  {
    title: "6. Safe Driving Requirements",
    bullets: [
      "All applicable traffic laws and road-safety requirements must be followed.",
      "Speed should remain appropriate for road, traffic, weather and vehicle conditions and within legal limits.",
      "Seat belts should be used as required.",
      "Mobile-phone use while driving should be avoided except through lawful hands-free arrangements where permitted.",
      "Alcohol, drugs or any other impairment that makes driving unsafe is prohibited.",
      "Aggressive driving, racing, unnecessary acceleration or other unsafe driving is prohibited.",
    ],
  },
  {
    title: "7. Road Test Purpose and Route",
    paragraphs: [
      "The road-test route and duration should be reasonably related to the issue being diagnosed or the repair being verified. The driver should avoid unnecessary detours, personal errands or unrelated use of the Customer's vehicle.",
    ],
  },
  {
    title: "8. Passengers",
    paragraphs: [
      "Only persons whose presence is reasonably necessary for diagnosis, training, supervision or authorised workshop purposes should ordinarily be present during a road test. Passenger safety requirements must be observed.",
    ],
  },
  {
    title: "9. Vehicle Condition and Customer Property",
    bullets: [
      "The driver should take reasonable care of the vehicle and its contents.",
      "Personal belongings should not be disturbed except where necessary for safe vehicle operation or service work.",
      "Existing damage should be distinguished from any new incident using the available intake record, photographs and job card.",
    ],
  },
  {
    title: "10. Test Drive After Repair",
    bullets: [
      "A road test may be conducted after repair where it is reasonably necessary to verify braking, steering, suspension, engine, transmission, AC, electrical or other repaired functions.",
      "The road test should be proportionate to the repair and should not unnecessarily expose the vehicle to risk.",
      "Any abnormal condition identified during the test should be recorded and referred for further inspection.",
    ],
  },
  {
    title: "11. Breakdown or Mechanical Failure During Road Test",
    paragraphs: [
      "If the vehicle develops a breakdown or safety issue during a road test, the driver should stop at a safe location where reasonably possible, take appropriate safety measures and inform the authorised workshop representative. Roadside assistance or recovery may be arranged where necessary.",
    ],
  },
  {
    title: "12. Accident or Damage During Test Drive",
    bullets: [
      "In the event of an accident or material incident, immediate safety and lawful reporting requirements should take priority.",
      "The incident should be promptly reported to authorised management.",
      "Relevant photographs, vehicle details, location and other available information should be documented where reasonably practicable.",
      "Insurance or other applicable claim procedures should be followed where required.",
    ],
  },
  {
    title: "13. Traffic Violations and Fines",
    paragraphs: [
      "Any traffic challan or penalty arising from the use of a Customer's vehicle should be reviewed based on the circumstances, applicable law and the identity of the person responsible. The Garage should maintain relevant records where available.",
    ],
  },
  {
    title: "14. Pickup and Drop / Customer Vehicle Movement",
    paragraphs: [
      "Where VahanXpert Services provides pickup/drop assistance, the same safety and authorised-driving requirements apply. The vehicle should be moved only for the agreed service purpose and reasonable route.",
    ],
  },
  {
    title: "15. Recording Vehicle Movement",
    bullets: [
      "Where practicable, the Garage may record the date, time, driver, purpose and approximate route/distance of a road test.",
      "Job-card notes, digital records or other operational records may be used for this purpose.",
      "Such records may be retained for service history, quality control, dispute resolution, insurance and legal/compliance purposes.",
    ],
  },
  {
    title: "16. Customer Information and Privacy",
    paragraphs: [
      "Information collected in connection with vehicle movement, including driver details, photographs or incident records, shall be used only for legitimate workshop, safety, service, insurance, dispute-resolution and legal/compliance purposes, subject to applicable law and VahanXpert Services' privacy practices.",
    ],
  },
  {
    title: "17. Prohibited Use",
    bullets: [
      "Personal use of the Customer's vehicle without authorisation is prohibited.",
      "Carrying unauthorised passengers or goods is prohibited.",
      "Use of the vehicle for racing, entertainment or any unrelated activity is prohibited.",
      "Driving while impaired or without the required licence/authorisation is prohibited.",
    ],
  },
  {
    title: "18. Customer Responsibilities",
    bullets: [
      "Provide accurate information about known vehicle faults and safety concerns.",
      "Inform the Garage of any special driving or vehicle restrictions known to the Customer.",
      "Keep valuables removed or secured before leaving the vehicle at the Garage.",
      "Cooperate with reasonable inspection and road-test requirements for diagnosis or repair verification.",
    ],
  },
  {
    title: "19. Dispute and Escalation",
    paragraphs: [
      "If a Customer disputes vehicle movement, mileage, condition or an incident arising during a road test, VahanXpert Services may review the job card, intake photographs, movement records, technician/service-advisor statements, incident records and other available evidence. The matter may be escalated to authorised management for review.",
    ],
  },
  {
    title: "20. Policy Review",
    paragraphs: [
      "This Policy shall be reviewed periodically and may be updated based on workshop operations, safety requirements, insurance processes, customer feedback or applicable legal requirements.",
    ],
  },
];

export default function VehicleTestDriveContent() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>Vehicle Test Drive &amp; Road Test Policy</h1>

          <div className={styles.policyMeta}>
            <span><strong>Policy No.:</strong> VXS/TD/010</span>
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
    <h2>21. Business Contact</h2>

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
    <h2>22. Document Control</h2>

    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th scope="row">Document Name</th>
            <td>Vehicle Test Drive &amp; Road Test Policy</td>
          </tr>
          <tr>
            <th scope="row">Organisation</th>
            <td>VahanXpert Services</td>
          </tr>
          <tr>
            <th scope="row">Policy Number</th>
            <td>VXS/TD/010</td>
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
    VahanXpert Services | Vehicle Test Drive &amp; Road Test Policy
  </p>
</div>

      </div>
    </div>
  );
}
