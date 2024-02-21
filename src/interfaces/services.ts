export interface iServices {
	id?: number;
	uid: string;
	countries?: string[];
	name?: string;
	logo: string;
	description?: string;
	cost?: number;
	types?: eServiceTypes[];
	status?: string;
	createdAt?: number;
	updatedAt?: number;
	isDeleted?: boolean;
}

export interface iCountry {
	name: string;
	code: string;
	flag: string;
}
export enum eServiceTypes {
	"PEOPLE" = "PEOPLE",
	"COMPANIES" = "COMPANIES",
	"VEHICLES" = "VEHICLES",
	"PHONES" = "PHONES",
	"BANK" = "BANK",
}
