import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/model/constants';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-usuario-view-admin-routed',
  templateUrl: './usuario-view-admin-routed.component.html',
  styleUrls: ['./usuario-view-admin-routed.component.css'],
})

export class UsuarioViewAdminRoutedComponent implements OnInit {
  
  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.view
  //
  id: number;
  strUsuarioSession: string;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;    
  }

  ngOnInit(): void {}

}