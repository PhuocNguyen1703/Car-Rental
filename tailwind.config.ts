import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm_sans)"],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        hero: [
          "80px",
          { lineHeight: "100px", fontWeight: "700", letterSpacing: "-0.5%" },
        ],
        headline1: [
          "48px",
          { lineHeight: "70px", fontWeight: "700", letterSpacing: "-0.5%" },
        ],
        headline2: [
          "40px",
          { lineHeight: "60px", fontWeight: "700", letterSpacing: "-0.5%" },
        ],
        headline3: [
          "34px",
          { lineHeight: "44px", fontWeight: "500", letterSpacing: "-0.5%" },
        ],
        headline4: [
          "24px",
          { lineHeight: "36px", fontWeight: "500", letterSpacing: "0" },
        ],
        body1: [
          "18px",
          { lineHeight: "26px", fontWeight: "500", letterSpacing: "0" },
        ],
        body2: [
          "18px",
          { lineHeight: "26px", fontWeight: "400", letterSpacing: "0" },
        ],
        body3: [
          "16px",
          { lineHeight: "24px", fontWeight: "500", letterSpacing: "0" },
        ],
        body4: [
          "16px",
          { lineHeight: "24px", fontWeight: "400", letterSpacing: "0" },
        ],
        caption1: [
          "14px",
          { lineHeight: "20px", fontWeight: "500", letterSpacing: "0" },
        ],
        caption2: [
          "14px",
          { lineHeight: "20px", fontWeight: "400", letterSpacing: "0" },
        ],
        caption3: [
          "12px",
          { lineHeight: "18px", fontWeight: "500", letterSpacing: "0" },
        ],
        caption4: [
          "12px",
          { lineHeight: "18px", fontWeight: "400", letterSpacing: "0" },
        ],
        "btn-lg": [
          "20px",
          { lineHeight: "30px", fontWeight: "700", letterSpacing: "0" },
        ],
        "btn-md": [
          "16px",
          { lineHeight: "24px", fontWeight: "700", letterSpacing: "0" },
        ],
        "btn-sm": [
          "14px",
          { lineHeight: "20px", fontWeight: "700", letterSpacing: "0" },
        ],
      },
      colors: {
        blue: {
          df: "#316BFF",
          80: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #316BFF",
          60: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #316BFF",
          40: "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #316BFF",
          20: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #316BFF",
        },
        red: {
          df: "#FF543D",
          80: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #FF543D",
          60: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #FF543D",
          40: "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #FF543D",
          20: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #FF543D",
        },
        purple: {
          df: "#878CFF",
          80: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #878CFF",
          60: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #878CFF",
          40: "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #878CFF",
          20: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #878CFF",
        },
        orange: {
          df: "#FFAF4E",
          80: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #FFAF4E",
          60: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #FFAF4E",
          40: "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #FFAF4E",
          20: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #FFAF4E",
        },
        skyblue: {
          df: "#A4CDE3",
          80: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #A4CDE3",
          60: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #A4CDE3",
          40: "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #A4CDE3",
          20: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #A4CDE3",
        },
        black: {
          df: "#141416",
          80: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #141416",
          60: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #141416",
          40: "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #141416",
          20: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #141416",
        },
        gray: {
          df: "#8E94A3",
          80: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #8E94A3",
          60: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #8E94A3",
          40: "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #8E94A3",
          20: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #8E94A3",
        },
        white: {
          df: "#FAFBFF",
          80: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #FAFBFF",
          60: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #FAFBFF",
          40: "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #FAFBFF",
          20: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #FAFBFF",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
