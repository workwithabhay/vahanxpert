
"use client";

import styles from "./WorkshopFireSafetyContent.module.css";

const sections = [
  {
    title: "1. Purpose",
    content: [
      "This Policy establishes fire prevention, emergency response, evacuation and incident-management procedures for VahanXpert Services. It is intended to protect Customers, employees, vehicles, workshop property and surrounding persons from fire and other emergencies.",
    ],
  },
  {
    title: "2. Scope",
    content: [
      "This Policy applies to the workshop premises, service bays, parking areas, storage areas, office/reception areas and any other location controlled or used by VahanXpert Services for its operations.",
    ],
  },
  {
    title: "3. Fire Risk Prevention",
    bullets: [
      "Flammable liquids, fuels, oils, solvents and other combustible materials should be stored and handled carefully.",
      "Smoking, open flames and unauthorised ignition sources should be prohibited in designated workshop areas.",
      "Electrical equipment, wiring, plugs and extension cables should be maintained in safe condition.",
      "Combustible waste, oily rags and other fire-risk materials should be removed or stored appropriately.",
      "Fire exits, emergency routes and access to firefighting equipment must not be blocked.",
    ],
  },
  {
    title: "4. Flammable Materials",
    content: [
      "Petrol, diesel, solvents, paints, thinners, cleaning chemicals and other flammable materials should be kept in suitable containers and stored in accordance with applicable safety requirements. Spills should be addressed promptly using appropriate procedures.",
    ],
  },
  {
    title: "5. Fire Extinguishers",
    bullets: [
      "Suitable fire extinguishers should be provided at appropriate locations.",
      "Fire extinguishers should remain accessible and clearly identifiable.",
      "Extinguishers should be inspected and maintained according to applicable requirements.",
      "Employees should receive appropriate awareness or training on extinguisher use where relevant.",
    ],
  },
  {
    title: "6. Emergency Exits and Evacuation Routes",
    content: [
      "Emergency exits and evacuation routes should be clearly identified, kept accessible and free from unnecessary obstruction. Employees should be familiar with the primary evacuation route and, where practicable, an alternative route.",
    ],
  },
  {
    title: "7. Emergency Assembly Area",
    content: [
      "A suitable assembly area should be identified outside the immediate danger zone. During an evacuation, employees and other persons should proceed to the designated assembly area where reasonably safe to do so.",
    ],
  },
  {
    title: "8. Fire Alarm / Emergency Notification",
    bullets: [
      "Any person discovering a fire or serious smoke condition should raise the alarm or immediately alert nearby persons.",
      "Management or the designated responsible person should activate the applicable emergency communication process.",
      "Emergency services should be contacted promptly where the situation requires external assistance.",
    ],
  },
  {
    title: "9. Immediate Fire Response",
    content: [
      "Only a small and controllable fire should be considered for initial response by a trained person using the appropriate extinguisher and only when there is a safe escape route. No person should take unnecessary personal risk. If the fire is spreading, produces significant smoke, involves fuel or hazardous materials, or cannot be safely controlled, immediate evacuation and emergency-service assistance should take priority.",
    ],
  },
  {
    title: "10. Evacuation Procedure",
    bullets: [
      "Stop work when it is safe to do so.",
      "Switch off equipment or isolate energy sources only where this can be done without creating additional risk.",
      "Evacuate through the safest available route.",
      "Do not run, push or create unnecessary congestion.",
      "Do not re-enter the premises until authorised by the responsible person or emergency authorities.",
      "Assist Customers and visitors where reasonably safe and practicable.",
    ],
  },
  {
    title: "11. Vehicle Fire",
    content: [
      "If a Customer or workshop vehicle catches fire, personnel should maintain a safe distance, raise the alarm, evacuate the surrounding area and contact emergency services as appropriate. Attempting to open a burning vehicle, access the engine compartment or otherwise intervene should only be done where it is safe and appropriate.",
    ],
  },
  {
    title: "12. Fuel, Oil and Chemical Spill",
    bullets: [
      "Keep ignition sources away from the affected area.",
      "Restrict access where necessary.",
      "Use appropriate spill-control materials and procedures.",
      "Do not wash hazardous or contaminated material into drains unless permitted under applicable requirements.",
      "Escalate significant spills to management and relevant emergency/environmental authorities where required.",
    ],
  },
  {
    title: "13. Electrical Emergency",
    content: [
      "In case of electrical fire, shock or suspected electrical danger, personnel should avoid direct contact with the affected person or equipment until the electrical source is safely isolated. Emergency medical or fire assistance should be contacted where necessary.",
    ],
  },
  {
    title: "14. Welding and Hot Work",
    bullets: [
      "Hot work should be performed only in an authorised area or under appropriate controls.",
      "Combustible materials should be removed or adequately protected.",
      "Suitable fire-extinguishing equipment should be available.",
      "The area should be checked after completion of hot work for signs of smouldering or residual heat where appropriate.",
    ],
  },
  {
    title: "15. Emergency Contact Information",
    content: [
      "The workshop should maintain readily accessible emergency contact information, including local fire service, police, ambulance, building/security management and relevant management contacts.",
    ],
  },
  {
    title: "16. First Aid and Medical Assistance",
    content: [
      "A suitable first-aid arrangement should be maintained according to the workshop's size and applicable requirements. Injured persons should receive appropriate assistance, and emergency medical services should be contacted when necessary.",
    ],
  },
  {
    title: "17. Customer and Visitor Safety",
    bullets: [
      "Customers and visitors should remain in designated safe areas unless authorised to enter the workshop.",
      "During an emergency, staff should guide Customers and visitors towards safe evacuation routes where practicable.",
      "Customer vehicles should not be moved during an emergency unless authorised and necessary for safety.",
    ],
  },
  {
    title: "18. Emergency Vehicle Movement",
    content: [
      "Vehicle movement during an emergency should only occur when necessary for life safety, emergency access or prevention of immediate additional danger. No employee should move a vehicle in a manner that creates an unreasonable risk.",
    ],
  },
  {
    title: "19. Emergency Roles and Responsibilities",
    bullets: [
      "Management: coordinate emergency response, external assistance, incident reporting and post-incident review.",
      "Employees: raise the alarm, follow evacuation instructions and avoid unsafe intervention.",
      "Designated safety personnel: support evacuation, emergency equipment access and headcount where assigned.",
      "Drivers/technicians: secure vehicles or equipment only where this can be done safely.",
    ],
  },
  {
    title: "20. Training and Drills",
    content: [
      "Employees should receive appropriate fire-safety and emergency-response awareness. Evacuation or emergency drills may be conducted periodically where appropriate to the size and risk profile of the workshop.",
    ],
  },
  {
    title: "21. Emergency Headcount",
    content: [
      "Where practicable, a headcount or attendance check should be conducted at the assembly area. Missing persons should be reported immediately to the responsible person or emergency responders. Employees should not re-enter the premises to search for missing persons unless directed and trained to do so.",
    ],
  },
  {
    title: "22. Incident Reporting",
    bullets: [
      "All significant fires, smoke incidents, explosions, chemical incidents, electrical incidents, injuries and material near misses should be reported.",
      "Relevant photographs, witness information, equipment details and other evidence should be preserved where reasonably practicable.",
      "A post-incident review may be conducted to identify corrective and preventive actions.",
    ],
  },
  {
    title: "23. Fire Equipment Maintenance",
    content: [
      "Fire extinguishers, alarms, emergency lighting, electrical safety devices and other emergency equipment should be inspected, tested and maintained according to applicable requirements and manufacturer instructions.",
    ],
  },
  {
    title: "24. Housekeeping",
    content: [
      "Workshop floors, exits, storage areas and service bays should be kept reasonably clean and orderly. Accumulation of oily waste, combustible materials, packaging and other unnecessary fire hazards should be avoided.",
    ],
  },
  {
    title: "25. Policy Compliance",
    content: [
      "Employees, contractors and authorised third parties working at the premises are expected to follow this Policy and all applicable emergency and safety instructions. Serious or deliberate violations may result in corrective or disciplinary action as applicable.",
    ],
  },
  {
    title: "26. Records",
    bullets: [
      "Fire equipment inspection/service records may be maintained.",
      "Training and drill records may be maintained.",
      "Emergency incident reports and corrective-action records may be retained for safety, insurance, legal and compliance purposes.",
    ],
  },
  {
    title: "27. Policy Review",
    content: [
      "This Policy shall be reviewed periodically and may be updated based on changes in premises, equipment, fire risks, incident experience, emergency arrangements or applicable legal and safety requirements.",
    ],
  },
];

