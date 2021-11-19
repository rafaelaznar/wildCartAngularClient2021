import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/model/model-interfaces';
import {
	ITipoUsuarioPage,
	IUserTypePlist,
} from 'src/app/model/tipousuario-interfaces';
import { PaginationService } from 'src/app/service/pagination.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
	selector: 'app-plist-tipousuario',
	templateUrl: './plist-tipousuario.component.html',
	styleUrls: ['./plist-tipousuario.component.css'],
})
export class PlistTipousuarioComponent implements OnInit {
	public userTypes: Array<IUserTypePlist>;
	public barraPaginacion: string[];
	public totalPages: number;
	public totalElements: number;
	public pageSize: number;
	public page: number;
	public orderBy: string;
	public orderAs: boolean;
	public headers: string[];

	constructor(
		private oPaginationService: PaginationService,
		private tipoUsuario: TipousuarioService
	) {
		this.headers = ['id', 'nombre'];
		this.pageSize = 2;
		this.orderBy = this.headers[0];
		this.orderAs = true;
		this.getPage(1);
	}

	getPage(page: number): boolean {
		this.tipoUsuario
			.plist(page - 1, this.pageSize, this.orderBy, this.orderAs)
			.subscribe((data: ITipoUsuarioPage) => {
				console.log(data);
				this.userTypes = data.content;
				this.page = page;
				this.totalPages = data.totalPages;
				this.totalElements = data.totalElements;
				this.barraPaginacion = this.oPaginationService.pagination(
					this.totalPages,
					this.page
				);
			});

		return false;
	}

	ngOnInit(): void {}

	modifyOrder(value: string): boolean {
		this.orderAs = value == this.orderBy ? !this.orderAs : false;
		this.orderBy = value;
		this.getPage(this.page);

		return false;
	}
}
