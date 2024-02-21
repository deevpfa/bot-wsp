export const formatNumber = (value: string | number, locale: string | string[] = "es-AR", digitFormat: `${number}.${number}-${number}` = "1.0-0") => {
	if (!value) return "";
	if (typeof value === "string") value = Number(value);

	const [minIntDig, fracDig] = digitFormat.split(".");

	if (!minIntDig || !fracDig) throw new Error("Invalid digit format");

	const [minFracDig, maxFracDig] = fracDig.split("-");

	if (!minFracDig || !maxFracDig) throw new Error("Invalid digit format");

	return new Intl.NumberFormat(locale, {
		style: "decimal",
		useGrouping: true,
		minimumIntegerDigits: Number(minIntDig),
		minimumFractionDigits: Number(minFracDig),
		maximumFractionDigits: Number(maxFracDig),
	}).format(value);
};

export const getIntegerSeparetor = (locale: string = "es-AR") => {
	const number = formatNumber(1000, locale);
	const separetor = number.slice(1, 2);
	return separetor;
};

export const getFractionSeparetor = (locale: string = "es-AR") => {
	const number = formatNumber(1.1, locale, "1.1-1");
	const decimal = number.slice(1, 2);
	return decimal;
};
