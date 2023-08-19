import { iAccountInfo } from "./account.interface";
import { iUserInfo } from "./user.interface";

export interface iMovement {
	/** ID autoincremental del movimiento */
	id: number;
	/** UID unico del movimiento */
	uid: string;
	/** Estado del movimiento */
	status: eMovementStatus;
	/** Creditos percibidos en el movimiento */
	credits: number;
	/** Balance total percibido mediante la modificación de los creditos */
	balance: number;
	/** Cuenta vinculada al movimiento */
	account: iAccountInfo;
	/** Creado por */
	createdBy: iUserInfo;
	/** Fecha de creación */
	createdAt: number;
	/** Fecha de actualización */
	updatedAt: number;
	/** Fecha de eliminación */
	deletedAt: number;
}

export enum eMovementStatus {
	PENDING = "PENDING",
	APPROVED = "APPROVED",
}
