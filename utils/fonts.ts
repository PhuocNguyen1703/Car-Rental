import { Roboto } from "next/font/google";

const roboto_int = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-roboto",
});

export const roboto = roboto_int.variable;
