export interface ITipousuario {
	id: number;
	nombre: string;
}

export interface ITipousuarioPlist {
	id: number;
	nombre: string;
	usuarios: number;
}

export interface ITipoUsuarioPage {
	content: ITipousuarioPlist[];
	totalElements: number;
	totalPages: number;
}
