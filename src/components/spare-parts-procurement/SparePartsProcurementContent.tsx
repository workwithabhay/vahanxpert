
import styles from './SparePartsProcurementContent.module.css';

const sections = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes the process for identification, procurement, receipt, storage, replacement, installation, return and warranty handling of spare parts and materials used for vehicle services and repairs at VahanXpert Services. It is intended to support traceability, appropriate customer approval and proper handling of parts supplied for a vehicle.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to spare parts, components, accessories, consumables and other materials procured or supplied for vehicle servicing, mechanical and electrical repairs, AC work, battery and tyre services, denting-painting, accidental repairs, insurance-related repairs and other applicable workshop services.',
    ],
  },
  {
    title: '3. Part Selection',
    bullets: [
      "Parts should be selected based on the vehicle's make/model, technical requirement, approved repair scope and availability.",
      'Where applicable, the Customer may be informed whether a part is original/OE, OEM, aftermarket, refurbished, used or another category before approval where the distinction is material.',
      'For insurance repairs, part selection may be subject to insurer/surveyor approval and the applicable claim terms.',
      'A suitable alternative may be proposed where the originally estimated part is unavailable, subject to appropriate approval where price, specification or warranty is materially affected.',
    ],
  },
  {
    title: '4. Customer Approval for Parts',
    bullets: [
      'Material parts should ordinarily be included in the estimate or separately approved before procurement or installation.',
      'Approval may be obtained through a signed estimate/job card, email, WhatsApp, digital system or another verifiable method.',
      'Where a part is specifically ordered for a Customer and cancellation/return restrictions apply, those restrictions should be communicated where reasonably practicable.',
    ],
  },
  {
    title: '5. Procurement',
    bullets: [
      'Parts may be procured from manufacturers, authorised distributors, suppliers or other commercially appropriate sources.',
      'The Garage may maintain supplier invoices, part numbers, quantities and other procurement records for traceability.',
      'Availability and delivery time may vary by supplier, location, vehicle model and market conditions.',
      'The Customer may be informed when a material delay in part availability is expected to affect the repair timeline.',
    ],
  },
  {
    title: '6. Receipt and Inspection of Parts',
    bullets: [
      'Where reasonably practicable, incoming parts should be checked for part identification, quantity and visible damage before installation.',
      'Incorrect, damaged or materially inconsistent parts should be isolated and referred for supplier clarification or replacement.',
      'Packaging, labels and supplier documents may be retained where useful for warranty or return purposes.',
    ],
  },
  {
    title: '7. Part Replacement and Installation',
    bullets: [
      'Parts should be installed according to applicable technical requirements and the approved repair scope.',
      'Where a replacement is made because of a defective or unsuitable part, the reason may be recorded in the job card.',
      'Removed parts may be retained for inspection, warranty, insurance or supplier return where required.',
    ],
  },
  {
    title: '8. Manufacturer / Supplier Warranty',
    paragraphs: [
      'Warranty for spare parts shall be governed by the applicable warranty terms and conditions of the respective manufacturer, authorised distributor or supplier. Warranty period, coverage, exclusions and claim procedure may vary by part and supplier. VahanXpert Services may assist the Customer with the warranty process where reasonably practicable but does not independently extend or alter a third-party warranty unless expressly agreed in writing.',
    ],
  },
  {
    title: '9. Return of Unused Parts',
    bullets: [
      "Return of unused parts shall be subject to the supplier's return policy, part condition, packaging, return window and other applicable terms.",
      'Special-order, electrical, electronic, customised, non-returnable or otherwise restricted items may not be returnable under supplier terms.',
      'Where a supplier accepts a return and provides a credit, VahanXpert Services may process the corresponding customer adjustment subject to the original transaction and applicable charges.',
    ],
  },
  {
    title: '10. Customer Cancellation After Procurement',
    paragraphs: [
      'If a Customer cancels an approved repair after a part has been procured, the part cost may be adjusted against any advance where the part cannot reasonably be cancelled or returned. If the supplier accepts the return and provides a refund/credit, the Customer’s adjustment may be processed after accounting for applicable costs.',
    ],
  },
  {
    title: '11. Defective or Incorrect Part',
    bullets: [
      'If a part is found to be defective, incorrect or unsuitable, VahanXpert Services may coordinate replacement or return with the supplier/manufacturer.',
      'The relevant supplier/manufacturer may require inspection or testing before accepting a warranty or return claim.',
      'The final warranty/return decision for a third-party supplied part remains subject to the applicable third-party terms.',
    ],
  },
  {
    title: '12. Insurance Repair Parts',
    bullets: [
      'For accident and insurance repairs, parts may be selected and replaced according to the insurer-approved repair scope.',
      'Depreciation, deductibles, exclusions and non-payable items may affect the amount payable by the Customer.',
      'Customer-approved additional parts or upgrades outside the insurer-approved scope may be separately chargeable.',
    ],
  },
  {
    title: '13. Used, Reconditioned or Refurbished Parts',
    paragraphs: [
      "Where a used, reconditioned or refurbished component is proposed, the Customer should be informed of its nature where reasonably practicable and appropriate approval should be obtained where the distinction materially affects the price, condition or warranty. Any applicable warranty shall be governed by the supplier's or manufacturer's terms.",
    ],
  },
  {
    title: '14. Removed Parts',
    bullets: [
      'Removed parts may be retained for warranty, insurance, supplier return, technical examination or regulatory reasons.',
      'Where the Customer requests return of removed parts and there is no applicable reason to retain them, the Garage may return them at handover where practicable.',
      'Parts subject to manufacturer/supplier warranty return, exchange/core return or insurer requirements may need to be retained or surrendered.',
    ],
  },
  {
    title: '15. Part Storage and Identification',
    paragraphs: [
      'Parts awaiting installation, return, warranty inspection or Customer collection should, where reasonably practicable, be identified with the relevant job card or vehicle reference. The Garage should take reasonable precautions to avoid mixing parts belonging to different vehicles.',
    ],
  },
  {
    title: '16. Pricing and Invoice',
    bullets: [
      'Part charges should be reflected in the estimate and/or final invoice as applicable.',
      'The final invoice may identify part description, quantity, part number or other details where useful.',
      'Taxes and other applicable charges shall be handled according to the applicable invoice and legal requirements.',
    ],
  },
  {
    title: '17. Customer Responsibilities',
    bullets: [
      'Provide accurate vehicle details and disclose relevant modifications or prior repairs.',
      'Review and approve the proposed part category and estimated cost where required.',
      'Provide required documents for warranty or insurance claims.',
      'Retain invoices and warranty documents where required for future claims.',
    ],
  },
  {
    title: '18. Records and Traceability',
    bullets: [
      'VahanXpert Services may maintain purchase records, supplier invoices, part numbers, warranty records, return records, job cards and customer approvals.',
      'Records should be linked to the relevant vehicle/job card where practicable.',
      'Records may be retained for accounting, warranty, insurance, service history, quality control, dispute resolution and legal/compliance purposes.',
    ],
  },
  {
    title: '19. Privacy and Confidentiality',
    paragraphs: [
      "Customer and vehicle information contained in procurement, parts, warranty and return records shall be used for legitimate workshop, service, billing, warranty, insurance, security and legal/compliance purposes and accessed only by authorised personnel, subject to applicable law and VahanXpert Services' privacy practices.",
    ],
  },
  {
    title: '20. Disputes and Escalation',
    paragraphs: [
      'If a Customer disputes the quality, category, price, replacement or return of a part, the Garage may review the estimate, approval, supplier documentation, warranty terms, invoice and technical findings. Matters involving a manufacturer or supplier warranty may also be subject to that party’s review and decision.',
    ],
  },
  {
    title: '21. Policy Review',
    paragraphs: [
      'This Policy shall be reviewed periodically and may be updated based on supplier arrangements, workshop operations, insurance requirements, customer feedback, technology changes or applicable legal requirements.',
    ],
  },
];

