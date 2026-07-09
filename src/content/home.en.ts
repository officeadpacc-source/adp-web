/**
 * English homepage content — the client's own approved EN copy extracted 1:1
 * from adpacc.sk/en. Same shape as home.ts (SK). Team photos/logos are shared.
 */
import { team as skTeam, clientsStrip as skClients } from "./home";

export const hero = {
  h1: "Your reliable partner in accounting and economic consulting.",
  lead: "With over 20 years of experience, we provide comprehensive accounting services for sole proprietors, small and medium-sized enterprises. Entrust your accounting to professionals and focus on growing your business.",
  primary: { label: "Contact us", href: "/en/#kontakt" },
  secondary: { label: "Our services", href: "/en/#sluzby" },
};

export const clientsStrip = {
  label: "Our satisfied clients",
  logos: skClients.logos,
};

export const services = {
  h2: "Services",
  h4: "Expertise comes first, individual approach as standard.",
  p1: "Whether it’s double-entry accounting, single-entry accounting, payroll, or personnel administration – we approach each area with the same level of precision and responsibility.",
  p2: "With us, an individual approach is the norm, not the exception. Write to us and let’s arrange a personal meeting – we will gladly take care of your accounting as well.",
  cards: [
    {
      title: "Double-Entry Accounting",
      text: "Comprehensive management of accounting records for legal entities, including monthly and annual reports, VAT records, and financial statements.",
      href: "/en/double-entry-accounting/",
    },
    {
      title: "Payroll and HR",
      text: "Complete processing of payroll, reports for insurance companies and tax authorities, employee registrations and terminations.",
      href: "/en/payroll/",
    },
    {
      title: "Single-Entry Accounting",
      text: "Clear processing of income and expenses for sole proprietors, including VAT records and tax returns.",
      href: "/en/single-entry-accounting/",
    },
    {
      title: "Other Services",
      text: "In addition to comprehensive accounting and payroll services, we also provide support for company formation, tax consulting, and other supplementary services according to your needs.",
      href: "/en/other-services/",
    },
  ],
};

export const whyUs = {
  h2: "Why Choose Us",
  p: "Accounting should be clear, accurate, and stress-free. With us, you can be sure that your finances are in good hands – professionally handled, on time, and tailored to your actual needs.",
  stats: [
    { value: "AI", suffix: "", label: "Integration of artificial intelligence in accounting processing" },
    { value: 20, suffix: "+", label: "years of experience" },
    { value: 24, suffix: "/7", label: "accessible online accounting" },
    { value: 150, suffix: "+", label: "clients under our management" },
  ],
};

export const digital = {
  h2: "Digital Accounting of the Future",
  paragraphs: [
    "Modern accounting is an integral part of efficiently functioning business. Thanks to digital solutions like the DOKLADO application, you can be sure that your finances are processed accurately, on time, and in compliance with current legislation.",
    "Our company partners with the Doklado application, which enables convenient and secure electronic submission of accounting documents. Doklado also leverages artificial intelligence (AI) to automatically process portions of the data in your documents, thereby increasing the speed and efficiency of the entire accounting workflow.",
    "Thanks to this technology, we are able to minimize errors, accelerate processing, and ensure greater accuracy in bookkeeping.",
    "We guarantee you reliable accounting management, expert advice, and a personalized approach for each client.",
  ],
  checklist: [
    "Accurate and transparent accounting",
    "Automated document processing using artificial intelligence",
    "Time savings",
    "Personalized approach and support tailored to your needs",
  ],
};

export const referencie = {
  h2: "References",
  intro:
    "Client satisfaction is our priority. We assist companies with accounting, taxes, and financial management.",
  quotes: [
    "“We have been cooperating with A.D.P. Accounting as an external provider of accounting services for over a decade and we highly recommend their services. I appreciate the complexity of the services offered, their promptness in solving various situations that often complicate a company’s work life, and above all the feeling that our accounting is 100% in order so we can focus on our work.”",
    "“Truly professional approach, quick resolution of arising questions. Professionally prepared tax documents. I know I can really rely on this company – they handle all necessary tasks 100%.”",
    "“I am satisfied with the services of A.D.P. Accounting, as evidenced by the fact that I have been their client since 2005 to this day. I especially appreciate their helpfulness and consulting.”",
    "“As an architectural studio, we were looking for accounting that could keep pace with our dynamic project life. In A.D.P. Accounting, we found a partner who combines expertise with a modern approach. The shift to digital accounting has brought significant simplification to our administration – instead of piles of paperwork, just a few clicks and all documents are neatly stored online. We also value the clear communication and quick responses from the team, which gives us confidence that our accounting is in good hands.”",
  ],
};

export const about = {
  label: "About Us",
  text: "A.D.P. Accounting is an established accounting company based in Bratislava. Since 2005, we have been helping our clients achieve financial stability and growth through accurate and transparent accounting services. Our team continuously educates itself to provide you with up-to-date information and advice in accordance with the latest legislative changes.",
  stats: [
    { value: 20, suffix: "+", label: "years of experience" },
    { value: 200, suffix: "+", label: "satisfied clients" },
  ],
};

