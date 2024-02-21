export type Nullable<V> = V | null;

export type NullableObject<T extends object> = { [K in keyof T]: Nullable<T[K]> };

export type FormSchema<T extends object = any> = {
	[K in keyof T]: InputSchema<T[K]>;
};

export interface InputSchema<V = any> {
	value: V | null;
	validators?: ValidatorFn[];
	mask?: MaskFn | null;
	parse?: ParseFn | null;
	disabled?: boolean;
}

export type ValidatorFn = (value: any) => ValidatorError | null;

export type MaskFn = (value: any) => any;

export type ParseFn = (value: any) => any;

export type ValidatorError = { [key: string]: any };

export type FormStatus = "pending" | "valid" | "invalid";

export type FormState<T extends object = any> = { [K in keyof T]: InputState<T[K]> };

export type FormErrors<T = any> = { [K in keyof T]: ValidatorError | null };

export type FormControls<T extends object = any> = { [K in keyof T]: InputControl<T[K]> };

export interface InputState<V = any> {
	value: V | null;
	parsed: V | null;
	validators: ValidatorFn[];
	mask: MaskFn | null;
	parse: ParseFn | null;
	error: ValidatorError | null;
	status: FormStatus;
	isDirty: boolean;
	isTouched: boolean;
	indeterminate: boolean;
	disabled: boolean;
}

export interface FormGroup<T extends object = any> {
	readonly values: T;
	readonly controls: FormControls<T>;
	readonly errors: FormErrors<T>;
	readonly status: FormStatus;
	readonly isValid: boolean;
	readonly isInvalid: boolean;
	readonly isPending: boolean;
	setValue: (values: Partial<NullableObject<T>>) => void;
	reset: () => void;
	addField: (path: keyof T, input: InputSchema<T[keyof T]>) => void;
	removeField: (path: keyof T) => void;
	useControl: (fn: (data: FormControls<T>) => InputControl<T[keyof T]>) => InputControl<T[keyof T]>;
}

export interface FormArrayGroup<T extends object = any> {
	/* values: T[];
	controls: FormControls<T>[];
	errors: FormErrors<T>[];
	status: FormStatus;
	isValid: boolean;
	isInvalid: boolean;
	isPending: boolean;
	setValue: (values: Partial<NullableObject<T>>[]) => void;
	reset: () => void;
	addField: (path: keyof T, input: InputSchema<T[keyof T]>) => void;
	removeField: (path: keyof T) => void;
	useControl: (fn: (data: FormControls<T>) => InputControl<T[keyof T]>) => InputControl<T[keyof T]>; */
}

export interface InputControl<V = any> extends Readonly<InputState<V>> {
	/** Establece el nuevo valor del input */
	setValue: (value: V | null) => void;
	/** Establece un error customizado del input */
	setError: (error: ValidatorError | null) => void;
	/** Establece el estado en `pending` */
	setPending: () => void;
	/** Restablece el valor por defecto */
	reset: () => void;
	/** Establece que el input esta puerco */
	markAsDirty: () => void;
	/** Establece que el input no esta puerco */
	markAsPristine: () => void;
	/** Establece que el input fue marcado */
	markAsTouched: () => void;
	/** Establece que el input no fue marcado */
	markAsUntouched: () => void;
	/** Establece que el input esta indeterminado */
	markAsIndeterminate: () => void;
	/** Establece que el input esta determinado */
	markAsDeterminate: () => void;
	/** Establece que el input esta deshabilitado */
	markAsDisabled: () => void;
	/** Establece que el input esta habilitado */
	markAsEnabled: () => void;
	/** Valida el input */
	validate: () => void;
	/** Elimina los viejos validadores y pone unos nuevos, emitSelf determina si es necesario realizar la validación con los nuevos validadores */
	setValidators: (validators: ValidatorFn[], emitSelf?: boolean) => void;
	/** Elimina todos los validadores, emitSelf determina si es necesario realizar la validación */
	clearValidators: (emitSelf?: boolean) => void;
	/** Elimina los viejos mutadores y pone unos nuevos, emitSelf determina si es necesario realizar la mutación con los nuevos mutadores */
	setMask: (mutators: MaskFn, emitSelf?: boolean) => void;
	/** Elimina todos los mutadores, emitSelf determina si es necesario realizar la mutación */
	clearMask: (emitSelf?: boolean) => void;
}

export interface InputOptions {
	control?: InputControl;
	value?: any;
	validators?: ValidatorFn[];
	musk?: MaskFn | null;
	parse?: ParseFn | null;
}

export type InputAction = (state: InputState) => InputState;

export type FormAction<T extends object = any> = (state: FormState<T>) => FormState<T>;

export type FormArrayAction<T extends object = any> = (state: FormState<T>[]) => FormState<T>[];
