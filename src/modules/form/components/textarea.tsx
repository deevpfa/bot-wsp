import React, { useEffect } from "react";
import { FormStatus, InputControl, MaskFn, ParseFn, ValidatorError, ValidatorFn } from "../interfaces";
import { useInput } from "../hooks/use-input";
import { classNames } from "@/functions/classNames";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
    name: string;

    control?: InputControl;

    validators?: ValidatorFn[];

    mask?: MaskFn;

    parse?: ParseFn;

    label?: React.ReactNode;

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

export function Textarea({
    name,
    control,
    value,
    validators,
    mask,
    parse,
    disabled,
    onChange,
    onBlur,
    onChangeValue,
    onChangeStatus,
    onInputError,
    hasFeedback,
    errorTip,
    infoTip,
    label,
    className,
    ...restProps
}: TextareaProps) {
    const input = useInput({ name, control, value, validators, mask, parse, disabled });

    useEffect(() => {
        if (onChangeValue) onChangeValue(input.value, input);
    }, [input.value]);

    useEffect(() => {
        if (onChangeStatus) onChangeStatus(input.status, input);
    }, [input.status]);

    useEffect(() => {
        if (onInputError) onInputError(input.error, input);
    }, [input.error]);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const { value } = event.currentTarget;

        input.setValue(value);

        if (!input.isDirty) input.markAsDirty();

        if (onChange) onChange(event);
    }

    function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
        if (!input.isTouched) input.markAsTouched();

        if (onBlur) onBlur(event);
    }

    return (
        <fieldset className={classNames("mb-4", className)}>
            <label className='block mb-1'>
                <span className='text-sm font-medium mb-2 block'>{label}</span>
                <textarea
                    className={classNames(
                        "resize-none w-full rounded-3xl p-4 outline-none border border-gray-100 placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200",
                        {
                            "ring-2 ring-red-500 focus:!ring-red-500":
                                hasFeedback && input.error && (input.isDirty || input.isTouched),
                        }
                    )}
                    value={input.value}
                    disabled={input.disabled}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...restProps}
                />
            </label>
            {hasFeedback && input.error && (input.isDirty || input.isTouched)
                ? errorTip && (
                    <div className='-mt-1 text-xs text-red-500'>
                        {typeof errorTip === "function" ? errorTip(input.error) : errorTip}
                    </div>
                )
                : infoTip && (
                    <div className='-mt-1 text-xs text-gray-500'>
                        {typeof infoTip === "function" ? infoTip(input.value) : infoTip}
                    </div>
                )}
        </fieldset>
    );
}
