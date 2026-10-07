import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08080A",
        surface: {
          50: "#1A1A22",
          100: "#14141A",
          200: "#0F0F14",
          300: "#0B0B0E",
          DEFAULT: "#0F0F14",
        },
        brand: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          DEFAULT: "#DC2626",
          glow: "rgba(220, 38, 38, 0.4)",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(220, 38, 38, 0.35)",
        "glow-lg": "0 0 40px -5px rgba(220, 38, 38, 0.5)",
        "glow-sm": "0 0 15px -3px rgba(220, 38, 38, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-red": "radial-gradient(circle at center, rgba(220,38,38,0.18) 0%, rgba(8,8,10,0) 70%)",
        "radial-hero": "radial-gradient(circle at 50% 20%, rgba(220,38,38,0.25) 0%, rgba(15,15,20,0.8) 50%, rgba(8,8,10,1) 100%)",
      },
      animation: {
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
