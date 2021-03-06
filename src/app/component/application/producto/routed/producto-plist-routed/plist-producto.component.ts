import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';

@Component({
  selector: 'app-plist-producto',
  templateUrl: './plist-producto.component.html',
  styleUrls: ['./plist-producto.component.css']
})
export class PlistProductoComponent implements OnInit {
  strEntity: string = "producto"
  strOperation: string = "plist"
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";

  oUserSession: IUsuario;
  subjectFiltro$ = new Subject();
  id_tipoproducto: number = null;

  constructor(    
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oIconService: IconService
  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      this.oUserSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      this.oRouter.navigate(['/home']);
    }

    this.id_tipoproducto = this.oActivatedRoute.snapshot.params.id_tipoproducto;
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void {
  }

}



