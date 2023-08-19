export interface Country {
	id: number;
	uid: string;
	name: string;
	alpha2Code: string;
	alpha3Code: string;
	callingCode: string;
}

export interface Province {
	id: number;
	uid: string;
	name: string;
	country: Country;
}
