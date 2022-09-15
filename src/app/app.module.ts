import { AppComponent } from './app.component';
// modules
import { AppRoutingModule } from './app-routing.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeModule } from 'primeng/badge';
// system services
import { PaginationService } from './service/pagination.service';
import { ErrorHandlerService } from './service/errorHandler.service';
// BLOQUE LOCALE
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
// pipes
import { TrimPipe } from './pipe/trim.pipe';
import { showDateTimePipe } from './pipe/showDateTime.pipe';
import { showBooleanPipe } from './pipe/showBoolean.pipe';
// services
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
import { FileService } from './service/file.service';
// shared components
import { LoginComponent } from './component/shared/routed/login/login.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { SessionService } from './service/session.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionResolver } from './resolve/session.resolve';
import { FooterComponent } from './component/shared/unrouted/footer/footer.component';
import { ModalComponent } from './component/shared/unrouted/modal/modal.component';
import { DateTimeService } from './service/datetime.service';
import { HeaderComponent } from './component/shared/unrouted/header/header.component';
import { findUnroutedComponent } from './component/shared/unrouted/find-unrouted/find-unrouted.component';
import { ReportsComponent } from './component/shared/routed/reports/reports.component';
import { PopupComponent } from './component/shared/unrouted/popup/popup.component';
import { PrePrintComponent } from './component/shared/unrouted/preprint/preprint.component';
import { RppUnroutedComponent } from './component/shared/unrouted/rpp-unrouted/rpp-unrouted.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PlistrowbuttonsUnroutedComponent } from './component/shared/unrouted/plistrowbuttons-unrouted/plistrowbuttons-unrouted.component';
import { ViewbuttonsUnroutedComponent } from './component/shared/unrouted/viewbuttons-unrouted/viewbuttons-unrouted.component';
// usuario components
import { UsuarioViewUserRoutedComponent } from './component/application/usuario/routed/user/usuario-view-ur/usuario-view-ur.component';
import { UsuarioDetailUserUnroutedComponent } from './component/application/usuario/unrouted/user/usuario-detail-uu/usuario-detail-uu.component';
import { UsuarioViewAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-view-au/usuario-view-unrouted.component';
import { UsuarioPlistAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plist-au/usuario-plist-au.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-ar/usuario-plist-ar.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-ar/usuario-new-ar.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-ar/usuario-edit-ar.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-ar/usuario-remove-ar.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-ar/usuario-view-ar.component';
import { UsuarioFormAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-form-au/usuario-form-au.component';
import { UsuarioPlistheaderAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plist-au/usuario-plistheader-au/usuario-plistheader-au.component';
import { UsuarioPlistRowAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plist-au/usuario-plistrow-au/usuario-plistrow-au.component';
// tipousuario components
import { TipousuarioPlistAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plist-au/tipousuario-plist-au.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-ar/tipousuario-plist-ar.component';
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-ar/tipousuario-edit-ar.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-ar/tipousuario-view-ar.component';
import { TipousuarioViewAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-view-au/tipousuario-view-au.component';
import { TipousuarioFormAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-form-au/tipousuario-form-au.component';
import { TipousuarioPlistheaderAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plist-au/tipousuario-plistheader-au/tipousuario-plistheader-au.component';
import { TipousuarioPlistrowAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plist-au/tipousuario-plistrow-au/tipousuario-plistrow-unrouted.component';
// tipoproducto components
import { TipoproductoPlistRowUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plistrow-unrouted/tipoproducto-plistrow-unrouted.component';
import { TipoproductoPlistheaderUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plistheader-unrouted/tipoproducto-plistheader-unrouted.component';
import { TipoproductoDetailUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-view-unrouted/tipoproducto-detail-unrouted.component';
import { PlistTipoproductoComponent } from './component/application/tipoproducto/routed/tipoproducto-plist-routed/tipoproducto-plist-routed.component';
import { TipoproductoNewRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-new-routed/tipoproducto-new-routed.component';
import { TipoproductoEditRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-edit-routed/tipoproducto-edit-routed.component';
import { TipoproductoRemoveRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-remove-routed/tipoproducto-remove-routed.component';
import { TipoproductoViewRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-view-routed/tipoproducto-view-routed.component';
import { TipoproductoPlistUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-plist-unrouted/tipoproducto-plist-unrouted.component';
import { TipoproductoFormUnroutedComponent } from './component/application/tipoproducto/unrouted/tipoproducto-form-unrouted/tipoproducto-form-unrouted.component';
// producto components
import { ProductoPlistAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plist-au/producto-plist-au.component';
import { ProductoPlistUserUnroutedComponent } from './component/application/producto/unrouted/user/producto-plist-uu/producto-plist-uu.component';
import { ProductoPlistRowUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plist-au/producto-plistrow-au/producto-plistrow-au.component';
import { ProductoPlistheaderUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plist-au/producto-plistheader-au/producto-plistheader-au.component';
import { ProductoFormAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-form-au/producto-form-au.component';
import { ProductoDetailAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-detail-au/producto-detail-au.component';
import { ProductoDetailUserUnroutedComponent } from './component/application/producto/unrouted/user/producto-detail-uu/producto-detail-uu.component';
import { ProductoViewUserRoutedComponent } from './component/application/producto/routed/user/producto-view-ur/producto-view-ur.component';
import { ProductoPlistAdminRoutedComponent } from './component/application/producto/routed/admin/producto-plist-ar/producto-plist-ar.component';
import { ProductoNewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-new-ar/producto-new-ar.component';
import { ProductoEdiAdminRoutedComponent } from './component/application/producto/routed/admin/producto-edit-ar/producto-edit-ar.component';
import { ProductoRemoveAdminRoutedComponent } from './component/application/producto/routed/admin/producto-remove-ar/producto-remove-ar.component';
import { ProductoViewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-view-ar/producto-view-ar.component';
//  factura components
import { FacturaPlistAdminRoutedComponent } from './component/application/factura/routed/admin/factura-plist-ar/factura-plist-ar.component';
import { FacturaNewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-new-ar/factura-new-ar.component';
import { FacturaRemoveAdminRoutedComponent } from './component/application/factura/routed/admin/factura-remove-ar/factura-remove-ar.component';
import { FacturaEditAdminRoutedComponent } from './component/application/factura/routed/admin/factura-edit-ar/factura-edit-ar.component';
import { FacturaPlistAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plist-au/factura-plist-au.component';
import { FacturaPlistheaderAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plist-au/factura-plistheader-au/factura-plistheader-au.component';
import { FacturaPlistrowAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plist-au/factura-plistrow-au/factura-plistrow-au.component';
import { FacturaDetailAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-detail-au/factura-detail-au.component';
import { FacturaViewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-view-ar/factura-view-ar.component';
import { FacturaFormAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-form-au/factura-form-au.component';
// compra components
import { CompraPlistAdminRoutedComponent } from './component/application/compra/routed/admin/compra-plist-ar/compra-plist-ar.component';
import { CompraNewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-new-ar/compra-new-ar.component';
import { CompraEditAdminRoutedComponent } from './component/application/compra/routed/admin/compra-edit-ar/compra-edit-ar.component';
import { CompraViewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-view-ar/compra-view-ar.component';
import { CompraRemoveAdminRoutedComponent } from './component/application/compra/routed/admin/compra-remove-ar/compra-remove-ar.component';
import { CompraPlistrowUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plist-au/compra-plistrow-au/compra-plistrow-au.component';
import { CompraPlistheaderAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plist-au/compra-plistheader-au/compra-plistheader-au.component';
import { CompraPlistAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plist-au/compra-plist-au.component';
import { CompraDetailAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-detail-au/compra-detail-au.component';
import { CompraFormAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-form-au/compra-form-au.component';
// carrito components
import { CarritoDetailAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-detail-au/carrito-detail-au.component';
import { CarritoViewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-view-ar/carrito-view-ar.component';
import { CarritoRemoveAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-remove-ar/carrito-remove-ar.component';
import { CarritoPlistAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plist-au/carrito-plist-au.component';
import { CarritoPlistrowAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plist-au/carrito-plistrow-au/carrito-plistrow-au.component';
import { CarritoPlistheaderAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plist-au/carrito-plistheader-au/carrito-plistheader-au.component';
import { CarritoPlistAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-plist-ar/carrito-plist-ar.component';
import { CarritoFormAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-form-au/carrito-form-au.component';
import { CarritoNewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-new-ar/carrito-new-ar.component';
import { CarritoEditAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-edit-ar/carrito-edit-ar.component';
import { CarritoPlistUserRoutedComponent } from './component/application/carrito/routed/user/carrito-plist-ur/carrito-plist-ur.component';
import { CarritoPlistUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plist-uu/carrito-plist-uu.component';
import { CarritoPlistheaderUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plist-uu/carrito-plistheader-uu/carrito-plistheader-uu.component';
import { CarritoPlistrowUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plist-uu/carrito-plistrow-uu/carrito-plistrow-uu.component';
//
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
    TipousuarioPlistAdminRoutedComponent,
    TipousuarioViewAdminRoutedComponent,
    TipousuarioEditAdminRoutedComponent,
    // Usuario routed components
    UsuarioPlistAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioEditAdminRoutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioViewUserRoutedComponent,
    // Tipoproducto routed components
    PlistTipoproductoComponent,
    TipoproductoNewRoutedComponent,
    TipoproductoViewRoutedComponent,
    TipoproductoEditRoutedComponent,
    TipoproductoRemoveRoutedComponent,
    // Producto routed components
    ProductoPlistAdminRoutedComponent,
    ProductoViewAdminRoutedComponent,
    ProductoNewAdminRoutedComponent,
    ProductoEdiAdminRoutedComponent,
    ProductoRemoveAdminRoutedComponent,
    ProductoViewUserRoutedComponent,
    // Compra routed components
    CompraPlistAdminRoutedComponent,
    CompraViewAdminRoutedComponent,
    CompraNewAdminRoutedComponent,
    CompraEditAdminRoutedComponent,
    CompraRemoveAdminRoutedComponent,
    // Factura routed components
    FacturaPlistAdminRoutedComponent,
    FacturaViewAdminRoutedComponent,
    FacturaNewAdminRoutedComponent,
    FacturaEditAdminRoutedComponent,
    FacturaRemoveAdminRoutedComponent,
    // Carrito routed components
    CarritoPlistAdminRoutedComponent,
    CarritoViewAdminRoutedComponent,
    CarritoRemoveAdminRoutedComponent,
    CarritoNewAdminRoutedComponent,
    CarritoEditAdminRoutedComponent,
    CarritoPlistUserRoutedComponent,
    



    //
    // unrouted components
    //

    // Usuario unrouted components
    UsuarioPlistAdminUnroutedComponent,
    UsuarioViewAdminUnroutedComponent,
    UsuarioFormAdminUnroutedComponent,
    UsuarioPlistheaderAdminUnroutedComponent,
    UsuarioPlistRowAdminUnroutedComponent,
    UsuarioDetailUserUnroutedComponent,

    // TipoUsuario unrouted components
    TipousuarioPlistAdminUnroutedComponent,
    TipousuarioPlistheaderAdminUnroutedComponent,
    TipousuarioPlistrowAdminUnroutedComponent,
    TipousuarioViewAdminUnroutedComponent,
    TipousuarioFormAdminUnroutedComponent,

    // Producto unrouted components
    ProductoDetailAdminUnroutedComponent,
    ProductoFormAdminUnroutedComponent,
    ProductoPlistAdminUnroutedComponent,
    ProductoPlistheaderUnroutedComponent,
    ProductoPlistRowUnroutedComponent,
    ProductoPlistUserUnroutedComponent,
    ProductoDetailUserUnroutedComponent,

    // TipoProducto unrouted components
    TipoproductoPlistUnroutedComponent,
    TipoproductoPlistRowUnroutedComponent,
    TipoproductoPlistheaderUnroutedComponent,
    TipoproductoDetailUnroutedComponent,
    TipoproductoFormUnroutedComponent,

    // Factura unrouted components
    FacturaPlistAdminUnroutedComponent,
    FacturaPlistheaderAdminUnroutedComponent,
    FacturaPlistrowAdminUnroutedComponent,
    FacturaDetailAdminUnroutedComponent,
    FacturaFormAdminUnroutedComponent,

    // Compra unrouted components
    CompraPlistrowUnroutedComponent,
    CompraPlistheaderAdminUnroutedComponent,
    CompraPlistAdminUnroutedComponent,
    CompraDetailAdminUnroutedComponent,
    CompraFormAdminUnroutedComponent,

    // Carrito unrouted components
    CarritoDetailAdminUnroutedComponent,
    CarritoPlistAdminUnroutedComponent,
    CarritoPlistrowAdminUnroutedComponent,
    CarritoPlistheaderAdminUnroutedComponent,
    CarritoFormAdminUnroutedComponent,
    CarritoPlistUserUnroutedComponent,
    CarritoPlistheaderUserUnroutedComponent,
    CarritoPlistrowUserUnroutedComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    BadgeModule
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
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'es-ES' } //USO DE LOCALE!!
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
