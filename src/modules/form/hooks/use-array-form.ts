import { useMemo, useReducer, useRef } from "react";
import { FormArrayGroup, FormControls, FormErrors, FormSchema, FormState, FormStatus, MaskFn, ValidatorError, ValidatorFn } from "../interfaces";
import { validate } from "../functions/validate";
import { arrayFormReducer } from "../services/reducer";

export interface UseArrayForm {}

export function initialStateSchema<T extends object = any>(schemas: FormSchema<T>[]): FormState<T>[] {
	let state: FormState[] = [];

	for (const schema of schemas) {
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

		state.push(data);
	}

	return state;
}

export function useArrayForm<T extends object = any>(schema: FormSchema<T>[], options?: UseArrayForm): FormArrayGroup<T> {
	const initialState = useRef<FormState<T>[]>(initialStateSchema(schema));

	const [data, dispatch] = useReducer<typeof arrayFormReducer<T>>(arrayFormReducer, initialState.current);

	const values = useMemo((): T[] => {
		const values = data.map((item) => {
			const value: T = Object.keys(item).reduce((acc, key) => {
				acc[key as keyof T] = item[key as keyof T].parsed!;
				return acc;
			}, {} as T);
			return value;
		});

		return values as T[];
	}, [data]);

	const errors = useMemo((): FormErrors<T>[] => {
		const errors = data.map((item) => {
			const error: FormErrors = Object.keys(item).reduce((acc, key) => {
				acc[key as keyof T] = item[key as keyof T].error;
				return acc;
			}, {} as FormErrors);
			return error;
		});

		return errors;
	}, [data]);

	const status = useMemo((): FormStatus => {
		const statuses = data.map((item: FormState) => {
			const dataMapped = Object.values(item);
			const isValid = dataMapped.every((value) => value.status === "valid");
			if (isValid) return "valid";
			const isSomePending = dataMapped.some((value) => value.status === "pending");
			if (isSomePending) return "pending";
			return "invalid";
		});
		const isValid = statuses.every((status) => status === "valid");
		if (isValid) return "valid";
		const isSomePending = statuses.some((status) => status === "pending");
		if (isSomePending) return "pending";
		return "invalid";
	}, [data]);

	const length = useMemo(() => data.length, [data]);

	const isValid = useMemo(() => status === "valid", [status]);

	const isInvalid = useMemo(() => status === "invalid", [status]);

	const isPending = useMemo(() => status === "pending", [status]);

	const controls = useMemo((): FormControls<T>[] => {
		const controls = data.map((item: FormState, index: number) => {
			const controls: FormControls = {};
			for (const key in item) {
				controls[key] = {
					...item[key],
					setValue: (value: any) => {},
					setError: (error: ValidatorError | null) => {},
					setPending: () => {},
					reset: () => {},
					markAsDirty: () => {},
					markAsPristine: () => {},
					markAsTouched: () => {},
					markAsUntouched: () => {},
					markAsIndeterminate: () => {},
					markAsDeterminate: () => {},
					markAsDisabled: () => {},
					markAsEnabled: () => {},
					validate: () => {},
					setValidators: (validators: ValidatorFn[], emitSelf?: boolean) => {},
					clearValidators: (emitSelf?: boolean) => {},
					setMask: (mask: MaskFn, emitSelf?: boolean) => {},
					clearMask: (emitSelf?: boolean) => {},
				};
			}

			return controls;
		});

		return controls;
	}, [data]);

	const at = (index: number) => {};

	const removeAt = (index: number) => {};

	const push = (value: FormSchema<T>[]) => {};

	const reset = () => {};

	return {};
}
