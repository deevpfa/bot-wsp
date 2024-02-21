import { formatNumber, getFractionSeparetor, getIntegerSeparetor } from "@/functions/formatNumber";
import { Parsers } from "./parsers";

interface MaskFormatNumber {
	digitInfo?: `${number}.${number}-${number}`;
	allowNegative?: boolean;
}

export class Masks {
	static replace(pattern: string | RegExp, replacement: string): (value: any) => any {
		return function replaceFn(value: any) {
			if (value === null || value === "") return value;
			if (typeof value === "string") return value.replaceAll(pattern, replacement);
			return value;
		};
	}

	static alpha(value: any): any {
		if (value === null || value === "") return value;
		if (typeof value === "string") return value.replaceAll(/[^a-zA-Z]/g, "");
		return value;
	}

	static alphaNumeric(value: any): any {
		if (value === null || value === "") return value;
		if (typeof value === "string") return value.replaceAll(/[^a-zA-Z0-9]/g, "");
		return value;
	}

	static numeric(value: string): any {
		if (value === null || value === "") return value;
		if (typeof value === "number") return value;
		if (typeof value === "string") {
			// un cero entero no debe tener otro cero antes del punto
			if (value.charAt(0) === "0" && value.charAt(1) === "0") return "0";
			// elimino todos los puntos adicionales
			let hasDot = false;
			let digits = "";
			for (let i = 0; i < value.length; i++) {
				const char = value.charAt(i);
				if (char === "." && !hasDot) {
					digits += char;
					hasDot = true;
				} else if (!isNaN(Number(char))) {
					digits += char;
				}
			}
			value = digits;
			// si el primer valor es punto, lo interpretamos con 0.
			if (value.startsWith(".")) value = "0" + value;
			// Los unicos valores string permitidos son los que terminan en punto o que tienen ceros a la derecha del punto
			if (value.endsWith(".")) return value;
			const match = value.match(/(\.0{1,})([1-9]*)/);
			if (match?.[2] !== "") return Number(value);
			return value;
		}
		if (!isNaN(Number(value))) return Number(value);

		return value;
	}

	static formatNumber(locale: string = "en-US", { allowNegative = true, digitInfo = "1.0-2" }: MaskFormatNumber = {}) {
		return function formatNumberFn(value: any) {
			if (value === null || value === "") return value;

			// Obtenemos las separaciones de decimales y enteros
			const integerSeparetor = getIntegerSeparetor(locale);
			const fractionSeparator = getFractionSeparetor(locale);

			// Obtenemos los valores de digitInfo
			const [minIntDig, fracDig] = digitInfo.split(".");
			if (!minIntDig || !fracDig) throw new Error("Invalid digit format");
			const [minFracDig, maxFracDig] = fracDig.split("-");
			if (!minFracDig || !maxFracDig) throw new Error("Invalid digit format");

			// Removemos todos los caracteres que no sean numeros o el separador decimal
			let validations = new RegExp(`[^\\d${integerSeparetor}${Number(maxFracDig) > 0 ? fractionSeparator : ""}${allowNegative ? "-" : ""}]`, "g");
			value = String(value).replaceAll(validations, "");

			const [, decimal] = value.split(fractionSeparator);
			if (decimal && decimal.length > Number(maxFracDig)) value = value.slice(0, -1);

			// Eliminamos todos los negativos de mas
			if (value.slice(1).includes("-")) value = `-${value.replace(/-/g, "")}`;
			// Eliminamos todos los separadores de decimales de mas
			if (value.slice(1).includes(fractionSeparator)) {
				const [integer, decimal] = value.split(fractionSeparator);
				value = `${integer}${fractionSeparator}${decimal.replace(new RegExp(`${fractionSeparator}`, "g"), "")}`;
			}
			// Si solamente se ingreso un negativo, lo dejamos como esta
			if (value.startsWith("-") && value.charAt(1) === "") return value;
			// Si el primer valor es negativo y seguido una separación decimal, le agregamos un cero al inicio
			if (value.startsWith("-") && value.charAt(1) === fractionSeparator) value = `-0${fractionSeparator}${value.slice(2)}`;
			// Si el primer valor es una separación de decimal, le agregamos un cero al inicio
			if (value.startsWith(fractionSeparator)) value = `0${fractionSeparator}${value.slice(1)}`;
			// Si el ultimo valor es una separación de decimal, lo dejamos como esta
			if (value.endsWith(fractionSeparator)) {
				let parsed = Parsers.parseNumber(locale)(value.slice(0, -1));
				if (Number.isNaN(parsed)) return "";

				const formatted = formatNumber(parsed, locale, digitInfo);
				return `${formatted}${fractionSeparator}`;
			}
			// Si el valor contiene un separacion de decimal y ademas el ultimo numero es un cero, lo dejamos como esta
			if (value.includes(fractionSeparator) && value.endsWith("0")) {
				const [integer, decimal] = value.split(fractionSeparator);

				let parsed = Parsers.parseNumber(locale)(integer);
				if (Number.isNaN(parsed)) return "";

				const formatted = formatNumber(parsed, locale, digitInfo);
				return `${formatted}${fractionSeparator}${decimal}`;
			}

			let parsed = Parsers.parseNumber(locale)(value);
			if (Number.isNaN(parsed)) return "";

			const formatted = formatNumber(parsed, locale, digitInfo);
			return formatted;
		};
	}

	static formatDate(locale: string = "en-US", format: string = "dd/MM/yyyy") {
		return function formatDateFn(value: any) {
			return value;
		};
	}
}
