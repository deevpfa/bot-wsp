type FormatDateTime = "short" | "medium" | "long" | "full";
type FormatDate = "shortDate" | "mediumDate" | "longDate" | "fullDate";
type FormatTime = "shortTime" | "mediumTime" | "longTime" | "fullTime";

type FormatDateOptions<T extends string = any> = {
	[key in T]: Intl.DateTimeFormatOptions;
};

const FORMAT_DATE_TIME: FormatDateOptions<FormatDateTime> = {
	short: {
		day: "numeric",
		month: "numeric",
		year: "2-digit",
		hour: "numeric",
		minute: "numeric",
	},
	medium: {
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	},
	long: {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZoneName: "short",
	},
	full: {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZoneName: "long",
	},
};

const FORMAT_DATE: FormatDateOptions<FormatDate> = {
	shortDate: {
		day: "numeric",
		month: "numeric",
		year: "2-digit",
	},
	mediumDate: {
		day: "numeric",
		month: "short",
		year: "numeric",
	},
	longDate: {
		day: "numeric",
		month: "long",
		year: "numeric",
	},
	fullDate: {
		day: "numeric",
		month: "long",
		year: "numeric",
		weekday: "long",
	},
};

const FORMAT_TIME: FormatDateOptions<FormatTime> = {
	shortTime: {
		hour: "numeric",
		minute: "numeric",
	},
	mediumTime: {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	},
	longTime: {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZoneName: "short",
	},
	fullTime: {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZoneName: "long",
	},
};

const FORMAT: FormatDateOptions<FormatDateTime | FormatDate | FormatTime> = {
	...FORMAT_DATE_TIME,
	...FORMAT_DATE,
	...FORMAT_TIME,
};

export const formatDate = (value: number | Date, locale: string = "es-AR", format: FormatDateTime | FormatDate | FormatTime = "shortDate") => {
	if (!value) return "";

	let opts: Intl.DateTimeFormatOptions = {};
	opts = FORMAT[format];
	if (!opts) throw new Error(`Format ${format} is not valid`);

	return new Intl.DateTimeFormat(locale, opts).format(value);
};

export const getMonthsList = (locale: string = "es-AR", format: "short" | "narrow" | "long" | "numeric" | "2-digit" = "short") => {
	const months = [];
	for (let i = 0; i < 12; i++) {
		const month = Intl.DateTimeFormat(locale, { month: format }).format(new Date(0, i));

		months.push(month);
	}
	return months;
};
