/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		letterSpacing: {
			tight: "-.015em",
		},
		extend: {
			height: {
				'half': '50vh',
			},
		},
	},
	plugins: [],
};
