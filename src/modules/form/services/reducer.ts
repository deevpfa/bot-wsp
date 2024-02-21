import { InputAction, InputState, FormState, FormAction, FormArrayAction } from "../interfaces";

export const formReducer = <T extends object>(state: FormState, action: FormAction<T>) => {
	if (action) return action(state);

	return state;
};

export const arrayFormReducer = <T extends object>(state: FormState<T>[], action: FormArrayAction<T>) => {
	if (action) return action(state);

	return state;
};

export const controlReducer = (state: InputState, action: InputAction): InputState => {
	if (action) return action(state);

	return state;
};
