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
  title: "Momentum — Product work, without the handoffs",
  description:
    "Momentum keeps intake, planning, review and release in one shared context for product teams and AI agents.",
  applicationName: "Momentum",
  metadataBase: new URL("https://momentum-product.vercel.app"),
  icons: {
    icon: [{ url: "/brand/momentum-mark.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-brand-bg font-sans text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
