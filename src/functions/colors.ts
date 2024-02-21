type Hexadecimal = `#${string}${string}${string}` | `#${string}${string}${string}${string}${string}${string}` | string;

type Rgb = [number, number, number] | [number, number, number, number] | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;

type Hsl = [number, number, number] | [number, number, number, number] | `hsl(${number}, ${number}, ${number})` | `hsla(${number}, ${number}, ${number}, ${number})`;

/** Transforma un hexadecimal a rgb */
export function hexToRgb(hex: Hexadecimal) {
	return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
}

/** Transforma un hexadecimal a hsl */
export function hexToHsl(hex: Hexadecimal) {
	const [r, g, b] = hexToRgb(hex);
	return rgbToHsl(r, g, b);
}

export function isHexadecimal(color: Hexadecimal | Rgb | Hsl): color is Hexadecimal {
	if (typeof color !== "string") return false;
	return color.startsWith("#");
}

/** Transforma un rgb a hexadecimal */
export function rgbToHex(r: number, g: number, b: number) {
	return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

/** Transforma un rgb a hsl */
export function rgbToHsl(r: number, g: number, b: number) {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h,
		s,
		l = (max + min) / 2;

	if (max === min) {
		h = s = 0;
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		if (h !== undefined) h /= 6;
	}

	return [h, s, l] as Hsl;
}

export function isRgb(color: Hexadecimal | Rgb | Hsl): color is Rgb {
	if (Array.isArray(color) && color.length === 3) return true;
	if (Array.isArray(color) && color.length === 4) return true;
	return color.startsWith("rgb");
}

export function rgbToString(color: Rgb): string {
	if (Array.isArray(color) && color.length === 3) return `rgb(${color.join(", ")})`;
	if (Array.isArray(color) && color.length === 4) return `rgba(${color.join(", ")})`;
	return color;
}

export function rgbToArray(color: Rgb): [number, number, number] | [number, number, number, number] {
	if (Array.isArray(color) && color.length === 3) return color;
	if (Array.isArray(color) && color.length === 4) return color;
	if (color.startsWith("rgb")) {
		const rgb = color.replace("rgb(", "").replace("rgba(", "").replace(")", "").replace(" ", "").split(",");
		return rgb.map((c) => parseInt(c)) as [number, number, number] | [number, number, number, number];
	}
	return [0, 0, 0];
}

/** Transforma un hsl a rgb */
export function hslToRgb(h: number, s: number, l: number) {
	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/** Transforma un hsl a hexadecimal */
export function hslToHex(h: number, s: number, l: number) {
	const [r, g, b] = hslToRgb(h, s, l);
	return rgbToHex(r, g, b);
}

export function isHsl(color: Hexadecimal | Rgb | Hsl): color is Hsl {
	if (Array.isArray(color) && color.length === 3) return true;
	if (Array.isArray(color) && color.length === 4) return true;
	return color.startsWith("hsl");
}

export function hslToString(color: Hsl): string {
	if (Array.isArray(color) && color.length === 3) return `hsl(${color.join(", ")})`;
	if (Array.isArray(color) && color.length === 4) return `hsla(${color.join(", ")})`;
	return color;
}

export function hslToArray(color: Hsl): [number, number, number] | [number, number, number, number] {
	if (Array.isArray(color) && color.length === 3) return color;
	if (Array.isArray(color) && color.length === 4) return color;
	if (color.startsWith("hsl")) {
		const hsl = color.replace("hsl(", "").replace("hsla(", "").replace(")", "").replace(" ", "").split(",");
		return hsl.map((c) => parseInt(c)) as [number, number, number] | [number, number, number, number];
	}
	return [0, 0, 0];
}

export function transparentize(color: Hexadecimal | Rgb | Hsl, opacity: number) {
	if (isHexadecimal(color)) {
		const [r, g, b] = hexToRgb(color);
		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	} else if (isRgb(color)) {
		const [r, g, b] = rgbToArray(color);
		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	} else if (isHsl(color)) {
		const [h, s, l] = hslToArray(color);
		return `hsla(${h}, ${s}, ${l}, ${opacity})`;
	}
	return color;
}

export function generatePalette(color: Hexadecimal, length: number) {
	let palette = [color];

	const n = length % 2 === 0 ? length + 1 : length;
	const colorRGB = hexToRgb(color);
	const factorLight = 1 / (n - 1);

	for (let i = 1; i < n / 2; i++) {
		const light = i * factorLight;
		const [r, g, b] = colorRGB.map((c) => c + (255 - c) * light);
		palette.unshift(rgbToHex(r, g, b) as Hexadecimal);
	}

	for (let i = 1; i < n / 2; i++) {
		const dark = i * factorLight;
		const [r, g, b] = colorRGB.map((c) => c - c * dark);
		palette.push(rgbToHex(r, g, b) as Hexadecimal);
	}

	if (length % 2 === 0) palette = palette.slice(0, palette.length - 1);

	return palette;
}

export function getContrast(bgColor: string, light = "#ffffff", dark = "#000000") {
	if (!bgColor) return null;
	if (bgColor.indexOf("#") > -1) {
		return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2 ? dark : light;
	} else if (bgColor.indexOf("rgb") > -1) {
		let bg = bgColor.replace("rgb(", "").replace(")", "").replace(" ", "");
		let rgb = bg.split(",");
		const R = parseInt(rgb[0]);
		const G = parseInt(rgb[1]);
		const B = parseInt(rgb[2]);
		const A = 1;
		const brightness = R * 0.299 + G * 0.587 + B * 0.114 + (1 - A) * 255;

		return brightness > 186 ? dark : light;
	}
}

export function randomColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
