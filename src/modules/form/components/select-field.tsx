import React, { useEffect, useMemo } from "react";
import { FormStatus, InputControl, ValidatorError, ValidatorFn } from "../interfaces";
import { Select, SelectProps, Option, Spinner } from "@material-tailwind/react";
import { Kick } from "@/interfaces";
import { useInput } from "../hooks/use-input";
import { classNames } from "@/functions/classNames";

export const SelectOption = Option;

export interface SelectFieldProps<I = any, V = any> extends Kick<SelectProps, "ref" | "onChange" | "children" | "defaultValue" | "defaultChecked"> {
	name: string;

	control?: InputControl<V>;

	items?: I[];

	validators?: ValidatorFn[];

	hasFeedback?: boolean;

	infoTip?: React.ReactNode | ((value: any) => React.ReactNode);

	errorTip?: (errors: ValidatorError) => React.ReactNode;

	onChangeValue?: (value: V, input: InputControl<V>) => void;

	onChangeStatus?: (status: FormStatus, input: InputControl<V>) => void;

	onInputError?: (errors: ValidatorError | null, input: InputControl<V>) => void;

	isLoading?: boolean;

	isBefore?: boolean;

	isAfter?: boolean;

	children?: React.ReactNode | ((item: I, index: number) => React.ReactNode);
}

export function SelectField({
	name,
	control,
	value,
	validators,
	disabled,
	hasFeedback,
	infoTip,
	errorTip,
	onChangeValue,
	onBlur,
	onChangeStatus,
	onInputError,
	className,
	isBefore,
	isAfter,
	containerProps,
	labelProps,
	label,
	menuProps,
	isLoading,
	arrow,
	items = [],
	children,
	...restProps
}: SelectFieldProps) {
	const input = useInput({ name, control, value, validators, disabled });

	useEffect(() => {
		if (value === undefined) return;
		if (value !== input.value) input.setValue(value);
	}, [value]);

	useEffect(() => {
		if (onChangeStatus) onChangeStatus(input.status, input);
	}, [input.status]);

	useEffect(() => {
		if (onInputError) onInputError(input.error, input);
	}, [input.error]);

	function handleChange(value: any) {
		input.setValue(value);

		if (!input.isDirty) input.markAsDirty();

		if (onChangeValue) onChangeValue(value, input);
	}

	function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
		if (!input.isTouched) input.markAsTouched();

		if (onBlur) onBlur(event);
	}

	const selected = useMemo(() => {
		const childs = typeof children === "function" ? items.map((item, index) => children(item, index)) : children;
		const select = React.Children.toArray(childs).find((child) => {
			if (React.isValidElement(child)) return child.props.value === input.value;
			return null;
		});

		if (!select) return null;

		const selectChildren = (select as React.ReactElement).props.children;

		return React.createElement("div", { className: "flex items-center opacity-100 px-0 gap-2 pointer-events-none" }, selectChildren);
	}, [input.value, items, children]);

	return (
		<fieldset className={classNames("select-field w-full", className)}>
			<Select
				className={classNames(input.status, {
					"is-dirty": input.isDirty,
					"is-touched": input.isTouched,
					"rounded-r-none border-r-none": isBefore,
					"rounded-l-none border-l-none": isAfter,
				})}
				containerProps={{
					...containerProps,
					className: classNames(containerProps?.className, {
						"min-w-[100px]": isBefore || isAfter,
					}),
				}}
				labelProps={{
					...labelProps,
					className: classNames(labelProps?.className, {
						"before:mr-0 after:ml-0": !label,
						"rounded-r-none border-r-none": isBefore,
						"rounded-l-none border-l-none": isAfter,
					}),
				}}
				menuProps={{
					...menuProps,
					className: classNames(menuProps?.className, "max-h-[300px] overflow-y-auto", {
						"p-0 min-w-max": isBefore || isAfter,
					}),
				}}
				name={name}
				value={input.value === null && selected ? "1" : input.value}
				selected={() => selected}
				label={label}
				disabled={input.disabled || isLoading}
				arrow={isLoading ? <Spinner className="w-3 h-3" /> : arrow}
				error={hasFeedback && (input.isTouched || input.isDirty) && !!input.error && input.status === "invalid"}
				onChange={handleChange}
				onBlur={handleBlur}
				{...restProps}
			>
				{typeof children === "function" ? items.map((item, index) => children(item, index)) : children}
			</Select>
			{hasFeedback && input.isDirty && !!input.error && input.status === "invalid" && errorTip && (
				<small className="text-xs ml-0.5 mt-0.5 absolute text-red-600">{errorTip(input.error)}</small>
			)}
			{!input.error && infoTip && <small className="text-xs ml-0.5 mt-0.5 absolute text-gray-500">{typeof infoTip === "function" ? infoTip(input.value) : infoTip}</small>}
		</fieldset>
	);
}
