import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { RandomLoadService } from 'src/app/service/randomload.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-randomload',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  oUserSession: IUsuario;
  nProductos: number = 0;
  nUsuarios: number = 0;
  nTiposDeUsuario: number = 0;
  nTiposProducto: number = 0;
  nCompras: number = 0;
  nFacturas: number = 0;
  nCarritos: number = 0;
  strResult: string = "";

  constructor(
    public oRandomLoadService: RandomLoadService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location,
    public oIconService: IconService
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.getCount();
  }

  ngOnInit(): void { }

  getCount(): void {
    this.oRandomLoadService.getCountProductos().subscribe(number => this.nProductos = number);
    this.oRandomLoadService.getCountCarritos().subscribe(number => this.nCarritos = number);
    this.oRandomLoadService.getCountCompras().subscribe(number => this.nCompras = number);
    this.oRandomLoadService.getCountFacturas().subscribe(number => this.nFacturas = number);
    this.oRandomLoadService.getCountTiposProducto().subscribe(number => this.nTiposProducto = number);
    this.oRandomLoadService.getCountUsuarios().subscribe(number => this.nUsuarios = number);
    this.oRandomLoadService.getCountTiposUsuario().subscribe(number => this.nTiposDeUsuario = number);
  }

  goBack() {
    this.oLocation.back();
  }

  generateProductos(n: number): void {
    this.oRandomLoadService.generateProductos(n).subscribe(number => this.strResult = "Se han creado " + number + " registros");
  }

  generateUsuarios(n: number): void {
    this.oRandomLoadService.generateUsuarios(n).subscribe(number => this.strResult = "Se han creado " + number + " registros");
  }

  //modal 

  eventsModalSubject: Subject<void> = new Subject<void>();

  openModal() {
    this.eventsModalSubject.next();
  }

  closeModal() {
    this.getCount();
    this.strResult = "";
  }

}
