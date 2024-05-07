import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			 <head>
            <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var config = {
                  apiKey: 'YOUR_API_KEY',
                  ...
                };
                var script = document.createElement('script');
                script.src = 'https://use.typekit.net/abcdefg.js';
                script.async = true;
                script.onload = function() {
                  try {
                    Typekit.load(config);
                  } catch (e) {}
                };
                document.head.appendChild(script);
              })();
            `,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: "try{Typekit.load({ async: true });}catch(e){}" }} />
      <link rel="stylesheet" href="https://fonts.adobe.com/fonts/bodoni-moda-variable" />
      </head>
			<body
				className={clsx(
					"min-h-screen font-sans antialiased",
					fontSans.variable
				)}
				style={{
					fontFamily: "Bodoni Moda Variable", // Ubah nama font ke format yang benar
					fontVariationSettings: '"wght" 400, "opsz" 11', // Perbaiki sintaks fontVariationSettings
					fontStyle: "normal",
				  }}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "white" }}>
					<div className="">
						<main className="relative w-screen h-screen overflow-hidden dark">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
