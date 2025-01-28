import pageContent from "@/content/pagecontent"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import {AccordionFP} from "@/components/Accordion/Accordion"
import { cn } from "@/lib/utility"
// import DialogueEvent from "@/components/Event/Event"
// import Image from "next/image"




const HeaderArea = () => {

	return (
		<div className={ cn(
			"px-4 mb-8",
			"w-full",
			"order-0 " ) }>

		<h1 className={ cn( "text-2xl lg:text-3xl xl:text-4xl ", "font-extrabold", "" ) }>{pageContent[0].heading}</h1>
		<p className="mt-4 text-base font-light"> {pageContent[0].subhead} </p>
	</div>

	)
}

export default function Home() {
  return (
<>


	<main
	className="flex justify-center mt-8">
		<section
			className={ cn(
						"w-full max-w-screen-2xl",
						"px-8",
						"flex items-start",
						"flex-col md:flex-row",
						"gap-8" )
		}>

		<div className={ cn( "", "order-2 md:order-1", "lg:max-w-screen-md" ) } >

			<HeaderArea />
			{ /* ACCORDION WITH A HEADING */}
			<AccordionFP heading=""/>
		</div>


		{/* LOGO */}
		<div className={ cn( "order-1 md:order-2", "w-full flex items-center justify-center", "" ) } >
			<Header />
		</div>

	</section>
</main>




<Footer />


</>


  );
}
