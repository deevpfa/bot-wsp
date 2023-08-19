import { iAccountInfo } from "./account.interface";
import { iUID, iAt } from "./global.interface";

export interface iUserAuth {
	/** Email del usuario */
	email: string;
	/** Contraseña del usuario */
	password?: string;
}

export interface iUserAccount {
	/** Cuenta a la que pertenece el usuario */
	accounts: iAccountInfo[];
	/** Rol del usuario */
	role: eUserRole;
}

export enum eUserRole {
	ADMIN = "ADMIN",
	USER = "USER",
}

export interface iUserVerify {
	/** Determina si el email esta verificado */
	emailVerified: boolean;
	/** Determina si el telefono esta verificado */
	phoneVerified: boolean;
}

export interface iUserInfo extends iUID {
	/** Nombre del usuario */
	firstName: string;
	/** Apellido del usuario */
	lastName: string;
	/** Avatar del usuario */
	avatar: string | any;
}

export interface iUserAddress {
	/** Teléfono del usuario */
	phone?: string;
	/** Prefijo del teléfono del usuario */
	phonePrefix?: string;
	/** Dirección del usuario */
	address?: string;
	/** Ciudad del usuario */
	city?: string;
	/** Estado del usuario */
	state?: string;
	/** País del usuario */
	country?: string;
	/** Código postal del usuario */
	zip?: string;
}

export interface iUser extends iUID, iAt, iUserAuth, iUserAccount, iUserVerify, Omit<iUserInfo, "id" | "uid">, iUserAddress {}
