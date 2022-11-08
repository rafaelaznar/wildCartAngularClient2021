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
import { MetadataService } from './service/metadata.service';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { GenerateService } from './service/generate.service';
import { CountService } from './service/count.service';
import { FileService } from './service/file.service';
// shared components
import { LoginComponent } from './component/shared/routed/login/login.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { MenuUnroutedComponent } from './component/shared/unrouted/menu-unrouted/menu-unrouted.component';
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
import { RppUnroutedComponent } from './component/shared/unrouted/rpp-unrouted/rpp-unrouted.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PlistrowbuttonsUnroutedComponent } from './component/shared/unrouted/plistrowbuttons-unrouted/plistrowbuttons-unrouted.component';
import { ViewbuttonsUnroutedComponent } from './component/shared/unrouted/viewbuttons-unrouted/viewbuttons-unrouted.component';
// usuario components
import { UsuarioViewUserRoutedComponent } from './component/application/usuario/routed/usuario/usuario-view-user-routed/usuario-view-user-routed.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioDetailUserUnroutedComponent } from './component/application/usuario/unrouted/user/usuario-detail-user-unrouted/usuario-detail-user-unrouted.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-detail-admin-unrouted/usuario-detail-unrouted.component';
import { UsuarioFormAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-form-admin-unrouted/usuario-form-admin-unrouted.component';
import { UsuarioPlistAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plist-admin-unrouted/usuario-plist-admin-unrouted.component';
import { UsuarioPlistheaderAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plistheader-admin-unrouted/usuario-plistheader-admin-unrouted.component';
import { UsuarioPlistRowAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plistrow-admin-unrouted/usuario-plistrow-admin-unrouted.component';
import { UsuarioSelectionAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-selection-admin-unrouted/usuario-selection-admin-unrouted.component';
// tipousuario components
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin-routed/tipousuario-edit-admin-routed.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin-routed/tipousuario-view-admin-routed.component';
import { TipousuarioPlistAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plist-admin-unrouted/tipousuario-plist-admin-unrouted.component';
import { TipousuarioDetailAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-detail-admin-unrouted/tipousuario-detail-admin-unrouted.component';
import { TipousuarioFormAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-form-admin-unrouted/tipousuario-form-admin-unrouted.component';
import { TipousuarioPlistheaderAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plistheader-admin-unrouted/tipousuario-plistheader-admin-unrouted.component';
import { TipousuarioPlistrowAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plistrow-admin-unrouted/tipousuario-plistrow-unrouted.component';
import { TipousuarioSelectionAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-selection-admin-unrouted/tipousuario-selection-admin-unrouted.component';
// tipoproducto components
import { TipoproductoPlistRowAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-plistrow-admin-unrouted/tipoproducto-plistrow-unrouted.component';
import { TipoproductoPlistheaderAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-plistheader-admin-unrouted/tipoproducto-plistheader-admin-unrouted.component';
import { TipoproductoDetailAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-view-admin-unrouted/tipoproducto-detail-admin-unrouted.component';
import { TipoproductoPlistAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-plist-admin-routed/tipoproducto-plist-admin-routed.component';
import { TipoproductoNewAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-new-admin-routed/tipoproducto-new-admin-routed.component';
import { TipoproductoEditAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-edit-admin-routed/tipoproducto-edit-admin-routed.component';
import { TipoproductoRemoveAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-remove-admin-routed/tipoproducto-remove-admin-routed.component';
import { TipoproductoViewAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-view-admin-routed/tipoproducto-view-admin-routed.component';
import { TipoproductoPlistAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-plist-admin-unrouted/tipoproducto-plist-admin-unrouted.component';
import { TipoproductoFormAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-form-admin-unrouted/tipoproducto-form-admin-unrouted.component';
import { TipoproductoSelectionAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-selection-admin-unrouted/tipoproducto-selection-admin-unrouted.component';
// producto components
import { ProductoPlistAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plist-admin-unrouted/producto-plist-admin-unrouted.component';
import { ProductoPlistUserUnroutedComponent } from './component/application/producto/unrouted/user/producto-plist-user-unrouted/producto-plist-user-unrouted.component';
import { ProductoPlistRowAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plistrow-admin-unrouted/producto-plistrow-admin-unrouted.component';
import { ProductoPlistheaderAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plistheader-admin-unrouted/producto-plistheader-admin-unrouted.component';
import { ProductoFormAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-form-admin-unrouted/producto-form-admin-unrouted.component';
import { ProductoDetailAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-detail-admin-unrouted/producto-detail-admin-unrouted.component';
import { ProductoDetailUserUnroutedComponent } from './component/application/producto/unrouted/user/producto-detail-user-unrouted/producto-detail-user-unrouted.component';
import { ProductoViewUserRoutedComponent } from './component/application/producto/routed/user/producto-view-user-routed/producto-view-user-routed.component';
import { ProductoPlistAdminRoutedComponent } from './component/application/producto/routed/admin/producto-plist-admin-routed/producto-plist-admin-routed.component';
import { ProductoNewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-new-admin-routed/producto-new-admin-routed.component';
import { ProductoEdiAdminRoutedComponent } from './component/application/producto/routed/admin/producto-edit-admin-routed/producto-edit-admin-routed.component';
import { ProductoRemoveAdminRoutedComponent } from './component/application/producto/routed/admin/producto-remove-admin-routed/producto-remove-admin-routed.component';
import { ProductoViewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-view-admin-routed/producto-view-admin-routed.component';
import { ProductoSelectionAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-selection-admin-unrouted/producto-selection-admin-unrouted.component';
import { ProductoViewGuestRoutedComponent } from './component/application/producto/routed/guest/producto-view-guest-routed/producto-view-guest-routed.component';
//  factura components
import { FacturaPlistAdminRoutedComponent } from './component/application/factura/routed/admin/factura-plist-admin-routed/factura-plist-admin-routed.component';
import { FacturaNewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-new-admin-routed/factura-new-admin-routed.component';
import { FacturaRemoveAdminRoutedComponent } from './component/application/factura/routed/admin/factura-remove-admin-routed/factura-remove-admin-routed.component';
import { FacturaEditAdminRoutedComponent } from './component/application/factura/routed/admin/factura-edit-admin-routed/factura-edit-admin-routed.component';
import { FacturaPlistAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plist-admin-unrouted/factura-plist-admin-unrouted.component';
import { FacturaPlistheaderAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plistheader-admin-unrouted/factura-plistheader-admin-unrouted.component';
import { FacturaPlistrowAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plistrow-admin-unrouted/factura-plistrow-admin-unrouted.component';
import { FacturaDetailAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-detail-admin-unrouted/factura-detail-admin-unrouted.component';
import { FacturaViewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-view-admin-routed/factura-view-admin-routed.component';
import { FacturaFormAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-form-admin-unrouted/factura-form-admin-unrouted.component';
// compra components
import { CompraPlistAdminRoutedComponent } from './component/application/compra/routed/admin/compra-plist-admin-routed/compra-plist-admin-routed.component';
import { CompraNewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-new-admin-routed/compra-new-admin-routed.component';
import { CompraEditAdminRoutedComponent } from './component/application/compra/routed/admin/compra-edit-admin-routed/compra-edit-admin-routed.component';
import { CompraViewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-view-admin-routed/compra-view-admin-routed.component';
import { CompraRemoveAdminRoutedComponent } from './component/application/compra/routed/admin/compra-remove-admin-routed/compra-remove-admin-routed.component';
import { CompraPlistrowAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plistrow-admin-unrouted/compra-plistrow-admin-unrouted.component';
import { CompraPlistheaderAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plistheader-admin-unrouted/compra-plistheader-admin-unrouted.component';
import { CompraPlistAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plist-admin-unrouted/compra-plist-admin-unrouted.component';
import { CompraDetailAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-detail-admin-unrouted/compra-detail-admin-unrouted.component';
import { CompraFormAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-form-admin-unrouted/compra-form-admin-unrouted.component';
// carrito components
import { CarritoDetailAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-detail-admin-unrouted/carrito-detail-admin-unrouted.component';
import { CarritoViewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-view-admin-routed/carrito-view-admin-routed.component';
import { CarritoRemoveAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-remove-admin-routed/carrito-remove-admin-routed.component';
import { CarritoPlistAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plist-admin-unrouted/carrito-plist-admin-unrouted.component';
import { CarritoPlistrowAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plistrow-admin-unrouted/carrito-plistrow-admin-unrouted.component';
import { CarritoPlistheaderAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plistheader-admin-unrouted/carrito-plistheader-admin-unrouted.component';
import { CarritoPlistAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-plist-admin-routed/carrito-plist-admin-routed.component';
import { CarritoFormAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-form-admin-unrouted/carrito-form-admin-unrouted.component';
import { CarritoNewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-new-admin-routed/carrito-new-admin-routed.component';
import { CarritoEditAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-edit-admin-routed/carrito-edit-admin-routed.component';
import { CarritoPlistUserRoutedComponent } from './component/application/carrito/routed/user/carrito-plist-user-routed/carrito-plist-user-routed.component';
import { CarritoPlistUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plist-user-unrouted/carrito-plist-user-unrouted.component';
import { CarritoPlistheaderUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plistheader-user-unrouted/carrito-plistheader-user-unrouted.component';
import { CarritoPlistrowUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plistrow-user-unrouted/carrito-plistrow-user-unrouted.component';
import { FacturaSelectionAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-selection-admin-unrouted/factura-selection-admin-unrouted.component';
import { FooterbuttonsUnroutedComponent } from './component/shared/unrouted/footerbuttons-unrouted/footerbuttons-unrouted.component';
import { RemoveconfirmationUnroutedComponent } from './component/shared/unrouted/removeconfirmation-unrouted/removeconfirmation-unrouted.component';

//

//
@NgModule({
  declarations: [
    AppComponent,
    //
    // shared unrouted
    ModalComponent,
    PopupComponent,
    HeaderComponent,
    FooterComponent,
    MenuUnroutedComponent,
    findUnroutedComponent,
    RppUnroutedComponent,
    SearchUnroutedComponent,
    PaginationUnroutedComponent,
    PlistrowbuttonsUnroutedComponent,
    ViewbuttonsUnroutedComponent,
    FooterbuttonsUnroutedComponent,
    RemoveconfirmationUnroutedComponent,
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
    //
    //
    // ----------------->   routed components
    //
    //
    // Usuario routed components
    UsuarioPlistAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioEditAdminRoutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioViewUserRoutedComponent,
    // Tipousuario routed components
    TipousuarioPlistAdminRoutedComponent,
    TipousuarioViewAdminRoutedComponent,
    TipousuarioEditAdminRoutedComponent,
    // Producto routed components
    ProductoPlistAdminRoutedComponent,
    ProductoViewAdminRoutedComponent,
    ProductoNewAdminRoutedComponent,
    ProductoEdiAdminRoutedComponent,
    ProductoRemoveAdminRoutedComponent,
    ProductoViewUserRoutedComponent,
    ProductoViewGuestRoutedComponent,
    // Tipoproducto routed components
    TipoproductoPlistAdminRoutedComponent,
    TipoproductoNewAdminRoutedComponent,
    TipoproductoViewAdminRoutedComponent,
    TipoproductoEditAdminRoutedComponent,
    TipoproductoRemoveAdminRoutedComponent,
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
    //
    // ----------------->   unrouted components
    //
    //
    // Usuario unrouted components
    UsuarioPlistAdminUnroutedComponent,
    UsuarioDetailAdminUnroutedComponent,
    UsuarioFormAdminUnroutedComponent,
    UsuarioPlistheaderAdminUnroutedComponent,
    UsuarioPlistRowAdminUnroutedComponent,
    UsuarioDetailUserUnroutedComponent,
    UsuarioSelectionAdminUnroutedComponent,
    //
    // TipoUsuario unrouted components
    TipousuarioPlistAdminUnroutedComponent,
    TipousuarioPlistheaderAdminUnroutedComponent,
    TipousuarioPlistrowAdminUnroutedComponent,
    TipousuarioDetailAdminUnroutedComponent,
    TipousuarioFormAdminUnroutedComponent,
    TipousuarioSelectionAdminUnroutedComponent,
    //
    // Producto unrouted components
    ProductoDetailAdminUnroutedComponent,
    ProductoFormAdminUnroutedComponent,
    ProductoPlistAdminUnroutedComponent,
    ProductoPlistheaderAdminUnroutedComponent,
    ProductoPlistRowAdminUnroutedComponent,
    ProductoPlistUserUnroutedComponent,
    ProductoDetailUserUnroutedComponent,
    ProductoSelectionAdminUnroutedComponent,
    //
    // TipoProducto unrouted components
    TipoproductoPlistAdminUnroutedComponent,
    TipoproductoPlistRowAdminUnroutedComponent,
    TipoproductoPlistheaderAdminUnroutedComponent,
    TipoproductoDetailAdminUnroutedComponent,
    TipoproductoFormAdminUnroutedComponent,
    TipoproductoSelectionAdminUnroutedComponent,
    //
    // Factura unrouted components
    FacturaPlistAdminUnroutedComponent,
    FacturaPlistheaderAdminUnroutedComponent,
    FacturaPlistrowAdminUnroutedComponent,
    FacturaDetailAdminUnroutedComponent,
    FacturaFormAdminUnroutedComponent,
    FacturaSelectionAdminUnroutedComponent,
    //
    // Compra unrouted components
    CompraPlistrowAdminUnroutedComponent,
    CompraPlistheaderAdminUnroutedComponent,
    CompraPlistAdminUnroutedComponent,
    CompraDetailAdminUnroutedComponent,
    CompraFormAdminUnroutedComponent,
    //
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
    MetadataService,
    GenerateService,
    CountService,
    FileService,
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'es-ES' } //USO DE LOCALE!!
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
