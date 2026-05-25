import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goldenhnhlase.co.za'),

  title: {
    default: 'Golden H.N Hlase Upholstery | Luxury Seat Covers & Upholstery',
    template: '%s | Golden H.N Hlase Upholstery',
  },

  description:
    'Premium upholstery services in Richards Bay, South Africa. Specialists in luxury car seat covers, vehicle interiors, sofa upholstery, furniture restoration, and custom upholstery solutions.',

  keywords: [
    'Upholstery Richards Bay',
    'Seat Covers Richards Bay',
    'Luxury Upholstery South Africa',
    'Furniture Restoration',
    'Car Seat Covers',
    'Vehicle Upholstery',
    'Sofa Upholstery',
    'Custom Upholstery',
    'Auto Upholstery',
    'Leather Seat Covers',
    'Car Interior Upholstery',
    'Furniture Upholstery',
    'Golden H.N Hlase Upholstery',
  ],

  authors: [
    {
      name: 'Golden H.N Hlase Upholstery',
      url: 'https://www.goldenhnhlase.co.za',
    },
  ],

  creator: 'Golden H.N Hlase Upholstery',
  publisher: 'Golden H.N Hlase Upholstery',

  category: 'Business',

  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Golden H.N Hlase Upholstery',
    description:
      'Luxury seat covers, premium upholstery, vehicle interiors, and furniture restoration in Richards Bay.',
    url: 'https://www.goldenhnhlase.co.za',
    siteName: 'Golden H.N Hlase Upholstery',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Golden H.N Hlase Upholstery',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Golden H.N Hlase Upholstery',
    description:
      'Luxury seat covers and premium upholstery services in Richards Bay.',
    images: ['/images/og-image.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  verification: {
    google: 'google-site-verification-code',
  },
};

/* ✅ THIS PART WAS MISSING (THIS FIXES YOUR ERROR) */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}