
import styles from "./VehicleWashingContent.module.css";

const sections = [
  {
    title: "1. Purpose",
    paragraphs: [
      "This Policy establishes procedures for vehicle washing, cleaning, detailing and related appearance-care services while protecting the Customer vehicle, keys, accessories, documents and personal property during the process.",
    ],
  },
  {
    title: "2. Scope",
    paragraphs: [
      "This Policy applies to exterior washing, interior cleaning, vacuuming, dashboard cleaning, polishing, detailing, sanitisation, glass cleaning, tyre cleaning, drying and other authorised appearance-care services performed by VahanXpert Services.",
    ],
  },
  {
    title: "3. Service Authorisation",
    bullets: [
      "Washing, cleaning or detailing should be performed as part of the Customer's authorised service request, package or approved estimate.",
      "Additional chargeable detailing or treatment should ordinarily require Customer approval before the work is performed.",
      "The scope of cleaning should be communicated where reasonably necessary, particularly for premium or specialised detailing services.",
    ],
  },
  {
    title: "4. Pre-Cleaning Inspection",
    bullets: [
      "Where reasonably practicable, visible pre-existing scratches, dents, paint defects, broken trims, damaged glass and other relevant conditions should be noted before cleaning.",
      "Photographs may be taken where appropriate to document pre-existing condition.",
      "Special materials, aftermarket accessories or fragile items may be identified before the cleaning process.",
    ],
  },
  {
    title: "5. Customer Property",
    paragraphs: [
      "Customers are strongly advised to remove cash, jewellery, electronics, documents, medicines and other valuables before handing over the vehicle. VahanXpert Services should take reasonable care of declared or identified property but may not be able to verify responsibility for unrecorded personal belongings.",
    ],
  },
  {
    title: "6. Items Found During Cleaning",
    bullets: [
      "Personal items found during cleaning should not be used for personal purposes.",
      "Where reasonably practicable, items should be secured and linked to the relevant vehicle/job card.",
      "Items may be returned to the Customer at handover or handled under the workshop's customer-property/lost-property procedure.",
    ],
  },
  {
    title: "7. Vehicle Keys",
    paragraphs: [
      "Vehicle keys and remote controls should remain under reasonable control while the vehicle is being cleaned. Keys should not be left unnecessarily in publicly accessible locations.",
    ],
  },
  {
    title: "8. Cleaning Materials and Chemicals",
    bullets: [
      "Cleaning chemicals should be selected and used according to their intended purpose and manufacturer instructions.",
      "Staff should take reasonable precautions when handling chemicals, including appropriate protective equipment where required.",
      "Chemicals should not be mixed or used on surfaces for which they are unsuitable.",
      "Flammable or hazardous materials should be stored and handled according to applicable safety procedures.",
    ],
  },
  {
    title: "9. Exterior Washing",
    paragraphs: [
      "Exterior washing should be carried out using suitable equipment and cleaning materials. Reasonable precautions should be taken to avoid damage to paint, glass, trims, sensors, cameras, decals and accessories.",
    ],
  },
  {
    title: "10. Interior Cleaning",
    bullets: [
      "Interior surfaces should be cleaned using materials reasonably suitable for the relevant surface.",
      "Electronics, displays, switches, sensors and other sensitive components should be protected from excessive moisture or unsuitable chemicals.",
      "Water or cleaning solution should not be intentionally introduced into electrical components, air vents or other sensitive areas.",
    ],
  },
  {
    title: "11. Engine Bay Cleaning",
    paragraphs: [
      "Engine-bay cleaning, if offered, should only be performed using an appropriate method and with reasonable precautions around electrical components, sensors, connectors and other sensitive parts. Customers may be informed that certain older or modified components may require additional care.",
    ],
  },
  {
    title: "12. Detailing and Polishing",
    bullets: [
      "Polishing, paint correction, ceramic/coating treatment or similar specialist work should be performed according to the approved service scope.",
      "The Customer should be informed where a process may have limitations due to paint condition, previous repairs, repainting, oxidation or other existing defects.",
      "No guarantee of complete removal of every scratch, stain or paint imperfection should be implied unless expressly agreed.",
    ],
  },
  {
    title: "13. Stain and Odour Removal",
    paragraphs: [
      "Cleaning and odour-treatment results may vary depending on the age, type and extent of contamination. VahanXpert Services may advise the Customer where complete removal cannot reasonably be guaranteed.",
    ],
  },
  {
    title: "14. Water and Electrical Safety",
    bullets: [
      "Cleaning staff should take reasonable precautions around electrical equipment, charging systems, battery areas and sensitive vehicle electronics.",
      "Electric cleaning equipment should be used safely and in accordance with applicable workshop safety procedures.",
      "Wet floors and work areas should be managed to reduce slip and trip hazards.",
    ],
  },
  {
    title: "15. Vehicle Accessories",
    paragraphs: [
      "Aftermarket accessories, decals, wraps, sensors, cameras, roof equipment and other modifications may require special cleaning precautions. The workshop may decline a cleaning method that appears likely to damage an accessory.",
    ],
  },
  {
    title: "16. Drying and Final Check",
    bullets: [
      "The vehicle should be reasonably dried after washing to reduce water spots and avoid unnecessary moisture retention.",
      "A basic final check may be performed for visible cleaning quality, forgotten tools/materials and obvious issues created during the service.",
      "Any material incident identified during cleaning should be reported under the applicable incident policy.",
    ],
  },
  {
    title: "17. Damage During Cleaning",
    paragraphs: [
      "If new damage is identified or suspected during or after washing/detailing, the matter should be recorded and handled under the Vehicle Damage, Loss & Incident Reporting Policy. Available photographs, intake records, CCTV and staff information may be reviewed.",
    ],
  },
  {
    title: "18. Customer Approval and Additional Services",
    paragraphs: [
      "If the Customer requests additional services such as deep interior cleaning, paint correction, ceramic coating, underbody cleaning or specialised treatment, the applicable charges and scope should be communicated before the work is performed.",
    ],
  },
  {
    title: "19. Service Limitations",
    bullets: [
      "Cleaning may not remove permanent stains, paint damage, deep scratches, embedded contamination, corrosion or other physical defects.",
      "Some materials may have existing deterioration that becomes more visible after cleaning.",
      "The condition of old, damaged or modified surfaces may limit the achievable result.",
    ],
  },
  {
    title: "20. Customer Inspection at Handover",
    paragraphs: [
      "Customers are encouraged to inspect the vehicle at handover and raise any immediately visible concern regarding cleaning quality or apparent damage. The complaint may be reviewed against the agreed service scope and available records.",
    ],
  },
  {
    title: "21. Environmental and Waste Management",
    bullets: [
      "Wastewater, used cloths, containers and cleaning materials should be handled in accordance with applicable workshop and environmental requirements.",
      "Chemicals should not be unnecessarily discharged into drains or the environment.",
      "Reusable cleaning materials should be maintained appropriately to avoid cross-contamination and damage.",
    ],
  },
  {
    title: "22. Staff Training",
    paragraphs: [
      "Personnel performing washing, cleaning or detailing should be appropriately trained in safe equipment use, chemical handling, surface care, Customer property protection and relevant workshop safety procedures.",
    ],
  },
  {
    title: "23. Privacy and Confidentiality",
    paragraphs: [
      "Customer information, photographs, vehicle documents and personal property encountered during cleaning should be handled confidentially and used only for legitimate service, safety, support, quality, dispute-resolution or legal/compliance purposes.",
    ],
  },
  {
    title: "24. Customer Responsibilities",
    bullets: [
      "Remove valuables and personal belongings before vehicle handover.",
      "Inform the workshop about fragile accessories, special materials or known surface defects where relevant.",
      "Review the approved scope and applicable charges before requesting additional detailing services.",
      "Raise visible concerns at or soon after handover.",
    ],
  },
  {
    title: "25. Policy Review",
    paragraphs: [
      "This Policy shall be reviewed periodically and may be updated based on workshop operations, cleaning technology, safety requirements, Customer feedback or applicable legal/environmental requirements.",
    ],
  },
];

