import { FormState, FormStatus, InputState, ValidatorError, FormAction, InputSchema, NullableObject } from "../interfaces";
import { validate } from "./validate";

export function setFormValue<T extends object = any>(values: Partial<NullableObject<T>>): FormAction<T> {
	return (state) => {
		for (let [key, value] of Object.entries(values)) {
			if (!state[key as keyof T]) continue;

			const { mask, parse, validators } = state[key as keyof T];

			value = mask ? mask(value) : value;

			let parsed = parse ? parse(value) : value;

			let error = validate(value, validators);

			state = {
				...state,
				[key as keyof T]: {
					...state[key as keyof T],
					value,
					parsed,
					error,
					status: error ? "invalid" : "valid",
				},
			};
		}

		return state;
	};
}

export function resetForm<T extends object = any>(initialState: FormState<T>): FormAction<T> {
	return () => {
		return {
			...initialState,
		};
	};
}

export function addFieldForm<T extends object = any>(
	key: keyof T,
	{ value, validators = [], mask = null, parse = null, disabled = false }: InputSchema<T[keyof T]>,
): FormAction<T> {
	return (state) => {
		if (state[key]) return state;

		if (mask && (value !== undefined || value !== null)) value = mask(value);

		let parsed = parse ? parse(value) : value;

		const error = validate(value, validators);

		const fieldState: InputState<T[keyof T]> = {
			value,
			parsed,
			validators,
			mask,
			parse,
			error,
			status: error ? "invalid" : "valid",
			indeterminate: false,
			isDirty: false,
			isTouched: false,
			disabled,
		};

		state = {
			...state,
			[key]: fieldState,
		};

		return state;
	};
}

export function removeFieldForm<T extends object = any>(key: keyof T): FormAction<T> {
	return (state) => {
		if (!state[key]) return state;

		delete state[key];

		return state;
	};
}

export function setFormInputValue<T extends object = any>(key: keyof T, value: T[keyof T] | null): FormAction<T> {
	return (state) => {
		const { mask, parse, validators } = state[key];

		value = mask ? mask(value) : value;

		let parsed = parse ? parse(value) : value;

		let error = validate(value, validators);

		return {
			...state,
			[key]: {
				...state[key],
				value,
				parsed,
				error,
				status: error ? "invalid" : "valid",
			},
		};
	};
}

export function setFormInputStatus<T extends object = any>(key: keyof T, status: FormStatus): FormAction<T> {
	return (state) => {
		return {
			...state,
			[key]: {
				...state[key],
				status,
			},
		};
	};
}

export function setFormInputError<T extends object = any>(key: keyof T, error: ValidatorError | null): FormAction<T> {
	return (state) => {
		return {
			...state,
			[key]: {
				...state[key],
				error,
				status: error ? "invalid" : "valid",
			},
		};
	};
}

export function resetFormInput<T extends object = any>(key: keyof T, initialState: InputState): FormAction<T> {
	return (state) => {
		return {
			...state,
			[key]: {
				...initialState,
			},
		};
	};
}
