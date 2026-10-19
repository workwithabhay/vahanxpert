
import Link from 'next/link';
import styles from './RepairApprovalPolicyContent.module.css';
const sections = [
  {
    title: 'Purpose',
    content: (
      <p>
        This Policy establishes the process by which VahanXpert Services obtains,
        records and manages customer approval for vehicle repairs, replacement of
        parts and additional work discovered during inspection or while the vehicle
        is under repair. The objective is to maintain a clear record of the approved
        repair scope, estimated charges and subsequent changes.
      </p>
    ),
  },
  {
    title: 'Scope',
    content: (
      <p>
        This Policy applies to all vehicle servicing and repair activities undertaken
        by VahanXpert Services, including mechanical and electrical repair, AC repair,
        battery work, wheel alignment, tyre services, denting-painting, accidental
        repair, vehicle washing where paid work is involved, modifications/customization,
        breakdown assistance and insurance-related repair work.
      </p>
    ),
  },
  {
    title: 'Initial Repair Approval',
    content: (
      <ul>
        <li>Repair work should ordinarily be undertaken within the scope recorded in the approved job card or estimate.</li>
        <li>The Customer or other authorised payer/representative may approve the proposed work through a signed document, written communication, digital approval, email, WhatsApp or another verifiable method.</li>
        <li>The approval record should identify the vehicle/job card and, where reasonably practicable, the principal work and estimated charges.</li>
        <li>Approval of an estimate does not prevent a revised approval where additional work is subsequently identified.</li>
      </ul>
    ),
  },
  {
    title: 'Approval Authority',
    content: (
      <p>
        Approval should be obtained from the vehicle owner, customer, authorised
        representative, insurer/surveyor where applicable, or another person
        demonstrably authorised to approve the relevant work. Where a person other
        than the registered owner brings the vehicle, the Garage may request
        reasonable confirmation of authority where appropriate.
      </p>
    ),
  },
  {
    title: 'Additional Work',
    content: (
      <ul>
        <li>Additional work means work outside the originally approved scope or work arising from a newly identified defect or changed repair requirement.</li>
        <li>The Service Advisor or authorised workshop representative should communicate the reason for the additional work and the estimated additional cost before proceeding, where reasonably practicable.</li>
        <li>Additional work should be recorded against the existing job card or a linked supplementary approval.</li>
        <li>Where the Customer declines additional work, the refusal may be recorded together with any relevant recommendation or safety observation.</li>
      </ul>
    ),
  },
  {
    title: 'Emergency or Immediate Action',
    content: (
      <p>
        Where immediate action is reasonably necessary to prevent further damage
        to the vehicle or address an apparent safety risk, and the Customer cannot
        reasonably be contacted, VahanXpert Services may take proportionate action
        consistent with the circumstances. The reason, work performed and associated
        cost should be documented and communicated to the Customer as soon as
        reasonably practicable.
      </p>
    ),
  },
  {
    title: 'Cost and Estimate Changes',
    content: (
      <ul>
        <li>If the additional work changes the expected cost materially, a revised estimate or supplementary estimate should be provided where reasonably practicable.</li>
        <li>The revised amount should identify the additional parts, labour, consumables, taxes or other applicable charges.</li>
        <li>A change in price due to parts availability or a change in technical requirements should be communicated before procurement or installation where reasonably practicable.</li>
        <li>The final invoice should reflect the work actually authorised and performed, subject to applicable insurance or third-party payment arrangements.</li>
      </ul>
    ),
  },
  {
    title: 'Insurance and Cashless Repair Approval',
    content: (
      <ul>
        <li>Insurance repairs may require approval from the insurer, surveyor or other authorised claims representative.</li>
        <li>Insurer approval may cover only specified parts, labour or repair items and may be subject to deductibles, depreciation, exclusions and policy conditions.</li>
        <li>Customer approval may be required for non-payable items, deductibles, depreciation, additional repairs and work outside insurer approval.</li>
        <li>The Garage does not guarantee claim approval, cashless settlement or the amount payable by an insurer.</li>
      </ul>
    ),
  },
  {
    title: 'Parts Replacement Authorization',
    content: (
      <ul>
        <li>Replacement of major or material parts should be within the approved repair scope or separately authorised.</li>
        <li>Where an alternative part is proposed because the originally estimated part is unavailable, the Customer or applicable authorised party should be informed where the change materially affects price, specification or warranty.</li>
        <li>Part replacement records should be linked to the job card, estimate or invoice where practicable.</li>
      </ul>
    ),
  },
  {
    title: 'Customer Communication',
    content: (
      <p>
        Approvals and material repair updates may be communicated through phone,
        SMS, WhatsApp, email, digital workshop software or other available channels.
        Where approval is obtained verbally, the Garage should record the date, time,
        person providing approval, scope approved and the staff member receiving the
        approval, wherever practicable.
      </p>
    ),
  },
  {
    title: 'No Unauthorised Material Work',
    content: (
      <p>
        The Garage should not ordinarily perform material additional chargeable work
        merely because it appears beneficial or technically desirable. Where prior
        approval is reasonably practicable, the approval should be obtained before
        the additional work is commenced.
      </p>
    ),
  },
  {
    title: 'Customer Declines Recommended Repair',
    content: (
      <ul>
        <li>A Customer may decline a recommended repair, subject to applicable safety and legal considerations.</li>
        <li>The declined recommendation may be recorded in the job card or service record.</li>
        <li>Where a declined repair creates a material safety concern, the Customer should be informed of the concern and the relevant record should be maintained.</li>
        <li>The Garage may decline to release or road-test a vehicle where doing so would create a reasonably apparent serious safety or legal issue, subject to applicable law and circumstances.</li>
      </ul>
    ),
  },
  {
    title: 'Quality Check After Approved Work',
    content: (
      <ul>
        <li>After completion, the workshop should verify the approved work to the extent reasonably appropriate.</li>
        <li>A road test may be performed where necessary for diagnosis or verification and subject to applicable safety requirements.</li>
        <li>Any material unresolved issue identified during final checking should be communicated before delivery where reasonably practicable.</li>
      </ul>
    ),
  },
  {
    title: 'Final Invoice and Reconciliation',
    content: (
      <ul>
        <li>The final invoice should be reconciled with the approved scope and approved additional work.</li>
        <li>Material differences between the final invoice and the approved estimate should be explained where reasonably practicable.</li>
        <li>Customer-paid and insurer-paid components should be distinguishable where applicable.</li>
        <li>Outstanding amounts must be settled according to the applicable payment terms before ordinary vehicle handover.</li>
      </ul>
    ),
  },
  {
    title: 'Record Keeping',
    content: (
      <ul>
        <li>The Garage may retain estimates, approvals, revised estimates, photographs, job cards, communication records, parts records and invoices for service history, warranty, insurance, complaint handling, audit and legal/compliance purposes.</li>
        <li>Records should be maintained in a manner that supports traceability to the relevant vehicle and job card.</li>
        <li>Access to approval and customer records should be limited to authorised personnel according to operational need.</li>
      </ul>
    ),
  },
  {
    title: 'Customer Responsibilities',
    content: (
      <ul>
        <li>Review the proposed repair scope and estimated charges before giving approval.</li>
        <li>Provide timely responses when additional approval is requested.</li>
        <li>Ensure that the person approving work is authorised to do so.</li>
        <li>Provide accurate contact information so that approval requests can be communicated.</li>
        <li>Pay applicable amounts for authorised work that is not covered by an insurer or other third party.</li>
      </ul>
    ),
  },
  {
    title: 'Dispute and Escalation',
    content: (
      <p>
        If the Customer disputes whether a repair was approved, the Garage should
        review the job card, estimate, written/digital approval, communication records,
        photographs and invoice. The matter may be escalated to authorised management
        for review and resolution. Where appropriate, the Customer may be provided
        with the relevant approval record, subject to privacy and confidentiality
        considerations.
      </p>
    ),
  },
  {
    title: 'Privacy and Confidentiality',
    content: (
      <p>
        Customer contact information, vehicle records, photographs, repair approvals
        and communication records shall be handled for legitimate workshop, service,
        billing, insurance, security, dispute-resolution and legal/compliance purposes,
        subject to applicable law and VahanXpert Services&apos; privacy practices.
      </p>
    ),
  },
  {
    title: 'Policy Exceptions',
    content: (
      <p>
        Any exception to this Policy should be approved by authorised management
        and, where material, documented with the reason for the exception. Insurance,
        legal, safety or manufacturer requirements may require additional approval
        procedures.
      </p>
    ),
  },
  {
    title: 'Policy Review',
    content: (
      <p>
        This Policy shall be reviewed periodically and may be updated based on
        operational experience, customer feedback, insurance processes, technology
        changes or applicable legal requirements.
      </p>
    ),
  },
  {
    title: 'Business Contact',
    content: (
      <div className="space-y-2">
        <p className="font-semibold text-slate-900">VahanXpert Services</p>
        <p>D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010</p>
        <p>
          <strong>Email: </strong>
          <a className="text-amber-700 hover:underline" href="mailto:info.vahanxpert@gmail.com">
            info.vahanxpert@gmail.com
          </a>
        </p>
        <p><strong>Mobile: </strong>+91 8930293896</p>
      </div>
    ),
  },
];

