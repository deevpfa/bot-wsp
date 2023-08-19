import { Country } from "./countries.interface";

export interface Provider {
	id: number;
	uid: string;
	name: string;
	description: string;
	logo: string;
	credentials: ProviderCredentials;
	type: ProviderType;
	countries: Country[];
	cost: number;
	isEnabled: boolean;
	createdAt: number;
	updatedAt: number;
	deletedAt: number | null;
}

export type ProviderCredentials = NosisCredentials | AgilDataCredentials;

export enum ProviderType {
	PEOPLE = "PEOPLE",
	COMPANIES = "COMPANIES",
	VEHICLES = "VEHICLES",
	PHONE = "PHONE",
	BANKS = "BANKS",
}

export interface NosisCredentials {
	apiKey: string;
	secretKey: string;
}

export interface AgilDataCredentials {
	apiKey: string;
}
