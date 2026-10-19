import styles from './VehicleKeyCustodyContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes procedures for receiving, recording, storing, accessing, moving and returning Customer vehicle keys, documents, accessories and other Customer property while a vehicle is in the custody or control of VahanXpert Services.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to all Customer vehicles accepted for servicing, repair, inspection, insurance work, pickup/drop, warranty work, road testing or other authorised workshop activity, and to all employees, technicians, drivers, contractors and authorised representatives handling such vehicles or property.',
    ],
  },
  {
    title: '3. Vehicle Intake and Custody',
    bullets: [
      'A vehicle should be formally accepted through an appropriate job card, service record or other authorised intake process.',
      'The Customer and vehicle details should be recorded sufficiently to identify the vehicle and service order.',
      'Once accepted, reasonable controls should be used to protect the vehicle while it remains under workshop custody.',
    ],
  },
  {
    title: '4. Key Recording',
    bullets: [
      'The number and type of keys/remote controls received should be recorded where reasonably practicable.',
      'Any visible damage to a key, remote or key cover may be noted at intake.',
      'Where a spare key is not provided, the record may indicate the number of keys actually received.',
      'Keys should be linked to the relevant job card or vehicle identification record.',
    ],
  },
  {
    title: '5. Key Storage',
    bullets: [
      'Keys should be kept in a reasonably secure and controlled location when not in authorised use.',
      'Access to stored keys should be limited to authorised personnel.',
      'Keys should not be left unnecessarily inside unattended vehicles or exposed in publicly accessible areas.',
    ],
  },
  {
    title: '6. Key Access and Movement',
    paragraphs: [
      'Keys may be accessed for legitimate service purposes including vehicle movement, inspection, repair, diagnostic work, road testing, washing, parking, pickup/drop or delivery. Unauthorised personal use or removal of keys is prohibited.',
    ],
  },
  {
    title: '7. Key Handover',
    bullets: [
      'When a vehicle is handed over to the Customer or authorised representative, the returned key set should be checked where reasonably practicable.',
      'Any discrepancy should be escalated before or at handover.',
      'A Customer or authorised representative may be asked to acknowledge receipt where an appropriate handover record is maintained.',
    ],
  },
  {
    title: '8. Lost or Damaged Keys',
    paragraphs: [
      'Any lost, damaged or malfunctioning key or remote identified while under workshop custody should be reported to management promptly. The circumstances may be reviewed using intake records, key logs, CCTV where available, staff statements and other relevant evidence.',
    ],
  },
  {
    title: '9. Customer Personal Property',
    paragraphs: [
      'Customers are strongly advised to remove cash, jewellery, electronics, documents, medicines, personal belongings and other valuables before handing over the vehicle. VahanXpert Services may record specific items only where they are declared, relevant to the service, or otherwise identified during the intake process.',
    ],
  },
  {
    title: '10. Property Found in Vehicle',
    bullets: [
      'If staff discover an item that appears to be Customer property, reasonable steps should be taken to secure it and identify the vehicle/job card to which it belongs.',
      'The item should not be used for personal purposes.',
      'Where appropriate, the item may be returned to the Customer at handover or otherwise handled according to internal lost-property procedures.',
    ],
  },
  {
    title: '11. Vehicle Documents',
    paragraphs: [
      'Vehicle documents received for service, insurance or other authorised purposes should be recorded where reasonably practicable and kept under reasonable control. Documents should not be copied, shared or retained unnecessarily.',
    ],
  },
  {
    title: '12. Accessories and Removable Items',
    bullets: [
      'Where relevant, material accessories or removable items supplied with the vehicle may be noted during intake.',
      'Examples may include spare wheel, tools, jack, wheel key, charging equipment, remote controls or other service-relevant items.',
      'The record should distinguish Customer-supplied items from items belonging to VahanXpert Services.',
    ],
  },
  {
    title: '13. Valuables and Unrecorded Items',
    paragraphs: [
      'VahanXpert Services does not assume responsibility for valuables or personal belongings that were not disclosed or recorded, except to the extent responsibility arises under applicable law or from established facts. Customers should retain valuables outside the vehicle whenever possible.',
    ],
  },
  {
    title: '14. Vehicle Parking and Storage',
    bullets: [
      'Vehicles should be parked in designated or reasonably controlled areas.',
      'Access to parked Customer vehicles should be limited to authorised operational requirements.',
      'Where feasible, vehicles should be locked when unattended.',
    ],
  },
  {
    title: '15. Vehicle Movement',
    paragraphs: [
      'Vehicle movement should be limited to legitimate workshop purposes. Unnecessary personal use, errands or unauthorised movement of Customer vehicles is prohibited.',
    ],
  },
  {
    title: '16. Pickup and Delivery',
    bullets: [
      'Pickup and delivery personnel should be appropriately authorised.',
      'Vehicle keys and relevant documents should be controlled during transportation.',
      'At delivery, reasonable verification of the Customer or authorised recipient may be performed.',
      'Any material discrepancy identified during pickup or delivery should be reported promptly.',
    ],
  },
  {
    title: '17. Emergency Access',
    paragraphs: [
      'In an emergency, authorised personnel may access or move a vehicle or its keys where reasonably necessary to protect life, property, the vehicle or the workshop. Such action should be documented where reasonably practicable.',
    ],
  },
  {
    title: '18. Privacy and Confidentiality',
    paragraphs: [
      'Keys, vehicle documents, Customer belongings, service records and vehicle information may contain or reveal personal information. Staff must handle such information confidentially and use it only for legitimate service, safety, operational, legal or customer-support purposes.',
    ],
  },
  {
    title: '19. Staff Responsibilities',
    bullets: [
      'Do not take Customer keys or property outside authorised work requirements.',
      'Do not use Customer property for personal purposes.',
      'Do not disclose Customer information or documents to unauthorised persons.',
      'Report loss, damage, theft, suspected misuse or discrepancies immediately.',
    ],
  },
  {
    title: '20. Customer Responsibilities',
    bullets: [
      'Remove valuables and unnecessary personal belongings before vehicle handover.',
      'Declare any property that must remain in the vehicle for a specific service requirement.',
      'Provide accurate information regarding keys, documents and accessories handed over.',
      'Collect the vehicle and property within the agreed or communicated timeframe where applicable.',
    ],
  },
  {
    title: '21. Incident Reporting',
    paragraphs: [
      'Loss, theft, unauthorised access, key discrepancy, missing property, vehicle damage or other material custody incident should be reported and handled under the applicable Vehicle Damage, Loss & Incident Reporting Policy.',
    ],
  },
  {
    title: '22. Handover and Final Check',
    bullets: [
      'Before final delivery, the vehicle may be checked for basic handover items and recorded accessories.',
      'Keys and documents received at intake should be returned where applicable.',
      'The Customer may be requested to review the vehicle and raise any immediate discrepancy at handover.',
    ],
  },
  {
    title: '23. Disputes Regarding Property',
    paragraphs: [
      'If a Customer reports a missing or damaged item, VahanXpert Services may review intake records, photographs, CCTV where available, staff statements, key records and other relevant evidence. Findings should be based on available evidence and applicable contractual and legal requirements.',
    ],
  },
  {
    title: '24. Policy Violations',
    paragraphs: [
      'Unauthorised use, removal, concealment, theft, intentional damage or misuse of Customer keys or property may result in disciplinary, contractual or legal action as applicable.',
    ],
  },
  {
    title: '25. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on workshop operations, security requirements, incident experience or applicable legal requirements.',
    ],
  },
];

export default function VehicleKeyCustodyContent() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>

          <h1>Vehicle Key, Customer Property &amp; Vehicle Custody Policy</h1>

          <div className={styles.policyMeta}>
            <span>
              <strong>Policy No.:</strong> VXS/VKC/024
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
            <h2>26. Business Contact</h2>

            <div className={styles.contact}>
              <strong>VahanXpert Services</strong>

              <p>
                <span>Address: </span>
                D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh –
                226010
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

          <section className={styles.policySection}>
            <h2>27. Document Control</h2>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th scope="row">Document Name</th>
                    <td>
                      Vehicle Key, Customer Property &amp; Vehicle Custody
                      Policy
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th scope="row">Policy Number</th>
                    <td>VXS/VKC/024</td>
                  </tr>
                  <tr>
                    <th scope="row">Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th scope="row">Review Frequency</th>
                    <td>
                      At least annually or whenever operational/security
                      requirements change
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className={styles.footerText}>
            VahanXpert Services | Vehicle Key, Customer Property &amp; Vehicle
            Custody Policy
          </p>
        </article>
      </div>
    </div>
  );
}