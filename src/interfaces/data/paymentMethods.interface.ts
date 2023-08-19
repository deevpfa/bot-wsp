// import { CredentialsMercadoPago } from "@/pages/api/modules/database/interfaces/PaymentMethods";

export interface PaymentMethod {
	/** ID autoincremental del metodo de pago */
	id: number;
	/** Uid unico del metodo de pago */
	uid: string;
	/** Nombre del Metodo */
	name: string;
	/** Descripción */
	description: string;
	/** Icono  */
	icon: string;
	/** Color */
	color: string;
	/** Tipo de metodo de pago */
	type: PaymentType;
	/** Determina si esta habilitado el servicio */
	isEnabled: boolean;
	/** Determina si esta en modo desarrollo */
	isSandbox: boolean;
}

export enum PaymentType {
	MercadoPago = "mercadopago",
}
