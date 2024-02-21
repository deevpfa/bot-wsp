import { createContext } from "react";

export interface TableContextProps {
	data: any[];

	auxData: any[];

	setData: (data: any[]) => void;
}

export const TableContext = createContext<TableContextProps | null>(null);
