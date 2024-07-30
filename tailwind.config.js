/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

const AddColors = {
	primary: {
		50: "#ff788e",
		100: "#ff5e7a",
		200: "#ff445f",
		300: "#ff2a45",
		400: "#ff102b",
		// default
		500: "#837250",
		600: "#c60e3a",
		700: "#a10d3f",
		800: "#7d0b45",
		900: "#59094b",
	},
	secondary: {
		50: "#58595F",
		100: "#4B4D54",
		200: "#3E4049",
		300: "#31333E",
		400: "#242733",
		// default
		500: "#171a28",
		600: "#1c2833",
		700: "#1a1a26",
		800: "#181319",
		900: "#16160c",
	},
};
module.exports = withMT({
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	purgue: {
		enabled: process.env.NODE_ENV === "production",
		content: ["./src/**/*.{js,ts,jsx,tsx}"],
	},
	theme: {
		darkMode: "class",
		animation: {
			scroll:
				"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		},
		keyframes: {
			scroll: {
				to: {
					transform: "translate(calc(-50% - 0.5rem))",
				},
			},
		},
		colors: {
			colors,
			...AddColors,
			'sky': {
				50: '#f0f9ff',
				100: '#e0f2fe',
				200: '#bae6fd',
				300: '#7dd3fc',
				400: '#38bdf8',
				500: '#0ea5e9',
				600: '#0284c7',
				700: '#0369a1',
				800: '#075985',
				900: '#0c4a6e',
				950: '#082f49',
			}
		},
		extend: {
			animation: {
				"meteor-effect": "meteor 5s linear infinite",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
			colors: {
				colors,
				...AddColors,
			},
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), addVariablesForColors],
});
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}