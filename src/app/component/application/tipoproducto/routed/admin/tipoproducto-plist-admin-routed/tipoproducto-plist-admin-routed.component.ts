import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-tipoproducto-plist-admin-routed',
  templateUrl: './tipoproducto-plist-admin-routed.component.html',
  styleUrls: ['./tipoproducto-plist-admin-routed.component.css']
})

export class TipoproductoPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.producttype
  strOperation: string = Constants.OPERATIONS.plist

  constructor(
    oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(oRouter, oActivatedRoute);
  }

  ngOnInit(): void { }

}
