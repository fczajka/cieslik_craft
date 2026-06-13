import type { Metadata } from 'next';
import './globals.css';

const siteDescription =
  'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.';

export const metadata: Metadata = {
  title: 'Cieslik Craft',
  description: siteDescription,
  authors: [{ name: '@gatsbyjs' }],
  creator: '@gatsbyjs',
  icons: {
    icon: '/cieslik-craft/cieslikcraft-icon.png',
    shortcut: '/cieslik-craft/cieslikcraft-icon.png',
    apple: '/cieslik-craft/cieslikcraft-icon.png',
  },
  openGraph: {
    title: 'Cieslik Craft',
    description: siteDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    creator: '@gatsbyjs',
    title: 'Cieslik Craft',
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <body>{children}</body>
    </html>
  );
}
