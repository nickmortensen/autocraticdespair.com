import { cn } from '@/utilities/ui'
import React from 'react'


// export type CardPostData = Pick<Post, 'id' | 'slug' | 'categories' | 'meta' | 'title'>
interface EventPostData {
  title?: string,
  subtitle?: string,
  location?: string,
  address?: string,
  eventdate?: string,
  description?: string,
  dateTime?: string,
  className?: string,
}

const Event = ( {
	title="Autocratic Display Dialogues",
	subtitle="A discussion group about how to survive in a country gone mad",
  location="Brown County Library - Downtown Branch",
  eventdate="Monday Feb 17, 2025",
  dateTime="2025-02-17T6:00",
  address="515 Pine Street"
}: EventPostData) => {
	return (
		<div
			vocab="https://schema.org/"
			className={ cn(
								"relative text-xs",
								"p-8 mt-[68px] lg:-mt-10",
								"border border-zinc-200",
								"rounded-xl shadow-lg",
								"before:content-[attr(data-event)]",
								"before:text-white before:bg-primary",
								"before:font-semibold",
								"before:text-[12px] after:text-[12px]",
								"md:before:text-xs md:after:text-xs",
								"before:p-2 before:py-1 before:rounded-xl",
								"after:p-2 after:py-1 after:rounded-xl",
								"before:absolute before:right-1 before:-top-6",
								"after:absolute after:left-1 after:-top-6",
								"after:content-['Upcoming_Event'] after:bg-accent",
								"",
								"after:tracking-wider",
								"after:font-semibold",
								"after:border-2 after:border-primary",
								"" ) }
			typeof="Event"
			data-event={dateTime}
		>

			<div className="title">
				<h2 property="name"
					className={cn(
						"text-2xl font-semibold",
						"",
						""
						)} >{title}</h2>
				<h3 property="description" className="text-sm mb-8"><em>{subtitle}</em></h3>
				<span className="flex flex-col gap-y-2 pb-4 mb-2 border-b border-zinc-400">


				<strong className="text-xl ">Has the world gone crazy or is it just me?</strong>

				<p>If you find yourself asking this question with frequency, this is an event for you! </p>
				<p>Join us for an in-person gathering where we delve into the complexities of autocracy and its impact on our lives.</p>
				<p>This event offers a supportive space to learn about the rise of autocratic regimes and to develop practical strategies for coping with the despair and anxiety that often accompany such political shifts.</p>
				<p>Engage in meaningful discussions, share experiences, and build a community of resilience and hope.</p>
				</span>



			</div>

			<div
        className="event-date flex justify-center"
        itemProp="startDate"
        content={dateTime}>
				<span className="font-semibold text-xl pb-4text-center">{eventdate}</span>
			</div>
			<div className="info event-venue flex flex-col " property="location" typeof="Place">
				<span property="name">{location}</span>
			<div
				className="address"
				property="address"
				typeof="PostalAddress">
				<span property="streetAddress">{address}</span>
				<address className="flex">
					<span className="address-portion city" property="addressLocality">Green Bay </span>
					<span className="address-portion" property="addressRegion">&nbsp;WI,&nbsp; </span>
					<span className="address-portion" property="postalCode">54301</span>
				</address>
			</div>
		</div>

		{/* <a
			className={cn(
			"flex items-center gap-2",
			"justify-self-end",
			"hover:underline hover:underline-offset-4",
			"",
			""
		)}
			href="https://www.facebook.com/events/1090395125895708"
			target="_blank"
			rel="noopener noreferrer"
		>

				Visit Facebook.com Event Page →
		</a> */}
	</div>
	)
}
export default Event;
