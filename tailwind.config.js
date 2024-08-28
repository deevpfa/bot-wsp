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
		100: "#FAD9D4",
		200: "#F7B3AC",
		300: "#F48C83",
		400: "#F1655B",
		500: "#EA6857",
		600: "#C3574A",
		700: "#9C453D",
		800: "#75342F",
		900: "#4E231E"
	},
	secondary: {
		100: "#FFFFFF",
		200: "#FBFAFA",
		300: "#F7F5F5",
		400: "#F2F0F0",
		500: "#E6E4E4",
		600: "#B8B6B6",
		700: "#8A8888",
		800: "#5C5A5A",
		900: "#2E2D2D"
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
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
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