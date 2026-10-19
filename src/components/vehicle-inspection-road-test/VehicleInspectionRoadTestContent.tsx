
import styles from './VehicleInspectionRoadTestContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes controls for vehicle inspection, diagnostic road testing and authorised test drives carried out by VahanXpert Services. It is intended to ensure that vehicles are inspected and road-tested in a controlled, documented and safety-conscious manner.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to Customer vehicles presented for servicing, repair, diagnosis, warranty inspection, quality verification, post-repair testing, pickup/drop verification or any other authorised road-test activity.',
    ],
  },
  {
    title: '3. Authorisation',
    bullets: [
      'Only authorised personnel with appropriate driving authorisation and competence should conduct a road test or test drive.',
      'The purpose of the road test should be connected with diagnosis, repair verification, quality control, safety inspection or another legitimate workshop requirement.',
      'Unauthorised personal use of a Customer vehicle is prohibited.',
    ],
  },
  {
    title: '4. Pre-Test Vehicle Inspection',
    bullets: [
      "Before a road test, the technician/driver should reasonably check visible vehicle condition and obvious safety concerns.",
      'Where relevant, tyres, brakes, steering, lights, mirrors, warning indicators, fuel level and other safety-critical items should be considered.',
      'If the vehicle appears unsafe to drive, the road test should not proceed until the issue is appropriately addressed or an alternative method of inspection is used.',
      'Existing damage should be compared with the intake/job-card record where reasonably practicable.',
    ],
  },
  {
    title: '5. Road-Test Purpose and Route',
    paragraphs: [
      'The road test should be limited to the distance, duration and route reasonably necessary for the identified diagnostic or verification purpose. The driver should avoid unnecessary detours, errands or unrelated use.',
    ],
  },
  {
    title: '6. Safety Requirements',
    bullets: [
      'The driver must comply with applicable traffic laws and road-safety requirements.',
      'Seat belts and other legally required safety measures must be used.',
      'The vehicle should be driven at a safe and lawful speed appropriate to traffic, weather, road and vehicle conditions.',
      'Mobile phone use or other distracting activity while driving should be avoided except through lawful hands-free or emergency procedures.',
      'Driving under the influence of alcohol, drugs or any impairing substance is prohibited.',
    ],
  },
  {
    title: '7. Customer Test Drive',
    paragraphs: [
      "Where a Customer is permitted to participate in a test drive, the Customer should follow the instructions of the authorised representative. A Customer test drive should be permitted only where the vehicle's condition and the circumstances make such participation reasonably safe.",
    ],
  },
  {
    title: '8. Demonstration / Delivery Test Drive',
    bullets: [
      'A delivery or demonstration test drive should be conducted only when reasonably required to explain vehicle operation or verify a completed repair.',
      'The authorised representative should determine whether the vehicle is suitable for a customer demonstration.',
      'The Customer should not be encouraged to exceed legal speed limits or otherwise operate the vehicle unsafely.',
    ],
  },
  {
    title: '9. Diagnostic Testing',
    paragraphs: [
      'Where a technical fault requires road testing, the technician may observe vehicle behaviour, warning indicators, braking, steering, transmission, suspension, noise, vibration or other relevant symptoms. Diagnostic equipment may also be used where appropriate.',
    ],
  },
  {
    title: '10. High-Risk Conditions',
    bullets: [
      'Road testing should be avoided or modified where severe weather, unsafe road conditions, traffic restrictions or vehicle condition creates an unreasonable risk.',
      'Vehicles with suspected brake, steering, tyre or other critical safety failures should not be road-tested until an appropriate safety assessment is completed.',
      'Alternative stationary or controlled diagnostic methods should be considered where practicable.',
    ],
  },
  {
    title: '11. Vehicle Speed and Conduct',
    paragraphs: [
      'Road tests must be conducted responsibly and within applicable speed limits. Aggressive acceleration, unnecessary high-speed driving, racing, drifting, harsh manoeuvres or other non-essential driving behaviour is prohibited.',
    ],
  },
  {
    title: '12. Vehicle Occupants',
    bullets: [
      'Only persons necessary for the test should be present in the vehicle.',
      'Passengers should be seated safely and use seat belts.',
      'Unnecessary passengers, children or visitors should not be taken on a diagnostic road test.',
    ],
  },
  {
    title: '13. Mileage and Fuel',
    paragraphs: [
      'A reasonable increase in odometer reading and fuel consumption may occur due to authorised road testing, diagnostics, pickup/drop or vehicle movement. The road-test distance should be kept reasonably proportionate to the service requirement.',
    ],
  },
  {
    title: '14. Road-Test Record',
    bullets: [
      'Where appropriate, the job card or service record may note the date, driver/technician, purpose, approximate distance and relevant observations.',
      'Material abnormalities identified during the road test should be recorded for further diagnosis or repair.',
      'Where technology is available and lawfully used, vehicle movement or test records may support incident investigation and quality control.',
    ],
  },
  {
    title: '15. Accident During Road Test',
    bullets: [
      'If an accident or material incident occurs, immediate safety and applicable legal requirements take priority.',
      'The vehicle should be secured and emergency assistance sought where required.',
      'Relevant management should be informed promptly.',
      'Photographs, location details, witness information and other evidence should be preserved where reasonably practicable.',
      'Insurance, police, roadside assistance or other applicable procedures may be followed according to the circumstances.',
    ],
  },
  {
    title: '16. Vehicle Damage Identified After Test',
    paragraphs: [
      'If new damage is identified after a road test, the condition may be compared with the pre-test/intake record, photographs and other available evidence. The incident should be handled in accordance with the Vehicle Damage, Loss & Incident Reporting Policy.',
    ],
  },
  {
    title: '17. Customer Property',
    paragraphs: [
      'Customers are advised to remove valuables and unnecessary personal belongings before a vehicle is handed over for service. Any property recorded at intake should be handled according to applicable workshop procedures.',
    ],
  },
  {
    title: '18. Keys and Documents',
    bullets: [
      'Vehicle keys should remain under reasonable control during the test.',
      'Service and vehicle documents should not be unnecessarily removed from the workshop.',
      'Loss or damage involving recorded keys or documents should be reported under the applicable incident process.',
    ],
  },
  {
    title: '19. Test Drive After Repair',
    paragraphs: [
      "Where a repair requires verification through a road test, the test should be performed after the relevant work has reached a reasonably safe test condition. The result should be considered together with diagnostic findings and the Customer's reported concern.",
    ],
  },
  {
    title: '20. Warranty and Test Drive',
    paragraphs: [
      'A road test performed for warranty or quality verification does not by itself create or extend a warranty. Parts warranty remains subject to the applicable manufacturer, authorised distributor or supplier warranty terms, and workshop workmanship warranty remains subject to the applicable service terms.',
    ],
  },
  {
    title: '21. Customer Consent',
    paragraphs: [
      'Where a Customer test drive is requested or permitted, the Customer may be asked to follow reasonable safety instructions and confirm participation. Any consent or acknowledgement should not be used to waive rights that cannot lawfully be waived.',
    ],
  },
  {
    title: '22. Privacy and Tracking',
    paragraphs: [
      "If vehicle location, test-route information, photographs or other records are captured for legitimate safety, quality, incident or service purposes, such information should be handled according to VahanXpert Services' applicable privacy practices and law.",
    ],
  },
  {
    title: '23. Training and Competence',
    bullets: [
      'Personnel authorised to road-test vehicles should be appropriately licensed and competent for the vehicle type and task.',
      'Staff should understand workshop safety procedures and emergency reporting requirements.',
      'Management may restrict road-test authority where competence, licensing or safety requirements are not satisfied.',
    ],
  },
  {
    title: '24. Policy Violations',
    paragraphs: [
      'Unauthorised use, reckless driving, unnecessary vehicle use, deliberate misuse or failure to follow safety procedures may result in corrective action under applicable employment or operational procedures.',
    ],
  },
  {
    title: '25. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on workshop operations, incident experience, vehicle technology, insurance requirements or applicable legal requirements.',
    ],
  },
];

export default function VehicleInspectionRoadTestContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>
            Vehicle Inspection, Road Test &amp; Test Drive Safety Policy
          </h1>

          <div className={styles.policyMeta}>
            <strong>Policy No.: VXS/RTS/023</strong>
            <span>|</span>
            <span>Version: 1.0</span>
            <span>|</span>
            <span>Effective Date: 20/09/2026</span>
          </div>
        </header>

        <article className={styles.document}>
          {sections.map((section) => (
            <section className={styles.policySection} key={section.title}>
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

          <section className={styles.policySection}>
            <h2>26. Business Contact</h2>
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
                Mobile: <a href="tel:+918930293896">+91 8930293896</a>
              </p>
            </div>
          </section>

          <section className={styles.policySection}>
            <h2>27. Document Control</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th>Document Name</th>
                    <td>
                      Vehicle Inspection, Road Test &amp; Test Drive Safety
                      Policy
                    </td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/RTS/023</td>
                  </tr>
                  <tr>
                    <th>Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th>Review Frequency</th>
                    <td>
                      At least annually or whenever operational/safety
                      requirements change
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className={styles.footerText}>
            VahanXpert Services | Vehicle Inspection, Road Test &amp; Test Drive
            Safety Policy
          </p>
        </article>
      </div>
    </section>
  );
}
