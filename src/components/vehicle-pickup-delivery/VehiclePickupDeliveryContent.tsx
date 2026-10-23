import styles from './VehiclePickupDeliveryContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes procedures and safety controls for pickup, transportation and delivery of Customer vehicles by VahanXpert Services or its authorised personnel/transport partners. It is intended to protect the vehicle, keys, documents and Customer property and to reduce avoidable transportation-related incidents.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to Customer vehicles collected from or delivered to a Customer location, workshop, insurer, surveyor, authorised parking location or other approved destination for servicing, repair, inspection, insurance work, road testing or related services.',
    ],
  },
  {
    title: '3. Authorised Pickup and Delivery',
    bullets: [
      'Vehicle pickup and delivery shall be performed only by authorised VahanXpert Services personnel or an approved transportation/service partner.',
      'The assigned driver or representative should have the appropriate driving authorisation and competence for the vehicle being operated.',
      'Unauthorised persons must not use or transport a Customer vehicle.',
    ],
  },
  {
    title: '4. Customer Pickup Request',
    bullets: [
      'Where a pickup service is offered, relevant details such as Customer name, contact number, vehicle registration number, pickup location and intended destination should be recorded.',
      'The Customer may be contacted to confirm the pickup appointment and vehicle availability.',
      'Pickup timing may be subject to traffic, weather, vehicle condition, operational capacity and other practical circumstances.',
    ],
  },
  {
    title: '5. Vehicle Condition at Pickup',
    bullets: [
      "Where reasonably practicable, the vehicle's visible condition should be recorded before movement.",
      'Photographs may be taken of visible exterior/interior condition, existing damage, fuel level, odometer reading and other relevant details.',
      'Existing dents, scratches, broken parts or other visible damage should be noted where reasonably practicable.',
      'Customers are advised to remove valuables and unnecessary personal belongings before handing over the vehicle.',
    ],
  },
  {
    title: '6. Keys and Documents at Pickup',
    bullets: [
      'The number of keys/remote controls received should be recorded where reasonably practicable.',
      'Documents received for service or insurance purposes should be handled under the Vehicle Key, Customer Property & Vehicle Custody Policy.',
      'Keys and documents should remain under reasonable control during transportation.',
    ],
  },
  {
    title: '7. Vehicle Safety Before Movement',
    paragraphs: [
      'Before driving the vehicle, the authorised driver should consider obvious safety conditions including tyres, brakes, steering, lights, warning indicators, mirrors and other visible issues. If the vehicle appears unsafe to drive, VahanXpert Services may arrange towing or another suitable transportation method instead of driving the vehicle.',
    ],
  },
  {
    title: '8. Towing and Transport',
    bullets: [
      'Where a vehicle is non-running, unsafe or otherwise unsuitable for normal driving, towing or suitable vehicle transportation may be arranged.',
      "The towing/transport method should be appropriate to the vehicle's condition and type.",
      'External transportation providers, where used, should be appropriately authorised and engaged for the relevant service.',
    ],
  },
  {
    title: '9. Safe Driving Requirements',
    bullets: [
      'Drivers must comply with applicable traffic and road-safety laws.',
      'Seat belts and legally required safety measures must be used.',
      'Vehicles should be driven at a safe and lawful speed appropriate to road, traffic, weather and vehicle conditions.',
      'Driving under the influence of alcohol, drugs or any impairing substance is prohibited.',
      'Mobile phone use or other distracting activity while driving should be avoided except through lawful hands-free or emergency procedures.',
    ],
  },
  {
    title: '10. Route and Unauthorised Use',
    paragraphs: [
      'The vehicle should be transported through a reasonable route to the authorised destination. Personal errands, unauthorised detours, private use or any unrelated use of the Customer vehicle are prohibited.',
    ],
  },
  {
    title: '11. Vehicle Parking During Transportation',
    bullets: [
      'If the vehicle must be temporarily parked during pickup/delivery, it should be kept at a reasonably secure and appropriate location.',
      'Keys should remain under the control of authorised personnel.',
      'The vehicle should be locked when unattended where reasonably practicable.',
    ],
  },
  {
    title: '12. Accident or Damage During Transportation',
    bullets: [
      'In the event of an accident or material incident, immediate safety and applicable legal requirements take priority.',
      'Emergency services, police, insurer, roadside assistance or other relevant parties may be contacted as appropriate.',
      'Management should be informed promptly.',
      'Photographs, location details, witness information and other relevant evidence should be preserved where reasonably practicable.',
      'The incident should be handled in accordance with the Vehicle Damage, Loss & Incident Reporting Policy.',
    ],
  },
  {
    title: '13. Breakdown During Transportation',
    paragraphs: [
      'If the vehicle breaks down during pickup or delivery, the driver should move to a safe location where reasonably possible, arrange appropriate roadside assistance/towing and inform VahanXpert Services. The Customer should be updated where the delay materially affects the expected delivery.',
    ],
  },
  {
    title: '14. Customer Property',
    paragraphs: [
      'Customers should remove cash, jewellery, electronics, documents and other valuables before pickup. VahanXpert Services may not be able to verify responsibility for unrecorded personal belongings. Any property specifically recorded at pickup should be handled with reasonable care.',
    ],
  },
  {
    title: '15. Delivery Verification',
    bullets: [
      'At delivery, the authorised representative should verify the intended recipient where reasonably practicable.',
      'The vehicle may be inspected for obvious transportation-related damage and basic handover items.',
      'Keys and documents received at pickup should be returned where applicable.',
      'The Customer may be requested to acknowledge delivery.',
    ],
  },
  {
    title: '16. Delivery to an Authorised Person',
    paragraphs: [
      'Where the Customer has authorised another person to receive the vehicle, VahanXpert Services may request reasonable confirmation of that person’s identity or authorisation before handover.',
    ],
  },
  {
    title: '17. Delivery Condition and Inspection',
    paragraphs: [
      'Customers are encouraged to inspect the vehicle at delivery and raise any immediately visible discrepancy as soon as reasonably practicable. Any reported issue may be reviewed against pickup photographs, vehicle records, transportation details and other available evidence.',
    ],
  },
  {
    title: '18. Payment and Outstanding Amounts',
    paragraphs: [
      'Vehicle delivery may be subject to completion of applicable payment, insurance documentation, Customer approval or other agreed requirements. Any applicable retention or delivery condition should be communicated to the Customer in accordance with the agreed service terms and applicable law.',
    ],
  },
  {
    title: '19. Transportation Partners',
    bullets: [
      'Where a third-party driver, towing company or transportation provider is used, VahanXpert Services should select or engage the provider based on reasonable operational requirements.',
      'Relevant service instructions should be communicated to the transportation provider.',
      'Material incidents involving a transportation partner should be documented and reviewed.',
    ],
  },
  {
    title: '20. Driver Responsibilities',
    bullets: [
      'Carry required driving documents and comply with applicable traffic requirements.',
      'Operate the vehicle responsibly and only for authorised purposes.',
      'Protect keys, documents and vehicle property during the journey.',
      'Report accidents, breakdowns, damage, theft concerns or other material incidents promptly.',
    ],
  },
  {
    title: '21. Customer Responsibilities',
    bullets: [
      'Provide accurate pickup and delivery information.',
      'Remove valuables and unnecessary personal property.',
      'Provide required keys and service documents.',
      'Ensure the vehicle is reasonably accessible at the agreed pickup time.',
      'Inspect the vehicle at delivery and report any apparent discrepancy promptly.',
    ],
  },
  {
    title: '22. Privacy and Customer Information',
    paragraphs: [
      'Customer names, contact details, pickup/delivery addresses, vehicle information, photographs and transportation records should be used only for legitimate service, safety, operational, support, dispute-resolution or legal/compliance purposes and handled according to applicable privacy requirements.',
    ],
  },
  {
    title: '23. Records',
    bullets: [
      'Pickup and delivery records may include appointment details, vehicle condition photographs, odometer/fuel readings, key records, driver details, route or transportation information, handover acknowledgement and incident records.',
      'Records may be retained for service history, insurance, accounting, dispute resolution, safety, legal and compliance purposes.',
    ],
  },
  {
    title: '24. Insurance',
    paragraphs: [
      'Where transportation-related loss or damage may involve motor insurance or another applicable insurance arrangement, VahanXpert Services may coordinate with the relevant insurer, surveyor or other authorised party. Insurance coverage shall remain subject to the applicable policy terms.',
    ],
  },
  {
    title: '25. Policy Violations',
    paragraphs: [
      'Unauthorised use, reckless driving, misuse of the Customer vehicle, deliberate concealment of an incident or failure to follow transportation safety procedures may result in corrective, disciplinary, contractual or legal action as applicable.',
    ],
  },
  {
    title: '26. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on workshop operations, transportation arrangements, incident experience, insurance requirements or applicable legal requirements.',
    ],
  },
];

