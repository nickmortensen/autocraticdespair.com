'use client'
import { cn } from "@/lib/utility"
// import navigationItems from "@/data/navigation"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Links() {
	const pathname = usePathname()

	return (
	  <>
		<Link className={
			cn(
				`link ${pathname === '/' ? 'active' : ''}`,
				"",
				"",
				"",
				""
			)
		} href="/">
		  Home
		</Link>

		<Link
		  className={
			cn( `link ${pathname === '/about' ? 'active' : ''}`,
				"",
				"",
				"",
				""
			)
		}
		  href="/about"
		>
		  About
		</Link>
		<Link
		  className={ cn(
			`link ${pathname === '/events' ? 'active' : ''}`,
			"",
			"",
			""

		  )}
		  href="/about"
		>
		  Events
		</Link>
	  </>
	)
  }

  export default function Footer() {
	return (
		<footer className={ cn(
			"row-start-3",
			"flex gap-6 flex-wrap items-end justify-end",
			"px-8" ) }>

			<nav className={ cn( "", "flex gap-4", "", "footer-navigation" ) } >
			<Links />

			</nav>

			<span>
			© 2025 Nick Mortensen
			</span>
		</footer>
	)
}
