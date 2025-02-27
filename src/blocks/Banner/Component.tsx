import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn(
          'flex items-center ',
          'rounded-xl',
          'p-4',
          'border-1',
          {
            'border-border bg-card dark:bg-accent-foreground/10 dark:border-foreground': style === 'info',
            'border-error bg-error/30':     style === 'error',
            'border-success bg-success/40 text-foreground dark:bg-red-500': style === 'success',
            'border-warning bg-warning/30': style === 'warning',
          })}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
