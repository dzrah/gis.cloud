/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'bg-img': "url('/bg.jpg')"
			},
			fontFamily: {
				sans: ['Montserrat', 'sans - serif']
			}
		}
	},
	plugins: []
};
