import { InputAction, FormStatus, InputState, ValidatorError } from "../interfaces";
import { validate } from "./validate";

export function setInputValue(value: any): InputAction {
	return (state) => {
		const { mask, parse, validators } = state;

		value = mask ? mask(value) : value;

		let parsed = parse ? parse(value) : value;

		let error = validate(value, validators);

		return { ...state, value, parsed, error, status: error ? "invalid" : "valid" };
	};
}

export const setInputStatus = (status: FormStatus): InputAction => {
	return (state) => {
		return {
			...state,
			status,
		};
	};
};

export const setInputError = (error: ValidatorError | null): InputAction => {
	return (state) => {
		return {
			...state,
			error,
			status: error ? "invalid" : "valid",
		};
	};
};

export const resetInput = (initialState: InputState): InputAction => {
	return () => {
		return {
			...initialState,
		};
	};
};
