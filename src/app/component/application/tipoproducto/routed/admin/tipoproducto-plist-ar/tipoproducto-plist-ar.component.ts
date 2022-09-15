import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-tipoproducto-plist-admin-routed',
  templateUrl: './tipoproducto-plist-ar.component.html',
  styleUrls: ['./tipoproducto-plist-ar.component.css']
})

export class PlistTipoproductoAdminComponent implements OnInit {

  strEntity: string = "tipoproducto"
  strOperation: string = "plist"
  strTitleSingular: string = "Tipo de producto";
  strTitlePlural: string = "Tipos de producto";

  strUsuarioSession: string;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    public oIconService: IconService
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
