export type DisplayCurrency = "s" | "c" | "n";

export function formatCurrency(
	value: string | number,
	currency: string,
	locale: string | string[] = "es-AR",
	digitFormat: `${DisplayCurrency} ${number}.${number}-${number}` = "s 1.0-0",
) {
	if (!value || !currency) return "";
	if (typeof value === "string") value = Number(value);
	if (isNaN(value)) return "";
	let [display, digitInfo] = digitFormat.split(" ");

	if (display === "s") display = "symbol";
	if (display === "c") display = "code";
	if (display === "n") display = "name";

	const [minIntDig, fracDig] = digitInfo.split(".");

	if (!minIntDig || !fracDig) throw new Error("Invalid digit format");

	const [minFracDig, maxFracDig] = fracDig.split("-");

	if (!minFracDig || !maxFracDig) throw new Error("Invalid digit format");

	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
		currencyDisplay: display,
		useGrouping: true,
		minimumIntegerDigits: Number(minIntDig),
		minimumFractionDigits: Number(minFracDig),
		maximumFractionDigits: Number(maxFracDig),
	}).format(value);
}

export function getCurrencySymbol(locale: string = "es-AR", currency: string) {
	const number = Intl.NumberFormat(locale, {
		style: "currency",
		currency,
		currencyDisplay: "symbol",
		currencySign: "accounting",
	}).formatToParts(1);

	return number[0];
}