const EN_ROLES: Record<string, string> = {
  "Peter Raus": "Founder",
  "Anna Privrelová": "Accountant",
  "Ingrid Pokopcová": "Office Manager",
  "Martina Šebová": "Accountant",
  "Tomáš Chlpek": "Accountant",
  "Simona Pajserová": "Accountant",
  "Katarína Hatvaniová": "Payroll Accountant",
  "Erika Forgáčová": "Accountant",
  "Miroslava Kostecká": "Accountant",
};

const EN_BIOS: Record<string, string> = {
  "Peter Raus":
    "Peter Raus has been working in accounting for more than 25 years. Over the course of his career, he has become a reliable support for both clients and the entire team. He spends most of his working time in client meetings, focusing on individual solutions and professional advisory services.",
  "Anna Privrelová":
    "Anna Privrelová is a responsible, hardworking, and goal-oriented accountant who performs best when she has clearly defined tasks and the space to fully focus on her work. Within the team, she is seen as an energetic and reliable colleague.",
  "Ingrid Pokopcová":
    "Ingrid Pokopcová plays an important role in the day-to-day operation of the office. Thanks to her organizational skills, communication abilities, and positive attitude, she helps ensure smooth internal processes and effective communication with clients.",
  "Martina Šebová":
    "Martina Šebová values order, accuracy, and a clearly structured agenda. She approaches her work carefully and systematically, which enables her to ensure the smooth processing of accounting tasks.",
  "Tomáš Chlpek":
    "Tomáš Chlpek is a precise, efficient, and professionally skilled accountant. In his work, he focuses on effective solutions, accuracy, and reliable processing of accounting tasks.",
  "Simona Pajserová":
    "Simona Pajserová is a reliable and positive accountant who approaches her work responsibly and with a willingness to continue developing professionally. She started as a junior accountant and is now a fully-fledged member of the accounting department.",
  "Katarína Hatvaniová":
    "Katarína Hatvaniová focuses on payroll administration, HR, and communication with the employees of our clients. She performs her work responsibly, thoroughly, and with an emphasis on a professional approach.",
  "Erika Forgáčová":
    "Erika Forgáčová is one of the most experienced members of our team and has been with us for more than 15 years. During this time, she has prepared numerous accounting outputs and tax returns and has helped many clients with their accounting agenda.",
  "Miroslava Kostecká":
    "Miroslava Kostecká is a responsible accountant who focuses on accounting tasks, client communication, and work organization. During her time in our team, she has developed a wide range of professional and practical skills.",
};

export const team = {
  h2: "Our Team",
  cta: {
    text: "Interested in joining our team?",
    label: "View openings",
    href: skTeam.cta.href,
  },
  members: skTeam.members.map((m) => ({
    name: m.name,
    photo: m.photo,
    role: EN_ROLES[m.name] ?? m.role,
    bio: EN_BIOS[m.name] ?? m.bio,
  })),
};

export const spolupraca = {
  h2: "How does cooperation with our company work?",
  intro:
    "Our activity is based on expertise, reliability, and an individual approach to each client. We ensure the smooth running of your accounting without unnecessary administrative burden.",
  steps: [
    {
      title: "Submitting documents through the Doklado application",
      text: "You simply submit your accounting documents electronically through the Doklado app, where they are securely stored and immediately available for processing by your accountant.",
    },
    {
      title: "We ensure control and professional processing of documents",
      text: "Your accounting documents undergo thorough verification and professional processing in compliance with current legislation. Everything is handled efficiently and digitally.",
    },
    {
      title: "Smooth process and focus on your business",
      text: "Accounting is processed continuously, giving you constant insight into the state of your accounting agenda. This allows you to fully focus on managing and developing your business.",
    },
  ],
};

export const hodnoty = {
  h2: "Our values",
  cards: [
    {
      title: "Decency",
      icon: "/images/icon-slusnost.svg",
      text: "We treat customers, business partners, and one another with decency, respect, and understanding. Rudeness, arrogance, and condescension have no place here. We value differences of opinion and support open, tolerant communication.",
    },
    {
      title: "Fairness and Justice",
      icon: "/images/icon-ferovost.svg",
      text: "We recommend solutions to customers that bring them real value. Our prices are fair, transparent, and free of hidden fees. We take the same fair approach toward employees — rewarding them justly based on performance, contribution, and responsibility, not company hierarchy.",
    },
    {
      title: "Development",
      icon: "/images/icon-rozvoj.svg",
      text: "We have the ambition to continuously improve and be among the best. We follow technological trends, bring new solutions, and create lasting value for customers. We do our work with enthusiasm, responsibility, and a desire to move things forward.",
    },
  ],
};

export const kontakt = {
  h2: "Contact",
  visit: { title: "Visit us", text: "Hraničná 53, 821 05 Bratislava" },
  call: {
    title: "Call us",
    hours: "Mon–Fri from 8:00 to 16:30",
    phones: [
      { label: "+421 2 53 63 75 44", href: "tel:+421253637544" },
      { label: "+421 903 22 77 26", href: "tel:+421903227726" },
    ],
  },
  write: { title: "Write to us", email: "office@adpacc.sk" },
  quote: { label: "Request a quote", href: "/en/cenova-ponuka/" },
};
