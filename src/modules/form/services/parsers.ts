import { getFractionSeparetor, getIntegerSeparetor } from "@/functions/formatNumber";

interface ParseDateOptions {
	format: any;
	returnType: "date" | "timestamp" | "string";
}

export class Parsers {
	static trim(value: any): any {
		if (typeof value === "string") return value.trim();
		return value;
	}

	static toLowerCase(value: any): any {
		if (typeof value === "string") return value.toLowerCase();
		return value;
	}

	static toUpperCase(value: any): any {
		if (typeof value === "string") return value.toUpperCase();
		return value;
	}

	static toInteger(value: any): any {
		if (value === null || value === "") return value;
		if (typeof value === "number") return Number(value.toFixed(0));
		if (typeof value === "string") {
			if (value.match(/^-?\d+$/)) return Number(value);
		}
		if (!isNaN(Number(value))) return Number(value.toFixed(0));
	}

	static parseNumber(locale: string = "en-US") {
		return function parseNumberFn(value: any) {
			if (value === null || value === "") return value;
			if (typeof value === "number") return value;
			const separete = getIntegerSeparetor(locale);
			const decimal = getFractionSeparetor(locale);

			if (typeof value === "string") {
				value = value.replaceAll(separete, "");
				value = value.replace(decimal, ".");
			}

			if (!isNaN(Number(value))) return Number(value);

			return value;
		};
	}

	static parseDate(locale: string = "en-US", { format, returnType }: ParseDateOptions) {
		return function parseDateFn(value: any) {
			return value;
		};
	}
}
