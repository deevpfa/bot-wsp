import { ButtonProps } from "@material-tailwind/react";
import { InputControl } from "@/modules/form";
import { Kick } from ".";

export interface iActiveLink {
	content?: any;
	href?: any;
	target?: string;
	className?: string;
	children: any;
	onClick?: (e?: any) => void;
}

export interface iCheckListProps {
	label?: string;
	value?: any;
	title?: any;
	image?: string | null;
	placeholder?: string;
	error?: boolean;
	coin?: any;
	amount?: any;
	onChange?: (e: any) => any;
}

export interface iMyButton extends Kick<ButtonProps, "color"> {
	color?: ButtonProps["color"] | "primary" | "secondary";
	isFetching?: boolean;
}

export interface iStepsProps {
	checked: boolean;
	setChecked: (checked: boolean) => void;
	stepUid: string;
	path: string | null;
	stepTitle: string;
	stepValue: number;
}



interface iTranscations {
	id: string;
	dni: string;
	name: string;
	services: any[];
	price: string;
	status: string;
}

export enum eSearchType {
	INDIVIDUAL = "INDIVIDUAL",
	MULTIPLE = "MULTIPLE",
}

export type InputStatus = "valid" | "invalid" | "pending";

export interface DynamicInputProps {
	name: string;
	countryCode: string;
	control: InputControl;
}
