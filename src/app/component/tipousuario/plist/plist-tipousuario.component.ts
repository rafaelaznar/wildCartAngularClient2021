import { Component, OnInit } from '@angular/core';
import { IUserType } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-plist-tipousuario',
  templateUrl: './plist-tipousuario.component.html',
  styleUrls: ['./plist-tipousuario.component.css'],
})
export class PlistTipousuarioComponent implements OnInit {
  constructor(private tipoUsuario: TipousuarioService) {
    this.tipoUsuario.plist(1, 1, 'id', true).subscribe((data: String) => {
      console.log(data);
    });

    this.tipoUsuario.view(1).subscribe((data: IUserType) => {
      console.log(data);
    });

    const data: IUserType = {
      id: 1,
      nombre: 'admin',
    };

    this.tipoUsuario.edit(data).subscribe((data: IUserType) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
