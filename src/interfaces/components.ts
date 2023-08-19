import { ButtonProps } from "@material-tailwind/react";
import { iServices } from "./services";

export interface iActiveLink {
	content?: any;
	href?: any;
	target?: string;
	className?: string;
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

export interface iMyButton extends Omit<ButtonProps, "color"> {
	color?: ButtonProps["color"] | "primary" | "secondary";
	isFetching?: boolean;
}

export interface iSlidover {
	title: string;
	Services: iServices[];
	openSlide: boolean;
	onChangeOpen?: (value: boolean) => void;
}

export interface iStepsProps {
	checked: boolean;
	setChecked: (checked: boolean) => void;
	stepUid: string;
	stepTitle: string;
	stepValue: number;
}

export interface iTranslateProps {
	transactions: iTranscations[];
	title?: string;
	subtitle?: string;
	services: iServices[];
}

interface iTranscations {
	id: string;
	dni: string;
	name: string;
	services: any[];
	price: string;
	status: string;
}

export type InputStatus = "valid" | "invalid" | "pending";
