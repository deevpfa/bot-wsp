import { iAccount } from "./account.interface";
import { Benefit } from "./benefit.interface";
import { PaymentMethod } from "./paymentMethods.interface";
import { iUser } from "./user.interface";

export interface Receipt {
	/** ID autoincremental del recibo */
	id: number;
	/** UID unico del recibo */
	uid: string;
	/** Estado del recibo */
	status: eReceiptStatus;
	/** Monto total del recibo */
	amount: number;
	/** Moneda de la transacción */
	currency: string;
	/** ID de Transación */
	transactionId: string;
	/** Metodo de pago */
	paymentMethod: PaymentMethod;
	/** Creditos */
	credits: number;
	/** Beneficio adherido */
	benefit: Benefit;
	/** Cuenta vinculada al recibo */
	account: iAccount;
	/** Creado por */
	createdBy: iUser;
	/** Fecha de creación */
	createdAt: number;
	/** Fecha de actualización */
	updatedAt: number;
	/** Fecha de eliminación */
	deletedAt: number | null;
}

export enum eReceiptStatus {
	INITIAL = "INITIAL",
	PENDING = "PENDING",
	APPROVED = "APPROVED",
	REJECTED = "REJECTED",
}
