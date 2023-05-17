import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TCM Kongres 2023",
  description:
    "V Międzynarodowy Kongres Medycyny Chińskiej organizowany przez Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej (PTTMC) w Krakowie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
