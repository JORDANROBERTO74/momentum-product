import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Linear – The system for product development",
  description:
    "Purpose-built for planning and building products. Designed for the AI era.",
  applicationName: "Linear",
  icons: {
    icon: [{ url: "/linear/asset-005.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-linear-bg font-sans text-linear-text antialiased">
        {children}
      </body>
    </html>
  );
}
