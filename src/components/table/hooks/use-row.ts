import { useContext } from "react";
import { RowContext } from "../context/row-context";

export const useRow = () => {
	const context = useContext(RowContext);

	if (!context) return { href: null, isSelected: false };

	const { href, isSelected, setSelected } = context;

	return {
		href,
		isSelected,
		setSelected,
	};
};
