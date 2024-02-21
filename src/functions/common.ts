
import { TFunction } from "i18next";
import _ from "lodash";
import { uniq, flatMapDeep } from "lodash";
import { read, utils, write } from "xlsx";

export function ArrayIsEqual(a: any[], b: any[]) {
	return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}

export const getValuesFromKeys = (object: any, keys: string[] | string) => {
	if (!object) return undefined;
	if (typeof keys == "string") return object[keys];
	return keys.reduce((acc, key) => (acc && acc[key] ? acc[key] : undefined), object);
};

export const booleanToText = (value: boolean, t: TFunction) => {
	return value ? t("global.yes") : t("global.no");
};
