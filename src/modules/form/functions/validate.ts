import { ValidatorError, ValidatorFn, FormAction, InputAction } from "../interfaces";

export function validate(value: any, validators: ValidatorFn[]) {
	let error: ValidatorError | null = null;
	for (const validator of validators) {
		error = validator(value);
		if (!error) continue;
		break;
	}
	return error;
}

export function validateInput(): InputAction {
	return (state) => {
		const { value, validators } = state;

		let error = validate(value, validators);

		return {
			...state,
			error,
			status: error ? "invalid" : "valid",
		};
	};
}

export function setValidatorsInput(validators: ValidatorFn[], emitSelf: boolean = true): InputAction {
	return (state) => {
		const { value } = state;
		if (!emitSelf) return { ...state, validators };

		let error = validate(value, validators);

		return {
			...state,
			validators,
			error,
			status: error ? "invalid" : "valid",
		};
	};
}

export function validateForm<T extends object = any>(path: keyof T): FormAction {
	return (state) => {
		const { value, validators } = state[path];

		let error = validate(value, validators);

		return {
			...state,
			[path]: {
				...state[path],
				error,
				status: error ? "invalid" : "valid",
			},
		};
	};
}

export function setValidatorsFormInput<T extends object = any>(path: keyof T, validators: ValidatorFn[], emitSelf: boolean = true): FormAction {
	return (state) => {
		const { value } = state[path];
		if (!emitSelf) return { ...state, [path]: { ...state[path], validators } };

		let error = validate(value, validators);

		return {
			...state,
			[path]: {
				...state[path],
				validators,
				error,
				status: error ? "invalid" : "valid",
			},
		};
	};
}
