
"use client";

import styles from "../workshop-fire-safety/WorkshopFireSafetyContent.module.css";

const sections = [
  {
    title: "1. Purpose",
    content: [
      "This Policy establishes basic health, workplace safety, vehicle safety and fire-prevention controls for VahanXpert Services. It is intended to reduce avoidable accidents, injuries, fire risks, property damage and unsafe workshop practices while supporting safe vehicle servicing and repair operations.",
    ],
  },
  {
    title: "2. Scope",
    content: [
      "This Policy applies to workshop employees, technicians, supervisors, management, contractors, drivers, vendors, visitors and Customers while they are present at or performing work for VahanXpert Services.",
    ],
  },
  {
    title: "3. General Safety Principles",
    bullets: [
      "Safety shall take priority over speed or convenience where an immediate hazard is identified.",
      "Only authorised and appropriately trained personnel should perform technical repair, electrical, welding, lifting or other specialised work.",
      "Workshop areas should be kept reasonably clean, organised and free from unnecessary obstructions.",
      "Unsafe conditions, incidents and near-misses should be reported to responsible management promptly.",
    ],
  },
  {
    title: "4. Personal Protective Equipment (PPE)",
    bullets: [
      "Technicians should use appropriate PPE for the task, such as safety footwear, gloves, eye protection, protective clothing and hearing protection where reasonably required.",
      "Additional PPE should be used for welding, grinding, painting, chemical handling, battery work or other higher-risk activities as appropriate.",
      "Damaged or unsuitable PPE should be replaced.",
    ],
  },
  {
    title: "5. Vehicle Movement and Workshop Traffic",
    bullets: [
      "Vehicle movement inside the workshop should be controlled and performed at a safe speed.",
      "Drivers should remain alert for pedestrians, technicians, tools, lifts and other vehicles.",
      "Vehicles should be parked in designated areas where practicable.",
      "Engine running should be minimised indoors where ventilation is inadequate.",
    ],
  },
  {
    title: "6. Vehicle Lifting and Jacking",
    bullets: [
      "Only suitable and properly maintained lifts, jacks, stands and lifting equipment should be used.",
      "The vehicle should be positioned and secured according to the equipment manufacturer's operating instructions.",
      "No person should work under a vehicle supported only by an unsuitable jack.",
      "Load limits of lifting equipment must not be exceeded.",
    ],
  },
  {
    title: "7. Tools and Equipment",
    bullets: [
      "Workshop tools and machinery should be used only for their intended purpose.",
      "Electrical tools, cables and equipment should be checked for visible damage before use.",
      "Damaged equipment should be removed from service until appropriately repaired or replaced.",
      "Guards and safety devices on machinery should not be intentionally bypassed.",
    ],
  },
  {
    title: "8. Electrical Safety",
    bullets: [
      "Electrical repair and testing should be performed by appropriately trained personnel.",
      "Exposed wiring, damaged sockets and unsafe electrical connections should be reported and isolated where necessary.",
      "Water and electrical equipment should be kept appropriately separated.",
      "Improvised electrical connections should not be used.",
    ],
  },
  {
    title: "9. Battery Safety",
    bullets: [
      "Vehicle batteries should be handled using appropriate protective equipment and safe procedures.",
      "Sparks, open flames and smoking should be prohibited around battery charging and areas where flammable gases may be present.",
      "Battery charging areas should have suitable ventilation.",
      "Correct polarity and suitable equipment should be used for jump-starting or battery charging.",
    ],
  },
  {
    title: "10. Fuel, Oil and Flammable Materials",
    bullets: [
      "Fuel, oils, solvents and other flammable materials should be stored and handled carefully.",
      "Containers should remain closed when not in use and be clearly identifiable where reasonably required.",
      "Spills should be dealt with promptly using suitable spill-control materials.",
      "Flammable materials should be kept away from ignition sources.",
    ],
  },
  {
    title: "11. Welding, Cutting and Grinding",
    bullets: [
      "Hot work should be performed only by trained personnel and in a suitable area.",
      "Appropriate eye, face, hand and protective clothing should be used.",
      "Combustible materials should be removed or adequately protected from sparks and heat.",
      "Suitable fire-extinguishing equipment should be readily accessible during higher-risk hot work.",
    ],
  },
  {
    title: "12. Fire Prevention",
    bullets: [
      "Smoking and open flames should be prohibited in designated no-smoking and hazardous areas.",
      "Fire exits, emergency routes and access to fire-fighting equipment should not be blocked.",
      "Combustible waste, oily rags and similar materials should be collected and stored/disposed of safely.",
      "Electrical overloads, fuel leaks and other known fire hazards should be addressed promptly.",
    ],
  },
  {
    title: "13. Fire Extinguishers and Fire Equipment",
    bullets: [
      "Appropriate fire extinguishers should be provided at suitable and accessible locations based on the workshop's risk profile and applicable requirements.",
      "Extinguishers should remain visible, accessible and reasonably maintained.",
      "Staff should know the location of fire extinguishers and emergency exits.",
      "Only trained personnel should attempt to use a fire extinguisher when it is safe to do so; personal safety and emergency evacuation take priority.",
    ],
  },
  {
    title: "14. Fire Emergency Procedure",
    bullets: [
      "Raise the alarm and alert people in the affected area.",
      "Stop work and isolate equipment or fuel sources only where this can be done safely.",
      "Evacuate through the designated safe route and move to the appropriate assembly area.",
      "Contact the appropriate emergency services when required.",
      "Do not re-enter an unsafe area until it has been declared safe by the appropriate responsible person or authority.",
    ],
  },
  {
    title: "15. Chemical and Hazardous Substance Handling",
    content: [
      "Cleaning agents, solvents, coolants, paints, aerosols and other chemicals should be stored, labelled and handled according to their applicable safety instructions. Staff should use suitable PPE and ventilation controls where reasonably required.",
    ],
  },
  {
    title: "16. Waste Management",
    bullets: [
      "Used oil, filters, batteries, tyres, oily rags and other workshop waste should be segregated and handled through appropriate disposal or recycling arrangements.",
      "Waste should not be allowed to accumulate in a manner that creates a fire, slip, trip or environmental hazard.",
      "Hazardous waste should be handled according to applicable legal and environmental requirements.",
    ],
  },
  {
    title: "17. Housekeeping and Slip/Trip Prevention",
    bullets: [
      "Walkways and work areas should be kept reasonably clear.",
      "Oil, coolant and other spills should be cleaned promptly.",
      "Tools, cables and hoses should be placed so they do not create avoidable trip hazards.",
      "Emergency access routes should remain clear.",
    ],
  },
  {
    title: "18. First Aid and Injury Reporting",
    bullets: [
      "A suitable first-aid arrangement should be maintained according to the workshop's size, activities and applicable requirements.",
      "Work-related injuries should be reported to management promptly.",
      "Serious injuries should receive appropriate emergency medical assistance without unnecessary delay.",
      "Incident details should be recorded where reasonably practicable.",
    ],
  },
  {
    title: "19. Accident and Near-Miss Reporting",
    content: [
      "Accidents, fires, property damage, vehicle incidents and significant near-misses should be reported and reviewed by authorised management. Corrective or preventive measures may be introduced to reduce recurrence.",
    ],
  },
  {
    title: "20. Emergency Contacts and Preparedness",
    content: [
      "The workshop should maintain readily accessible emergency contact information relevant to its location and operations, including emergency medical assistance, fire services, police and other applicable services. Emergency routes and key procedures should be communicated to staff.",
    ],
  },
  {
    title: "21. Customer and Visitor Safety",
    bullets: [
      "Customers and visitors should remain in designated safe areas and follow staff instructions.",
      "Customers should not enter restricted work areas without authorisation.",
      "Children and other visitors requiring supervision should be kept away from hazardous equipment, chemicals, pits, lifts and moving vehicles.",
      "Visitors should not operate workshop machinery or vehicles unless authorised.",
    ],
  },
  {
    title: "22. Contractor and Vendor Safety",
    content: [
      "Contractors and vendors working at the workshop should follow applicable workshop safety requirements and use appropriate equipment and PPE. VahanXpert Services may stop work that presents an immediate and significant safety risk.",
    ],
  },
  {
    title: "23. Training and Awareness",
    bullets: [
      "Relevant staff should receive basic safety awareness appropriate to their work.",
      "Technicians should be familiar with safe use of lifts, tools, electrical equipment, chemicals and other equipment they operate.",
      "Emergency and fire-safety instructions should be communicated periodically.",
    ],
  },
  {
    title: "24. Inspection and Maintenance",
    content: [
      "Fire equipment, electrical systems, lifting equipment, tools and other safety-critical equipment should be inspected and maintained at reasonable intervals appropriate to their use, manufacturer requirements and applicable requirements.",
    ],
  },
  {
    title: "25. Non-Compliance",
    content: [
      "Unsafe acts or deliberate disregard of safety procedures may result in corrective action in accordance with applicable employment, contractual and operational procedures. Immediate hazards may require suspension of the relevant work until the hazard is controlled.",
    ],
  },
  {
    title: "26. No Smoking / Alcohol / Intoxicants",
    content: [
      "Smoking, open flames and consumption or possession of alcohol or intoxicating substances in a manner that creates a workplace safety risk are prohibited within applicable workshop areas. No person should perform safety-sensitive work while impaired.",
    ],
  },
  {
    title: "27. Policy Review",
    content: [
      "This Policy shall be reviewed periodically and may be updated based on workshop operations, incident trends, equipment changes, fire-safety requirements or applicable legal requirements.",
    ],
  },
];

