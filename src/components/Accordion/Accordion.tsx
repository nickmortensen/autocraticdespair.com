import { cn } from "@/lib/utility"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
  } from "@/components/ui/accordion"

type FrontPageAccordionItems = {
	identifier: string,
	term: string,
	definition: string,
}
type AccordionFPProperties = {
	heading: string,
}


export function AccordionDemo() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
			Yes. It adheres to the WAI-ARIA design pattern.
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Is it styled?</AccordionTrigger>
			<AccordionContent>
			Yes. It comes with default styles that matches the other
			components&apos; aesthetic.
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>Is it animated?</AccordionTrigger>
			<AccordionContent>
			Yes. It&apos;s animated by default, but you can disable it if you
			prefer.
			</AccordionContent>
		</AccordionItem>
		</Accordion>
	)
}


export function AccordionFP( { heading }: AccordionFPProperties) {
	const accordionItems: FrontPageAccordionItems[] = 	[
		{
			identifier: "12",
			term: "Educational Resources",
			definition: "Understand the signs of authoritarianism and learn about its impact on society."
		},
		{
			identifier: "3d",
			term: "Support Networks",
			definition: "Connect with like-minded individuals and groups who share your concerns and are working towards positive change"
		},
		{
			identifier: "97",
			term: "Action Plans",
			definition: "Discover practical steps you can take to protect your rights and freedoms."
		},
		{
			identifier: "86",
			term: "Mental Health Support",
			definition: "Access resources and advice to maintain your mental well-being in the face of political stress."
		},
		// {
		// 	identifier: "f6",
		// 	term: "",
		// 	definition: ""
		// },
	]

	return (
		<>
		<h3 className={ cn(
							"text-2xl font-extrabold bg-sky-900 text-white ",
							"p-2",
							"" ) }>{heading}</h3>

		<Accordion type="single" collapsible className="w-full">
			{ accordionItems.map( ( { identifier, term, definition } ) => (
			<AccordionItem
				key={identifier}
				value={identifier}
				className="hover:bg-zinc-100 transition-all duration-100 px-2"
				>
				<AccordionTrigger>{term}</AccordionTrigger>
				<AccordionContent>
				{definition}
				</AccordionContent>
			</AccordionItem>

				) )}
		</Accordion>

</>
	)
}
