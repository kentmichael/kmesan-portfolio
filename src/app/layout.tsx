import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kent Michael San",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ boxSizing: 'border-box' }}>{children}</body>
    </html>
  );
}
