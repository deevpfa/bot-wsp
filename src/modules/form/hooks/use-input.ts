import { useContext, useReducer, useRef } from "react";
import { controlReducer } from "../services/reducer";
import { InputControl, InputSchema, InputState, MaskFn, ValidatorError, ValidatorFn } from "../interfaces";
import { validate as fValidate, setValidatorsInput, validateInput } from "../functions/validate";
import { setMaskInput } from "../functions/mask";
import { resetInput, setInputError, setInputStatus, setInputValue } from "../functions/set-input";
import { markDeterminateInput, markDirtyInput, markDisabledInput, markTouchedInput } from "../functions/mark-as";
import { FormContext } from "../components/form";

export interface UseInput<V = any> extends InputSchema<V> {
	name?: string;

	control?: InputControl<V>;
}

function initialStateSchema<V = any>({ value, validators = [], mask = null, parse = null, disabled = false }: UseInput<V>): InputState<V> {
	let error = fValidate(value, validators);

	if (mask && (value !== undefined || value !== null)) value = mask(value);

	let parsed = parse ? parse(value) : value;

	return {
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

export function useInput<V = any>({ name, control, value, validators = [], mask = null, parse = null, disabled = false }: UseInput<V>): InputControl<V> {
	const initialState = useRef<InputState>(initialStateSchema({ value, validators, mask, parse, disabled }));

	const [state, dispatch] = useReducer(controlReducer, initialState.current);

	const contextControl = useContext(FormContext)?.((data) => data[name || ""]);
	if (contextControl) return contextControl;

	if (control) return control;

	const setValue = (value: any) => dispatch(setInputValue(value));

	const setError = (error: ValidatorError | null) => dispatch(setInputError(error));

	const setPending = () => dispatch(setInputStatus("pending"));

	const reset = () => dispatch(resetInput(initialState.current));

	const markAsDirty = () => dispatch(markDirtyInput(true));

	const markAsPristine = () => dispatch(markDirtyInput(false));

	const markAsTouched = () => dispatch(markTouchedInput(true));

	const markAsUntouched = () => dispatch(markTouchedInput(false));

	const markAsIndeterminate = () => dispatch(markDeterminateInput(true));

	const markAsDeterminate = () => dispatch(markDeterminateInput(false));

	const markAsDisabled = () => dispatch(markDisabledInput(true));

	const markAsEnabled = () => dispatch(markDisabledInput(false));

	const setValidators = (validators: ValidatorFn[], emitSelf?: boolean) => dispatch(setValidatorsInput(validators, emitSelf));

	const clearValidators = (emitSelf?: boolean) => dispatch(setValidatorsInput([], emitSelf));

	const validate = () => dispatch(validateInput());

	const setMask = (mask: MaskFn, emitSelf?: boolean) => dispatch(setMaskInput(mask, emitSelf));

	const clearMask = (emitSelf?: boolean) => dispatch(setMaskInput(null, emitSelf));

	return {
		...state,
		setValue,
		setError,
		setPending,
		markAsDirty,
		markAsPristine,
		markAsTouched,
		markAsUntouched,
		markAsIndeterminate,
		markAsDeterminate,
		markAsDisabled,
		markAsEnabled,
		setValidators,
		clearValidators,
		validate,
		setMask,
		clearMask,
		reset,
	};
}
