import type { Config } from "tailwindcss";

/**
 * Design tokens extracted 1:1 from the Elementor kit of the original
 * adpacc.sk (kit-6). Do not invent values — pull them from the kit.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#161F2E", // primary — headings, buttons, header bg
        slate: "#39404D", // footer / dark section bg
        sand: "#F2EDE6", // hero & light section bg
        "sand-dark": "#C0A88C", // secondary accent
        ink: "#111111",
        body: "#444444",
        muted: "#666666",
        faint: "#AAAAAA",
        line: "#E3E6EC",
        paper: "#F9F9F9",
        red: "#B42318",
        "red-bg": "#FEF3F2",
        green: "#027A48",
        "green-bg": "#ECFDF3",
      },
      fontFamily: {
        heading: ["var(--font-frank)", "serif"], // Frank Ruhl Libre 400
        sans: ["var(--font-manrope)", "sans-serif"], // Manrope
        text: ["var(--font-roboto)", "sans-serif"], // Roboto (kit body text)
      },
      fontSize: {
        // Heading scale from the kit (all Frank Ruhl Libre 400, lh 120%)
        h1: ["50px", { lineHeight: "1.2" }],
        h2: ["46px", { lineHeight: "1.2" }],
        h3: ["36px", { lineHeight: "1.2" }],
        h4: ["32px", { lineHeight: "1.2" }],
        h5: ["25px", { lineHeight: "1.2" }],
        // Body scale (Manrope)
        lead: ["20px", { lineHeight: "1.6" }],
        base: ["16px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.5" }],
        // Nav / buttons: Manrope 600 uppercase, ls 0.5px
        nav: ["16px", { lineHeight: "1.2", letterSpacing: "0.5px" }],
        navsm: ["14px", { lineHeight: "1.2", letterSpacing: "0.5px" }],
      },
      maxWidth: {
        // Elementor kit container width (desktop); 1024px applies ≤1024 viewports
        wrap: "1264px",
      },
    },
  },
  plugins: [],
};

export default config;
