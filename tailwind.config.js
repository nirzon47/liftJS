/** @type {import('tailwindcss').Config} */
export default {
	content: ['*.html'],
	theme: {
		extend: {
			fontFamily: {
				'tilt-neon': ['Tilt Neon', 'sans-serif'],
			},
		},
	},
	plugins: [require('daisyui')],
}
