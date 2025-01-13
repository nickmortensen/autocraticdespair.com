import Image from "next/image";

export default function Home() {
  return (
	<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		<main className="poster flex flex-col gap-8 row-start-2 items-center sm:items-start">
		<Image
			className="hidden"
			src="/icons/moonmaiden.svg"
			alt="Next.js logo"
			width={180}
			height={38}
			priority
		/>

<svg id="moonmaiden" viewBox="0 0 500 500">
	<g id="moonmaiden">
		<path id="moonmaiden-2" data-name="moonmaiden" d="M415.9,90.9c1.7,1,5.2,2.5,7.9,5,3,2.7,5.3,6.3,7.7,9.6,1.5,2,2.6,4.4,4.3,6.3,4.2,4.7,5.9,9.8,4,16-.5,1.6-.1,3.4-.4,5.1-.5,2.6-1,5.3-2.1,7.7-1.1,2.6-4.3,5.4-3.7,7.2,1.1,3.5,3.8,6.7,6.4,9.6,3.9,4.4,8,8.6,12.5,12.5,8,6.9,13.8,15.1,16.7,25.2,5.3,18.4,10.8,36.7,15.8,55.1,1.7,6.3-3.1,11-6.2,15.7-9.1,13.7-18.6,27.2-28.1,40.6-3.5,4.9-6.1,9.9-5.1,16.1,1.8,11.2-2.8,18.7-12.7,23.7-8.8,4.4-14.2,11.9-18.6,20.7-3,6-7.1,11.7-11.7,16.6-21.6,23.1-45.2,43.8-74,57.6-17.5,8.4-35.8,14.4-55.3,16.4-11.4,1.1-22.8,2.6-34.2,3-18,.6-35.7-2.1-53.2-6.1-20.6-4.8-41.1-10.2-59.8-20.7-13-7.3-25-15.8-35.9-25.9-17.8-16.5-33.4-34.9-45.5-55.9-10.5-18.3-19.5-37.2-21.9-58.7-.7-6-2.7-12-5.2-17.4-4.6-9.7-2.9-19.7-1.5-29.2,2.4-15.3,6.9-30.3,9.8-45.6,2.8-14.6,9-27.7,15.9-40.6,9.7-17.9,22.3-33.9,36.6-48.3,18.4-18.5,39.5-33.1,65-41,12.4-3.8,24.2-9.8,36.5-13.8,8.2-2.6,16.9-3.5,25.4-4.8,13.1-1.9,26.4-3,39.5-5.2,12.3-2.1,24.5-5.3,36.7-7.7,1.8-.3,4.2.7,5.9,1.8,23.4,15.3,46.8,30.7,70.2,46.1,7.9,5.2,15.9,10.4,23.9,15.5,1.1.7,3.1,1.1,3.9.5,4.8-3.5,10.5-3.4,15.9-4.7,4.9-.9,8.9-4.6,14.6-8ZM382.6,128.1c-5.4,2.7-8.4,1.3-9.9-4.3-.9-3.3-2.6-7-5-9.2-9.8-9-19.9-17.8-30.2-26.2-13.6-11.1-27-22.5-41.4-32.4-14.2-9.7-30.7-9-46.9-5.8-14.1,2.8-27.3,8.2-39.8,15.2-15.9,9-29.4,21-40.4,35.7-9.4,12.6-11.8,28-18.1,41.8-.6,1.3-.2,3.1-.2,4.6-.3,8.9-.9,17.9-1,26.8,0,7.2.2,14.5,1,21.7,1,9.1,2.7,18.1,4.2,27.2.3,1.7.9,4.5,2,4.8,5.1,1.4,3,4.2,1.4,6.6-1.7,2.5-3.8,4.8-5.9,7-6.1,6.3-6.3,9-1.6,16.4,7.3,11.5,16.9,20.9,27.7,28.9-3.9,5.4-9,8.3-15.2,10.1-4.8,1.4-9.3,3.8-13.9,5.8-2.7,1.2-2.5,2.5-1,5,4.5,7.6,8.9,15.3,12.6,23.3,1.8,3.9,5.2,8,2.4,12.9-3.8,6.9-2.6,13.5,2.2,18.9,7.7,8.7,15.6,17.3,24.2,25,5.5,4.9,12.4,8.1,18.8,12.1,2.6,1.6,4.8,1.6,7-1.1,3.9-4.6,8.1-8.9,12.2-13.3,15.4-16.9,25.2-36.9,33.2-58,6.5-17.3,13.1-34.5,23.7-49.9,1.9-2.7,3.7-3.8,7-3.8,5.6,0,11.3-.1,16.9-1.1,6.1-1.1,8-7,4.3-11.9-2.8-3.7-3-8.2.1-10,4.9-2.9,10.1-5.2,15.9-3,8.3,3,16.8,5.5,24.6,9.3,17,8.4,33.7,17.6,50.5,26.5,1.7-3.5,3.7-7.4,5.5-11.4,4-9,8.2-17.9,11.7-27,2.7-6.9-.6-12.1-7.7-13.8-3.4-.9-6.9-1.8-10.1-3.1-6.1-2.6-7.2-8.3-2.8-13.2,4.2-4.7,8.8-9.2,12.9-14.1,2.2-2.7,4-5.8,5.5-9,3.7-7.7,3.5-16,2.9-24.2-.2-2.4-2.1-5.2-4.1-6.9-3.6-3-7.1-.3-10.3,1.5-4.7,2.7-8.8,2-12.1-1.8-3.4-4-7.2-7.6-11.1-11.7,7.3-6.7,1.1-13.4-1.7-20.9ZM286.8,418c6.1-1.8,12.3-4.1,18.7-5.4,9.2-1.9,12.8-8.4,15.7-16.2,1.3-3.5.4-6-1.1-9.1-1.3-2.8-1.7-6.5-1-9.4,1-4.4,3.1-8.6,5.1-12.7,3.4-6.9,4.5-13.6,2.1-21.4-3.5-10.9-7.1-21.8-7.5-33.6-.3-9.3-5.2-14.1-14.7-13.7-5.7.3-6.8,1.3-6.9,7-.2,7.2-2.3,13.2-7.3,18.9-8.8,10.1-16.8,21-24.5,31.9-2.3,3.3-5.1,8.1.5,12,.9.7.9,3.5.5,5.1-1,4.2-5.2,4-8,3.8-9.2-.5-14,4.3-17.6,11.9-1.2,2.6-4.7,4.6-7.5,5.8-4,1.6-8.7,1.6-12.6,3.4-2.1,1-3.4,4.3-4.2,6.8-.2.6,3.2,2.8,5.1,3.4,3.7,1.2,7.6,1.7,11.3,2.8,12.1,3.7,24.3,6.7,37.2,5.7,2.5-.2,5,.6,7.5,1.1,2.9.7,5.7,1.3,9.2,1.9ZM341.9,301c2.4,10.4,0,20.2-1.7,30-1.8,10.1-4.7,20.2,1.9,30,3.7,5.6,2.4,7.1-2.9,11.8-4.3,3.8-10.2,6.9-9.9,14.2.3,6.8.1,13.7.1,21,3.4-.2,7.3.4,10.4-.9,7.4-3.2,14.9-6.6,21.5-11.1,21.3-14.5,41.5-30.4,60-48.3,2.4-2.3,5-4.2,2.9-8.6-4.1,0-8.7.7-13-.1-12.9-2.6-24.7-8.2-35.7-15.4-11.1-7.4-22.2-14.9-33.6-22.6ZM455.5,279.7c2.3-3.3,4.5-6,6.3-9.1s2.9-6.5,4.8-9.5c5.8-9,2-14.4-6.6-20.3-1.4,12.7-3,25.6-4.5,38.9Z"/>
	</g>
</svg>


<div className="writing">
<span>resist</span><span>autocratic</span><span>despair</span>

</div>
	<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
		<li className="mb-2">
		resist autocratic despair{" "}
		<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
			src/app/page.tsx
		</code>
		.
		</li>
		<li>Save and see your changes instantly.</li>
	</ol>

		<div className="flex gap-4 items-center flex-col sm:flex-row">
			<a
				className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
				href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
			<Image
				className="dark:invert"
				src="/vercel.svg"
				alt="Vercel logomark"
				width={20}
				height={20}
			/>
			Deploy now
			</a>
			<a
			className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
			href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
			target="_blank"
			rel="noopener noreferrer"
			>
			Read our docs
			</a>
		</div>
		</main>
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
		<a
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
		</a>
		</footer>
	</div>
  );
}
