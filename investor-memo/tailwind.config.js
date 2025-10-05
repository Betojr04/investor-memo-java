/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0047AB",
          light: "#2563EB",
          dark: "#002B5B"
        },
        accent: {
          DEFAULT: "#F59E0B",
          soft: "#FDE68A"
        },
        background: {
          DEFAULT: "#F9FAFB",
          dark: "#111827",
          card: "#FFFFFF"
        },
        neutral: {
          50: "#F3F4F6",
          100: "#E5E7EB",
          300: "#D1D5DB",
          500: "#6B7280",
          700: "#374151",
          900: "#111827"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "4xl": "2rem"
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
        strong: "0 6px 20px rgba(0, 0, 0, 0.12)"
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      },
      animation: {
        slideUp: "slideUp 0.6s ease-out"
      }
    }
  },
  plugins: [forms, typography]
};
