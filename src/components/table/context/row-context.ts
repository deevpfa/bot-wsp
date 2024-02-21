import { Dispatch, SetStateAction, createContext } from "react";

export interface RowContextProps {
	href?: string;

	isSelected?: boolean;

	setSelected?: Dispatch<SetStateAction<boolean>>;
}

export const RowContext = createContext<RowContextProps | null>(null);
