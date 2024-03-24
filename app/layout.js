import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: "400",
  subsets: ["devanagari"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "EFA(Event Feedback Analysis)",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
