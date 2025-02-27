import { cn } from '@/utilities/ui'
import React from 'react'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container', '')}>
      <div>
        <div className={
          cn(
            "grid gap-4 lg:gap-8",
            "grid-cols-4 sm:grid-cols-8 xl:grid-cols-12",
            "",
            "",
            "",
            "",
          )
        }>
          {/* original had a slight error where it would publish posts in an archive that were set to 'draft' */}
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null && result._status !== 'draft') {
            // if (typeof result === 'object' && result !== null ) {
              return (
                <div className="col-span-4" key={index}>
                  <Card
                    className="h-full "
                    doc={result}
                    relationTo="posts"
                    showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
