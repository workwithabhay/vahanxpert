import type { Metadata } from 'next';
import styles from './VehicleServiceEstimateJobCardContent.module.css';

const sections = [
  {
    title: '1. Purpose',
    content: [
      'This Policy establishes the process for vehicle intake, job-card creation, inspection, preparation of service estimates, Customer approval, additional work approval, repair documentation and final job closure at VahanXpert Services.',
    ],
  },
  {
    title: '2. Scope',
    content: [
      'This Policy applies to routine servicing, repairs, accidental repairs, insurance-related work, diagnostics, warranty-related work, maintenance packages and other workshop jobs undertaken by VahanXpert Services.',
    ],
  },
  {
    title: '3. Job Card Creation',
    content: [
      'A job card or authorised service record should be created for each service or repair order.',
      'The job card may contain Customer details, vehicle identification, odometer reading, reported concern, visible condition, requested work and relevant observations.',
      'A unique job-card/reference number may be assigned for tracking the service order.',
    ],
  },
  {
    title: '4. Customer Concern and Requested Work',
    content: [
      "The Customer's reported complaint or requested service should be recorded as accurately as reasonably practicable. Where a concern is unclear, the workshop may conduct an inspection or diagnosis before providing a final estimate.",
    ],
  },
  {
    title: '5. Initial Inspection',
    content: [
      'The vehicle may be inspected to identify visible damage, service requirements, safety concerns and reported faults.',
      'Photographs, diagnostic readings, inspection notes or other records may be used where appropriate.',
      'Pre-existing damage should be identified and recorded where reasonably practicable.',
    ],
  },
  {
    title: '6. Estimate Preparation',
    content: [
      'Where an estimate is required, VahanXpert Services may provide an estimate based on the information available at that stage. The estimate may include labour, parts, consumables, taxes and other applicable charges.',
    ],
  },
  {
    title: '7. Estimate is an Approximation',
    content: [
      'Unless expressly stated as a fixed-price quotation, an estimate is an initial assessment and may change if additional faults, hidden damage, parts requirements or technical conditions are discovered during dismantling, diagnosis or repair.',
    ],
  },
  {
    title: '8. Customer Approval',
    content: [
      'Where reasonably practicable, Customer approval should be obtained before carrying out chargeable work beyond the originally authorised scope.',
      'Approval may be obtained through signed documents, email, WhatsApp, SMS, digital approval, OTP, recorded system confirmation or another authorised method.',
      'The approval record should identify the relevant estimate, additional work or amount where practicable.',
    ],
  },
  {
    title: '9. Additional / Supplementary Work',
    content: [
      'If additional repair or replacement is identified after the initial approval, VahanXpert Services may prepare a supplementary estimate or communicate the additional requirement. Additional chargeable work should ordinarily be performed only after Customer approval, except where immediate action is reasonably necessary for safety, protection of the vehicle or another legitimate urgent reason.',
    ],
  },
  {
    title: '10. Parts Replacement',
    content: [
      'Parts may be replaced where approved by the Customer or where replacement is included in an authorised service package.',
      'Where practicable, replaced parts may be shown to the Customer upon request, subject to warranty, supplier, disposal, safety or insurance requirements.',
      'Part selection may depend on availability, vehicle specifications, manufacturer requirements and Customer-approved options.',
    ],
  },
  {
    title: '11. Parts Warranty',
    content: [
      "Warranty on spare parts shall remain subject to the applicable manufacturer, authorised distributor or supplier warranty terms. The installation or replacement of a part by VahanXpert Services does not independently extend the manufacturer's warranty unless a separate written warranty is expressly provided by VahanXpert Services.",
    ],
  },
  {
    title: '12. Labour and Service Charges',
    content: [
      'Labour charges may be calculated based on the applicable service rate, job complexity, time, package or agreed estimate. Additional labour arising from newly identified work may require additional approval where applicable.',
    ],
  },
  {
    title: '13. Insurance / Cashless Repairs',
    content: [
      'For insurance-related repairs, the estimate, approval, surveyor assessment, insurer authorisation, deductible/excess and other applicable terms may affect the work scope and Customer payable amount. Insurance approval does not automatically authorise unrelated work.',
    ],
  },
  {
    title: '14. Customer-Provided Parts',
    content: [
      'Where Customer-provided parts are accepted, VahanXpert Services may inspect them for basic suitability. The workshop may decline installation of a part that appears incompatible, unsafe, damaged or unsuitable. Warranty for Customer-provided parts remains the responsibility of the relevant manufacturer/supplier unless otherwise agreed in writing.',
    ],
  },
  {
    title: '15. Delays and Parts Availability',
    content: [
      'Service completion time may depend on diagnosis, parts availability, insurance approval, workshop workload, supplier timelines and unforeseen technical issues.',
      'Customers should be informed of material delays where reasonably practicable.',
      'A revised delivery estimate may be provided when the expected completion time changes.',
    ],
  },
  {
    title: '16. Customer Cancellation / Change of Scope',
    content: [
      'A Customer may request cancellation or modification of the service scope. Charges may apply for work already performed, parts specially ordered, parts installed, diagnostics or other applicable commitments, subject to the agreed terms and applicable law.',
    ],
  },
  {
    title: '17. Job Card Updates',
    content: [
      'Material changes to work scope, approvals and significant observations should be recorded against the job card or service record.',
      'The job card may include technician notes, inspection findings, parts used, labour performed, diagnostic results and quality-check observations.',
    ],
  },
  {
    title: '18. Quality Check',
    content: [
      'Before final delivery, VahanXpert Services may conduct a quality check appropriate to the work performed. Where relevant, a road test or diagnostic verification may be conducted in accordance with the Vehicle Inspection, Road Test & Test Drive Safety Policy.',
    ],
  },
  {
    title: '19. Final Invoice',
    content: [
      'The final invoice should reflect the services, parts and other chargeable items actually supplied or performed, subject to applicable estimates, approvals, packages, insurance arrangements and corrections.',
    ],
  },
  {
    title: '20. Customer Review and Handover',
    content: [
      'At handover, the Customer may be provided with the invoice and relevant service information.',
      'The Customer may review the vehicle and raise an immediate discrepancy.',
      'Payment or other agreed settlement arrangements should be completed according to the applicable terms.',
    ],
  },
  {
    title: '21. Unauthorised Work',
    content: [
      'VahanXpert Services should not intentionally perform unrelated chargeable work without appropriate authorisation, except where immediate action is reasonably necessary to protect safety, prevent further vehicle damage or comply with a legal/insurance requirement.',
    ],
  },
  {
    title: '22. Records',
    content: [
      'Job cards, estimates, approvals, invoices, inspection records and relevant communications may be retained for service history, warranty, accounting, insurance, dispute resolution and legal/compliance purposes.',
      'Electronic records should be protected against unauthorised alteration or access.',
    ],
  },
  {
    title: '23. Customer Responsibilities',
    content: [
      'Provide accurate vehicle and contact information.',
      'Clearly describe the reported vehicle concern where possible.',
      'Review estimates and approvals before authorising additional work.',
      'Inform the workshop of relevant vehicle modifications, previous repairs or known issues where material.',
      'Make payments according to agreed terms.',
    ],
  },
  {
    title: '24. Workshop Responsibilities',
    content: [
      'Maintain reasonably accurate job-card and estimate records.',
      'Communicate material changes in scope where reasonably practicable.',
      'Obtain appropriate Customer approval for additional chargeable work.',
      'Maintain relevant service records and protect Customer information.',
    ],
  },
  {
    title: '25. Disputes',
    content: [
      'If a Customer disputes an estimate, approval, work scope or invoice, VahanXpert Services may review the job card, inspection records, photographs, approvals, communications, parts records and invoice before responding. The matter may also be handled under the applicable Customer Grievance and Dispute Management process.',
    ],
  },
  {
    title: '26. Policy Review',
    content: [
      'This Policy shall be reviewed periodically and may be updated based on workshop operations, service processes, insurance requirements, technology or applicable legal requirements.',
    ],
  },
];

