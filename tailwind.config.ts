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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
