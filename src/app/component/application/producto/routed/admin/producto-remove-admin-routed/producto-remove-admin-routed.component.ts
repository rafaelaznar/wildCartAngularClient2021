import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-producto-remove-admin-routed',
  templateUrl: './producto-remove-admin-routed.component.html',
  styleUrls: ['./producto-remove-admin-routed.component.css']
})
export class ProductoRemoveAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.remove
  //
  id: number = 0;

  constructor(
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit(): void { }

  removeOne() {
    this.oProductoService.removeOne(this.id).subscribe({
      next: (id: number) => {
        if (id) {
          this.openPopup(this.oMetadataService.getName('OK'));
        } else {
          this.openPopup(this.oMetadataService.getName('KO'));          
        }
      }
    })
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    this.oRouter.navigate(['/', this.strProfile, this.strEntity, 'plist']);
  }

}
