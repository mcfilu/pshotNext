import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Suspense } from 'react';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleTagManager from '@magicul/next-google-tag-manager';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'P-Shot Penis PRP Rejuvanation',
    template: '%s',
  },
  description: {
    default: 'P-Shot Penis PRP Rejuvanation in London by Dr Sherif Wakil',
    template: '%s',
  },
  verification: {
    google: 'Y5SI3hubGdqmxY2Y9X7jnW_vTejLeoqZNXFdU6Gp1ig',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <GoogleAnalytics/>
        </Suspense>
        <Suspense>
          <GoogleTagManager id="GTM-K9M55PZ" />
        </Suspense>
        {children}
        <Script strategy="afterInteractive" data-bot-id="a243d8ad-44a1-4441-aecd-b9b2a08ff886" src="https://launcher.enquirybot.com/index.js"></Script>
        </body>
    </html>
  )
}