export default function WorkshopFireSafetyContent() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>

          <h1>
            Workshop Fire Safety, Emergency Response &amp; Evacuation Policy
          </h1>

          <p className={styles.description}>
            Fire prevention, emergency response and evacuation guidelines for
            workshop operations.
          </p>

          <div className={styles.metadata}>
            <span>
              <strong>Policy No.</strong> VXS/FSE/032
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
            <a href="#section-3">Fire Risk Prevention</a>
            <a href="#section-5">Fire Extinguishers</a>
            <a href="#section-9">Immediate Fire Response</a>
            <a href="#section-10">Evacuation Procedure</a>
            <a href="#section-19">Roles &amp; Responsibilities</a>
            <a href="#section-22">Incident Reporting</a>
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
                        Workshop Fire Safety, Emergency Response &amp;
                        Evacuation Policy
                      </td>
                    </tr>
                    <tr>
                      <th>Organisation</th>
                      <td>VahanXpert Services</td>
                    </tr>
                    <tr>
                      <th>Policy Number</th>
                      <td>VXS/FSE/032</td>
                    </tr>
                    <tr>
                      <th>Version / Effective Date</th>
                      <td>1.0 / 20/09/2026</td>
                    </tr>
                    <tr>
                      <th>Review Frequency</th>
                      <td>
                        At least annually or whenever premises/fire-safety
                        requirements change
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <footer className={styles.documentFooter}>
              VahanXpert Services | Workshop Fire Safety, Emergency Response
              &amp; Evacuation Policy
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}
