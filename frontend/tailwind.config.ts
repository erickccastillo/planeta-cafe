/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface": "#131315",
        "primary-fixed": "#acedff",
        "surface-bright": "#39393b",
        "on-surface": "#e5e1e4",
        "on-surface-variant": "#bcc9cd",
        "primary": "#4cd7f6",
        "secondary": "#ffb1c7",
        "background": "#131315",
        "surface-container-highest": "#353437",
        "surface-container-high": "#2a2a2c",
        "surface-container": "#201f22",
        "surface-container-low": "#1c1b1d",
        "surface-container-lowest": "#0e0e10",
        "primary-container": "#06b6d4",
        "secondary-container": "#be0062",
        "outline-variant": "#3d494c",
        "on-primary": "#003640",
        "tertiary-container": "#c78dff",
        "tertiary": "#ddb7ff"
      },
      fontFamily: {
        "body-md": ["Plus Jakarta Sans"],
        "display": ["Space Grotesk"],
        "headline-sm": ["Space Grotesk"],
        "label-sm": ["Space Grotesk"],
        "headline-md": ["Space Grotesk"],
        "headline-lg": ["Space Grotesk"],
        "body-sm": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "label-md": ["Space Grotesk"],
        "label-lg": ["Space Grotesk"],
      },
      fontSize: {
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "display": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "500" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "500" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-sm": ["13px", { lineHeight: "18px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}