export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does the cashless insurance claim process work at VahanXpert?',
    answer:
      'We have direct cashless tie-ups with 50+ IRDAI-approved insurance companies (including ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, and more). Simply bring your vehicle or request a free pickup in Nohar. Our dedicated insurance surveyor handles all digital inspections and paperwork so your car gets restored with zero out-of-pocket payment for covered parts.',
  
  },
  {
    id: 'faq-2',
    question: 'What documents are required to file an insurance claim?',
    answer:
      'All you need are 4 simple documents: 1) Active Insurance Policy copy, 2) Vehicle RC (Registration Certificate), 3) Driver’s Driving License, and 4) A brief statement of the incident. Our claims specialist handles the entire insurance portal filing and surveyor coordination for you.',
   
  },
  {
    id: 'faq-3',
    question: 'What car brands and models do you service?',
    answer:
      'Our multi-brand workshop in Nohar is equipped with advanced OEM diagnostic scanners and specialized tools to service all major passenger vehicles — including Volkswagen, Maruti Suzuki, Hyundai, Tata, Mahindra, Honda, Toyota, Kia, Skoda, Ford, and luxury marques.',
   
  },
  {
    id: 'faq-4',
    question: 'Do you use 100% genuine OEM/OES spare parts?',
    answer:
      'Yes, absolutely. We enforce a strict zero-compromise quality policy. We only install 100% genuine OEM and certified OES spare parts sourced directly from authorized manufacturers, backed with official warranty coverage.',

  },
  {
    id: 'faq-5',
    question: 'Is doorstep pickup and delivery available in Nohar?',
    answer:
      'Yes! We provide convenient doorstep vehicle pickup and sanitized drop-off anywhere in Nohar and adjoining areas. You also receive live photo and video updates of your vehicle service progress directly on WhatsApp.',

  },
  {
    id: 'faq-6',
    question: 'How do you guarantee transparent pricing with no hidden charges?',
    answer:
      'Before turning a single wrench, we provide an itemized digital estimate detailing labor and parts. We never carry out unauthorized repairs. What we quote after physical inspection is exactly what you pay — zero hidden fees, zero surprises.',

  }
];
