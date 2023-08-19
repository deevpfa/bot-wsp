import { iMovement } from "./movements.interface";
import { iStatement } from "./statements.interface";
import { iUser } from "./user.interface";

export interface iAccount {
	/** ID autoincremental de la cuenta */
	id: number;
	/** UID unico de la cuenta */
	uid: string;
	/** Nombre de representación de la cuenta */
	name: string;
	/** ID Fiscal */
	taxId: string;
	/** Email de Contacto */
	email: string;
	/**	Avatar */
	avatar: string;
	/** Tipo de cuenta */
	plan: eAccountPlan;
	/** Estado de la cuenta */
	status: eAccountStatus;
	/** Creditos */
	credits: number;
	/** Determina si el la cuenta esta verificada */
	accountVerified: boolean;
	/** Creador de la cuenta */
	owner: iUser;
	/** Se almacena como un arreglo de uids, pero representa un arreglo de clientes asociados a la cuenta */
	users: iUser[];
	/** Usuarios admins */
	admins: iUser[];
	/** Movimientos */
	movements: iMovement[];
	/** Facturas */
	statements: iStatement[];
	/** Fecha de creación */
	createdAt: number;
	/** Fecha de actualización */
	updatedAt: number | null;
}

export enum eAccountStatus {
	/** La cuenta esta activa */
	ACTIVE = "ACTIVE",
	/** La cuenta esta pausada para operar */
	PAUSED = "PAUSED",
	/** La cuenta esta bloqueada para operar */
	BLOCKED = "BLOCKED",
}

export enum eAccountPlan {
	/** Cuenta Classic */
	CLASSIC = "CLASSIC",
	/** Cuenta Premium */
	PREMIUM = "PREMIUM",
}

export interface iAccountInfo {
	id: number;
	uid: string;
	name: string;
	avatar: string;
	credits: number;
}
