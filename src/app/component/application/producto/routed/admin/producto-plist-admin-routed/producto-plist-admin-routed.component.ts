import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';

@Component({
  selector: 'app-producto-plist-admin-routed',
  templateUrl: './producto-plist-admin-routed.component.html',
  styleUrls: ['./producto-plist-admin-routed.component.css']
})

export class ProductoPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.plist
  id_tipoproducto: number = null;

  constructor(
    protected oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService
  ) {
    super(oRouter, oActivatedRoute);
    this.id_tipoproducto = this.oActivatedRoute.snapshot.params.id_tipoproducto;
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void { }

}



