import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discord Toolbox',
  description: 'A collection of tools for Discord.',
  keywords: ['Discord', 'Toolbox', 'NextJS', 'TypeScript', 'TailwindCSS'],
  authors: [
    {
      name: 'Paradiesvogel7',
      url: 'https://github.com/Paradiesvogel7',
    },
  ],
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: 'favicon/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'favicon',
        url: 'favicon/favicon.ico',
        sizes: '32x32',
      },
      {
        rel: 'android-chrome-192x192',
        url: 'favicon/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome-512x512',
        url: 'favicon/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: 'black',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
