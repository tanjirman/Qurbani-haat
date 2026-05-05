
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "animate.css"
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Qurbani Haat | Premium Livestock Marketplace",
    template: "%s | Qurbani Haat",
  },
  description:
    "Buy and book premium livestock for Qurbani. Trusted, verified animals with doorstep delivery.",
  keywords: [
    "Qurbani",
    "Livestock",
    "Cattle",
    "Buy cow online",
    "Bangladesh cattle market",
  ],
  authors: [{ name: "Qurbani Haat Team" }],
  creator: "Qurbani Haat",
  openGraph: {
    title: "Qurbani Haat",
    description: "Premium livestock marketplace for Qurbani.",
    url: "http://localhost:3000",
    siteName: "Qurbani Haat",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 pt-3">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
