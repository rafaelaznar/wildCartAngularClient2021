import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-tipoproducto-plist-admin-routed',
  templateUrl: './tipoproducto-plist-admin-routed.component.html',
  styleUrls: ['./tipoproducto-plist-admin-routed.component.css']
})

export class TipoproductoPlistAdminRoutedComponent implements OnInit {

  strEntity: string = "tipoproducto"
  strOperation: string = "plist"
  strTitleSingular: string = "Tipo de producto";
  strTitlePlural: string = "Tipos de producto";

  strUsuarioSession: string;

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

  }

  ngOnInit(): void {
  }

}
