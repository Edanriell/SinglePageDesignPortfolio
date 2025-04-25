// https://nuxt.com/docs/api/configuration/nuxt-config
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
		"@app": "~/app",
		"@pages": "~/pages",
		"@widgets": "~/widgets",
		"@features": "~/features",
		"@entities": "~/entities",
		"@shared": "~/shared"
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
