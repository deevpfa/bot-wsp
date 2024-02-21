import { MaskFn, FormAction, InputAction } from "../interfaces";

export function setMaskInput(mask: MaskFn | null, emitSelf: boolean = true): InputAction {
	return (state) => {
		let { value } = state;
		if (!emitSelf) return { ...state, mask };

		value = mask ? mask(value) : value;

		return {
			...state,
			value,
			mask,
		};
	};
}

export function setMaskFormInput<T extends object = any>(path: keyof T, mask: MaskFn | null, emitSelf: boolean = true): FormAction {
	return (state) => {
		let { value } = state[path];
		if (!emitSelf) return { ...state, [path]: { ...state[path], mask } };

		value = mask ? mask(value) : value;

		return {
			...state,
			[path]: {
				...state[path],
				value,
				mask,
			},
		};
	};
}
