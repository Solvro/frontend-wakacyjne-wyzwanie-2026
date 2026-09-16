import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'Katalog Produktów',
    template: '%s | Katalog Produktów',
  },
  description: 'Najlepszy katalog produktów na lato.',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Katalog Produktów',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}