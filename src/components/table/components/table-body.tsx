import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";
import React from "react";
import { useTable } from "../hooks/use-table";

export interface TableBodyProps extends Kick<React.HTMLAttributes<HTMLTableSectionElement>, "children"> {
	children: React.ReactNode | ((data: any, index: number, array: any[]) => React.ReactNode);
}

export function TableBody({ className, children, ...restProps }: TableBodyProps) {
	const { data } = useTable();

	return (
		<tbody className={classNames("bg-white", className)} {...restProps}>
			{typeof children === "function" ? data.map((data, index, array) => children(data, index, array)) : children}
		</tbody>
	);
}
