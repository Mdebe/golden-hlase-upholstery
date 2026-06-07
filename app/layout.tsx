import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goldenhnhlase.co.za'),

  title: {
    default: 'Golden H.N Hlase Upholstery',
    template: '%s | Golden H.N Hlase Upholstery',
  },

  description:
    'Luxury upholstery, premium seat covers, furniture restoration, vehicle interiors, and custom upholstery services in Richards Bay, South Africa.',

  keywords: [
    'upholstery',
    'seat covers',
    'car seat covers',
    'furniture restoration',
    'vehicle interiors',
    'Richards Bay upholstery',
    'luxury upholstery',
    'Golden H.N Hlase Upholstery',
    'empangeni upholstery',
  ],

  authors: [
    {
      name: 'Golden H.N Hlase Upholstery',
    },
  ],

  creator: 'Golden H.N Hlase Upholstery',

  publisher: 'Golden H.N Hlase Upholstery',

  applicationName: 'Golden H.N Hlase Upholstery',

  category: 'Business',

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: 'Golden H.N Hlase Upholstery',
    description:
      'Premium upholstery and luxury seat cover specialists in Richards Bay.',

    url: 'https://www.goldenhnhlase.co.za',

    siteName: 'Golden H.N Hlase Upholstery',

    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Golden H.N Hlase Upholstery',
      },
    ],

    locale: 'en_ZA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Golden H.N Hlase Upholstery',

    description:
      'Luxury upholstery, furniture restoration, and premium seat covers.',

    images: ['/logo.png'],
  },
};

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