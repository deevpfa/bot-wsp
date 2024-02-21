import React, { useEffect } from "react";
import { FormStatus, InputControl, ValidatorError, ValidatorFn } from "../interfaces";
import { Radio, RadioProps, Spinner } from "@material-tailwind/react";
import { Kick } from "@/interfaces";
import { useInput } from "../hooks/use-input";
import { classNames } from "@/functions/classNames";

export interface RadioFieldProps extends Kick<RadioProps, "ref" | "defaultValue" | "defaultChecked"> {
	name: string;

	value: any;

	control?: InputControl;

	validators?: ValidatorFn[];

	onChangeValue?: (value: any, input: InputControl) => void;

	onChangeStatus?: (status: FormStatus, input: InputControl) => void;

	onInputError?: (errors: ValidatorError | null, input: InputControl) => void;

	isLoading?: boolean;
}

export function RadioField({
	name,
	control,
	value,
	checked,
	validators,
	disabled,
	onChangeValue,
	onChange,
	onBlur,
	onChangeStatus,
	onInputError,
	isLoading,
	className,
	icon,
	...restProps
}: RadioFieldProps) {
	const input = useInput({ name, control, value, validators, disabled });

	useEffect(() => {
		if (onChangeStatus) onChangeStatus(input.status, input);
	}, [input.status]);

	useEffect(() => {
		if (onInputError) onInputError(input.error, input);
	}, [input.error]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;

		input.setValue(value);

		if (!input.isDirty) input.markAsDirty();

		if (onChangeValue) onChangeValue(value, input);

		if (onChange) onChange(e);
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (!input.isTouched) input.markAsTouched();

		if (onBlur) onBlur(e);
	};

	return (
		<Radio
			className={classNames(className, input.status, {
				"is-dirty": input.isDirty,
				"is-touched": input.isTouched,
			})}
			name={name}
			checked={value === input.value}
			disabled={input.disabled || isLoading}
			value={value}
			icon={isLoading ? <Spinner className="w-3 h-3" /> : icon}
			onChange={handleChange}
			onBlur={handleBlur}
			{...restProps}
		/>
	);
}