export default function VehiclePickupDeliveryContent() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>

          <h1>Vehicle Pickup, Delivery &amp; Transportation Safety Policy</h1>

          <div className={styles.policyMeta}>
            <span>
              <strong>Policy No.:</strong> VXS/PDT/027
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
    <h2>27. Business Contact</h2>

    <div className={styles.contact}>
      <strong>VahanXpert Services</strong>

      <p>
        <span>Address: </span>
        D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010
      </p>

      <p>
        <span>Email: </span>
        <a href="mailto:info.vahanxpert@gmail.com">
          info.vahanxpert@gmail.com
        </a>
      </p>

      <p>
        <span>Mobile: </span>
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
            <td>
              Vehicle Pickup, Delivery &amp; Transportation Safety Policy
            </td>
          </tr>
          <tr>
            <th scope="row">Organisation</th>
            <td>VahanXpert Services</td>
          </tr>
          <tr>
            <th scope="row">Policy Number</th>
            <td>VXS/PDT/027</td>
          </tr>
          <tr>
            <th scope="row">Version / Effective Date</th>
            <td>1.0 / 20/09/2026</td>
          </tr>
          <tr>
            <th scope="row">Review Frequency</th>
            <td>
              At least annually or whenever transportation/operational
              requirements change
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p className={styles.footerText}>
    VahanXpert Services | Vehicle Pickup, Delivery &amp; Transportation Safety
    Policy
  </p>
</div>

      </div>
    </div>
  );
}