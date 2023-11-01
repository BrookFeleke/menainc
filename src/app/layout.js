import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mena Inc Wedding Invitation Cards | Mena Inc Ethiopia",
  description:
    "Discover stunning wedding invitation cards handcrafted by Mena Inc in Ethiopia. Elevate your special day with our elegant designs and personalized wedding cards.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
