import * as skHome from "@/content/home";
import * as enHome from "@/content/home.en";

export type Lang = "sk" | "en";

/** Homepage/shared content bundle per language. */
export const home = { sk: skHome, en: enHome };

export function homeFor(lang: Lang) {
  return home[lang];
}

/** Prefix a SK path with /en for the English site (used by shared components). */
export function localizeHref(href: string, lang: Lang): string {
  if (lang === "sk") return href;
  if (href.startsWith("/en") || !href.startsWith("/")) return href;
  if (href.startsWith("/#")) return `/en/${href.slice(1)}`; // /#kontakt -> /en/#kontakt
  return `/en${href}`;
}

/** UI chrome strings (header, footer, forms, buttons, drawer). */
export const ui = {
  sk: {
    home: "/",
    nav: {
      services: "Služby",
      about: "O nás",
      references: "Referencie",
      blog: "Blog",
      careers: "Zamestnanie",
    },
    serviceLinks: [
      { label: "Podvojné účtovníctvo", href: "/podvojne-uctovnictvo/" },
      { label: "Jednoduché účtovníctvo", href: "/jednoduche-uctovnictvo/" },
      { label: "Mzdy", href: "/mzdy/" },
      { label: "Ostatné služby", href: "/ostatne-sluzby/" },
    ],
    contact: "Kontakt",
    clientZone: "Klientská zóna",
    menu: "Menu",
    closeMenu: "Zavrieť menu",
    openMenu: "Otvoriť menu",
    quoteFab: "Cenová ponuka",
    showMore: "Zobraziť viac",
    learnMore: "Zistiť viac",
    readMore: "Čítať viac",
    backToBlog: "Späť na blog",
    interested: "Mám záujem",
    langSwitchHref: "/en/",
    langSwitchLabel: "EN",
    form: {
      name: "Meno (Povinné)",
      namePh: "Vaše meno a priezvisko",
      email: "Email (Povinné)",
      emailPh: "Váš e-mail",
      phone: "Telefónne číslo (Povinné)",
      phonePh: "Vaše telefónne číslo",
      message: "Správa",
      messagePh: "Vaša správa",
      gdprPre: "Súhlasím so ",
      gdprLink: "spracovaním osobných údajov",
      gdprHref: "/ochrana-osobnych-udajov/",
      submit: "Odoslať správu",
      sending: "Odosielam…",
      error:
        "Správu sa nepodarilo odoslať. Skúste to prosím znova, alebo nám zavolajte na +421 903 22 77 26.",
    },
    footer: {
      privacy: "Ochrana osobných údajov",
      privacyHref: "/ochrana-osobnych-udajov/",
      cookies: "Zásady používania súborov cookies",
      cookiesHref: "/cookies/",
      recaptchaPre: "Táto stránka je chránená reCAPTCHA a platia pre ňu ",
      recaptchaMid: " a ",
      recaptchaEnd: " spoločnosti Google.",
      recaptchaPrivacy: "Zásady ochrany osobných údajov",
      recaptchaTerms: "Zmluvné podmienky",
      createdBy: "Created by webgate.digital",
    },
    servicePage: {
      contactUs: "Kontaktujte nás",
      estPrice: "Orientačná cena",
      monthly: "/mesačne",
      from: "od",
      suitableFor: "Vhodný pre firmy:",
      bookkeeping: "Vedenie účtovníctva",
      bookkeepingAndPayroll: "Vedenie účtovníctva a spracovanie miezd",
    },
    thanks: {
      title: "Ďakujeme! Vaša správa bola odoslaná.",
      lead: "Ozveme sa vám čo najskôr, spravidla do 24 hodín v pracovných dňoch. Ak je to súrne, zavolajte nám priamo.",
    },
  },
  en: {
    home: "/en/",
    nav: {
      services: "Services",
      about: "About us",
      references: "References",
      blog: "Blog",
      careers: "Careers",
    },
    serviceLinks: [
      { label: "Double-Entry Accounting", href: "/en/double-entry-accounting/" },
      { label: "Single-Entry Accounting", href: "/en/single-entry-accounting/" },
      { label: "Payroll", href: "/en/payroll/" },
      { label: "Other Services", href: "/en/other-services/" },
    ],
    contact: "Contact",
    clientZone: "Client zone",
    menu: "Menu",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    quoteFab: "Get a quote",
    showMore: "Show more",
    learnMore: "Learn more",
    readMore: "Read more",
    backToBlog: "Back to blog",
    interested: "I’m interested",
    langSwitchHref: "/",
    langSwitchLabel: "SK",
    form: {
      name: "Name (Required)",
      namePh: "Your full name",
      email: "Email (Required)",
      emailPh: "Your email",
      phone: "Phone Number (Required)",
      phonePh: "Your phone number",
      message: "Message",
      messagePh: "Your message",
      gdprPre: "I agree with the ",
      gdprLink: "processing of personal data",
      gdprHref: "/en/privacy-policy/",
      submit: "Send message",
      sending: "Sending…",
      error:
        "The message could not be sent. Please try again, or call us at +421 903 22 77 26.",
    },
    footer: {
      privacy: "Privacy Policy",
      privacyHref: "/en/privacy-policy/",
      cookies: "Cookie Policy",
      cookiesHref: "/en/cookie-policy/",
      recaptchaPre: "This site is protected by reCAPTCHA and the Google ",
      recaptchaMid: " and ",
      recaptchaEnd: " apply.",
      recaptchaPrivacy: "Privacy Policy",
      recaptchaTerms: "Terms of Service",
      createdBy: "Created by webgate.digital",
    },
    servicePage: {
      contactUs: "Contact us",
      estPrice: "Indicative price",
      monthly: "/month",
      from: "from",
      suitableFor: "Suitable for companies:",
      bookkeeping: "Bookkeeping",
      bookkeepingAndPayroll: "Bookkeeping and payroll",
    },
    thanks: {
      title: "Thank you! Your message has been sent.",
      lead: "We will get back to you as soon as possible, usually within 24 hours on business days. If it is urgent, please call us directly.",
    },
  },
} as const;

export function uiFor(lang: Lang) {
  return ui[lang];
}
