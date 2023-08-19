export interface iUID {
	/** ID Autoincremental */
	id: number;
	/** UID unico */
	uid: string;
}

export interface iAt {
	/** Fecha de creación */
	createdAt: number;
	/** Fecha de actualización */
	updatedAt: number;
	/** Fecha de eliminación */
	deletedAt?: number | null;
}