export default function VehicleWashingContent() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>
          <h1>
            Vehicle Washing, Cleaning, Detailing &amp; Customer Property
            Protection Policy
          </h1>

          <div className={styles.policyMeta}>
            <span><strong>Policy No.:</strong> VXS/WCD/029</span>
            <span aria-hidden="true">|</span>
            <span><strong>Version:</strong> 1.0</span>
            <span aria-hidden="true">|</span>
            <span><strong>Effective Date:</strong> 20/09/2026</span>
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
                D-29, Vibhuti Khand, Gomti Nagar, Lucknow,
                Uttar Pradesh – 226010
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

          <section className={styles.policySection}>
            <h2>27. Document Control</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th scope="row">Document Name</th>
                    <td>
                      Vehicle Washing, Cleaning, Detailing &amp; Customer
                      Property Protection Policy
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Organisation</th>
                    <td>VahanXpert Services</td>
                  </tr>
                  <tr>
                    <th scope="row">Policy Number</th>
                    <td>VXS/WCD/029</td>
                  </tr>
                  <tr>
                    <th scope="row">Version / Effective Date</th>
                    <td>1.0 / 20/09/2026</td>
                  </tr>
                  <tr>
                    <th scope="row">Review Frequency</th>
                    <td>
                      At least annually or whenever cleaning/safety
                      requirements change
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className={styles.footerText}>
            VahanXpert Services | Vehicle Washing, Cleaning, Detailing
            &amp; Customer Property Protection Policy
          </p>
        </article>
      </div>
    </div>
  );
}
