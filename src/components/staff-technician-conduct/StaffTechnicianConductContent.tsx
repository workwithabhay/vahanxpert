
import styles from './StaffTechnicianConductContent.module.css';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: '1. Purpose',
    paragraphs: [
      'This Policy establishes expected standards of professional conduct, responsibility, integrity, safety, customer service and workplace behaviour for all employees, technicians, supervisors, apprentices, trainees and other personnel working for or on behalf of VahanXpert Services.',
    ],
  },
  {
    title: '2. Scope',
    paragraphs: [
      'This Policy applies to all workshop staff and technicians, whether permanent, temporary, trainee, apprentice, contractual or otherwise engaged by VahanXpert Services. Relevant provisions may also be communicated to contractors or third-party personnel working at the workshop.',
    ],
  },
  {
    title: '3. Professional Conduct',
    bullets: [
      'Staff shall perform assigned duties honestly, responsibly and professionally.',
      'Staff shall treat Customers, colleagues, vendors and visitors respectfully and without abusive, threatening or discriminatory behaviour.',
      'Staff shall follow authorised instructions, workshop procedures and applicable safety requirements.',
      'Staff shall maintain appropriate professional behaviour while representing VahanXpert Services.',
    ],
  },
  {
    title: '4. Customer Interaction',
    bullets: [
      'Staff shall communicate with Customers politely and professionally.',
      'Staff shall not make false promises regarding repair time, price, warranty, insurance approval or vehicle performance.',
      'Only authorised personnel should provide commitments or approvals on behalf of VahanXpert Services.',
      'Customer complaints or disputes should be escalated through the applicable grievance process rather than handled through arguments or inappropriate conduct.',
    ],
  },
  {
    title: '5. Vehicle Handling and Custody',
    paragraphs: [
      'Staff shall exercise reasonable care while moving, inspecting, servicing, road-testing, parking or otherwise handling Customer vehicles. Vehicle keys and Customer belongings shall be handled in accordance with the applicable Vehicle Key, Customer Property & Vehicle Custody Policy.',
    ],
  },
  {
    title: '6. Unauthorised Use of Customer Vehicles',
    bullets: [
      'Customer vehicles shall not be used for personal purposes.',
      'Road tests, vehicle movement and other necessary driving shall be carried out only for authorised workshop purposes.',
      'Unauthorised passengers, personal errands or recreational use of Customer vehicles are prohibited.',
    ],
  },
  {
    title: '7. Tools, Equipment and Workshop Safety',
    bullets: [
      'Staff shall use workshop tools and machinery only when appropriately trained or authorised.',
      'Required personal protective equipment shall be used.',
      'Safety guards, emergency controls and other protective systems shall not be intentionally bypassed.',
      'Unsafe equipment, damaged tools or hazardous conditions shall be reported promptly.',
    ],
  },
  {
    title: '8. Alcohol, Drugs and Impairment',
    paragraphs: [
      'Personnel shall not report for work or perform workshop duties while impaired by alcohol, illegal drugs or any substance that materially affects safe performance. Any legally prescribed medication that may affect safety should be managed responsibly and, where appropriate, disclosed through the applicable workplace process.',
    ],
  },
  {
    title: '9. Smoking and Fire Safety',
    paragraphs: [
      'Smoking, open flames and unauthorised ignition sources are prohibited in areas where they create a fire or safety risk. Staff shall follow the Workshop Health, Safety & Fire Prevention and Emergency Response requirements.',
    ],
  },
  {
    title: '10. Personal Belongings and Customer Property',
    bullets: [
      'Staff shall not remove, use, conceal or retain Customer property without authorisation.',
      'Cash, documents, electronics, accessories and other belongings found inside vehicles shall be handled according to the applicable custody procedure.',
      'Any valuable or unusual item discovered during service should be reported to the responsible person.',
    ],
  },
  {
    title: '11. Confidentiality and Customer Information',
    paragraphs: [
      'Staff may have access to Customer names, contact details, vehicle information, documents, insurance information, photographs, job cards and other service records. Such information shall be used only for authorised business purposes and shall not be unnecessarily disclosed, copied, photographed, shared or published.',
    ],
  },
  {
    title: '12. Photographs, Videos and Social Media',
    bullets: [
      'Staff shall not post Customer vehicles, registration numbers, documents, workshop records or Customer information on personal social-media accounts without appropriate authorisation.',
      'Workshop photographs or videos for official business purposes should be taken and shared only through authorised channels.',
      'Customer or vehicle information shall not be used for personal promotion.',
    ],
  },
  {
    title: '13. Bribery, Gifts and Unauthorised Benefits',
    paragraphs: [
      'Staff shall not demand, solicit or accept unauthorised money, commission, gifts, personal benefits or favours from Customers, suppliers or other parties in connection with workshop services. Any questionable offer or conflict should be reported to management.',
    ],
  },
  {
    title: '14. Supplier and Vendor Conduct',
    bullets: [
      'Staff shall not manipulate procurement, quotations, part selection or vendor dealings for personal benefit.',
      'Personal relationships with suppliers that may create a conflict of interest should be disclosed to management.',
      'Supplier communication shall remain professional and related to authorised business requirements.',
    ],
  },
  {
    title: '15. Spare Parts and Materials',
    bullets: [
      'Parts, consumables, tools and workshop materials shall not be removed for personal use without authorisation.',
      'Staff shall not knowingly substitute, remove or install a part contrary to the authorised repair requirement.',
      'Removed parts shall be handled according to applicable workshop and warranty procedures.',
    ],
  },
  {
    title: '16. Time, Attendance and Work Responsibility',
    bullets: [
      'Staff are expected to report for assigned duties on time and remain available during authorised working hours.',
      'Repeated unexplained absence, unauthorised leaving of duty or deliberate delay in assigned work may be addressed under applicable employment procedures.',
      'Work should be performed with reasonable care and attention.',
    ],
  },
  {
    title: '17. Work Quality and False Records',
    bullets: [
      'Staff shall not knowingly mark work as completed when it has not been completed.',
      "Inspection, test, part replacement and service records should be accurate to the best of the employee's knowledge.",
      'Any mistake or discovered defect should be reported rather than concealed.',
    ],
  },
  {
    title: '18. Safety and Incident Reporting',
    paragraphs: [
      'Any accident, injury, vehicle damage, equipment failure, fire, near miss, customer property issue or other material incident shall be reported promptly through the applicable workshop reporting procedure.',
    ],
  },
  {
    title: '19. Harassment, Threats and Violence',
    paragraphs: [
      'Threatening behaviour, physical violence, abusive conduct, intimidation, sexual harassment or other unlawful harassment is not acceptable in the workplace. Complaints should be reported through the appropriate management or grievance channel.',
    ],
  },
  {
    title: '20. Conflict of Interest',
    paragraphs: [
      'Staff shall disclose any situation in which personal, family, financial or outside business interests could materially conflict with their duties for VahanXpert Services. Management may determine appropriate controls based on the circumstances.',
    ],
  },
  {
    title: '21. Use of Company Property',
    bullets: [
      'Company tools, equipment, documents, devices, accounts and other property shall be used for authorised purposes.',
      'Company property shall be protected from avoidable loss, misuse or damage.',
      'Unauthorised copying, removal, lending or disposal of company property is prohibited.',
    ],
  },
  {
    title: '22. Attendance of Contractors and Trainees',
    paragraphs: [
      'Contractors, apprentices and trainees shall follow relevant safety, confidentiality, vehicle-handling and conduct requirements. Their work should be supervised where the task or risk requires supervision.',
    ],
  },
  {
    title: '23. Customer Complaint Escalation',
    paragraphs: [
      'Staff should not argue with Customers about complaints. Complaints should be documented or escalated to the responsible supervisor/management in accordance with the Customer Complaint, Grievance & Dispute Resolution Policy.',
    ],
  },
  {
    title: '24. Disciplinary Action',
    paragraphs: [
      'Violation of this Policy may result in counselling, warning, retraining, restriction of duties, suspension of access or other appropriate employment/contractual action, subject to the applicable employment terms and law. Serious misconduct may be escalated for further action.',
    ],
  },
  {
    title: '25. Non-Retaliation',
    paragraphs: [
      'No employee should be subjected to retaliation merely for making a good-faith report of a safety issue, misconduct, customer property concern, fraud, harassment or other policy concern through an appropriate channel.',
    ],
  },
  {
    title: '26. Training and Acknowledgement',
    paragraphs: [
      'VahanXpert Services may provide induction, safety, customer-service, confidentiality and technical training relevant to an employee’s role. Personnel may be required to acknowledge that they have received and understood this Policy.',
    ],
  },
  {
    title: '27. Records',
    bullets: [
      'Training and acknowledgement records may be maintained.',
      'Material misconduct, incident and corrective-action records may be maintained where appropriate.',
      'Records shall be handled in accordance with applicable confidentiality and record-keeping requirements.',
    ],
  },
  {
    title: '28. Policy Review',
    paragraphs: [
      'This Policy may be reviewed periodically and updated based on workshop operations, employee responsibilities, customer requirements, incident experience and applicable legal or operational requirements.',
    ],
  },
];

