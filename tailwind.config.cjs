/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				btnColor: '#333',
			},
			backgroundImage: {
				Eyes: 'url(/svg/eyes.svg)',
			},
			fontFamily: {
				Montserrat: ['MONTSERRAT'],
				MontserratItalic: ['MONTSERRAT-ITALIC'],
			},
			colors: {
				primary: 'rgba(255,255,255,.4)',
			},
			dropShadow: {
				btnActive: '0 .1rem rgba(255,255,255,.65)',
				btn: '0 .3rem rgba(121,121,121,0.65)',
			},
			colors: {
				'twitter-color': '#38a1f3',
			},
		},
	},
	plugins: [],
}
