import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'
import { cn } from '@/utilities/ui'
import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
/**
 * @todo -- format this as an article and the author, published, etc. with schema attributes
 * @param param0
 * @returns
 */
export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { id, categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div
      data-id={id}
      className={ cn(
        "post-header-block",
        "flex flex-col items-end",
        "aspect-[4/3]",
        "overflow-show" ) }>

      <div className="post-header-hero w-full aspect-video select-none relative">
        {
          heroImage && typeof heroImage !== 'string'
          && (
              <Media
                fill
                priority
                imgClassName="-z-10 object-cover" resource={heroImage} />
            )
        }
      </div>

      <div
        className={
          cn(
            "post-header-details",
            "min-w-full",
            "flex flex-col",
            "justify-end content-end",
            "text-foreground p-4"
          )
        }>
        <div className="post-header-tags">
          <div className="lowercase text-xs font-extrabold tracking-wider ">
            {
              categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category
                  const titleToUse = categoryTitle || 'No Category'
                  const isLast     = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          <div className="max-w-full">
            <h1 className="mb-2 text-2xl md:text-4xl font-bold break-words">{title}</h1>
          </div>

          <div className="visible flex row flex-wrap gap-8 pt-2">
            {
              hasAuthors && (
                <div
                  itemScope
                  itemType="https://schema.org/Person"
                  className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <p className="lowercase text-xs font-extrabold tracking-wide">Author</p>
                    <p
                      itemProp="name"
                      className="text-sm">{formatAuthors(populatedAuthors)}</p>
                  </div>
                </div>
              )
            }
            {
              publishedAt && (
              <div className="flex flex-col">
                <p className="lowercase text-xs font-extrabold tracking-wide">Published</p>
                <time className="text-sm"dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
