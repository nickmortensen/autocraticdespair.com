'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    // <header className="w-full px-8 border-b border-zinc-200 relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
    <header className="w-full px-8 border-b border-zinc-200 relative z-20   ">
      <div className="py-4 flex justify-between items-stretch ">
        <Link href="/" className="w-[14vw] aspect-square" title="link to home page">
          <Logo
            loading="eager"
            priority="high"
            className=""
            hasMoon={true}
            background={false} />
        </Link>

        <HeaderNav data={data} />
      </div>
    </header>
  )
}
