/** English service subpages — client's own EN copy from adpacc.sk/en. */
import type { ServiceContent } from "./services";
import { services as skServices, ostatneExtra as skOstatneExtra } from "./services";

export const services: Record<string, ServiceContent> = {
  "double-entry-accounting": {
    slug: "double-entry-accounting",
    title: "Double-Entry Accounting",
    intro: [
      "Reliable accounting is the foundation of every successful business. We ensure that your accounting is managed precisely, in compliance with legislation, and ready to withstand even the most demanding audits.",
      "We provide comprehensive processing of accounting documents, regular outputs for managerial decision-making, and compliance checks with tax regulations.",
      "With us, you can be confident that your finances are built on solid ground.",
    ],
    heroImg: "/images/service-podvojne.avif",
    featuresH2: "Double-Entry Accounting Services",
    features: [
      { lead: "Preparation", rest: "of reports and statements according to specific client requirements" },
      { lead: "Creation", rest: "of payment orders to fulfill all tax and levy obligations" },
      { lead: "Verification", rest: "of the accuracy and completeness of submitted accounting documents" },
      { lead: "Management", rest: "of the accounting journal and general ledger" },
      { lead: "Recording", rest: "of receivables and payables, monitoring customer payment discipline" },
      { lead: "Tax returns", rest: "for VAT, income, motor vehicles, and excise duties" },
    ],
    pricing: {
      kind: "tiers",
      note: "The fee for processing your accounting records is determined by the time required — based on actual hours worked. The price variants below are indicative. Apart from the monthly flat fee, clients incur no other hidden charges.",
      alsoIntro: "In addition to double-entry accounting, we also offer single-entry accounting and payroll.",
      tiers: [
        { name: "Small Client", subtitle: "Turnover up to €100,000", fit: ["Up to 50 documents per month", "Up to 5 employees"], base: 150, withPayroll: 225 },
        { name: "Medium Client", subtitle: "Turnover up to €1 million", fit: ["Up to 500 documents per month", "Up to 10 employees"], base: 450, withPayroll: 600 },
        { name: "Large Client", subtitle: "Turnover over €1 million", fit: ["Over 500 documents per month", "Over 10 employees"], base: 1050, withPayroll: 1500 },
      ],
    },
  },
  "single-entry-accounting": {
    slug: "single-entry-accounting",
    title: "Single-Entry Accounting",
    tagline: "From now on, it will be easy.",
    intro: [
      "We’ll provide you with a complete overview of your income and expenses. Entrust your accounting responsibilities to us, and you can focus on running your business.",
    ],
    heroImg: "/images/service-jednoduche.webp",
    featuresH2: "Single-Entry Accounting Services",
    features: [
      { lead: "Preparation", rest: "of reports and statements according to specific client requirements" },
      { lead: "Creation", rest: "of payment orders to fulfill all tax and levy obligations" },
      { lead: "Verification", rest: "of the accuracy and completeness of submitted accounting documents" },
      { lead: "Management", rest: "of the cash journal" },
      { lead: "Recording", rest: "of receivables and payables, monitoring customer payment discipline" },
      { lead: "Tax returns", rest: "for VAT, income, motor vehicles, and excise duties" },
    ],
    pricing: {
      kind: "single",
      note: "The fee for processing your accounting records is determined by the time required — based on actual hours worked. To prepare an accurate quote, a personal meeting is needed to learn more about your company with an emphasis on individual requirements. The variants below are indicative. Apart from the monthly flat fee, clients incur no other hidden charges.",
      alsoIntro: "In addition to single-entry accounting, we also offer double-entry accounting and payroll processing.",
      lead: "The indicative price for processing Single-Entry Accounting starts at:",
      value: 50,
      unit: "€ / month",
    },
  },
  payroll: {
    slug: "payroll",
    title: "Payroll",
    tagline: "With us, you’ll have everything under control.",
    intro: [
      "Entrust your complete payroll accounting to us. We’ll monitor legislative changes on your behalf, process payroll, issue payslips, and support your employees with any questions about their payslips — all while upholding the highest standards of data protection.",
    ],
    heroImg: "/images/service-mzdy.avif",
    featuresH2: "Services – Payroll and Human Resources",
    features: [
      { lead: "Preparation", rest: "of new employment contracts and addenda" },
      { lead: "Attendance", rest: "tracking" },
      { lead: "Calculation", rest: "of wages and insurance contributions" },
      { lead: "Preparation", rest: "of employment records, settlement sheets, income certificates, and other documents upon request" },
      { lead: "Processing", rest: "and submission of monthly reports" },
      { lead: "Preparation", rest: "of payment orders to fulfill all tax and contribution obligations" },
      { lead: "Communication and representation", rest: "before health insurance funds and public administration offices" },
    ],
    pricing: {
      kind: "single",
      note: "The price includes all activities related to payroll and HR processing; clients incur no additional hidden fees.",
      alsoIntro: "In addition to payroll services, we also offer single-entry accounting and double-entry accounting.",
      lead: "The price for processing payroll and HR for one employee under an employment contract or work agreement is:",
      value: 15,
      unit: "€ / month",
    },
  },
  "other-services": {
    slug: "other-services",
    title: "Other Services",
    tagline: "Going the extra mile is our standard.",
    intro: [
      "As part of our collaboration, in addition to a comprehensive service covering company formation, accounting and payroll processing, and tax advisory, we also offer a range of other services.",
    ],
    heroImg: "/images/service-ostatne.jpg",
    featuresH2: "Additional services provided",
    features: [
      { lead: "Online accounting", rest: "24/7 access to your books. No costs for purchasing or maintaining accounting software. Issuing accounting documents, inventory management, custom report creation, receivables and payables monitoring." },
      { lead: "Company formation services", rest: "Registration of changes in the Commercial and Trade Registers. Legal services brokerage. Drafting any type of commercial contracts." },
      { lead: "Virtual office", rest: "Virtual office rental with electronic mail forwarding. Document scanning and dispatch." },
      { lead: "With a smile on our faces", rest: "Easily submit your documents digitally via the Doklado app. We provide extra administrative services." },
      { lead: "Accounting reconstruction", rest: "Reconstruction of past years’ accounting, payroll, and HR records. Audit of your accounting records and auditor’s certification of your financial statements." },
      { lead: "Analyses and outputs", rest: "Preparation of interim accounting reports. Analysis of your business processes and document workflows." },
    ],
    pricing: { kind: "none" },
  },
};

export const ostatneExtra = {
  h2: "Our values: your peace of mind from paperwork",
  text: "We bring our clients worry-free accounting. Over more than 13 years, we’ve built tremendous trust with our clients. Our accountants are stable, they don’t rotate, and so we can add the value of an individual approach. We are client-oriented and therefore maintain above-standard relationships with our clients.",
  counters: [
    { value: 20, suffix: "+", label: "years of experience" },
    { value: 200, suffix: "+", label: "satisfied clients" },
    { value: 5000, suffix: "+", label: "accounting documents processed by us" },
  ],
};
