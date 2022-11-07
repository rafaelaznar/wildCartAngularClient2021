import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Location } from '@angular/common';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-usuario-view-user-routed',
  templateUrl: './usuario-view-user-routed.component.html',
  styleUrls: ['./usuario-view-user-routed.component.css'],
})

export class UsuarioViewUserRoutedComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.view
  id: number;
  strUsuarioSession: string;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    oRouter: Router,
    public oMetadataService: MetadataService,
    protected oLocation: Location
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

  ngOnInit(): void { }

}