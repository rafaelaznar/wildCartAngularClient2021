import { Component, OnInit } from '@angular/core';
import {
	IUserType,
	IUserTypePlist,
} from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
	selector: 'app-plist-tipousuario',
	templateUrl: './plist-tipousuario.component.html',
	styleUrls: ['./plist-tipousuario.component.css'],
})
export class PlistTipousuarioComponent implements OnInit {
	public userTypes: Array<IUserType>;

	constructor(private tipoUsuario: TipousuarioService) {
		this.tipoUsuario
			.plist(1, 1, 'id', true)
			.subscribe((data: IUserTypePlist) => {});
	}

	ngOnInit(): void {}
}
