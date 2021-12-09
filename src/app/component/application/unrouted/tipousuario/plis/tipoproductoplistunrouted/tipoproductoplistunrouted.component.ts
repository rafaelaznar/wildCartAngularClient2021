import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { IPage, IPost } from 'src/app/model/model-interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IPageUsuario, IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { debounceTime, map } from 'rxjs/operators';
import { PaginationService } from 'src/app/service/pagination.service';
import { IProducto } from 'src/app/model/producto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import {
  IPageTipoProducto,
  ITipoProducto,
} from 'src/app/model/tipoproducto-interfaces';

@Component({
  selector: 'app-tipoproductoplistunrouted',
  templateUrl: './tipoproductoplistunrouted.component.html',
  styleUrls: ['./tipoproductoplistunrouted.component.css'],
})
export class TipoproductoplistunroutedComponent implements OnInit {
  @Input() id_tipoproducto: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  //@ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strEntity: string = 'Tipoproducto';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Tipo Producto';
  strTitlePlural: string = 'Tipos Productos';
  aPosts: ITipoProducto[];
  nTotalElements: number;
  totalPages: number;
  page: number;
  barraPaginacion: string[];
  pageSize: number = 10;
  id2ShowViewModal: number = 0;
  strUsuarioSession: string;
  strResult: string = null;
  strFilter: string = '';
  currentSortField: string = '';
  currentSortDirection: string = '';

  strFilteredMessage: string = '';
  subjectFiltro$ = new Subject();

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oPostService: TipoproductoService,
    public oIconService: IconService,
    private oActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subjectFiltro$
      .pipe(debounceTime(1000))
      .subscribe(() => this.getPage());
    this.page = 1;
    this.getPage();
  }

  getPage = () => {
    if (this.id_tipoproducto) {
      this.oPostService
        .getPage(
          this.pageSize,
          this.page,
          this.currentSortField,
          this.currentSortDirection,
          this.strFilter
        )
        .subscribe((oPage: IPageTipoProducto) => {
          if (this.strFilter) {
            this.strFilteredMessage =
              'Listado filtrado por el tipo de usuario ' +
              this.id_tipoproducto +
              ' y por ' +
              this.strFilter;
          } else {
            this.strFilteredMessage =
              'Listado filtrado por el tipo de usuario ' + this.id_tipoproducto;
          }
          this.aPosts = oPage.content;
          this.nTotalElements = oPage.totalElements;
          this.totalPages = oPage.totalPages;
          this.barraPaginacion = this.oPaginationService.pagination(
            this.totalPages,
            this.page
          );
        });
    } else {
      this.oPostService
        .getPage(
          this.pageSize,
          this.page,
          this.strFilter,
          this.currentSortField,
          this.currentSortDirection
        )
        .subscribe((oPage: IPageTipoProducto) => {
          if (this.strFilter) {
            this.strFilteredMessage = 'Listado filtrado por ' + this.strFilter;
          } else {
            this.strFilteredMessage = 'Listado NO filtrado';
          }
          this.aPosts = oPage.content;
          this.nTotalElements = oPage.totalElements;
          this.totalPages = oPage.totalPages;
          this.barraPaginacion = this.oPaginationService.pagination(
            this.totalPages,
            this.page
          );
          console.log(oPage);
        });
    }
  };

  jumpToPage = () => {
    this.getPage();
    return false;
  };

  onKeyUpFilter(event: KeyboardEvent): void {
    this.subjectFiltro$.next();
  }

  doFilter() {
    this.getPage();
  }

  doResetFilter() {
    this.strFilter = '';
    this.getPage();
  }

  doResetOrder() {
    this.currentSortField = '';
    this.currentSortDirection = '';
    this.getPage();
  }

  doSetOrder(order: string) {
    this.currentSortField = order;
    if (this.currentSortDirection == 'asc') {
      this.currentSortDirection = 'desc';
    } else if (this.currentSortDirection == 'desc') {
      this.currentSortDirection = '';
    } else {
      this.currentSortDirection = 'asc';
    }
    this.getPage();
  }

  onSelection(id: number) {
    console.log('selection plist emite ' + id);
    this.selection.emit(id);
  }
}
