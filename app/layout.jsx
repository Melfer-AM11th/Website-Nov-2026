import './globals.css';
import { LanguageProvider } from '../components/Language';

const title = 'AMElleventh | Philippine teams, governed from Dubai';
const description = 'Customer operations and back-office teams for UAE and GCC businesses, delivered in the Philippines and governed from Dubai. Pilots from 30 seats.';

export const metadata = {
  metadataBase: new URL('https://amelleventh.com'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'AMElleventh',
    url: '/',
    title,
    description,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = { themeColor: '#1B3A6B' };

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AMElleventh',
  legalName: 'Amelleventh - FZCO',
  url: 'https://amelleventh.com/',
  email: 'engage@amelleventh.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai Silicon Oasis, Dubai',
    addressCountry: 'AE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@600&family=Noto+Sans+Arabic:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </head>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
