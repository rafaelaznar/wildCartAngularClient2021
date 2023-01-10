import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-comment-view-user-routed',
  templateUrl: './comment-view-user-routed.component.html',
  styleUrls: ['./comment-view-user-routed.component.css']
})

export class ProductoViewUserRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.comment
  strOperation: string = Constants.OPERATIONS.view
  id: number = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    protected oMetadataService: MetadataService,
    protected oLocation: Location,
    private oCarritoService: CarritoService
  ) {
    super(Constants.PROFILES.user, oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit() { }


}