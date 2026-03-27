/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B9E8C",
          light: "#8FBAAF",
          dark: "#4A7A6A",
        },
        accent: {
          DEFAULT: "#E8A87C",
          light: "#F4C4A8",
        },
        surface: {
          DEFAULT: "#FAF8F5",
          elevated: "#FFFFFF",
        },
        text: {
          main: "#2D3436",
          muted: "#6B7280",
          inverted: "#FFFFFF",
        },
        border: "#E5E1DC",
        success: "#6B9E8C",
      },
      fontFamily: {
        heading: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "title":   ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "lead":    ["clamp(1.05rem, 1.5vw, 1.25rem)", { lineHeight: "1.65" }],
      },
      boxShadow: {
        card:      "0 4px 20px rgba(45, 52, 54, 0.06)",
        "card-hover": "0 8px 30px rgba(45, 52, 54, 0.1)",
        cta:       "0 4px 20px rgba(45, 52, 54, 0.08)",
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        sm: "8px",
      },
    },
  },
};