export default function SparePartsProcurementContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>
            Spare Parts Procurement, Replacement &amp; Return Policy
          </h1>
          <p className={styles.policyMeta}>
            Policy No.: VXS/SP/009 <span>|</span> Version: 1.0{' '}
            <span>|</span> Effective Date: 20/09/2026
          </p>
        </header>

        
<article className={styles.document}>
  {sections.map((section, index) => (
    <section className={styles.policyCard} key={section.title}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className={styles.sectionContent}>
          <h2>{section.title.replace(/^\d+\.\s*/, "")}</h2>

          {section.paragraphs?.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}

          {section.bullets && (
            <ul>
              {section.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  ))}

  <section className={styles.policyCard}>
    <div className={styles.sectionHeader}>
      <span className={styles.sectionNumber}>22</span>
      <div className={styles.sectionContent}>
        <h2>Business Contact</h2>
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
      </div>
    </div>
  </section>

  <section className={styles.policyCard}>
    <div className={styles.sectionHeader}>
      <span className={styles.sectionNumber}>23</span>
      <div className={styles.sectionContent}>
        <h2>Document Control</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Document Name</th>
                <td>Spare Parts Procurement, Replacement &amp; Return Policy</td>
              </tr>
              <tr>
                <th>Organisation</th>
                <td>VahanXpert Services</td>
              </tr>
              <tr>
                <th>Policy Number</th>
                <td>VXS/SP/009</td>
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
      </div>
    </div>
  </section>

  <p className={styles.footerText}>
    VahanXpert Services | Spare Parts Procurement, Replacement &amp; Return
    Policy
  </p>
</article>

      </div>
    </section>
  );
}
