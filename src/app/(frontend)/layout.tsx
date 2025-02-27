import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { OrganizationSchema } from '@/components/Schema'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@nickmortensen',
  },
}


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()


  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        getServerSideURL() === process.env.NEXT_PUBLIC_SERVER_URL ? 'YES-HOME' : 'NOT-HOME')}
      lang="en"
      suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <OrganizationSchema />
      </head>
      <body>
        <Providers>

          <AdminBar adminBarProps={{ preview: isEnabled, }} />
          <Header />
          <div>


          </div>
          {children}
          <Footer />

        </Providers>
      </body>
    </html>
  )
}

