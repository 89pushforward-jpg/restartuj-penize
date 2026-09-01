import type { Metadata } from 'next';
import { Manrope, Source_Sans_3 } from 'next/font/google';

import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'latin-ext'],
});

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://restartuj-penize.cesefome.chatgpt.site'),
  title: 'Restartuj Peníze | Finance, kterým konečně rozumíte',
  description: 'Dvě hlavní knihy, bonus Mindset a šest praktických e-booků pro srozumitelnější finanční rozhodování.',
  openGraph: {
    title: 'Restartuj Peníze | Finance, kterým konečně rozumíte',
    description: 'Kompletní knihovna finančních základů: 2 hlavní knihy, bonus Mindset a 6 praktických e-booků.',
    type: 'website',
    locale: 'cs_CZ',
    images: [{ url: '/og-v2.png', width: 1728, height: 909, alt: 'Restartuj Peníze — Finance, kterým konečně rozumíte' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restartuj Peníze | Finance, kterým konečně rozumíte',
    description: '2 hlavní knihy, bonus Mindset a 6 praktických e-booků.',
    images: ['/og-v2.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className={`${manrope.variable} ${sourceSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
