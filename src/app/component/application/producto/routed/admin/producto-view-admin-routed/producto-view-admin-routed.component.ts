import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';
@Component({
  selector: 'app-producto-view-admin-routed',
  templateUrl: './producto-view-admin-routed.component.html',
  styleUrls: ['./producto-view-admin-routed.component.css']
})

export class ProductoViewAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.view
  id: number = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit() { }

}