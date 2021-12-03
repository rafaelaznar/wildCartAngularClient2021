import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { GenerateService } from 'src/app/service/generate.service';
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
    public oGenerateService: GenerateService,
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
    this.oGenerateService.getCountProductos().subscribe(number => this.nProductos = number);
    this.oGenerateService.getCountCarritos().subscribe(number => this.nCarritos = number);
    this.oGenerateService.getCountCompras().subscribe(number => this.nCompras = number);
    this.oGenerateService.getCountFacturas().subscribe(number => this.nFacturas = number);
    this.oGenerateService.getCountTiposProducto().subscribe(number => this.nTiposProducto = number);
    this.oGenerateService.getCountUsuarios().subscribe(number => this.nUsuarios = number);
    this.oGenerateService.getCountTiposUsuario().subscribe(number => this.nTiposDeUsuario = number);
  }

  goBack() {
    this.oLocation.back();
  }

  generateProductos(n: number): void {
    this.oGenerateService.generateProductos(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " productos";
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.openModal();
      })
  }

  generateUsuarios(n: number): void {
    this.oGenerateService.generateUsuarios(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " usuarios";
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.openModal();
      })
  }

  generateTiposDeProductos(n: number): void {
    this.oGenerateService.generateTiposDeProductos(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " productos";
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.openModal();
      })
  }

  generateCompras(n: number): void {
    this.oGenerateService.generateCompras(n).subscribe(
      (num: number) => {
        this.strResult = "Se han creado " + num + " compras";
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.openModal();
      })
  }

  generateFacturas(n: number): void {
    this.oGenerateService.generateFacturas(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " facturas";
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.openModal();
      })
  }

  generateCarritos(n: number): void {
    this.oGenerateService.generateCarritos(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " carritos";
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.openModal();
      })
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
