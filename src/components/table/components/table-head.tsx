import { classNames } from "@/functions/classNames";
import React from "react";

export interface TableHeadProps extends React.HTMLProps<HTMLTableSectionElement> {}

export function TableHead({ className, ...restProps }: TableHeadProps) {
	return <thead className={classNames("bg-gray-50", className)} {...restProps} />;
}
