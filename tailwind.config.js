module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./contact/**/*.html",
    "./experience/**/*.html",
    "./projects/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--twc-background) / <alpha-value>)",
        surface: "rgb(var(--twc-surface) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--twc-surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--twc-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--twc-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--twc-surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--twc-surface-container-highest) / <alpha-value>)",
        "on-surface": "rgb(var(--twc-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--twc-on-surface-variant) / <alpha-value>)",
        primary: "rgb(var(--twc-primary) / <alpha-value>)",
        "primary-fixed": "rgb(var(--twc-primary-fixed) / <alpha-value>)",
        "primary-fixed-dim": "rgb(var(--twc-primary-fixed-dim) / <alpha-value>)",
        "on-primary": "rgb(var(--twc-on-primary) / <alpha-value>)",
        secondary: "rgb(var(--twc-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--twc-tertiary) / <alpha-value>)",
        outline: "rgb(var(--twc-outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--twc-outline-variant) / <alpha-value>)"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "container-max": "1280px",
        gutter: "24px",
        unit: "8px"
      },
      fontFamily: {
        geist: ["Geist", "Inter", "sans-serif"],
        inter: ["Inter", "Geist", "sans-serif"]
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
