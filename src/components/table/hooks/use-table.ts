import { useContext } from "react";
import { TableContext } from "../context/table-context";

export function useTable() {
	const context = useContext(TableContext);

	if (!context) return { data: [], auxData: [], setData: () => {} };
	const { data, auxData, setData } = context;

	return {
		data,
		auxData,
		setData,
	};
}
