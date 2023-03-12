/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'abril-fatface': ['"Abril Fatface"', 'cursive'],
				'roboto': ['"Roboto"', 'sans-serif'],
				'lobster': ['"Lobster"', 'cursive'],
			  },		
		},
	},
	plugins: [require("daisyui")],

	daisyui: {
		darkTheme: "dracula",
	}
}