interface NavigationItem {
	id: string,
	title: string,
	alt: string,
	destination: string,
	category: string,
}
const navigationItems: NavigationItem[] = [
	{ id: "0001", title: "About", alt: "About the Autocratic Despair Website", destination: "/about ", category: "main" },
	{ id: "0002", title: "Events", alt: "Upcoming Events", destination: "/events ", category: "main" },
]


export default navigationItems

