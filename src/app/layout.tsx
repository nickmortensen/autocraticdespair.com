import type { Metadata } from "next"
import { GoogleTagManager } from '@next/third-parties/google' // see @link https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
	  template: '%s | Resist Autocratic Despair',
	  default: 'Resist Autocratic Despair',
	},
	metadataBase: new URL('https://autocraticdespair.com'),
	alternates: {
	  canonical: '/',
	},
	description: 'Empowering individuals with knowledge, tools, & strategies to cope with & resist the encroachment of authoritarian governance in the USA.',
	openGraph: {
	  title: 'Resist Autocratic Despair',
	  description: 'Empowering individuals with knowledge, tools, & strategies to cope with & resist the encroachment of authoritarian governance in the USA.',
	  url: 'https://autocraticdespair.com',
	  siteName: 'AutocraticDespair.com',
	  type: 'website',
	//   ...openGraphImage,
	  locale: 'en_US',
	  },
	  twitter: {
		  title: 'Resist Autocratic Despair',
		  description: 'Empowering individuals with knowledge, tools, & strategies to cope with & resist the encroachment of authoritarian governance in the USA.',
		  card: 'summary_large_image',
		  images: [
			  {
				  url: '/opengraph/default.png',
				  width: 1200,
				  height: 630,
				  alt: 'default twitter open graph image for Resisting Autocratic Despair website',
			  },
		  ]
	  },

	  icons: {
		  icon: '/favicon.ico',
		  shortcut: '/icons/favicon_32.png',
		  apple: '/icons/favicon_256.png'
	  }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

		<GoogleTagManager gtmId="G-PX8ZPEGWLK" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


        {children}
      </body>
    </html>
  );
}
