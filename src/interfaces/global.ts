export interface iNavigation {
	id: string;
	name: string;
	Icon: React.FC<{ classNames?: string }>;
	description: string;
	href: string;
	current: boolean;
	color: string;
	hasNewData?: boolean;
}
export enum ePersonType {
	LEGAL_PERSON = "legal_person",
	PHYSICAL_PERSON = "physical_person",
}

export const EMPTY_KEY = "N/A";
