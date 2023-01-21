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
	            "dark2": "#10141D",
	            "light": "#FFFFFF",
	            "light2": "#E4FDFF"
	        },
		},
	},
	darkMode: "class",
	plugins: [],
}
