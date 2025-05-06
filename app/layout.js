import { Geist, Geist_Mono, Erica_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ericaOne = Erica_One({
  variable: "--font-erica-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
  autoReplace: true,
});

export const metadata = {
  title: "Culture Cart App",
  description: "Find and support Black-owned businesses in your area with Culture Cart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ericaOne.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
