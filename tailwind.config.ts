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
        roboto: ["var(--font-roboto)"],
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
        background: "var(--background)",
        "switch-bg": "var(--switch-bg)",
        "menu-dropdown-bg": "var(--menu-dropdown-bg)",
        "menu-dropdown-text": "var(--menu-dropdown-text)",
        "checkout-bg": "var(--checkout-bg)",
        "bottom-nav-icon": "var(--bottom-nav-icon)",
        "header-bg": "var(--header-bg)",
        "header-text": "var(--header-text)",
        "header-bg-scroll": "var(--header-bg-scroll)",
        "header-text-scroll": "var(--header-text-scroll)",
        "border-primary": "var(--border-primary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "bg-form": "var(--bg-form)",
        "bg-list": "var(--bg-list)",
        divider: "var(--divider)",
        "input-clr": "var(--input-clr)",
        "icon-clr": "var(--icon-clr)",
        "paragraph-primary": "var(--paragraph-primary)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
