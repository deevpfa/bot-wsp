import { Input, InputProps, Spinner } from "@material-tailwind/react";
import React, { useEffect, useRef } from "react";
import { FormStatus, InputControl, MaskFn, ParseFn, ValidatorError, ValidatorFn } from "../interfaces";
import { useInput } from "../hooks/use-input";
import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";

export interface TextFieldProps extends Kick<InputProps, "ref" | "children" | "defaultValue" | "defaultChecked"> {
	name: string;

	control?: InputControl;

	validators?: ValidatorFn[];

	mask?: MaskFn;

	parse?: ParseFn;

	hasFeedback?: boolean;

	infoTip?: React.ReactNode | ((value: any) => React.ReactNode);

	errorTip?: (errors: ValidatorError) => React.ReactNode;

	before?: React.ReactNode;

	after?: React.ReactNode;

	leading?: React.ReactNode;

	trailing?: React.ReactNode;

	onChangeValue?: (value: any, input: InputControl) => void;

	onChangeStatus?: (status: FormStatus, input: InputControl) => void;

	onInputError?: (errors: ValidatorError | null, input: InputControl) => void;

	isLoading?: boolean;
}

export function TextField({
	name,
	control,
	value,
	validators,
	mask,
	parse,
	disabled,
	hasFeedback,
	infoTip,
	errorTip,
	before,
	after,
	leading,
	trailing,
	onChangeValue,
	onChange,
	onBlur,
	onChangeStatus,
	onInputError,
	className,
	labelProps,
	isLoading,
	icon,
	...restProps
}: TextFieldProps) {
	const input = useInput({ name, control, value, validators, mask, parse, disabled });
	const inputRef = useRef<HTMLInputElement>(null);

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

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.currentTarget;

		input.setValue(value);

		if (!input.isDirty) input.markAsDirty();

		if (onChangeValue) onChangeValue(value, input);

		if (onChange) onChange(event);
	}

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		if (!input.isTouched) input.markAsTouched();

		if (onBlur) onBlur(event);
	}

	return (
		<div className="text-field">
			<fieldset className="relative flex items-stretch">
				<Input
					className={classNames(className, input.status, {
						"is-dirty": input.isDirty,
						"is-touched": input.isTouched,
						"rounded-l-none": before,
						"rounded-l-none !border-l-0": leading,
						"rounded-r-none": after,
						"rounded-r-none !border-r-0": trailing,
					})}
					name={name}
					type="text"
					onChange={handleChange}
					onBlur={handleBlur}
					value={input.value == null ? "" : input.value}
					disabled={input.disabled || isLoading}
					icon={isLoading ? <Spinner className="w-3 h-3" /> : icon}
					error={hasFeedback && input.isDirty && !!input.error && input.status === "invalid"}
					labelProps={{
						...labelProps,
						className: classNames(labelProps?.className, {
							"before:rounded-tl-none": before || leading,
							"after:rounded-tr-none": after || trailing,
						}),
					}}
					inputRef={inputRef}
					{...restProps}
				/>
			</fieldset>
			{hasFeedback && input.isDirty && !!input.error && input.status === "invalid" && errorTip && (
				<small className="text-xs ml-0.5 mt-0.5 absolute text-red-600">{errorTip(input.error)}</small>
			)}
			{!input.error && infoTip && <small className="text-xs ml-0.5 mt-0.5 absolute text-gray-500">{typeof infoTip === "function" ? infoTip(input.value) : infoTip}</small>}
		</div>
	);
}
