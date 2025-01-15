import DialogueEvent from "@/components/Event/Event"
import pageContent from "@/content/pagecontent"
import WordMark from "@/components/SVG/SVG"
import {AccordionFP} from "@/components/Accordion/Accordion"
import { cn } from "@/lib/utility"
export default function Home() {
  return (
	<div
		className={ cn (
			"",
			"",
			"font-[family-name:var(--font-geist-sans)]",
			"w-full",
			"",

		) }>

<header className={ cn(
			"px-8",
			"h-[140px] w-full lg:w-[440px]",
			"relative",
			"flex gap-4",
			"" ) }>

<WordMark background={true} />


		</header>
		<main className="flex gap-8 row-start-2 items-center sm:items-start  w-full">

<section
	className={ cn(
		"mt-[40px]",
				"w-full px-4",
				"flex items-start",
				"flex-col lg:flex-row" )
	}>

	<div className={ cn(
							"px-4",
							"w-full lg:w-1/2",
							"order-0" ) }>
		<h1 className={ cn(
							"text-3xl lg:text-4xl ",
							"font-semibold",
							"order-1" ) }>{pageContent[0].heading}</h1>
	<p className="mt-4 text-base font-light">
	{pageContent[0].subhead}
	</p>

<aside className={ cn(
					"w-10/12 mx-auto mt-8",
					"shadow-2xl",
					"" ) }>
	<h3 className={ cn(
						"text-2xl font-bold bg-sky-900 text-white ",
						"p-2",
						"" ) }>What We Offer:</h3>
						<div className="px-4">
						<AccordionFP />

						</div>
</aside>


	</div>

	<div className={ cn(
						"w-full lg:w-1/2",
						"px-4",
						"",
						"order-1" ) }>

		<DialogueEvent
			title="Autocratic Despair Dialogues: Inauguration"
			 />


	</div>
	<div>


</div>





		</section>
		</main>
		<footer className={ cn(
							"row-start-3",
							"flex gap-6 flex-wrap items-center justify-center",
							"" ) }>
		{/* <a
			className="flex items-center gap-2 hover:underline hover:underline-offset-4"
			href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
			aria-hidden
			src="/file.svg"
			alt="File icon"
			width={16}
			height={16}
			/>
			Learn
		</a>
		<a
			className="flex items-center gap-2 hover:underline hover:underline-offset-4"
			href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
			aria-hidden
			src="/window.svg"
			alt="Window icon"
			width={16}
			height={16}
			/>
			Examples
		</a>
		<a
			className="flex items-center gap-2 hover:underline hover:underline-offset-4"
			href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
			Go to nextjs.org →
		</a> */}
		</footer>
	</div>
  );
}
