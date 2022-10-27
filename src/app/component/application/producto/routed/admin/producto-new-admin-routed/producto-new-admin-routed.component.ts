import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-producto-new-admin-routed',
  templateUrl: './producto-new-admin-routed.component.html',
  styleUrls: ['./producto-new-admin-routed.component.css']
})

export class ProductoNewAdminRoutedComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.product;
  strOperation: string = Constants.OPERATIONS.new;
  id: number = null;
  strUsuarioSession: string;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    public oMetadataService: MetadataService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id = this.oActivatedRoute.snapshot.params.id
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void { }

  reportResult = (oResult: any): void => {
    this.id = oResult.id;
    this.openPopup(oResult.strMsg);
  };

  goBack(): void {
    this.oLocation.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }

}
