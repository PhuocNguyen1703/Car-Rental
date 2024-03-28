import { DM_Sans, Poppins } from "next/font/google";

const dm_sans_init = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm_sans",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const dm_sans = dm_sans_init.variable;
export const poppins = poppins_init.variable;
