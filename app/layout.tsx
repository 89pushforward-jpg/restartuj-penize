import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://restartuj-penize.cesefome.chatgpt.site'),
  title: 'Restartuj Peníze | Finance, kterým budete rozumět',
  description: 'Praktické e-booky o osobních financích, investičních pojmech a ochraně před drahými chybami — bez slibů rychlého zbohatnutí.',
  openGraph: {
    title: 'Rozumějte svým penězům | Restartuj Peníze',
    description: '9 praktických e-booků pro jistější orientaci v každodenních financích.',
    type: 'website',
    locale: 'cs_CZ',
    images: [{ url: '/og.png', width: 1728, height: 909, alt: 'Rozumějte svým penězům — Restartuj Peníze' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rozumějte svým penězům | Restartuj Peníze',
    description: '9 praktických e-booků pro jistější orientaci v každodenních financích.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
