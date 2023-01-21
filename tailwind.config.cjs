/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	    fontFamily: {
	        "main": ["JetBrains Mono", "monospace"],
	    },
		extend: {
	        colors: {
	            "dark": "#010713",
	            "light": "#F6F6F6"
	        },
		},
	},
	darkMode: "class",
	plugins: [],
}