export default function WorkshopHealthSafetyContent() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>

          <h1>Workshop Health, Safety &amp; Fire Prevention Policy</h1>

          <p className={styles.description}>
            Workplace health, vehicle safety, fire prevention and emergency
            safety guidelines for workshop operations.
          </p>

          <div className={styles.metadata}>
            <span>
              <strong>Policy No.</strong> VXS/HSF/021
            </span>
            <span>
              <strong>Version</strong> 1.0
            </span>
            <span>
              <strong>Effective Date</strong> 20/09/2026
            </span>
          </div>
        </header>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <h2>Policy overview</h2>
            <p>29 sections</p>
            <a href="#section-1">Purpose</a>
            <a href="#section-3">General Safety Principles</a>
            <a href="#section-4">Personal Protective Equipment</a>
            <a href="#section-6">Vehicle Lifting and Jacking</a>
            <a href="#section-12">Fire Prevention</a>
            <a href="#section-14">Fire Emergency Procedure</a>
            <a href="#section-18">First Aid and Injury Reporting</a>
            <a href="#section-23">Training and Awareness</a>
            <a href="#section-28">Business Contact</a>
            <a href="#section-29">Document Control</a>
          </aside>

          <article className={styles.document}>
            {sections.map((section, index) => (
              <section
                className={styles.section}
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

            <section className={styles.section} id="section-28">
              <h2>28. Business Contact</h2>
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

            <section className={styles.section} id="section-29">
              <h2>29. Document Control</h2>
              <div className={styles.tableWrap}>
                <table>
                  <tbody>
                    <tr>
                      <th>Document Name</th>
                      <td>
                        Workshop Health, Safety &amp; Fire Prevention Policy
                      </td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/HSF/021</td>
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

            <footer className={styles.documentFooter}>
              VahanXpert Services | Workshop Health, Safety &amp; Fire
              Prevention Policy
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}

