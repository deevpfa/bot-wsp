import { Checkbox, CheckboxProps, Spinner } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { FormStatus, InputControl, ValidatorError, ValidatorFn } from "../interfaces";
import { Kick } from "@/interfaces";
import { useInput } from "../hooks/use-input";
import { MinusIcon } from "@heroicons/react/24/solid";
import { classNames } from "@/functions/classNames";

export interface CheckboxFieldProps extends Kick<CheckboxProps, "ref" | "children" | "defaultValue" | "defaultChecked"> {
	name: string;

	control?: InputControl<boolean>;

	validators?: ValidatorFn[];

	isIndeterminate?: boolean;

	onChangeValue?: (value: boolean, input: InputControl<boolean>) => void;

	onChangeStatus?: (status: FormStatus, input: InputControl<boolean>) => void;

	onInputError?: (errors: ValidatorError | null, input: InputControl<boolean>) => void;

	isLoading?: boolean;
}

export function CheckboxField({
	name,
	control,
	checked,
	validators,
	onChangeValue,
	onChange,
	onBlur,
	onChangeStatus,
	onInputError,
	isIndeterminate,
	isLoading,
	className,
	ripple = true,
	icon,
	iconProps,
	...restProps
}: CheckboxFieldProps) {
	const input = useInput<boolean>({ name, control, value: checked || false, validators });

	useEffect(() => {
		if (checked === undefined) return;
		if (checked !== input.value) input.setValue(checked);
	}, [checked]);

	useEffect(() => {
		if (input.indeterminate === isIndeterminate) return;
		isIndeterminate ? input.markAsIndeterminate() : input.markAsDeterminate();
	}, [isIndeterminate]);

	useEffect(() => {
		if (onChangeStatus) onChangeStatus(input.status, input);
	}, [input.status]);

	useEffect(() => {
		if (onInputError) onInputError(input.error, input);
	}, [input.error]);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { checked } = e.currentTarget;

		input.setValue(checked);

		if (!input.isDirty) input.markAsDirty();

		if (onChangeValue) onChangeValue(checked, input);

		if (onChange) onChange(e);
	}

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		if (!input.isTouched) input.markAsTouched();

		if (onBlur) onBlur(event);
	}

	return (
		<Checkbox
			className={classNames(className, input.status, {
				"is-dirty": input.isDirty,
				"is-touched": input.isTouched,
			})}
			iconProps={{
				...(iconProps || {}),
				className: classNames(iconProps?.className, "w-3.5 h-3.5 bg-[#1e88e5]"),
			}}
			name={name}
			ripple={ripple}
			checked={input.indeterminate ? true : input.value!}
			disabled={input.disabled || isLoading}
			icon={isLoading ? <Spinner /> : input.indeterminate ? <MinusIcon className="w-3.5 h-3.5" /> : icon}
			onChange={handleChange}
			onBlur={handleBlur}
			{...restProps}
		/>
	);
}
