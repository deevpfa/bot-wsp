import { EMPTY_KEY } from "@/interfaces/global";
import _ from "lodash";
import moment from "moment";

export const FORMAT_NATIONAL_ID = (value: number, country: string) => {
	switch (country) {
		case "AR":
			return Intl.NumberFormat("es-AR", { minimumIntegerDigits: 7 }).format(value);
	}
};

export const FORMAT_TAX_ID = (value: number, country: string) => {
	switch (country) {
		case "AR":
			return value.toString().replace(/^(\d{2})(\d{8})$/, "$1-$2-0");
	}
};

export const FORMAT_DATE = (value: string, locale: string = "es-AR") => {
	if(!value) return EMPTY_KEY;
	return Intl.DateTimeFormat(locale).format(new Date(value));
};

export const XML_DECODE = (data: string) => {
	if (!data) return null;

	let dom: Document;
	try {
		dom = new DOMParser().parseFromString(data, "text/xml");
	} catch (error) {
		return null;
	}

	const detail = dom.childNodes[0];
	if (!detail) return null;

	const node = detail.childNodes;
	if (!node || node.length === 0) return null;

	return node;
};


export const getTabValue = (item: any, locale?: string, translate?: any) => {
	if (!item || !item.value) return EMPTY_KEY;
	let value = !item.fn ? item.value : item.fn(item.value, locale, translate);
	if (value == EMPTY_KEY || value === "") return EMPTY_KEY;
	return value;
};
export const getTabActivateAt = (item: any, locale?: string, translate?: any) => {
	if (!item) return null;
	let value = item.activityAt
	if (!value || value === "") return null;
	return moment(value).toDate();
};
