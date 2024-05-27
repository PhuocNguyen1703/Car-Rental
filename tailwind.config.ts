import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      //OTP animation
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },

      fontFamily: {
        sans: ["var(--font-dm_sans)"],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        hero: [
          "64px",
          { lineHeight: "80px", fontWeight: "700", letterSpacing: "-0.5" },
        ],
        headline1: [
          "48px",
          { lineHeight: "70px", fontWeight: "700", letterSpacing: "0" },
        ],
        headline2: [
          "40px",
          { lineHeight: "60px", fontWeight: "700", letterSpacing: "0" },
        ],
        headline3: [
          "34px",
          { lineHeight: "44px", fontWeight: "500", letterSpacing: "0" },
        ],
        headline4: [
          "24px",
          { lineHeight: "36px", fontWeight: "500", letterSpacing: "0" },
        ],
        subtitle1: [
          "16px",
          { lineHeight: "24px", fontWeight: "500", letterSpacing: "0" },
        ],
        subtitle2: [
          "14px",
          { lineHeight: "21px", fontWeight: "500", letterSpacing: "0" },
        ],
        subtitle3: [
          "16px",
          { lineHeight: "1", fontWeight: "700", letterSpacing: "0" },
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
          500: "#316bff",
          400: "#5994ff",
          300: "#8ebaff",
          200: "#bcd4ff",
          100: "#d9e6ff",
        },
        red: {
          500: "#ff543d",
          400: "#ff7664",
          300: "#ffa99d",
          200: "#ffccc5",
          100: "#ffe3df",
        },
        purple: {
          500: "#605bf9",
          400: "#7a80ff",
          300: "#a0acff",
          200: "#c4cdff",
          100: "#dee4ff",
        },
        orange: {
          500: "#fe8911",
          400: "#ffa538",
          300: "#ffc871",
          200: "#ffdfa8",
          100: "#fff1d4",
        },
        skyblue: {
          300: "#a4cde3",
          200: "#c9e0ee",
          100: "#e7f1f7",
          50: "#f3f8fc",
        },
        black: {
          950: "#141416",
          700: "#4d4d57",
          500: "#757682",
          200: "#dadadd",
          100: "#eeeef0",
        },
        gray: {
          600: "#8E94A3",
          500: "#a0a8b4",
          400: "#b4bcc5",
          300: "#cbd1d6",
          100: "#edf0f2",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
