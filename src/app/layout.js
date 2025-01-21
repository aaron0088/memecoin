import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dance Trump Dance",
  description: "In commemoration of Donald J. Trump's second term of becoming President of the United States of America, this coin is dedicated to as a reminder that he too, can still…………………………………DANCE!………………. All while Making America Great Again",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
