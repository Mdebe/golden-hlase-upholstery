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

  applicationName: 'Golden H.N Hlase Upholstery',

  referrer: 'origin-when-cross-origin',

  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://www.goldenhnhlase.co.za',
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
        alt: 'Golden H.N Hlase Upholstery Luxury Upholstery Services',
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
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],

    shortcut: ['/favicon.ico'],

    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],

    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
      },
    ],
  },

  verification: {
    google: 'google-site-verification-code',
  },
};