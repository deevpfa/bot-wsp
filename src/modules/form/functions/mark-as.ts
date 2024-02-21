import { FormAction, InputAction } from "../interfaces";

export function markDirtyInput(isDirty: boolean): InputAction {
	return (state) => {
		return { ...state, isDirty };
	};
}

export function markTouchedInput(isTouched: boolean): InputAction {
	return (state) => {
		return { ...state, isTouched };
	};
}

export function markDeterminateInput(indeterminate: boolean): InputAction {
	return (state) => {
		return { ...state, indeterminate };
	};
}

export function markDisabledInput(disabled: boolean): InputAction {
	return (state) => {
		return { ...state, disabled };
	};
}

export function markDirtyForm<T extends object = any>(path: keyof T, isDirty: boolean): FormAction {
	return (state) => {
		return {
			...state,
			[path]: {
				...state[path],
				isDirty,
			},
		};
	};
}

export function markTouchedForm<T extends object = any>(path: keyof T, isTouched: boolean): FormAction {
	return (state) => {
		return {
			...state,
			[path]: {
				...state[path],
				isTouched,
			},
		};
	};
}

export function markDeterminateForm<T extends object = any>(path: keyof T, indeterminate: boolean): FormAction {
	return (state) => {
		return {
			...state,
			[path]: {
				...state[path],
				indeterminate,
			},
		};
	};
}

export function markDisabledForm<T extends object = any>(path: keyof T, disabled: boolean): FormAction {
	return (state) => {
		return {
			...state,
			[path]: {
				...state[path],
				disabled,
			},
		};
	};
}
