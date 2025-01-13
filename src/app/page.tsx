import Image from "next/image";

export default function Home() {
  return (
	<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
		<main className="flex gap-8 row-start-2 items-center sm:items-start  w-full">


		<div className="h-[600px] w-3/4 flex flex-col justify-center px-2">
				<h1 className="text-2xl font-bold">Autocratic Despair Dialogues</h1>
				<h2 className="text-xl font-semiboldbold">Monday, January 20 6pm</h2>
				<h1 className="text-xl font-bold">Brown County Library - lower level</h1>

		</div>


	{/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
		<li className="mb-2">
		resist autocratic despair{" "}
		<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
			src/app/page.tsx
		</code>
		.
		</li>
		<li>Save and see your changes instantly.</li>
		<li>tanother change here</li>
	</ol> */}

		<div className="h-[600px] w-1/3  poster relative flex gap-4 items-center flex-col sm:flex-row">
		<Image
			src="/icons/resist_square.svg"
			alt="Next.js logo"
			fill
			priority
		/>
			{/* <a
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
			</a> */}
		</div>
		</main>
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
