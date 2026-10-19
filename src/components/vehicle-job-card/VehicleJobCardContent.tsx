
import styles from './VehicleJobCardContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes a standard process for receiving vehicles, opening job cards, recording customer instructions, documenting vehicle condition, obtaining work authorization, recording additional work approvals, and closing the job card at vehicle delivery. It is intended to create a clear and traceable record of the work requested and authorised at VahanXpert Services.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to vehicles received for servicing, repair, washing, denting-painting, AC repair, battery replacement, wheel alignment, tyre services, accidental repairs, insurance-claim support, breakdown assistance, modification/customization and other workshop services offered by VahanXpert Services.',
    ],
  },
  {
    title: '3. Job Card Creation',
    bullets: [
      'A job card shall be created for each vehicle/service order wherever operationally applicable.',
      'The job card should contain the vehicle registration number, make/model, customer name and contact details, date/time of vehicle receipt, requested work and applicable service reference.',
      'Where relevant, the job card may also record odometer reading, fuel level, key count and insurance/claim details.',
      'The job card number should be used as the primary reference for workshop communication, estimates, approvals, parts and final billing.',
    ],
  },
  {
    title: '4. Vehicle Condition at Reception',
    bullets: [
      'The receiving staff should conduct a reasonable visual inspection and record visible dents, scratches, broken parts, warning lights, glass damage, tyre condition and other material observations where applicable.',
      'Photographs/videos may be taken with appropriate customer notice or consent for condition documentation, insurance processing and workshop records.',
      'The Customer should remove valuables and personal belongings before vehicle handover.',
      'Existing damage should be recorded separately from damage arising during the authorised workshop work, based on available records.',
    ],
  },
  {
    title: '5. Customer Complaint and Requested Work',
    paragraphs: [
      "The Customer's reported concern and requested work should be recorded as accurately as reasonably possible. Where the Customer reports a symptom rather than a confirmed fault, the job card should distinguish the reported symptom from the workshop's later diagnosis.",
    ],
  },
  {
    title: '6. Inspection and Diagnosis',
    bullets: [
      'The Garage may inspect, scan, test or diagnose the vehicle to identify the cause of the reported issue.',
      'Diagnosis may require inspection beyond the initially visible condition.',
      'Where diagnosis involves a charge, the applicable charge should be communicated or recorded before the chargeable diagnostic work is undertaken, where reasonably practicable.',
      'A diagnosis does not by itself authorise every repair; repair work remains subject to the applicable approval process.',
    ],
  },
  {
    title: '7. Estimate and Initial Work Authorization',
    bullets: [
      'The Customer should be informed of the estimated cost and scope of the proposed work before major repair work begins, where reasonably practicable.',
      "The Customer's approval may be recorded through a signed job card, written communication, digital approval, approved estimate or another verifiable method.",
      'The approval should identify the approved scope as clearly as reasonably practicable.',
      'If the Customer declines recommended work, the declined work should be recorded where relevant.',
    ],
  },
  {
    title: '8. Additional Work Authorization',
    bullets: [
      'If additional defects or necessary repairs are discovered, the additional work and estimated additional cost should be communicated to the Customer before proceeding, where reasonably practicable.',
      'Additional approval may be recorded through written, digital or other verifiable communication.',
      'Where immediate action is reasonably necessary to prevent further vehicle damage or a safety risk and the Customer cannot reasonably be contacted, the Garage may take proportionate action and document the reason and work performed.',
      'Unauthorised additional work should not ordinarily be included as an approved customer charge merely because it was technically desirable.',
    ],
  },
  {
    title: '9. Insurance and Accidental Repair Jobs',
    bullets: [
      'For insurance-related jobs, the job card should identify the relevant claim/insurance reference where available.',
      'Repair scope may be subject to insurer/surveyor assessment and approval.',
      'Customer approval may still be required for deductibles, non-payable items and additional work not covered by the insurer.',
      'The job card should distinguish insurer-approved work from customer-paid or customer-approved additional work where practicable.',
    ],
  },
  {
    title: '10. Spare Parts and Consumables Record',
    bullets: [
      'Material parts replaced during the job should be recorded in the job card, estimate or invoice as applicable.',
      'Part numbers, quantities, brands or other identifying details may be recorded where useful for traceability.',
      'Parts may be subject to supplier, manufacturer or insurer terms.',
      'Where old parts are returned to the Customer, the return may be recorded at delivery.',
    ],
  },
  {
    title: '11. Work Progress and Internal Control',
    bullets: [
      'Technicians/workshop personnel should perform work according to the approved job scope and applicable workshop procedures.',
      'Material deviations from the approved scope should be communicated to the service advisor/authorised person.',
      'Quality checks or inspection results may be recorded before the vehicle is marked ready for delivery.',
      'Any road test should be recorded where operationally relevant.',
    ],
  },
  {
    title: '12. Customer Communication',
    paragraphs: [
      'VahanXpert Services may communicate with the Customer by phone, SMS, WhatsApp, email or other available channels regarding inspection findings, estimates, approvals, repair status, additional work, payment and delivery. The Garage may retain relevant communication records for service, billing, dispute resolution, warranty, insurance and legal/compliance purposes.',
    ],
  },
  {
    title: '13. Job Card Closure',
    bullets: [
      'Before closure, the service advisor/workshop should verify the completed work against the approved scope.',
      'The final invoice should reflect applicable authorised services, parts, labour, taxes and other charges.',
      'Pending work, customer-declined work or recommendations for future service may be recorded where relevant.',
      'The final job card should be linked with the invoice and delivery record wherever the system permits.',
    ],
  },
  {
    title: '14. Vehicle Handover',
    bullets: [
      'The vehicle should ordinarily be handed over to the Customer or authorised representative after completion of the applicable delivery process and settlement of due amounts.',
      'The delivery record may include date/time, person receiving the vehicle, key handover and relevant observations.',
      'The Customer should be encouraged to review the vehicle and invoice at handover and raise visible discrepancies promptly.',
    ],
  },
  {
    title: '15. Corrections and Record Integrity',
    bullets: [
      'Job-card records should be maintained in a manner that preserves their reliability and traceability.',
      'Material corrections should be identifiable rather than silently overwriting the original record where the system supports audit history.',
      'Only authorised personnel should approve or alter material work-scope or billing information.',
    ],
  },
  {
    title: '16. Customer Responsibilities',
    bullets: [
      'Provide accurate vehicle and contact information.',
      'Disclose known faults, prior repairs, modifications and relevant vehicle history where known.',
      'Provide required documents for insurance/RTO-related work where applicable.',
      'Review and approve estimates/additional work when requested.',
      'Collect the vehicle and settle applicable dues within the agreed/communicated period.',
    ],
  },
  {
    title: '17. Records Retention',
    paragraphs: [
      "Job cards, estimates, approvals, photographs, inspection records, invoices and relevant communications may be retained according to VahanXpert Services' applicable record-retention requirements, legal obligations, insurance requirements and operational needs.",
    ],
  },
  {
    title: '18. Privacy and Confidentiality',
    paragraphs: [
      "Customer and vehicle information collected through job cards shall be used for legitimate workshop, service, billing, insurance, communication, security and legal/compliance purposes. Access to such records should be limited to personnel who require the information for their duties, subject to applicable law and the Garage's privacy practices.",
    ],
  },
  {
    title: '19. Responsibility and Escalation',
    paragraphs: [
      'The Service Advisor/authorised workshop representative shall be responsible for ensuring that the job card is appropriately created and updated. Material disputes regarding scope, approval, billing or vehicle condition should be escalated to authorised management for review.',
    ],
  },
  {
    title: '20. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated when there are changes in workshop operations, technology, insurance processes, applicable legal requirements or service practices.',
    ],
  },
];

export default function VehicleJobCardContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>Vehicle Job Card &amp; Work Authorization Policy</h1>

          <div className={styles.policyMeta}>
            <strong>Policy No.: VXS/JW/002</strong>
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
            <h2>21. Business Contact</h2>
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
            <h2>22. Document Control</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th>Document Name</th>
                    <td>Vehicle Job Card &amp; Work Authorization Policy</td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/JW/002</td>
                  </tr>
                  <tr>
                    <th>Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th>Review Frequency</th>
                    <td>
                      At least annually or whenever operational/legal
                      requirements change
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className={styles.footerText}>
            VahanXpert Services | Vehicle Job Card &amp; Work Authorization Policy
          </p>
        </article>
      </div>
    </section>
  );
}
