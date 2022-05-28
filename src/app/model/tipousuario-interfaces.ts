export interface ITipousuario {
	id: number;
	nombre: string;
	usuarios: number;
}

export interface ITiposuario2Send {
	id: number;
	nombre: string;
}

export interface ITipousuarioPage {
	content: ITipousuario[];
	totalElements: number;
	totalPages: number;
}
