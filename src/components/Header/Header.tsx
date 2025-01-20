import { cn } from "@/lib/utility"
import WordMark from "@/components/SVG/SVG"

export default function Header() {
	return (
		<header className={cn(
			"px-8",
			"h-[140px]",
			"relative",
			"flex gap-4",
			"")}>

			<WordMark background={true} />

		</header>
	)
}

