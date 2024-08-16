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
      fontSize: {},
    },
    colors: {
      brand: "var(--brand-color)",
      "dark-txt": "var(--dark-text-color)",
      "light-txt": "var(--light-text-color)",
      "lighter-txt": "var(--lighter-text-color)",
      "main-bd": "var(--main-border-color)",
      "light-bd": "var(--light-border-color)",
      light: "var(--background-color)",
      dark: "var(--dark-bg-color)",
      switch: "var(--switch-bg-color)",
      "menu-dropdown": "var(--menu-dropdown-bg-color)",
      "menu-dropdown-txt": "var(--menu-dropdown-text-color)",
      checkout: "var(--checkout-bg-color)",
      "bottom-nav": "var(--bottom-nav-bg-color)",
      "bottom-nav-icon": "var(--bottom-nav-icon-color)",
      "header-txt": "var(--header-text-color)",
      "header-scroll": "var(--header-bg-scroll-color)",
      "header-txt-scroll": "var(--header-text-scroll-color)",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
