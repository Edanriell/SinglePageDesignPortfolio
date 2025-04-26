import { fileURLToPath } from "url";

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },

	modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "@nuxt/test-utils"],

	css: [
		"@app/styles/variables.css",
		"@app/styles/reset.css",
		"@app/styles/base.css",
		"@app/styles/styles.css"
	],

	alias: {
		"@app": fileURLToPath(new URL("./app", import.meta.url)),
		"@shared": fileURLToPath(new URL("./shared", import.meta.url)),
		"@pages": fileURLToPath(new URL("./pages", import.meta.url)),
		"@nuxt-pages": fileURLToPath(new URL("./nuxt-pages", import.meta.url)),
		"@features": fileURLToPath(new URL("./features", import.meta.url)),
		"@widgets": fileURLToPath(new URL("./widgets", import.meta.url))
	},

	dir: {
		layouts: "./widgets/layout"
	},

	fonts: {
		families: [
			{
				name: "Plus Jakarta Sans",
				provider: "local",
				fallbacks: ["Helvetica", "Arial", "sans-serif"],
				src: [
					"/fonts/PlusJakartaSans-VariableFont_wght.ttf",
					"/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf"
				]
			}
		],
		processCSSVariables: true
	}
});
