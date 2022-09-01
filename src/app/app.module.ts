import { PaginationService } from './service/pagination.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { SessionService } from './service/session.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionResolver } from './resolve/session.resolve';
import { TrimPipe } from './pipe/trim.pipe';
import { showDateTimePipe } from './pipe/showDateTime.pipe';
import { FooterComponent } from './component/shared/unrouted/footer/footer.component';
import { showBooleanPipe } from './pipe/showBoolean.pipe';
import { ModalComponent } from './component/shared/unrouted/modal/modal.component';
import { DateTimeService } from './service/datetime.service';
import { HeaderComponent } from './component/shared/unrouted/header/header.component';
import { TipousuarioPlistRoutedComponent } from './component/application/tipousuario/routed/tipousuario-plist-routed/tipousuario-plist-routed.component';
import { TipousuarioEditRoutedComponent } from './component/application/tipousuario/routed/tipousuario-edit-routed/tipousuario-edit-routed.component';
import { TipousuarioViewRoutedComponent } from './component/application/tipousuario/routed/tipousuario-view-routed/tipousuario-view-routed.component';
import { PlistTipoproductoComponent } from './component/application/tipoproducto/routed/tipoproducto-plist-routed/tipoproducto-plist-routed.component';
import { TipoproductoNewRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-new-routed/tipoproducto-new-routed.component';
import { TipoproductoEditRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-edit-routed/tipoproducto-edit-routed.component';
import { TipoproductoRemoveRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-remove-routed/tipoproducto-remove-routed.component';
import { TipoproductoViewRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-view-routed/tipoproducto-view-routed.component';
import { PlistProductoComponent } from './component/application/producto/routed/producto-plist-routed/plist-producto.component';
import { ProductoNewRoutedComponent } from './component/application/producto/routed/producto-new-routed/producto-new-routed.component';
import { ProductoEditRoutedComponent } from './component/application/producto/routed/producto-edit-routed/producto-edit-routed.component';
import { ProductoRemoveRoutedComponent } from './component/application/producto/routed/producto-remove-routed/producto-remove-routed.component';
import { ProductoViewRoutedComponent } from './component/application/producto/routed/producto-view-routed/producto-view-routed.component';
import { UsuarioPlistRoutedComponent } from './component/application/usuario/routed/usuario-plist-routed/usuario-plist-routed.component';
import { UsuarioNewRoutedComponent } from './component/application/usuario/routed/usuario-new-routed/usuario-new-routed.component';
import { UsuarioEditRoutedComponent } from './component/application/usuario/routed/usuario-edit-routed/usuario-edit-routed.component';
import { UsuarioRemoveRoutedComponent } from './component/application/usuario/routed/usuario-remove-routed/usuario-remove-routed.component';
import { UsuarioViewRoutedComponent } from './component/application/usuario/routed/usuario-view-routed/usuario-view-routed.component';
import { PlistCarritoComponent } from './component/application/carrito/routed/plist/plist-carrito.component';
import { NewCarritoComponent } from './component/application/carrito/routed/new/new-carrito.component';
import { EditCarritoComponent } from './component/application/carrito/routed/edit/edit-carrito.component';
import { CompraPlistRoutedComponent } from './component/application/compra/routed/compra-plist-routed/compra-plist-routed.component';
import { CompraNewRoutedComponent } from './component/application/compra/routed/compra-new-routed/compra-new-routed.component';
import { CompraEditRoutedComponent } from './component/application/compra/routed/compra-edit-routed/compra-edit-routed.component';
import { CompraViewRoutedComponent } from './component/application/compra/routed/compra-view-routed/compra-view-routed.component';
import { CompraRemoveRoutedComponent } from './component/application/compra/routed/compra-remove-routed/compra-remove-routed.component';
import { FacturaPlistRoutedComponent } from './component/application/factura/routed/factura-plist-routed/factura-plist-routed.component';
import { FacturaNewRoutedComponent } from './component/application/factura/routed/factura-new-routed/factura-new-routed.component';
import { FacturaRemoveRoutedComponent } from './component/application/factura/routed/factura-remove-routed/factura-remove-routed.component';
import { FacturaEditRoutedComponent } from './component/application/factura/routed/factura-edit-component/factura-edit-routed.component';
import { CompraService } from './service/compra.service';
import { ProductoService } from './service/producto.service';
import { CarritoService } from './service/carrito.service';
import { UsuarioService } from './service/usuario.service';
import { TipousuarioService } from './service/tipousuario.service';
import { TipoproductoService } from './service/tipoproducto.service';
import { FacturaService } from './service/factura.service';
import { IconService } from './service/icon.service';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { GenerateService } from './service/generate.service';
import { CountService } from './service/count.service';
import { ReportsComponent } from './component/shared/routed/reports/reports.component';
import { UsuarioPlistUnroutedComponent } from './component/application/usuario/unrouted/usuario-plist-unrouted/usuario-plist-unrouted.component';
import { PopupComponent } from './component/shared/unrouted/popup/popup.component';
import { UsuarioViewUnroutedComponent } from './component/application/usuario/unrouted/usuario-view-unrouted/usuario-view-unrouted.component';
import { FileService } from './service/file.service';
import { PrePrintComponent } from './component/shared/unrouted/preprint/preprint.component';
import { TipoproductoPlistUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plist-unrouted/tipoproducto-plist-unrouted.component';
import { ProductoPlistUnroutedComponent } from './component/application/producto/unrouted/producto-plist-unrouted/producto-plist-unrouted.component';

import { FacturaPlistUnroutedComponent } from './component/application/factura/unrouted/factura-plist-unrouted/factura-plist-unrouted.component';
import { TipousuarioPlistUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-plist-unrouted/tipousuario-plist-unrouted.component';
import { ProductoCPlistUnroutedComponent } from './component/application/producto/unrouted/producto-cplist-unrouted/producto-cplist-unrouted.component';
import { ProductoPlistRowUnroutedComponent } from './component/application/producto/unrouted/producto-plistrow-unrouted/producto-plistrow-unrouted.component';
import { ProductoPlistheaderUnroutedComponent } from './component/application/producto/unrouted/producto-plistheader-unrouted/producto-plistheader-unrouted.component';
import { ProductoFormUnroutedComponent } from './component/application/producto/unrouted/producto-form-unrouted/producto-form-unrouted.component';
import { ProductoDetailUnroutedComponent } from './component/application/producto/unrouted/producto-detail-unrouted/producto-detail-unrouted.component';

import { findUnroutedComponent } from './component/shared/unrouted/find-unrouted/find-unrouted.component';
import { UsuarioFormUnroutedComponent } from './component/application/usuario/unrouted/usuario-form-unrouted/usuario-form-unrouted.component';
import { RppUnroutedComponent } from './component/shared/unrouted/rpp-unrouted/rpp-unrouted.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PlistrowbuttonsUnroutedComponent } from './component/shared/unrouted/plistrowbuttons-unrouted/plistrowbuttons-unrouted.component';
import { UsuarioPlistheaderUnroutedComponent } from './component/application/usuario/unrouted/usuario-plistheader-unrouted/usuario-plistheader-unrouted.component';
import { UsuarioPlistRowUnroutedComponent } from './component/application/usuario/unrouted/usuario-plistrow-unrouted/usuario-plistrow-unrouted.component';
import { ViewbuttonsUnroutedComponent } from './component/shared/unrouted/viewbuttons-unrouted/viewbuttons-unrouted.component';
import { TipousuarioPlistheaderUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-plistheader-unrouted/tipousuario-plistheader-unrouted.component';
import { TipousuarioPlistRowUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-plistrow-unrouted/tipousuario-plistrow-unrouted.component';
import { TipoproductoPlistRowUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plistrow-unrouted/tipoproducto-plistrow-unrouted.component';
import { TipoproductoPlistheaderUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plistheader-unrouted/tipoproducto-plistheader-unrouted.component';
import { TipoproductoDetailUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-view-unrouted/tipoproducto-detail-unrouted.component';


import { TipousuarioViewUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-view-unrouted/tipousuario-view-unrouted.component';
import { TipousuarioFormUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-form-unrouted/tipousuario-form-unrouted.component';
import { ErrorHandlerService } from './service/errorHandler.service';
import { FacturaPlistheaderUnroutedComponent } from './component/application/factura/unrouted/factura-plistheader-unrouted/factura-plistheader-unrouted.component';
import { FacturaPlistRowUnroutedComponent } from './component/application/factura/unrouted/factura-plistrow-unrouted/factura-plistrow-unrouted.component';
import { FacturaDetailUnroutedComponent } from './component/application/factura/unrouted/factura-detail-unrouted/factura-detail-unrouted.component';
import { FacturaViewRoutedComponent } from './component/application/factura/routed/factura-view-routed/factura-view-routed.component';
import { FacturaFormUnroutedComponent } from './component/application/factura/unrouted/factura-form-unrouted/factura-form-unrouted.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TipoproductoFormUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-form-unrouted/tipoproducto-form-unrouted.component';
import { CompraPlistRowUnroutedComponent } from './component/application/compra/unrouted/compra-plistrow-unrouted/compra-plistrow-unrouted.component';
import { CompraPlistheaderUnroutedComponent } from './component/application/compra/unrouted/compra-plistheader-unrouted/compra-plistheader-unrouted.component';
import { CompraPlistUnroutedComponent } from './component/application/compra/unrouted/compra-plist-unrouted/compra-plist-unrouted.component';
import { CompraDetailUnroutedComponent } from './component/application/compra/unrouted/compra-detail-unrouted/compra-detail-unrouted.component';

import { CarritoDetailUnroutedComponent } from './component/application/carrito/unrouted/carrito-detail-unrouted/carrito-detail-unrouted.component';


import { CompraFormUnroutedComponent } from './component/application/compra/unrouted/compra-form-unrouted/compra-form-unrouted.component';
import { CarritoViewRoutedComponent } from './component/application/carrito/routed/carrito-view-routed/carrito-view-routed.component';
import { CarritoRemoveRoutedComponent } from './component/application/carrito/routed/carrito-remove-routed/carrito-remove-routed.component';

@NgModule({
  declarations: [
    AppComponent,
    // shared unrouted
    ModalComponent,
    PopupComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PrePrintComponent,
    findUnroutedComponent,
    RppUnroutedComponent,
    SearchUnroutedComponent,
    PaginationUnroutedComponent,
    PlistrowbuttonsUnroutedComponent,
    ViewbuttonsUnroutedComponent,


    //
    // shared routed
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    GenerateComponent,
    ReportsComponent,
    // pipes
    TrimPipe,
    showDateTimePipe,
    showBooleanPipe,
    // Tipousuario routed components
    TipousuarioPlistRoutedComponent,
    TipousuarioViewRoutedComponent,
    TipousuarioEditRoutedComponent,
    // Usuario routed components
    UsuarioPlistRoutedComponent,
    UsuarioViewRoutedComponent,
    UsuarioNewRoutedComponent,
    UsuarioEditRoutedComponent,
    UsuarioRemoveRoutedComponent,
    // Tipoproducto routed components
    PlistTipoproductoComponent,
    TipoproductoNewRoutedComponent,
    TipoproductoViewRoutedComponent,
    TipoproductoEditRoutedComponent,
    TipoproductoRemoveRoutedComponent,
    // Producto routed components
    PlistProductoComponent,
    ProductoViewRoutedComponent,
    ProductoNewRoutedComponent,
    ProductoEditRoutedComponent,
    ProductoRemoveRoutedComponent,
    // Compra routed components
    CompraPlistRoutedComponent,
    CompraViewRoutedComponent,
    CompraNewRoutedComponent,
    CompraEditRoutedComponent,
    CompraRemoveRoutedComponent,
    // Factura routed components
    FacturaPlistRoutedComponent,
    FacturaViewRoutedComponent,
    FacturaNewRoutedComponent,
    FacturaEditRoutedComponent,
    FacturaRemoveRoutedComponent,
    // Carrito routed components
    PlistCarritoComponent,
    NewCarritoComponent,    
    EditCarritoComponent,
    CarritoViewRoutedComponent,
    CarritoRemoveRoutedComponent,



    //
    // unrouted components
    //

    // Usuario unrouted components
    UsuarioPlistUnroutedComponent,
    UsuarioViewUnroutedComponent,
    UsuarioFormUnroutedComponent,
    UsuarioPlistheaderUnroutedComponent,
    UsuarioPlistRowUnroutedComponent,

    // TipoUsuario unrouted components
    TipousuarioPlistUnroutedComponent,
    TipousuarioPlistheaderUnroutedComponent,
    TipousuarioPlistRowUnroutedComponent,
    TipousuarioViewUnroutedComponent,
    TipousuarioFormUnroutedComponent,

    // Producto unrouted components
    ProductoDetailUnroutedComponent,
    ProductoFormUnroutedComponent,
    ProductoPlistUnroutedComponent,
    ProductoPlistheaderUnroutedComponent,
    ProductoPlistRowUnroutedComponent,
    ProductoCPlistUnroutedComponent,

    // TipoProducto unrouted components
    TipoproductoPlistUnroutedComponent,
    TipoproductoPlistRowUnroutedComponent,
    TipoproductoPlistheaderUnroutedComponent,
    TipoproductoDetailUnroutedComponent,
    TipoproductoFormUnroutedComponent,

    // Factura unrouted components
    FacturaPlistUnroutedComponent,
    FacturaPlistheaderUnroutedComponent,
    FacturaPlistRowUnroutedComponent,
    FacturaDetailUnroutedComponent,
    FacturaFormUnroutedComponent,

    // Compra unrouted components
    CompraPlistRowUnroutedComponent,
    CompraPlistheaderUnroutedComponent,
    CompraPlistUnroutedComponent,
    CompraDetailUnroutedComponent,
    CompraFormUnroutedComponent,

    // Carrito unrouted components
    CarritoDetailUnroutedComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    SessionService,
    SessionResolver,
    PaginationService,
    DateTimeService,
    CompraService,
    FacturaService,
    ProductoService,
    TipoproductoService,
    UsuarioService,
    TipousuarioService,
    CarritoService,
    IconService,
    GenerateService,
    CountService,
    FileService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
