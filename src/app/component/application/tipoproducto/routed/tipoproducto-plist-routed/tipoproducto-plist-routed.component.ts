import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-tipoproducto-plist-routed',
  templateUrl: './tipoproducto-plist-routed.component.html',
  styleUrls: ['./tipoproducto-plist-routed.component.css']
})

export class PlistTipoproductoComponent implements OnInit {

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
