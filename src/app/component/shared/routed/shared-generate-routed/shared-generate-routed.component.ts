import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { GenerateService } from 'src/app/service/generate.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { CountService } from 'src/app/service/count.service';

@Component({
  selector: 'app-shared-generate-unrouted',
  templateUrl: './shared-generate-routed.component.html',
  styleUrls: ['./shared-generate-routed.component.css']
})
export class SharedGenerateUnroutedComponent implements OnInit {

  oUserSession: IUsuario;
  nProductos: number = 0;
  nUsuarios: number = 0;
  nTiposDeUsuario: number = 0;
  nTiposProducto: number = 0;
  nCompras: number = 0;
  nFacturas: number = 0;
  nCarritos: number = 0;
  strResult: string = "";
  bLoading:boolean=false;

  constructor(
    public oGenerateService: GenerateService,
    public oCountService: CountService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService
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
    this.bLoading=true;
    this.oCountService.getCountProductos().subscribe((n: number) => this.nProductos = n);
    this.oCountService.getCountCarritos().subscribe((n: number) => this.nCarritos = n);
    this.oCountService.getCountCompras().subscribe((n: number) => this.nCompras = n);
    this.oCountService.getCountFacturas().subscribe((n: number) => this.nFacturas = n);
    this.oCountService.getCountTiposProducto().subscribe((n: number) => this.nTiposProducto = n);
    this.oCountService.getCountUsuarios().subscribe((n: number) => this.nUsuarios = n);
    this.oCountService.getCountTiposUsuario().subscribe((n: number) => this.nTiposDeUsuario = n);
    this.bLoading=false;
  }

  generateProductos(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateProductos(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " productos";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }

  generateUsuarios(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateUsuarios(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " usuarios";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }

  generateTiposDeUsuario() {
    this.bLoading=true;
    this.oGenerateService.generateTiposDeUsuario().subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " tipos de producto";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }

  generateTiposDeProductos(n: number) {
    this.bLoading=true;
    this.oGenerateService.generateTiposDeProductos(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " tipos de producto";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }

  generateCompras(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateCompras(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " compras";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }

  generateFacturas(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateFacturas(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " facturas";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }

  generateCarritos(n: number): void {
    this.bLoading=true;
    this.oGenerateService.generateCarritos(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " carritos";
        this.bLoading=false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading=false;
        this.openModal();
      })
  }


//modal 

eventsModalSubject: Subject<string> = new Subject<string>();

openModal() {
  this.eventsModalSubject.next();
}

onCloseModal() {
  this.getCount();
  this.strResult = "";
}

}
