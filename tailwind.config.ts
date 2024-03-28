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
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        "blue-50": "#edf9ff",
        "blue-100": "#d6efff",
        "blue-200": "#b5e5ff",
        "blue-300": "#83d7ff",
        "blue-400": "#48bfff",
        "blue-500": "#1e9eff",
        "blue-600": "#067eff",
        "blue-700": "#006aff",
        "blue-800": "#0851c5",
        "blue-900": "#0d489b",
        "blue-950": "#0e2c5d",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
