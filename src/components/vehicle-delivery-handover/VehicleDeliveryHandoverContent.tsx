
import styles from './VehicleDeliveryHandoverContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes the standard process for final inspection, billing, payment verification, documentation and physical handover of vehicles after servicing, repair, accidental repair or other authorised workshop work at VahanXpert Services. The objective is to ensure that vehicle delivery is properly documented and that the Customer receives the vehicle and relevant documents in an orderly manner.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to all vehicles released from VahanXpert Services after servicing, repair, washing, denting-painting, AC repair, battery work, wheel alignment, tyre services, accidental repairs, insurance-claim repairs, breakdown assistance, modification/customization and other applicable services.',
    ],
  },
  {
    title: '3. Vehicle Readiness Before Delivery',
    bullets: [
      'The authorised workshop/service team should verify that the approved work has been completed to the extent reasonably applicable.',
      'The final condition of the vehicle should be checked for material issues relating to the completed work.',
      'Where appropriate, a road test or functional test may be conducted before delivery.',
      'Any material unresolved issue or pending work should be communicated to the Customer before handover where reasonably practicable.',
    ],
  },
  {
    title: '4. Final Inspection and Quality Check',
    bullets: [
      'The service advisor or authorised representative should review the completed job against the job card and approved scope.',
      'Relevant warning indicators, fluid levels, replaced components, tyre/wheel work, electrical functions and other repaired items may be checked as applicable.',
      'Where the repair is insurance-related, the completed work may also be checked against the approved claim/repair scope.',
      'Quality-check records may be maintained in the job card or workshop system.',
    ],
  },
  {
    title: '5. Final Invoice',
    bullets: [
      'A final invoice should be prepared for the applicable services, parts, labour, taxes and other authorised charges.',
      'The final invoice should, where practicable, distinguish customer-paid amounts from amounts expected to be settled by an insurer or other third party.',
      'Material differences between the final invoice and the approved estimate should be explained where reasonably practicable.',
      'Any outstanding balance should be settled according to the applicable payment terms before ordinary vehicle handover.',
    ],
  },
  {
    title: '6. Insurance Claim Vehicle Delivery',
    bullets: [
      'For insurance repairs, vehicle delivery may be subject to completion of insurer/surveyor formalities applicable to the claim.',
      'The Customer remains responsible for deductibles, depreciation, non-payable items and other amounts not covered by the insurer, as applicable.',
      'Cashless processing, where available, does not guarantee that all repair costs will be paid by the insurer.',
      'The Garage may retain or provide claim-related documents as required by the insurer and applicable process.',
    ],
  },
  {
    title: '7. Payment Verification',
    bullets: [
      "Payment should be verified through the Garage's available records before vehicle release.",
      'For digital payments, the transaction/reference status should be checked rather than relying solely on a screenshot or verbal confirmation.',
      'Where a payment is pending, reversed or not confirmed, delivery may be deferred subject to the applicable circumstances and management approval.',
      'Any approved credit arrangement should be documented.',
    ],
  },
  {
    title: '8. Handover to Customer or Authorised Representative',
    bullets: [
      'The vehicle should ordinarily be handed over to the Customer or a person authorised by the Customer.',
      'Where appropriate, the Garage may request reasonable identification or authorisation details before handover.',
      'The person receiving the vehicle may be asked to acknowledge delivery by signature, OTP, digital confirmation or another verifiable method.',
      'The handover record should identify the date and time of delivery where practicable.',
    ],
  },
  {
    title: '9. Keys, Documents and Accessories',
    bullets: [
      'Keys, service records, invoices, warranty documents and other applicable items should be handed over according to the job.',
      'If multiple keys were received at intake, the number of keys returned should be recorded where practicable.',
      'Insurance/RTO-related documents may be handed over subject to the applicable process and third-party requirements.',
      'Accessories or items specifically deposited with the vehicle should be checked against the intake record where applicable.',
    ],
  },
  {
    title: '10. Vehicle Condition at Handover',
    paragraphs: [
      'The Customer should be given a reasonable opportunity to inspect the vehicle at handover. Visible discrepancies relating to the completed work should be raised promptly so that the Garage can review them against the job card, intake photographs, inspection records and work performed.',
    ],
  },
  {
    title: '11. Customer-Declined or Pending Work',
    bullets: [
      'Any repair or recommendation declined by the Customer may be recorded on the job card or final service record.',
      'If any work remains pending due to parts availability, customer instructions, insurer approval or another documented reason, the Customer should be informed.',
      'Pending work should not be represented as completed.',
    ],
  },
  {
    title: '12. Vehicle Not Collected After Completion',
    bullets: [
      'The Garage may contact the Customer when the vehicle is ready for collection.',
      'If the vehicle remains uncollected beyond the communicated period, the Garage may issue reminders through available communication channels.',
      "Where storage/parking charges are applicable, they should be communicated in accordance with the Garage's terms.",
      'Any prolonged non-collection should be escalated to authorised management for appropriate action under applicable law.',
    ],
  },
  {
    title: '13. Personal Belongings',
    paragraphs: [
      'Customers are advised to remove cash, documents, valuables and personal belongings before vehicle handover. The Garage may document items found in the vehicle when reasonably necessary, but customers remain responsible for collecting and securing their belongings.',
    ],
  },
  {
    title: '14. Delivery Disputes',
    paragraphs: [
      'If a Customer raises a delivery-related concern, the vehicle should not be represented as finally accepted merely because an invoice has been issued. The Garage may review the concern using the job card, intake photographs, inspection records, quality-check records and other relevant information and may escalate the matter to management for resolution.',
    ],
  },
  {
    title: '15. Warranty and Post-Delivery Concerns',
    paragraphs: [
      'Any warranty or post-service concern shall be handled according to the applicable warranty terms stated on the invoice, job card, part documentation or service terms. Customers should report material service-related concerns promptly so that the Garage can inspect and determine the appropriate course of action.',
    ],
  },
  {
    title: '16. Records and Documentation',
    bullets: [
      'The Garage may retain job cards, final invoices, payment records, delivery acknowledgements, photographs, inspection reports, warranty records and relevant communications.',
      'Records should be linked to the relevant vehicle/job card wherever practicable.',
      'Records may be retained for service history, warranty, insurance, accounting, complaint handling, audit and legal/compliance purposes.',
    ],
  },
  {
    title: '17. Customer Responsibilities at Handover',
    bullets: [
      'Inspect the vehicle and relevant work where reasonably possible.',
      'Confirm receipt of keys, documents and other applicable items.',
      'Settle applicable outstanding dues.',
      'Inform the Garage promptly of any visible discrepancy or concern.',
      'Follow post-service instructions and warranty requirements.',
    ],
  },
  {
    title: '18. Privacy and Confidentiality',
    paragraphs: [
      "Customer, vehicle, payment and delivery information shall be used for legitimate service, billing, insurance, security, warranty, dispute-resolution and legal/compliance purposes and should be accessed only by authorised personnel, subject to applicable law and VahanXpert Services' privacy practices.",
    ],
  },
  {
    title: '19. Management Responsibility',
    paragraphs: [
      'The Service Advisor or authorised workshop representative shall ensure that the delivery process is completed in accordance with this Policy. Material exceptions, disputes or unusual release circumstances should be referred to authorised management.',
    ],
  },
  {
    title: '20. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on operational requirements, customer feedback, insurance processes, technology changes or applicable legal requirements.',
    ],
  },
];

export default function VehicleDeliveryHandoverContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>Vehicle Delivery &amp; Handover Policy</h1>

          <div className={styles.policyMeta}>
            <strong>Policy No.: VXS/VD/005</strong>
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
                    <td>Vehicle Delivery &amp; Handover Policy</td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/VD/005</td>
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
            VahanXpert Services | Vehicle Delivery &amp; Handover Policy
          </p>
        </article>
      </div>
    </section>
  );
}
