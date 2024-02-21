import { createContext } from "react";
import { FormErrors, FormGroup, FormStatus } from "../interfaces";

export const FormContext = createContext<FormGroup["useControl"] | null>(null);

export interface FormProps<T extends object = any> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
	group: FormGroup<T>;

	onSubmit?: (values: T, status: FormStatus, error: FormErrors<T>) => void;
}

export function Form({ group, onSubmit, children, ...rest }: FormProps) {
	const { values, errors, status } = group;

	async function handleOnSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault();
		if (onSubmit) onSubmit(values, status, errors);
	}

	return (
		<form onSubmit={onSubmit ? handleOnSubmit : undefined} {...rest}>
			<FormContext.Provider value={group.useControl}>{children}</FormContext.Provider>
		</form>
	);
}
