import Image from "next/image"
import { cn } from "@/lib/utility"

const writeup = [
	"Has the world gone crazy or is it just me?",
	"If you find yourself asking that question with frequency, this is an event for you!",
	"Join us for an in-person gathering where we delve into the complexities of autocracy and its impact on our lives.",
	"This event offers a supportive space to learn about the rise of autocratic regimes and to develop practical strategies for coping with the despair and anxiety that often accompany such political shifts.",
	"Engage in meaningful discussions, share experiences, and build a community of resilience and hope.",



]

const event = 	{
	heading: "Welcome to AutocraticDespair.com",
	subhead: "In an era where authoritarianism is on the rise, it’s easy to feel overwhelmed and powerless. AutocraticDespair.com is your sanctuary, a place where you can find support, resources, and community to help you navigate these challenging times. Our mission is to empower individuals with knowledge, tools, and strategies to cope with and resist the encroachment of authoritarian governance in the USA.",
	section: [
		{
			heading: "What We Offer:",
			list: {
				type: "definition",
				items: [
					{
						term: "Educational Resources",
						definition: "Understand the signs of authoritarianism and learn about its impact on society."
					},
					{
						term: "Support Networks",
						definition: "Connect with like-minded individuals and groups who share your concerns and are working towards positive change"
					},
					{
						term: "Action Plans",
						definition: "Discover practical steps you can take to protect your rights and freedoms."
					},
					{
						term: "Mental Health Support",
						definition: "Access resources and advice to maintain your mental well-being in the face of political stress."
					},
					{
						term: "",
						definition: ""
					},
				],

			},
			copy: [
				"Join us in standing up for democracy and human rights. Together, we can make a difference."
			]
		}
	]
}
interface EventLocation {
	address?: string,
	city?: string,
	state?: string,
	zip?: string,

}
export interface EventProperties {
	writeup?: string,
	title?: string,
	location?: any,
	time?: string,
	className?: string,
}

const DialogueEvent = ( {
	writeup="A monthly discussion group about how to survive in a country gone mad",
	title="Autocratic Display Dialogues",
	location,
	time="Monday Jan 20, 2024 6pm"
}: EventProperties) => {
	return (
		<div
			vocab="https://schema.org/"
			className="event-container"
			typeof="Event"
			data-event="Monday Jan 20, 2024 6pm"
		>

		<div className="title">
			<h2 property="name"
				className={cn(
					"text-2xl font-semibold",
					"",
					""
					)} >{title}</h2>
			<h3 property="description" className="text-sm mb-8"><em>{writeup}</em></h3>
			<span className="flex flex-col gap-y-2 pb-4 mb-2 border-b border-zinc-400">


			<strong className="text-xl ">Has the world gone crazy or is it just me?</strong>

			<p> If you find yourself asking this question with frequency, this is an event for you! </p>
			<p>Join us for an in-person gathering where we delve into the complexities of autocracy and its impact on our lives.</p>
			<p>This event offers a supportive space to learn about the rise of autocratic regimes and to develop practical strategies for coping with the despair and anxiety that often accompany such political shifts.</p>
			<p>Engage in meaningful discussions, share experiences, and build a community of resilience and hope."</p>
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
				className="flex items-center gap-2 hover:underline hover:underline-offset-4 justify-self-end"
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
