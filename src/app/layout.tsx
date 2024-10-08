import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ThemeProvider } from "@components/theme-provider"

import "@styles/globals.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "700"] })

export const metadata: Metadata = {
	title: "W-Spell",
	description: "Uma aplicação intuitiva para criar e gerenciar magias em partidas de RPG.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt" suppressHydrationWarning>
			<body
				className={`${roboto.className} flex justify-center min-h-dvh min-w-full bg-gradient-to-b from-background to-accent text-foreground`}
			>
				<main className="max-w-[1200px] w-full px-8 relative">
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<SpeedInsights />
					</ThemeProvider>
				</main>
			</body>
		</html>
	)
}
