import { useMemo, useReducer, useRef } from "react";
import {
	FormControls,
	FormErrors,
	FormGroup,
	FormSchema,
	FormState,
	FormStatus,
	InputControl,
	InputSchema,
	MaskFn,
	NullableObject,
	ValidatorError,
	ValidatorFn,
} from "../interfaces";
import { setMaskFormInput } from "../functions/mask";
import { setValidatorsFormInput, validate, validateForm } from "../functions/validate";
import { formReducer } from "../services/reducer";
import { resetForm, setFormValue, setFormInputValue, setFormInputStatus, setFormInputError, resetFormInput, addFieldForm, removeFieldForm } from "../functions/set-form";
import { markDeterminateForm, markDirtyForm, markDisabledForm, markTouchedForm } from "../functions/mark-as";

export interface UseForm {}

export function initialStateSchema<T extends object = any>(schema: FormSchema<T>): FormState<T> {
	let data: FormState = {};

	for (const key in schema) {
		let { value, validators = [], mask = null, parse = null, disabled = false } = schema[key];

		let error = validate(value, validators);

		if (mask && (value !== undefined || value !== null)) value = mask(value);

		let parsed = parse ? parse(value) : value;

		data[key] = {
			value,
			parsed,
			validators,
			mask,
			parse,
			error,
			status: error ? "invalid" : "valid",
			indeterminate: false,
			isDirty: value ? true : false,
			isTouched: false,
			disabled,
		};
	}

	return data;
}

export function useForm<T extends object = any>(schema: FormSchema<T>, options?: UseForm): FormGroup<T> {
	const initialState = useRef<FormState<T>>(initialStateSchema(schema));

	const [data, dispatch] = useReducer<typeof formReducer<T>>(formReducer, initialState.current);

	const values = useMemo((): T => {
		let values: Partial<T> = {};

		for (const key in data) {
			values[key as keyof T] = data[key].parsed;
		}

		return values as T;
	}, [data]);

	const errors = useMemo((): FormErrors => {
		let errors: FormErrors = {};

		for (const key in data) {
			errors[key as keyof T] = data[key].error;
		}

		return errors;
	}, [data]);

	const status = useMemo((): FormStatus => {
		const dataMapped = Object.values(data);
		const isValid = dataMapped.every((value) => value.status === "valid");
		if (isValid) return "valid";
		const isSomePending = dataMapped.some((value) => value.status === "pending");
		if (isSomePending) return "pending";
		return "invalid";
	}, [data]);

	const isValid = useMemo(() => status === "valid", [status]);

	const isInvalid = useMemo(() => status === "invalid", [status]);

	const isPending = useMemo(() => status === "pending", [status]);

	const setValue = (value: Partial<NullableObject<T>>) => dispatch(setFormValue(value));

	const reset = () => dispatch(resetForm(initialState.current));

	const addField = (path: keyof T, input: InputSchema<T[keyof T]>) => dispatch(addFieldForm(path, input));

	const removeField = (path: keyof T) => dispatch(removeFieldForm(path));

	const controls = useMemo((): FormControls<T> => {
		let controls: FormControls = {};

		for (const key in data) {
			controls[key as keyof T] = {
				...data[key],
				setValue: (value: T[keyof T] | null) => dispatch(setFormInputValue(key as keyof T, value)),
				setError: (error: ValidatorError | null) => dispatch(setFormInputError(key as keyof T, error)),
				setPending: () => dispatch(setFormInputStatus(key as keyof T, "pending")),
				reset: () => dispatch(resetFormInput(key as keyof T, initialState.current[key as keyof T])),
				markAsDirty: () => dispatch(markDirtyForm(key as keyof T, true)),
				markAsPristine: () => dispatch(markDirtyForm(key as keyof T, false)),
				markAsTouched: () => dispatch(markTouchedForm(key as keyof T, true)),
				markAsUntouched: () => dispatch(markTouchedForm(key as keyof T, false)),
				markAsIndeterminate: () => dispatch(markDeterminateForm(key as keyof T, true)),
				markAsDeterminate: () => dispatch(markDeterminateForm(key as keyof T, false)),
				markAsDisabled: () => dispatch(markDisabledForm(key as keyof T, true)),
				markAsEnabled: () => dispatch(markDisabledForm(key as keyof T, false)),
				validate: () => dispatch(validateForm(key as keyof T)),
				setValidators: (validators: ValidatorFn[], emitSelf?: boolean) => dispatch(setValidatorsFormInput(key as keyof T, validators, emitSelf)),
				clearValidators: (emitSelf?: boolean) => dispatch(setValidatorsFormInput(key as keyof T, [], emitSelf)),
				setMask: (mask: MaskFn, emitSelf?: boolean) => dispatch(setMaskFormInput(key as keyof T, mask, emitSelf)),
				clearMask: (emitSelf?: boolean) => dispatch(setMaskFormInput(key as keyof T, null, emitSelf)),
			};
		}

		return controls;
	}, [data]);

	const useControl = (fn: (controls: FormControls<T>) => InputControl<T[keyof T]>) => fn(controls);

	return {
		values,
		errors,
		status,
		isValid,
		isInvalid,
		isPending,
		controls,
		setValue,
		reset,
		useControl,
		addField,
		removeField,
	};
}
