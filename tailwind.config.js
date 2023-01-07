/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			spacing: {
				2.75: '0.6875rem',
				112: '28rem',
			},
		},
	},
	plugins: [],
}
