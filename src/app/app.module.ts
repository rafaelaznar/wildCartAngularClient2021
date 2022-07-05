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
import { NewTipoproductoComponent } from './component/application/tipoproducto/routed/tipoproducto-new-routed/new-tipoproducto.component';
import { EditTipoproductoComponent } from './component/application/tipoproducto/routed/tipoproducto-edit-routed/edit-tipoproducto.component';
import { RemoveTipoproductoComponent } from './component/application/tipoproducto/routed/tipoproducto-remove-routed/remove-tipoproducto.component';
import { ViewTipoproductoComponent } from './component/application/tipoproducto/routed/tipoproducto-view-routed/view-tipoproducto.component';
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
import { ViewCarritoComponent } from './component/application/carrito/routed/view/view-carrito.component';
import { RemoveCarritoComponent } from './component/application/carrito/routed/remove/remove-carrito.component';
import { EditCarritoComponent } from './component/application/carrito/routed/edit/edit-carrito.component';
import { PlistCompraComponent } from './component/application/compra/routed/plist/plist-compra.component';
import { NewCompraComponent } from './component/application/compra/routed/new/new-compra.component';
import { ViewCompraComponent } from './component/application/compra/routed/view/view-compra.component';
import { RemoveCompraComponent } from './component/application/compra/routed/remove/remove-compra.component';
import { EditCompraComponent } from './component/application/compra/routed/edit/edit-compra.component';
import { FacturaPlistRoutedComponent } from './component/application/factura/routed/factura-plist-routed/factura-plist-routed.component';
import { NewFacturaComponent } from './component/application/factura/routed/new/new-factura.component';
import { ViewFacturaComponent } from './component/application/factura/routed/view/view-factura.component';
import { RemoveFacturaComponent } from './component/application/factura/routed/remove/remove-factura.component';
import { EditFacturaComponent } from './component/application/factura/routed/edit/edit-factura.component';
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
import { TipoProductoPlistUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plist-unrouted/tipoproducto-plist-unrouted.component';
import { ProductoPlistUnroutedComponent } from './component/application/producto/unrouted/producto-plist-unrouted/producto-plist-unrouted.component';

import { FacturaPlistUnroutedComponent } from './component/application/factura/unrouted/factura-plist-unrouted/factura-plist-unrouted.component';
import { TipousuarioPlistUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-plist-unrouted/tipousuario-plist-unrouted.component';
import { ProductoCPlistUnroutedComponent } from './component/application/producto/unrouted/producto-cplist-unrouted/producto-cplist-unrouted.component';
import { ProductoPlistRowUnroutedComponent } from './component/application/producto/unrouted/producto-plistrow-unrouted/producto-plistrow-unrouted.component';
import { ProductoPlistheaderUnroutedComponent } from './component/application/producto/unrouted/producto-plistheader-unrouted/producto-plistheader-unrouted.component';
import { ProductoFormUnroutedComponent } from './component/application/producto/unrouted/producto-form.unrouted/producto-form-unrouted.component';
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
import { TipousuarioViewUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-view-unrouted/tipousuario-view-unrouted.component';
import { TipousuarioFormUnroutedComponent } from './component/application/tipousuario/unrouted/tipousuario-form-unrouted/tipousuario-form-unrouted.component';
import { ErrorHandlerService } from './service/errorHandler.service';


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
    NewTipoproductoComponent,
    ViewTipoproductoComponent,
    EditTipoproductoComponent,
    RemoveTipoproductoComponent,
    // Producto routed components
    PlistProductoComponent,
    ProductoViewRoutedComponent,
    ProductoNewRoutedComponent,
    ProductoEditRoutedComponent,
    ProductoRemoveRoutedComponent,
    // Compra routed components
    PlistCompraComponent,
    ViewCompraComponent,
    NewCompraComponent,
    EditCompraComponent,
    RemoveCompraComponent,
    // Factura routed components
    FacturaPlistRoutedComponent,
    ViewFacturaComponent,
    NewFacturaComponent,
    EditFacturaComponent,
    RemoveFacturaComponent,
    // Carrito routed components
    PlistCarritoComponent,
    NewCarritoComponent,
    ViewCarritoComponent,
    RemoveCarritoComponent,
    EditCarritoComponent,



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
    TipoProductoPlistUnroutedComponent,
    TipoproductoPlistRowUnroutedComponent,
    TipoproductoPlistheaderUnroutedComponent,

    // Factura unrouted components
    FacturaPlistUnroutedComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
export class AppModule {}
