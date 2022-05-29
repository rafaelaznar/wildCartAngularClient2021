import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';
import { debounceTime } from 'rxjs/operators';
import { PaginationService } from 'src/app/service/pagination.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ITipoproducto, ITipoproductoPage } from 'src/app/model/tipoproducto-interfaces';

@Component({
  selector: 'app-tipoproductoplistunrouted',
  templateUrl: './tipoproducto-plist-unrouted.component.html',
  styleUrls: ['./tipoproducto-plist-unrouted.component.css'],
})
export class TipoProductoPlistUnroutedComponent implements OnInit {

  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  //@ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strEntity: string = 'tipoproducto';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Tipo Producto';
  strATitleSingular: string = "El tipo de producto";
  strTitlePlural: string = 'Tipos de producto';
  strATitlePlural: string = 'Los tipos de producto';
  //
  aTipoproductos: ITipoproducto[];
  //
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;
  aPaginationBar: string[];
  nPageSize: number = 10;
  //
  strSortField: string = "";
  strSortDirection: string = "";
  //
  strFilter: string = "";
  strFilteredMessage: string = "";
  subjectFilter = new Subject();
  //  
  strResult: string = null;

  constructor(
    private oPaginationService: PaginationService,
    private oPostService: TipoproductoService,
    public oIconService: IconService,
  ) {
  }

  ngOnInit(): void {
    this.subjectFilter
      .pipe(debounceTime(1000))
      .subscribe(() => this.getPage());
    this.nPage = 1;
    this.getPage();
  }

  getPage = () => {
    this.oPostService
      .getPage(this.nPageSize, this.nPage, this.strFilter, this.strSortField, this.strSortDirection)
      .subscribe((oPage: ITipoproductoPage) => {
        if (this.strFilter) {
          this.strFilteredMessage = 'Listado filtrado por ' + this.strFilter;
        } else {
          this.strFilteredMessage = 'Listado NO filtrado';
        }
        this.aTipoproductos = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.nTotalPages = oPage.totalPages;
        this.aPaginationBar = this.oPaginationService.pagination(
          this.nTotalPages,
          this.nPage
        );
      });
  };

  jumpToPage = () => {
    this.getPage();
    return false;
  };

  onKeyUpFilter(event: KeyboardEvent): void {
    this.subjectFilter.next();
  }

  doFilter() {
    this.getPage();
  }

  doResetFilter() {
    this.strFilter = '';
    this.getPage();
  }

  doResetOrder() {
    this.strSortField = '';
    this.strSortDirection = '';
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

  onSelection(id: number) {
    this.selection.emit(id);
  }
}
