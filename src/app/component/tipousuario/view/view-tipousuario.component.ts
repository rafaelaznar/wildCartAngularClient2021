import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserType } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
	selector: 'app-view-tipousuario',
	templateUrl: './view-tipousuario.component.html',
	styleUrls: ['./view-tipousuario.component.css'],
})
export class ViewTipousuarioComponent implements OnInit {
	public tipoUsuario: IUserType;

	constructor(
		private tipoUsuarioService: TipousuarioService,
		private activatedRoute: ActivatedRoute
	) {
		this.tipoUsuarioService
			.view(this.activatedRoute.snapshot.params.id)
			.subscribe((data: IUserType) => {
				this.tipoUsuario = data;
			});
	}

	ngOnInit(): void {}

	goBack(): void {
		this.tipoUsuarioService.redirectPlist();
	}
}
