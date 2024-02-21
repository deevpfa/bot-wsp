import React, { useEffect } from "react";
import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";
import { CheckboxField, InputControl, useInput } from "@/modules/form";
import { useRow } from "../hooks/use-row";

export interface TableCheckboxProps extends Kick<React.HTMLProps<HTMLTableCellElement>, "children"> {
	name: string;

	control?: InputControl<boolean>;

	checked?: boolean;

	isIndeterminate?: boolean;

	onCheck?: (name: string, checked: boolean) => void;

	as?: "th" | "td";

	isSticky?: boolean;

	stickyDirection?: "left" | "right" | "top" | "left-top" | "right-top";
}

export function TableCheckbox({ name, control, checked, onCheck, isIndeterminate, as, className, isSticky, stickyDirection, ...restProps }: TableCheckboxProps) {
	const input = useInput({ name, control, value: checked || false });
	const { isSelected, setSelected } = useRow();

	useEffect(() => {
		if (isIndeterminate === input.indeterminate) return;

		isIndeterminate ? input.markAsIndeterminate() : input.markAsDeterminate();
	}, [isIndeterminate]);

	useEffect(() => {
		if (checked === input.value) return;

		input.setValue(checked!);
	}, [checked]);

	useEffect(() => {
		if (as !== "th" && setSelected && isSelected !== input.value) setSelected(input.value!);
	}, [input.value]);

	const handleChange = (value: boolean) => onCheck && onCheck(name, value);

	if (as === "th") {
		return (
			<th
				scope="col"
				className={classNames(
					className,
					"px-0 py-1 bg-opacity-75 bg-gray-50 text-sm font-semibold text-gray-900",
					isSticky && stickyDirection === "left" && "sticky left-0 z-10 bg-opacity-100",
					isSticky && stickyDirection === "right" && "sticky right-0 z-10 bg-opacity-100",
					isSticky && stickyDirection === "top" && "sticky top-0 z-10 bg-opacity-100",
					isSticky && stickyDirection === "left-top" && "sticky left-0 top-0 z-10 bg-opacity-100",
					isSticky && stickyDirection === "right-top" && "sticky right-0 top-0 z-10 bg-opacity-100",
				)}
				{...restProps}
			>
				<div className="flex items-center justify-center">
					<CheckboxField containerProps={{ className: "!mr-0" }} name={name} control={input} onChangeValue={handleChange} />
				</div>
			</th>
		);
	}
	return (
		<td
			scope="col"
			className={classNames(
				"px-0 py-1 border-t border-gray-300 text-sm font-medium",
				isSticky && stickyDirection === "left" && "sticky left-0 z-10",
				isSticky && stickyDirection === "right" && "sticky right-0 z-10",
				isSticky && stickyDirection === "top" && "sticky top-0 z-10",
				isSticky && stickyDirection === "left-top" && "sticky left-0 top-0 z-10",
				isSticky && stickyDirection === "right-top" && "sticky right-0 top-0 z-10",
				className,
			)}
			{...restProps}
		>
			<div className="flex items-center justify-center">
				<CheckboxField containerProps={{ className: "!mr-0" }} name={name} control={input} onChangeValue={handleChange} />
			</div>
		</td>
	);
}
