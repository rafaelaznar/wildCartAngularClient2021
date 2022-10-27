import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/model/constants';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-usuario-plist-admin-routed',
  templateUrl: './usuario-plist-admin-routed.component.html',
  styleUrls: ['./usuario-plist-admin-routed.component.css']
})

export class UsuarioPlistAdminRoutedComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.plist

  strUsuarioSession: string;

  id_tipousuario: number = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,    
    public oMetadataService: MetadataService
  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      this.oRouter.navigate(['/home']);
    }
    this.id_tipousuario = this.oActivatedRoute.snapshot.params.id_tipousuario;

  }

  ngOnInit(): void { }

}