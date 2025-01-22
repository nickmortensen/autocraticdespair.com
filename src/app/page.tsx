import pageContent from "@/content/pagecontent"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import {AccordionFP} from "@/components/Accordion/Accordion"
import { cn } from "@/lib/utility"
// import DialogueEvent from "@/components/Event/Event"
// import Image from "next/image"
export default function Home() {
  return (
<>
	<Header />
		<main className="flex gap-8 row-start-2 items-center sm:items-start  w-full">
			<section
				className={ cn(
							"mt-[40px]",
							"w-full px-4",
							"flex items-start",
							"flex-col lg:flex-row",
							"gap-4" )
			}>

				<div className={ cn(
										"px-4 ",
										"w-full lg:w-1/2",
										"order-0" ) }>

					<h1 className={ cn( "text-3xl xl:text-4xl ", "font-semibold", "order-1" ) }>{pageContent[0].heading}</h1>
					<p className="mt-4 text-base font-light"> {pageContent[0].subhead} </p>



				</div>

				<div className={ cn(
								"w-full lg:w-1/2",
								"px-4",
								"",
								"order-1" ) }>


<aside className={ cn(
										"w-10/12 mx-auto mt-8",
										"shadow-2xl",
										"" ) }>
						<h3 className={ cn(
											"text-2xl font-bold bg-sky-900 text-white ",
											"p-2",
											"" ) }>What We Offer:</h3>
						<div className="px-4 pb-6">
							<AccordionFP />
						</div>
					</aside>
					{/* <DialogueEvent title="Autocratic Despair Dialogues: Inauguration" /> */}
				</div>

			</section>
		</main>




<Footer />

</>
  );
}
