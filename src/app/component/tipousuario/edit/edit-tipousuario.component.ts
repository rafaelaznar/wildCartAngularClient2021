import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUserType } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
	selector: 'app-edit-tipousuario',
	templateUrl: './edit-tipousuario.component.html',
	styleUrls: ['./edit-tipousuario.component.css'],
})
export class EditTipousuarioComponent implements OnInit {
	formUpdatePost: FormGroup;
	id: number = null;
	oUserType: IUserType;

	constructor(
		private FormBuilder: FormBuilder,
		private oActivatedRoute: ActivatedRoute,
		public oUserTypeService: TipousuarioService
	) {
		this.formUpdatePost = <FormGroup>this.FormBuilder.group({
			id: [''],
			nombre: ['', [Validators.required, Validators.minLength(4)]],
		});

		this.id = this.oActivatedRoute.snapshot.params.id;
		this.oUserTypeService.view(this.id).subscribe((data: IUserType) => {
			this.formUpdatePost = <FormGroup>this.FormBuilder.group({
				id: [data.id],
				nombre: [data.nombre, [Validators.required, Validators.minLength(4)]],
			});
		});
	}

	ngOnInit(): void {}

	updateUserType(): void {
		if (this.formUpdatePost.get('nombre')!.valid) {
			let data: any = this.oUserTypeService.postJsonFormater(
				this.formUpdatePost
			);
			this.oUserTypeService.edit(data).subscribe((data: IUserType) => {
				console.log(data);
			});

			this.oUserTypeService.redirectPlist();
		}
	}
}
