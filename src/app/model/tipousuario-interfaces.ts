export interface ITipousuario {
	id: number;
	nombre: string;
	usuarios: number;
}

export interface ITipousuario2Send {
	id: number;
	nombre: string;
}

export interface ITipousuarioPage {
	content: ITipousuario[];
	totalElements: number;
	totalPages: number;
}
