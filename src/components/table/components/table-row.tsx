import React, { useState } from "react";
import { RowContext } from "../context/row-context";
import { classNames } from "@/functions/classNames";

export interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {
	href?: string;
}

export function TableRow({ href, className, ...restProps }: TableRowProps) {
	const [isSelected, setSelected] = useState(false);

	return (
		<RowContext.Provider value={{ href, isSelected, setSelected }}>
			<tr className={classNames("bg-white text-gray-800", href && "hover:bg-gray-100", isSelected && "!bg-gray-300 !bg-opacity-50", className)} {...restProps} />
		</RowContext.Provider>
	);
}
