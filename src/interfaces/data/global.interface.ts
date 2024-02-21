export interface iID {
	/** ID Autoincremental */
	id: number;
}

export interface iUID {
	/** ID Unico */
	uid: string;
}

export interface iAt {
	/** Fecha de creación */
	createdAt: number;
	/** Fecha de actualización */
	updatedAt: number | null;
	/** Fecha de eliminación */
	deletedAt: number | null;
}