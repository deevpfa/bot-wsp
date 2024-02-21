import { eUserRole, iUser } from "../data/user.interface";

export interface iSignIn {
	email: string;
	password: string;
	accountUid?: string;
}

export interface iSignUp {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface iAuth {
	user: iUser;
	token: string;
	expiresIn: number;
}

export interface iTokenPayload {
	userUid: string;
	accountUid: string;
	email: string;
	role: eUserRole;
	isOwner: boolean;
}
