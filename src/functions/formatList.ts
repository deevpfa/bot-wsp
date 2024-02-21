export const formatList = (list: string[], locale: string | string[] = "es-AR", options?: Intl.ListFormatOptions) => {
	return new Intl.ListFormat(locale, options).format(list);
};
