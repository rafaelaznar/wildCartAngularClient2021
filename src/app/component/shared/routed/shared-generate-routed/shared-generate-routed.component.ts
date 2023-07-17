import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { GenerateService } from 'src/app/service/generate.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { CountService } from 'src/app/service/count.service';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/constant/constants';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-shared-generate-unrouted',
  templateUrl: './shared-generate-routed.component.html',
  styleUrls: ['./shared-generate-routed.component.css']
})
export class SharedGenerateUnroutedComponent extends CheckSession implements OnInit {

  oUserSession: IUsuario;
  nProductos: number = 0;
  nUsuarios: number = 0;
  nTiposDeUsuario: number = 0;
  nTiposProducto: number = 0;
  nCompras: number = 0;
  nFacturas: number = 0;
  nCarritos: number = 0;
  strResult: string = '';
  bLoading: boolean = false;

  constructor(
    public oGenerateService: GenerateService,
    public oCountService: CountService,
    public oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    public oSessionService: SessionService
  ) {

    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.getCount();
  }

  ngOnInit(): void { }

  getCount(): void {
    this.bLoading = true;
    this.oCountService.getCountProductos().subscribe({ next: (n: number) => this.nProductos = n });
    this.oCountService.getCountCarritos().subscribe({ next: (n: number) => this.nCarritos = n });
    this.oCountService.getCountCompras().subscribe({ next: (n: number) => this.nCompras = n });
    this.oCountService.getCountFacturas().subscribe({ next: (n: number) => this.nFacturas = n });
    this.oCountService.getCountTiposProducto().subscribe({ next: (n: number) => this.nTiposProducto = n });
    this.oCountService.getCountUsuarios().subscribe({ next: (n: number) => this.nUsuarios = n });
    this.oCountService.getCountTiposUsuario().subscribe({ next: (n: number) => this.nTiposDeUsuario = n });
    this.bLoading = false;
  }

  generateProductos(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateProductos(n).subscribe({
      next: (num: number) => {
        this.strResult = this.oMetadataService.getName('Now there are') + ' ' + num + ' ' + this.oMetadataService.getName('products');
        this.bLoading = false;
        this.openModal();
      },
      error: (err) => {
        this.strResult = 'ERROR: ' + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      }
    })
  }

  generateUsuarios(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateUsuarios(n).subscribe({
      next: (num: number) => {
        this.strResult = this.oMetadataService.getName('Now there are') + ' ' + num + ' ' + this.oMetadataService.getName('users');
        this.bLoading = false;
        this.openModal();
      },
      error: (err) => {
        this.strResult = 'ERROR: ' + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      }
    })
  }

  generateTiposDeUsuario() {
    this.bLoading = true;
    this.oGenerateService.generateTiposDeUsuario().subscribe({
      next: (num: number) => {
        this.strResult = this.oMetadataService.getName('Now there are') + ' ' + num + ' ' + this.oMetadataService.getName('user types');
        this.bLoading = false;
        this.openModal();
      },
      error: (err) => {
        this.strResult = 'ERROR: ' + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      }
    })
  }

  generateTiposDeProductos(n: number) {
    this.bLoading = true;
    this.oGenerateService.generateTiposDeProductos(n).subscribe({
      next: (num: number) => {
        this.strResult = this.oMetadataService.getName('Now there are') + ' ' + num + ' ' + this.oMetadataService.getName('product types');
        this.bLoading = false;
        this.openModal();
      },
      error: (err) => {
        this.strResult = 'ERROR: ' + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      }
    })
  }

  generateCompras(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateCompras(n).subscribe({
      next: (num: number) => {
        this.strResult = this.oMetadataService.getName('Now there are') + ' ' + num + ' ' + this.oMetadataService.getName('purchases');
        this.bLoading = false;
        this.openModal();
      },
      error: err => {
        this.strResult = 'ERROR: ' + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      }
    })
  }

  generateFacturas(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateFacturas(n).subscribe({
      next: (num: number) => {
        this.strResult = this.oMetadataService.getName('Now there are') + ' ' + num + ' ' + this.oMetadataService.getName('invoices');
        this.bLoading = false;
        this.openModal();
      },
      error: (err) => {
        this.strResult = 'ERROR: ' + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      }
    })
  }

  purgeFacturas(): void {
    this.bLoading = true;
    this.oGenerateService.purgeFacturas().subscribe({
      next: (num: number) => {
        this.strResult = this.oMetadataService.getName('Now there are') + ' ' + num + ' ' + this.oMetadataService.getName('invoices') + ' ' + this.oMetadataService.getName('less');
        this.bLoading = false;
        this.openModal();
      },
      error: (err) => {
        this.strResult = 'ERROR: ' + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      }
    })
  }

  generateCarritos(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateCarritos(n).subscribe({
      next: (num: number) => {
        this.strResult = this.oMetadataService.getName('Now there are') + ' ' + num + ' ' + this.oMetadataService.getName('cart items');
        this.bLoading = false;
        this.openModal();
      },
      error: (err) => {
        this.strResult = 'ERROR: ' + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      }
    })
  }

  //modal 

  eventsModalSubject: Subject<string> = new Subject<string>();

  openModal() {
    this.eventsModalSubject.next();
  }

  onCloseModal() {
    this.getCount();
    this.strResult = '';
  }

}
