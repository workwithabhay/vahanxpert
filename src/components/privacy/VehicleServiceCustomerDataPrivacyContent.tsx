
'use client';

import styles from './VehicleServiceCustomerDataPrivacyContent.module.css';

const sections = [
  {
    title: '1. Purpose',
    content: [
      'This Policy describes how VahanXpert Services may collect, use, store, access, share and protect Customer and vehicle-related information obtained during vehicle servicing, repair, insurance coordination, pickup/drop, billing, warranty and customer support activities.',
    ],
  },
  {
    title: '2. Scope',
    content: [
      'This Policy applies to Customer information and vehicle/service information collected through workshop visits, job cards, estimates, invoices, warranty records, phone calls, email, WhatsApp or other official communication channels, digital systems, website interactions and authorised service processes.',
    ],
  },
  {
    title: '3. Information That May Be Collected',
    bullets: [
      'Customer name and contact details such as mobile number, email address and communication details.',
      'Vehicle information such as registration number, make, model, variant, vehicle identification details where required, odometer reading and service history.',
      'Job card, estimate, invoice, payment and warranty information.',
      'Vehicle condition photographs, inspection records, diagnostic information and service-related videos where reasonably required.',
      'Insurance-related information where the Customer requests or requires insurance repair assistance.',
      'Pickup/drop details and authorised representative information where applicable.',
      'Complaint, feedback and communication records.',
      'Information required for legal, accounting, insurance, warranty, safety or dispute-resolution purposes.',
    ],
  },
  {
    title: '4. Purpose of Collection and Use',
    bullets: [
      'To identify the Customer and vehicle and create service records.',
      'To provide vehicle servicing, repair, inspection, warranty and related services.',
      'To prepare estimates, invoices and payment records.',
      'To coordinate insurance repairs or manufacturer/supplier warranty claims where requested or required.',
      'To arrange vehicle pickup, delivery and transportation.',
      'To communicate service updates, approvals, delays, invoices and other service-related information.',
      'To investigate complaints, incidents, damage claims and disputes.',
      'To maintain service history, quality records and operational records.',
      'To comply with applicable legal, tax, accounting, insurance or regulatory requirements.',
    ],
  },
  {
    title: '5. Customer Consent and Communication',
    content: [
      'Where consent or another lawful basis is required for a particular processing activity, VahanXpert Services may seek the appropriate consent or rely on another legally permitted basis. Service-related communications may be sent where reasonably necessary to provide or administer the requested service. Marketing communications, where applicable, should be handled in accordance with applicable consent and communication requirements.',
    ],
  },
  {
    title: '6. Photographs and Vehicle Condition Records',
    content: [
      "Photographs or videos may be taken to record the vehicle's condition, pre-existing damage, repair progress, final condition, insurance documentation, quality control or incident evidence. Such records should be used for legitimate service, insurance, dispute-resolution, safety or legal purposes.",
    ],
  },
  {
    title: '7. Payment and Financial Information',
    content: [
      'Payment information may be processed or recorded to the extent necessary for billing and reconciliation. Where payment is made through a third-party payment provider, relevant payment information may be processed by that provider under its applicable terms and privacy practices. VahanXpert Services should avoid unnecessarily retaining sensitive payment credentials such as card PINs, CVVs or passwords.',
    ],
  },
  {
    title: '8. Insurance and Third-Party Sharing',
    bullets: [
      'Information may be shared with insurers, surveyors, vehicle manufacturers, authorised distributors, parts suppliers, roadside assistance providers or other service partners where reasonably necessary to provide the requested service or process a claim.',
      'Only information reasonably relevant to the applicable purpose should be shared where practicable.',
      'Third parties may process information under their own applicable privacy and contractual terms.',
    ],
  },
  {
    title: '9. Service Providers and Vendors',
    content: [
      'VahanXpert Services may use third-party service providers for software, communication, cloud storage, payment processing, accounting, towing, insurance coordination or other operational functions. Such providers may access information only to the extent reasonably necessary for the services they provide, subject to applicable contractual, security and legal requirements.',
    ],
  },
  {
    title: '10. Data Security',
    bullets: [
      'Reasonable administrative, technical and organisational safeguards should be used to protect Customer and vehicle information against unauthorised access, loss, misuse, alteration or disclosure.',
      'Access to service records should be limited to authorised personnel based on operational need.',
      'Passwords, system credentials and access information should not be shared improperly.',
      'Physical documents containing Customer information should be stored and disposed of in a reasonably secure manner.',
    ],
  },
  {
    title: '11. Employee and Staff Responsibilities',
    bullets: [
      'Staff should access Customer information only for legitimate work purposes.',
      'Customer information should not be disclosed to unauthorised persons.',
      'Staff should follow applicable access-control, device-security and record-handling procedures.',
      'Suspected data loss, unauthorised access or disclosure should be reported to management promptly.',
    ],
  },
  {
    title: '12. Data Retention',
    content: [
      'Customer and vehicle records may be retained for service history, warranty, insurance, accounting, tax, complaint handling, dispute resolution, quality control, legal/compliance and other legitimate business purposes for an appropriate period considering the nature of the record and applicable requirements.',
    ],
  },
  {
    title: '13. Data Deletion and Disposal',
    bullets: [
      'When records are no longer required for legitimate business, legal, warranty, insurance or dispute purposes, they may be securely deleted, destroyed or anonymised where reasonably practicable.',
      'Paper records should be disposed of in a manner reasonably designed to prevent unauthorised disclosure.',
      'Electronic records should be deleted or access-disabled using appropriate system controls where feasible.',
    ],
  },
  {
    title: '14. Customer Requests',
    content: [
      'A Customer may contact VahanXpert Services to ask about personal information held by the Garage or to raise a privacy-related concern. Requests may be subject to reasonable identity verification and to applicable legal, contractual and record-retention requirements.',
    ],
  },
  {
    title: '15. Accuracy of Information',
    content: [
      'Customers should provide accurate and updated contact, vehicle and service information. Where a Customer identifies an error in relevant service records, VahanXpert Services may review and correct the information where appropriate and reasonably practicable.',
    ],
  },
  {
    title: '16. Confidentiality',
    content: [
      'Customer information, vehicle records, service history, photographs, invoices, insurance information and complaint records should be treated as confidential and should not be disclosed except for legitimate service purposes, authorised third-party processing, legal requirements or other permitted purposes.',
    ],
  },
  {
    title: '17. CCTV and Security Records',
    content: [
      'Where CCTV or other security monitoring is used at workshop premises, recordings may be used for security, incident investigation, vehicle custody, safety, dispute resolution and legal/compliance purposes, subject to applicable requirements. Access to such records should be restricted to authorised personnel and legitimate purposes.',
    ],
  },
  {
    title: '18. Data Breach or Privacy Incident',
    bullets: [
      'Suspected loss, unauthorised access, accidental disclosure or other material privacy incident should be reported internally to authorised management.',
      'The incident may be investigated to identify the information affected, circumstances, containment measures and appropriate corrective action.',
      'Where notification or other action is required under applicable law, VahanXpert Services may take such action within the applicable requirements.',
    ],
  },
  {
    title: '19. Customer Responsibilities',
    bullets: [
      'Do not share unnecessary passwords, PINs or other sensitive credentials with workshop personnel.',
      'Remove unnecessary personal documents and valuables from the vehicle before handing it over.',
      'Keep contact information updated for service communications.',
      'Inform the Garage if a communication channel should no longer be used for service-related communication.',
    ],
  },
  {
    title: '20. Marketing and Promotional Communication',
    content: [
      'Where VahanXpert Services sends promotional or marketing communication, such communication should be handled in accordance with applicable consent, preference and communication requirements. Customers may contact the Garage to raise a marketing communication preference or opt-out request where such option is applicable.',
    ],
  },
  {
    title: '21. Children and Sensitive Information',
    content: [
      'The Garage does not intentionally seek unnecessary sensitive personal information. If information relating to a child or other sensitive information is provided incidentally, it should be handled only to the extent reasonably necessary for the relevant service, safety, legal or support purpose.',
    ],
  },
  {
    title: '22. Privacy Complaints',
    content: [
      'Privacy-related concerns may be raised through the official contact details below. VahanXpert Services may review relevant records, communications and system information and provide an appropriate response subject to applicable law and legitimate confidentiality requirements.',
    ],
  },
  {
    title: '23. Policy Changes',
    content: [
      'This Policy may be updated from time to time to reflect changes in workshop operations, technology, service providers, legal requirements or privacy practices. The latest applicable version should be used for ongoing processing.',
    ],
  },
  {
    title: '24. No Unauthorised Disclosure',
    content: [
      'Customer data must not be sold, disclosed or shared for unrelated purposes without an appropriate lawful basis, consent where required, or other permitted justification.',
    ],
  },
];

