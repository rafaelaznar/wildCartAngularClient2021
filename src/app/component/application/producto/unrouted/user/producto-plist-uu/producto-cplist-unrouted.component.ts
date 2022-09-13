import { ProductoService } from '../../../../../../service/producto.service';
import { IProductoPage, IProducto } from 'src/app/model/producto-interfaces';
import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { PaginationService } from 'src/app/service/pagination.service';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { debounceTime } from 'rxjs/operators';
import { CarritoService } from 'src/app/service/carrito.service';
import { ProductoCarritoViewService } from 'src/app/service/productocarritoview.service';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-producto-cplist-unrouted',
  templateUrl: './producto-cplist-unrouted.component.html',
  styleUrls: ['./producto-cplist-unrouted.component.css']
})
export class ProductoCPlistUnroutedComponent implements OnInit {

  @Input() id_tipousuario_session: number = null;
  @Input() id_tipoproducto: number = null;

  @Output() addCarritoEE = new EventEmitter<number>();
  @ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strEntity: string = "producto"
  strOperation: string = "plist"
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";
  aProductos: IProducto[];
  aPaginationBar: string[];
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;
  nPageSize: number = 10;
  strResult: string = null;
  strFilter: string = "";
  strSortField: string = "";
  strSortDirection: string = "";
  strFilteredMessage: string = "";
  oUserSession: IUsuario;
  subjectFiltro$ = new Subject();
  barraPaginacion: string[];




  constructor(
    //    private oRoute: ActivatedRoute,
    //    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oProductoService: ProductoCarritoViewService,
    private oCarritoService: CarritoService,
    public oIconService: IconService
  ) {
    /*
        if (this.oRoute.snapshot.data.message) {
          this.oUserSession = this.oRoute.snapshot.data.message;
          localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
        } else {
          localStorage.clear();
          oRouter.navigate(['/home']);
        }
    */
    //    this.id_tipoproducto = this.oRoute.snapshot.params.id_tipoproducto;

    if (this.id_tipoproducto) {
      this.strFilteredMessage = "Listado filtrado por el tipo de producto " + this.id_tipoproducto;
    } else {
      this.strFilteredMessage = "";
    }

    this.nPage = 1;
    this.getPage();
  }

  ngOnInit(): void {
    this.subjectFiltro$.pipe(
      debounceTime(1000)
    ).subscribe(() => this.getPage());
  }

  getPage = () => {
    this.oProductoService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_tipoproducto).subscribe((oPage: IProductoPage) => {
      if (this.id_tipoproducto) {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por el tipo de producto " + this.id_tipoproducto + " y por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado filtrado por el tipo de producto " + this.id_tipoproducto;
        }
      } else {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado NO filtrado";
        }
      }
      this.aProductos = oPage.content;
      this.nTotalElements = oPage.totalElements;
      this.nTotalPages = oPage.totalPages;
      if (this.nPage > this.nTotalPages) {
        this.nPage = this.nTotalPages;
        this.getPage();
      }
      //this.aPaginationBar = this.oPaginationService.pagination(this.nTotalPages, this.nPage);
    })
  }

  jumpToPage = () => {
    this.getPage();
    return false;
  }
  onKeyUpFilter(event: KeyboardEvent): void {
    this.subjectFiltro$.next();
  }

  doResetOrder() {
    this.strSortField = "";
    this.strSortDirection = "";
    this.getPage();
  }

  doSetOrder(order: string) {
    this.strSortField = order;
    if (this.strSortDirection == 'asc') {
      this.strSortDirection = 'desc';
    } else if (this.strSortDirection == 'desc') {
      this.strSortDirection = '';
    } else {
      this.strSortDirection = 'asc';
    }
    this.getPage();
  }

  addCarrito(id_producto: number) {
    this.oCarritoService.add(id_producto, 1).subscribe((result: number) => {
      //console.log("addCarrito:" + result);
      this.addCarritoEE.emit(id_producto);
      this.getPage();
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe((result: number) => {
      //console.log("addCarrito:" + result);
      this.addCarritoEE.emit(id_producto);
      this.getPage();
    })
  }

  onSetFilter(strFilter: string) {
    this.strFilter = strFilter;
    this.getPage();
  }

  onSetPage = (nPage: number) => {
    this.nPage = nPage;
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.nPageSize = nRpp;
    this.getPage();
  }
}