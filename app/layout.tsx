import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Restartuj Peníze | Finance, kterým budete rozumět',
  description: 'Praktické e-booky o osobních financích, investičních pojmech a ochraně před drahými chybami — bez slibů rychlého zbohatnutí.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