export default function VehicleServiceCustomerDataPrivacyContent() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>VAHANXPERT SERVICES</p>
          <h1>Vehicle Service &amp; Customer Data Privacy Policy</h1>
          <div className={styles.meta}>
            <span><strong>Policy No.:</strong> VXS/DP/018</span>
            <span className={styles.separator}>|</span>
            <span><strong>Version:</strong> 1.0</span>
            <span className={styles.separator}>|</span>
            <span><strong>Effective Date:</strong> 20/09/2026</span>
          </div>
        </header>

        <div className={styles.documentCards}>
          {sections.map((section, index) => (
            <section
              className={styles.document}
              id={`section-${index + 1}`}
              key={section.title}
            >
              <h2>{section.title}</h2>

              {section.content?.map((paragraph) => (
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

          <section className={styles.document} id="section-25">
            <h2>25. Business Contact</h2>
            <div className={styles.contact}>
              <h3>VahanXpert Services</h3>
              <p>
                D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh –
                226010
              </p>
              <p>
                <strong>Email: </strong>
                <a href="mailto:info.vahanxpert@gmail.com">
                  info.vahanxpert@gmail.com
                </a>
              </p>
              <p>
                <strong>Mobile: </strong>
                <a href="tel:+918930293896">+91 8930293896</a>
              </p>
            </div>
          </section>

          <section className={styles.document} id="section-26">
            <h2>26. Document Control</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th scope="row">Document Name</th>
                    <td>Vehicle Service &amp; Customer Data Privacy Policy</td>
                  </tr>
                  <tr>
                    <th scope="row">Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th scope="row">Policy Number</th>
                    <td>VXS/DP/018</td>
                  </tr>
                  <tr>
                    <th scope="row">Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th scope="row">Review Frequency</th>
                    <td>
                      At least annually or whenever operational/legal
                      requirements change
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <footer className={styles.documentFooter}>
            VahanXpert Services | Vehicle Service &amp; Customer Data Privacy
            Policy
          </footer>
        </div>
      </div>
    </div>
  );
}
