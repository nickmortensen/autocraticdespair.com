import Image from "next/image"
import { cn } from "@/lib/utility"




// interface EventLocation {
// 	address?: string,
// 	city?: string,
// 	state?: string,
// 	zip?: string,
// }
export interface EventProperties {
	title?: string,
	subtitle?: string,
	time?: string,
	className?: string,
}

const DialogueEvent = ( {
	title="Autocratic Display Dialogues",
	subtitle="A monthly discussion group about how to survive in a country gone mad",
	time="Monday Jan 20, 2025 6pm"
}: EventProperties) => {
	return (
		<div
			vocab="https://schema.org/"
			className={ cn(
								"relative",
								"p-8 mt-18 lg:-mt-10",
								"border border-zinc-200",
								"rounded-xl shadow-lg",
								"before:content-[attr(data-event)]",
								"before:text-white before:bg-primary",
								"before:font-semibold",
								"before:p-4 before:py-2 before:rounded-xl",
								"before:absolute before:right-1 before:-top-6",
								"after:absolute after:left-1 after:-top-6",
								"after:content-['Upcoming_Event'] after:bg-accent",
								"after:px-4 after:py-2",
								"after:rounded-xl",
								"after:tracking-wider",
								"after:font-semibold",
								"after:border-2 after:border-primary",
								"" ) }
			typeof="Event"
			data-event={time}
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

			<div className="event-date flex justify-center" itemProp="startDate" content="2025-01-20T6:00">
				<span className="font-semibold text-xl pb-4text-center">{time}</span>
			</div>
			<div className="info event-venue flex flex-col " property="location" typeof="Place">
				<span property="name">Brown County Library - Downtown Branch</span>
			<div
				className="address"
				property="address"
				typeof="PostalAddress">
				<span property="streetAddress">515 Pine Street</span>
				<address className="flex">
					<span className="address-portion city" property="addressLocality">Green Bay </span>
					<span className="address-portion" property="addressRegion">&nbsp;WI,&nbsp; </span>
					<span className="address-portion" property="postalCode">54301</span>
				</address>
			</div>
		</div>

		<a
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
			<Image
				aria-hidden
				src="/globe.svg"
				alt="Globe icon"
				width={16}
				height={16}
			/>
				Visit Facebook.com Event Page →
		</a>
	</div>
	)
}
export default DialogueEvent;
