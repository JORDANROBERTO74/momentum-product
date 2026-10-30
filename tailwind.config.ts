import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#08090a",
          surface: "#141516",
          "surface-elevated": "#1c1c1f",
          border: "#2a2a2b",
          "border-subtle": "#232326",
          muted: "#8a8f98",
          text: "#f7f8f8",
          "text-secondary": "#b4b8bf",
          accent: "#5e6ad2",
          "accent-hover": "#6b77e0",
          green: "#68cc58",
          orange: "#f2994a",
          red: "#eb5757",
          yellow: "#f2c94c",
          lavender: "#c8c4f0",
          "yellow-bright": "#f5d547",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1436px",
      },
      spacing: {
        "page-x": "46px",
        "section-y": "7.5rem",
        "section-y-lg": "8rem",
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "600" }],
        section: ["44px", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
      },
      borderRadius: {
        panel: "1rem",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