export default function StaffTechnicianConductContent() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>VAHANXPERT SERVICES</span>

          <h1>Staff / Technician Code of Conduct Policy</h1>

          <p className={styles.policyMeta}>
            Policy No.: VXS/EMP/026
            <span>|</span>
            Version: 1.0
            <span>|</span>
            Effective Date: 20/09/2026
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
      <span className={styles.sectionNumber}>
        {String(sections.length + 1).padStart(2, "0")}
      </span>

      <div className={styles.sectionContent}>
        <h2>Business Contact</h2>

        <div className={styles.contact}>
          <strong>VahanXpert Services</strong>

          <p>
            D-29, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh –
            226010
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
      <span className={styles.sectionNumber}>
        {String(sections.length + 2).padStart(2, "0")}
      </span>

      <div className={styles.sectionContent}>
        <h2>Document Control</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Document Name</th>
                <td>Staff / Technician Code of Conduct Policy</td>
              </tr>
              <tr>
                <th>Organisation</th>
                <td>VahanXpert Services</td>
              </tr>
              <tr>
                <th>Policy Number</th>
                <td>VXS/EMP/026</td>
              </tr>
              <tr>
                <th>Version / Effective Date</th>
                <td>1.0 / 20/09/2026</td>
              </tr>
              <tr>
                <th>Review Frequency</th>
                <td>
                  At least annually or whenever operational/employment
                  requirements change
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <p className={styles.footerText}>
    VahanXpert Services | Staff / Technician Code of Conduct Policy
  </p>
</article>

      </div>
    </section>
  );
}