const customerResponsibilities = [
  'Provide accurate vehicle and contact information.',
  'Clearly describe the reported vehicle concern where possible.',
  'Review estimates and approvals before authorising additional work.',
  'Inform the workshop of relevant vehicle modifications, previous repairs or known issues where material.',
  'Make payments according to agreed terms.',
];

export const metadata: Metadata = {
  title: 'Vehicle Service Estimate, Customer Approval & Job Card Policy | VahanXpert',
  description:
    'VahanXpert Services policy covering vehicle service estimates, customer approvals, job cards, repair documentation and billing.',
};

export default function VehicleServiceEstimateJobCardContent() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>Vehicle Service Estimate, Customer Approval &amp; Job Card Policy</h1>
          <p className={styles.policyMeta}>
            Policy No.: VXS/EJC/025 <span>|</span> Version: 1.0 <span>|</span>{' '}
            Effective Date: 20/09/2026
          </p>
          <p className={styles.intro}>
            This policy explains how service requests, estimates, customer
            approvals, job cards, additional work and final billing are
            documented at VahanXpert Services.
          </p>
        </header>

        <div className={styles.sections}>
          {sections.map((section) => (
            <section className={styles.policyCard} key={section.title}>
              <h2>{section.title}</h2>
              {section.content.length > 1 ? (
                <ul>
                  {section.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content[0]}</p>
              )}
            </section>
          ))}

          <section className={styles.policyCard}>
            <h2>27. Business Contact</h2>
            <div className={styles.contactDetails}>
              <p><strong>VahanXpert Services</strong></p>
              <p>D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010</p>
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

          <section className={styles.policyCard}>
            <h2>28. Document Control</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.documentTable}>
                <tbody>
                  <tr>
                    <th>Document Name</th>
                    <td>Vehicle Service Estimate, Customer Approval &amp; Job Card Policy</td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/EJC/025</td>
                  </tr>
                  <tr>
                    <th>Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th>Review Frequency</th>
                    <td>At least annually or whenever service/operational requirements change</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <footer className={styles.pageFooter}>
          VahanXpert Services | Vehicle Service Estimate, Customer Approval &amp; Job Card Policy
        </footer>
      </div>
    </div>
  );
}