export default function RepairApprovalPolicyContent() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.backNav}>
          <Link href="/policies" className={styles.backLink}>
            <span aria-hidden="true">←</span>
            Back to All Policies
          </Link>
        </div>

        <header className={styles.header}>
          <span className={styles.badge}>
            ✦ Workshop Safety &amp; Service Governance
          </span>

          <h1 className={styles.title}>
            Repair Approval &amp; Additional Work Authorization Policy
          </h1>

          <div className={styles.metaBar}>
            <span className={styles.metaItem}>
              ◈ Policy No.: VXS/RA/004
            </span>
            <span className={styles.metaItem}>Version: 1.0</span>
            <span className={styles.metaItem}>
              Effective Date: 20/09/2026
            </span>
            <span className={styles.metaItem}>
              Security Class: Internal Policy
            </span>
          </div>
        </header>

        <div className={styles.contentCard}>
          {sections.map((section, index) => (
            <article className={styles.sectionCard} key={section.title}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h2 className={styles.sectionTitle}>
                  {section.title}
                </h2>
              </div>

              <div className={styles.sectionBody}>
                {section.content}
              </div>
            </article>
          ))}

          <article className={styles.docControlCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>22</span>
              <h2 className={styles.sectionTitle}>Document Control</h2>
            </div>

            <div className={styles.tableResponsive}>
              <table className={styles.docTable}>
                <tbody>
                  <tr>
                    <th>Document Name</th>
                    <td>
                      Repair Approval &amp; Additional Work Authorization Policy
                    </td>
                  </tr>
                  <tr>
                    <th>Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>VXS/RA/004</td>
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
          </article>

          <p className="pt-3 text-center text-sm font-medium text-slate-500">
            VahanXpert Services | Repair Approval &amp; Additional Work
            Authorization Policy
          </p>
        </div>
      </div>
    </div>
  );
}