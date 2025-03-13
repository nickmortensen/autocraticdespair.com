'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'id' | 'slug' | 'categories' | 'meta' | 'title' | '_status' >

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const {
    doc,
    relationTo,
    showCategories,
    title: titleFromProps
   }                   = props
  const {className}    = props

  const {
    id,
    slug,
    categories,
    meta,
    title
   }                   = doc || {}
  const {
    description,
    image: metaImage
  }                    = meta || {}

  const hasCategories                         = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse                            = titleFromProps || title
  const sanitizedDescription                  = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href                                  = `/${relationTo}/${slug}`
  return (
    <article
      data-id={id}
      className={cn(
        'border border-border',
        'rounded-lg overflow-hidden',
        'bg-card hover:cursor-pointer',
        className,

      )}
      ref={card.ref}
    >
      <div className="relative w-full border-b-1 border-blue-950 ">
        { !metaImage && <div className="">No image</div> }
        { metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" /> }
      </div>
      <div className="p-4 py-2 pb-0.5">
        {
          showCategories && hasCategories && (
            <div className="uppercase text-sm mb-4">
            {
              showCategories && hasCategories && (
                <div className="lowercase font-bold text-xs tracking-wide">
                  {
                    categories?.map((category, index) => {
                      if (typeof category === 'object') {
                      const { title: titleFromCategory } = category
                      const categoryTitle                = titleFromCategory || 'Untitled category'
                      const isLast                       = index === categories.length - 1

                    return (
                      <Fragment
                        key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <div className="prose my-1.5 ">
            <h3 className="leading-5">
              <Link className="not-prose hover:text-red-600" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
      </div>
    </article>
  )
}

type BookProperties = {
  title: string,
  subtitle: string,
  author: string

}
/**
 * @note this is just the default book from schema.org -- for you to work with when you've established the book as
 * @param param0
 * @returns
 */
const Book = ({
  title="Resist Autocratic Despair",
  subtitle="21 Things You Can Do to Survive Authoritarianism",
  author="Nick Mortensen"
}: BookProperties) => {
  return (
    <div itemProp="mainEntity" itemScope itemType="https://schema.org/Book">
      <img itemProp="image" src="catcher-in-the-rye-book-cover.jpg" alt="cover art: red horse, city in background"/>
      <span itemProp="name">{title}: <em>{subtitle}</em></span> -
      <link itemProp="bookFormat" href="https://schema.org/Paperback">Mass Market Paperback</link>
      by <a itemProp="author" href="/author/jd_salinger.html">{author}</a>

      <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <span itemProp="ratingValue">4</span> stars -
          <span itemProp="reviewCount">3077</span> reviews
      </div>

      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          Price: $<span itemProp="price">6.99</span>
          <meta itemProp="priceCurrency" content="USD" />
          <link itemProp="availability" href="https://schema.org/InStock">In Stock</link>
      </div>

Product details
<span itemProp="numberOfPages">224</span> pages
Publisher: <span itemProp="publisher">Little, Brown, and Company</span> -
 <meta itemProp="datePublished" content="1991-05-01">May 1, 1991</meta>
Language: <span itemProp="inLanguage">English</span>
ISBN-10: <span itemProp="isbn">0316769487</span>

Reviews:


  <div itemProp="review" itemScope itemType="https://schema.org/Review">
      <span itemProp="reviewRating">4</span> stars -
      <b>"<span itemProp="name">A good read.</span>" </b>
      by <span itemProp="author">Bob Smith</span>,
      Written on <meta itemProp="datePublished" content="2006-06-15">June 15, 2006</meta>
      <span itemProp="reviewBody">Catcher in the Rye is a fun book. It's a good book to read.</span>
  </div>

</div>
  )
}

type BookReviewProperties = {
  starQuantity: string,
  shortReview: string,
  longReview: string,
  reviewDate: string,
  reviewerName: string
}
const BookReview = ({
  starQuantity,
  shortReview,
  longReview,
  reviewDate,
  reviewerName
}: BookReviewProperties ) => {
  return (

  <div itemProp="review" itemScope itemType="https://schema.org/Review">
    <span itemProp="reviewRating">{starQuantity}</span> stars -
    <b>"<span itemProp="name">{shortReview}</span>"</b>
    by <span itemProp="author">{reviewerName}</span>,
    Written on <meta itemProp="datePublished" content={reviewDate}>{reviewDate}</meta>
    <span itemProp="reviewBody">{longReview}</span>
  </div>
  )
}
