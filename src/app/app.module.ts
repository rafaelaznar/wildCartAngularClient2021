import { AppComponent } from './app.component';
// modules
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
// interceptors
import { AuthInterceptor } from './interceptor/auth.interceptor';
// services
import { CompraService } from './service/compra.service';
import { ProductoService } from './service/producto.service';
import { CarritoService } from './service/carrito.service';
import { UsuarioService } from './service/usuario.service';
import { TipousuarioService } from './service/tipousuario.service';
import { TipoproductoService } from './service/tipoproducto.service';
import { FacturaService } from './service/factura.service';
import { MetadataService } from './service/metadata.service';
import { GenerateService } from './service/generate.service';
import { CountService } from './service/count.service';
import { FileService } from './service/file.service';
import { DateTimeService } from './service/datetime.service';
import { SessionService } from './service/session.service';
import { FacturaPrintService } from './service/factura.print.service';
// shared routed components
import { SharedReportsRoutedComponent } from './component/shared/routed/shared-reports-routed/shared-reports-routed.component';
import { SharedLoginRoutedComponent } from './component/shared/routed/shared-login-routed/shared-login-routed.component';
import { SharedHomeRoutedComponent } from './component/shared/routed/shared-home-routed/shared-home-routed.component';
import { SharedLogoutRoutedComponent } from './component/shared/routed/shared-logout-routed/shared-logout-routed.component';
import { SharedGenerateUnroutedComponent } from './component/shared/routed/shared-generate-routed/shared-generate-routed.component';
// shared unrouted components
import { SharedMenuUnroutedComponent } from './component/shared/unrouted/shared-menu-unrouted/shared-menu-unrouted.component';
import { SharedFooterUnroutedComponent } from './component/shared/unrouted/shared-footer-unrouted/shared-footer-unrouted.component';
import { SharedModalUnroutedComponent } from './component/shared/unrouted/shared-modal-unrouted/shared-modal-unrouted.component';
import { SharedHeaderUnroutedComponent } from './component/shared/unrouted/shared-header-unrouted/shared-header-unrouted.component';
import { SharedFindUnroutedComponent } from './component/shared/unrouted/shared-find-unrouted/shared-find-unrouted.component';
import { SharedPopupUnroutedComponent } from './component/shared/unrouted/shared-popup-unrouted/shared-popup-unrouted.component';
import { SharedRppUnroutedComponent } from './component/shared/unrouted/shared-rpp-unrouted/shared-rpp-unrouted.component';
import { SharedSearchUnroutedComponent } from './component/shared/unrouted/shared-search-unrouted/shared-search-unrouted.component';
import { SharedPaginationUnroutedComponent } from './component/shared/unrouted/shared-pagination-unrouted/shared-pagination-unrouted.component';
import { SharedPlistrowbuttonsUnroutedComponent } from './component/shared/unrouted/shared-plistrowbuttons-unrouted/shared-plistrowbuttons-unrouted.component';
import { SharedViewbuttonsUnroutedComponent } from './component/shared/unrouted/shared-viewbuttons-unrouted/shared-viewbuttons-unrouted.component';
import { SharedFooterbuttonsUnroutedComponent } from './component/shared/unrouted/shared-footerbuttons-unrouted/shared-footerbuttons-unrouted.component';
import { SharedRemoveconfirmationUnroutedComponent } from './component/shared/unrouted/shared-removeconfirmation-unrouted/shared-removeconfirmation-unrouted.component';
// usuario admin routed components
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
// usuario user routed components
import { UsuarioViewUserRoutedComponent } from './component/application/usuario/routed/usuario/usuario-view-user-routed/usuario-view-user-routed.component';
// usuario admin unrouted components
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-detail-admin-unrouted/usuario-detail-unrouted.component';
import { UsuarioFormAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-form-admin-unrouted/usuario-form-admin-unrouted.component';
import { UsuarioPlistAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plist-admin-unrouted/usuario-plist-admin-unrouted.component';
import { UsuarioPlistheaderAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plistheader-admin-unrouted/usuario-plistheader-admin-unrouted.component';
import { UsuarioPlistRowAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-plistrow-admin-unrouted/usuario-plistrow-admin-unrouted.component';
import { UsuarioSelectionAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-selection-admin-unrouted/usuario-selection-admin-unrouted.component';
// usuario user unrouted components
import { UsuarioDetailUserUnroutedComponent } from './component/application/usuario/unrouted/user/usuario-detail-user-unrouted/usuario-detail-user-unrouted.component';
// tipousuario routed components
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin-routed/tipousuario-edit-admin-routed.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin-routed/tipousuario-view-admin-routed.component';
// tipousuario unrouted components
import { TipousuarioPlistAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plist-admin-unrouted/tipousuario-plist-admin-unrouted.component';
import { TipousuarioDetailAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-detail-admin-unrouted/tipousuario-detail-admin-unrouted.component';
import { TipousuarioFormAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-form-admin-unrouted/tipousuario-form-admin-unrouted.component';
import { TipousuarioPlistheaderAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plistheader-admin-unrouted/tipousuario-plistheader-admin-unrouted.component';
import { TipousuarioPlistrowAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-plistrow-admin-unrouted/tipousuario-plistrow-unrouted.component';
import { TipousuarioSelectionAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-selection-admin-unrouted/tipousuario-selection-admin-unrouted.component';
// tipoproducto routed components
import { TipoproductoPlistRowAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-plistrow-admin-unrouted/tipoproducto-plistrow-unrouted.component';
import { TipoproductoPlistheaderAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-plistheader-admin-unrouted/tipoproducto-plistheader-admin-unrouted.component';
import { TipoproductoDetailAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-detail-admin-unrouted/tipoproducto-detail-admin-unrouted.component';
import { TipoproductoPlistAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-plist-admin-routed/tipoproducto-plist-admin-routed.component';
import { TipoproductoNewAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-new-admin-routed/tipoproducto-new-admin-routed.component';
import { TipoproductoEditAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-edit-admin-routed/tipoproducto-edit-admin-routed.component';
import { TipoproductoRemoveAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-remove-admin-routed/tipoproducto-remove-admin-routed.component';
import { TipoproductoViewAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-view-admin-routed/tipoproducto-view-admin-routed.component';
// tipoproducto unrouted components
import { TipoproductoPlistAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-plist-admin-unrouted/tipoproducto-plist-admin-unrouted.component';
import { TipoproductoFormAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-form-admin-unrouted/tipoproducto-form-admin-unrouted.component';
import { TipoproductoSelectionAdminUnroutedComponent } from './component/application/tipoproducto/unrouted/admin/tipoproducto-selection-admin-unrouted/tipoproducto-selection-admin-unrouted.component';
// producto admin routed components
import { ProductoPlistAdminRoutedComponent } from './component/application/producto/routed/admin/producto-plist-admin-routed/producto-plist-admin-routed.component';
import { ProductoNewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-new-admin-routed/producto-new-admin-routed.component';
import { ProductoEdiAdminRoutedComponent } from './component/application/producto/routed/admin/producto-edit-admin-routed/producto-edit-admin-routed.component';
import { ProductoRemoveAdminRoutedComponent } from './component/application/producto/routed/admin/producto-remove-admin-routed/producto-remove-admin-routed.component';
import { ProductoViewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-view-admin-routed/producto-view-admin-routed.component';
// producto user routed components
import { ProductoViewUserRoutedComponent } from './component/application/producto/routed/user/producto-view-user-routed/producto-view-user-routed.component';
// producto guest routed components
import { ProductoViewGuestRoutedComponent } from './component/application/producto/routed/guest/producto-view-guest-routed/producto-view-guest-routed.component';
// producto admin unrouted components
import { ProductoSelectionAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-selection-admin-unrouted/producto-selection-admin-unrouted.component';
import { ProductoPlistAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plist-admin-unrouted/producto-plist-admin-unrouted.component';
import { ProductoPlistRowAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plistrow-admin-unrouted/producto-plistrow-admin-unrouted.component';
import { ProductoPlistheaderAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-plistheader-admin-unrouted/producto-plistheader-admin-unrouted.component';
import { ProductoFormAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-form-admin-unrouted/producto-form-admin-unrouted.component';
import { ProductoDetailAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-detail-admin-unrouted/producto-detail-admin-unrouted.component';
import { ProductoGPlistAdminUnroutedComponent } from './component/application/producto/unrouted/admin/producto-gplist-admin-unrouted/producto-gplist-admin-unrouted.component';
// producto user unrouted components
import { ProductoGPlistUserUnroutedComponent } from './component/application/producto/unrouted/user/producto-gplist-user-unrouted/producto-gplist-user-unrouted.component';
import { ProductoDetailUserUnroutedComponent } from './component/application/producto/unrouted/user/producto-detail-user-unrouted/producto-detail-user-unrouted.component';
// producto guest unrouted components
import { ProductoDetailGuestUnroutedComponent } from './component/application/producto/unrouted/guest/producto-detail-guest-unrouted/producto-detail-guest-unrouted.component';
import { ProductoGPlistGuestUnroutedComponent } from './component/application/producto/unrouted/guest/producto-gplist-guest-unrouted/producto-gplist-guest-unrouted.component';
// factura admin routed components
import { FacturaPlistAdminRoutedComponent } from './component/application/factura/routed/admin/factura-plist-admin-routed/factura-plist-admin-routed.component';
import { FacturaNewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-new-admin-routed/factura-new-admin-routed.component';
import { FacturaRemoveAdminRoutedComponent } from './component/application/factura/routed/admin/factura-remove-admin-routed/factura-remove-admin-routed.component';
import { FacturaEditAdminRoutedComponent } from './component/application/factura/routed/admin/factura-edit-admin-routed/factura-edit-admin-routed.component';
import { FacturaViewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-view-admin-routed/factura-view-admin-routed.component';
import { FacturaPlistUserRoutedComponent } from './component/application/factura/routed/user/factura-plist-user-routed/factura-plist-user-routed.component';
// factura admin unrouted components
import { FacturaPlistAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plist-admin-unrouted/factura-plist-admin-unrouted.component';
import { FacturaPlistheaderAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plistheader-admin-unrouted/factura-plistheader-admin-unrouted.component';
import { FacturaPlistrowAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-plistrow-admin-unrouted/factura-plistrow-admin-unrouted.component';
import { FacturaDetailAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-detail-admin-unrouted/factura-detail-admin-unrouted.component';
import { FacturaFormAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-form-admin-unrouted/factura-form-admin-unrouted.component';
import { FacturaSelectionAdminUnroutedComponent } from './component/application/factura/unrouted/admin/factura-selection-admin-unrouted/factura-selection-admin-unrouted.component';
// factura user unrouted components
import { FacturaPlistrowUserUnroutedComponent } from './component/application/factura/unrouted/user/factura-plistrow-user-unrouted/factura-plistrow-user-unrouted.component';
import { FacturaPlistUserUnroutedComponent } from './component/application/factura/unrouted/user/factura-plist-user-unrouted/factura-plist-user-unrouted.component';
import { FacturaPlistheaderUserUnroutedComponent } from './component/application/factura/unrouted/user/factura-plistheader-user-unrouted/factura-plistheader-user-unrouted.component';
import { FacturaDetailUserUnroutedComponent } from './component/application/factura/unrouted/user/factura-detail-user-unrouted/factura-detail-user-unrouted.component';
// compra admin routed components
import { CompraPlistAdminRoutedComponent } from './component/application/compra/routed/admin/compra-plist-admin-routed/compra-plist-admin-routed.component';
import { CompraNewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-new-admin-routed/compra-new-admin-routed.component';
import { CompraEditAdminRoutedComponent } from './component/application/compra/routed/admin/compra-edit-admin-routed/compra-edit-admin-routed.component';
import { CompraViewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-view-admin-routed/compra-view-admin-routed.component';
import { CompraRemoveAdminRoutedComponent } from './component/application/compra/routed/admin/compra-remove-admin-routed/compra-remove-admin-routed.component';
// compra admin unrouted components
import { CompraPlistrowAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plistrow-admin-unrouted/compra-plistrow-admin-unrouted.component';
import { CompraPlistheaderAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plistheader-admin-unrouted/compra-plistheader-admin-unrouted.component';
import { CompraPlistAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-plist-admin-unrouted/compra-plist-admin-unrouted.component';
import { CompraDetailAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-detail-admin-unrouted/compra-detail-admin-unrouted.component';
import { CompraFormAdminUnroutedComponent } from './component/application/compra/unrouted/admin/compra-form-admin-unrouted/compra-form-admin-unrouted.component';
// compra user unrouted components
import { CompraPlistUserUnroutedComponent } from './component/application/compra/unrouted/user/compra-plist-user-unrouted/compra-plist-user-unrouted.component';
import { CompraPlistrowUserUnroutedComponent } from './component/application/compra/unrouted/user/compra-plistrow-user-unrouted/compra-plistrow-user-unrouted.component';
import { CompraPlistheaderUserUnroutedComponent } from './component/application/compra/unrouted/user/compra-plistheader-user-unrouted/compra-plistheader-user-unrouted.component';
// carrito admin routed components
import { CarritoViewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-view-admin-routed/carrito-view-admin-routed.component';
import { CarritoRemoveAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-remove-admin-routed/carrito-remove-admin-routed.component';
import { CarritoPlistAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-plist-admin-routed/carrito-plist-admin-routed.component';
import { CarritoNewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-new-admin-routed/carrito-new-admin-routed.component';
import { CarritoEditAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-edit-admin-routed/carrito-edit-admin-routed.component';
import { CarritoPlistUserRoutedComponent } from './component/application/carrito/routed/user/carrito-plist-user-routed/carrito-plist-user-routed.component';
// carrito admin unrouted components
import { CarritoDetailAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-detail-admin-unrouted/carrito-detail-admin-unrouted.component';
import { CarritoPlistAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plist-admin-unrouted/carrito-plist-admin-unrouted.component';
import { CarritoPlistrowAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plistrow-admin-unrouted/carrito-plistrow-admin-unrouted.component';
import { CarritoPlistheaderAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-plistheader-admin-unrouted/carrito-plistheader-admin-unrouted.component';
import { CarritoFormAdminUnroutedComponent } from './component/application/carrito/unrouted/admin/carrito-form-admin-unrouted/carrito-form-admin-unrouted.component';
// carrito user unrouted components
import { CarritoPlistheaderUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plistheader-user-unrouted/carrito-plistheader-user-unrouted.component';
import { CarritoPlistrowUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plistrow-user-unrouted/carrito-plistrow-user-unrouted.component';
import { CarritoPlistUserUnroutedComponent } from './component/application/carrito/unrouted/user/carrito-plist-user-unrouted/carrito-plist-user-unrouted.component';
// comment admin routed components
import { CommentPlistAdminRoutedComponent } from './component/application/comment/routed/admin/comment-plist-admin-routed/comment-plist-admin-routed.component';
import { CommentEditAdminRoutedComponent } from './component/application/comment/routed/admin/comment-edit-admin-routed/comment-edit-admin-routed.component';
import { CommentNewAdminRoutedComponent } from './component/application/comment/routed/admin/comment-new-admin-routed/comment-new-admin-routed.component';
import { CommentRemoveAdminRoutedComponent } from './component/application/comment/routed/admin/comment-remove-admin-routed/comment-remove-admin-routed.component';
import { CommentViewAdminRoutedComponent } from './component/application/comment/routed/admin/comment-view-admin-routed/comment-view-admin-routed.component';
//  comment admin unrouted components
import { CommentDetailAdminUnroutedComponent } from './component/application/comment/unrouted/admin/comment-detail-admin-unrouted/comment-detail-admin-unrouted.component';
import { CommentFormAdminUnroutedComponent } from './component/application/comment/unrouted/admin/comment-form-admin-unrouted/comment-form-admin-unrouted.component';
import { CommentPlistAdminUnroutedComponent } from './component/application/comment/unrouted/admin/comment-plist-admin-unrouted/comment-plist-admin-unrouted.component';
import { CommentPlistheaderAdminUnroutedComponent } from './component/application/comment/unrouted/admin/comment-plistheader-admin-unrouted/comment-plistheader-admin-unrouted.component';
import { CommentPlistRowAdminUnroutedComponent } from './component/application/comment/unrouted/admin/comment-plistrow-admin-unrouted/comment-plistrow-admin-unrouted.component';
// comment user unrouted components
import { CommentPlistUserUnroutedComponent } from './component/application/comment/unrouted/user/comment-plist-user-unrouted/comment-plist-user-unrouted.component';
import { CommentPlistheaderUserUnroutedComponent } from './component/application/comment/unrouted/user/comment-plistheader-user-unrouted/comment-plistheader-user-unrouted.component';
import { CommentPlistRowUserUnroutedComponent } from './component/application/comment/unrouted/user/comment-plistrow-user-unrouted/comment-plistrow-user-unrouted.component';
import { CommentNewUserUnroutedComponent } from './component/application/comment/unrouted/user/comment-new-user-unrouted/comment-new-user-unrouted.component';
// comment guest unrouted components
import { CommentPlistGuestUnroutedComponent } from './component/application/comment/unrouted/guest/comment-plist-guest-unrouted/comment-plist-guest-unrouted.component';
import { CommentPlistheaderGuestUnroutedComponent } from './component/application/comment/unrouted/guest/comment-plistheader-guest-unrouted/comment-plistheader-guest-unrouted.component';
import { CommentPlistRowGuestUnroutedComponent } from './component/application/comment/unrouted/guest/comment-plistrow-guest-unrouted/comment-plistrow-guest-unrouted.component';
//
//
@NgModule({
  declarations: [
    AppComponent,
    //
    // shared unrouted components
    SharedModalUnroutedComponent,
    SharedPopupUnroutedComponent,
    SharedHeaderUnroutedComponent,
    SharedFooterUnroutedComponent,
    SharedMenuUnroutedComponent,
    SharedFindUnroutedComponent,
    SharedRppUnroutedComponent,
    SharedSearchUnroutedComponent,
    SharedPaginationUnroutedComponent,
    SharedPlistrowbuttonsUnroutedComponent,
    SharedViewbuttonsUnroutedComponent,
    SharedFooterbuttonsUnroutedComponent,
    SharedRemoveconfirmationUnroutedComponent,
    // shared routed
    SharedLoginRoutedComponent,
    SharedHomeRoutedComponent,
    SharedLogoutRoutedComponent,
    SharedGenerateUnroutedComponent,
    SharedReportsRoutedComponent,
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
    FacturaPlistUserRoutedComponent,
    // Carrito routed components
    CarritoPlistAdminRoutedComponent,
    CarritoViewAdminRoutedComponent,
    CarritoRemoveAdminRoutedComponent,
    CarritoNewAdminRoutedComponent,
    CarritoEditAdminRoutedComponent,
    CarritoPlistUserRoutedComponent,
    // Comment routed components

    CommentPlistAdminRoutedComponent,
    CommentViewAdminRoutedComponent,
    CommentNewAdminRoutedComponent,
    CommentEditAdminRoutedComponent,
    CommentRemoveAdminRoutedComponent,

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
    ProductoDetailUserUnroutedComponent,
    ProductoSelectionAdminUnroutedComponent,
    ProductoDetailGuestUnroutedComponent,
    ProductoGPlistAdminUnroutedComponent,
    ProductoGPlistUserUnroutedComponent,
    ProductoGPlistGuestUnroutedComponent,
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
    FacturaPlistUserUnroutedComponent,
    FacturaPlistrowUserUnroutedComponent,
    FacturaPlistheaderUserUnroutedComponent,
    FacturaDetailUserUnroutedComponent,
    //
    // Compra unrouted components
    CompraPlistrowAdminUnroutedComponent,
    CompraPlistheaderAdminUnroutedComponent,
    CompraPlistAdminUnroutedComponent,
    CompraDetailAdminUnroutedComponent,
    CompraFormAdminUnroutedComponent,
    CompraPlistUserUnroutedComponent,
    CompraPlistheaderUserUnroutedComponent,
    CompraPlistrowUserUnroutedComponent,
    //
    // Carrito unrouted components
    CarritoDetailAdminUnroutedComponent,
    CarritoPlistAdminUnroutedComponent,
    CarritoPlistrowAdminUnroutedComponent,
    CarritoPlistheaderAdminUnroutedComponent,
    CarritoFormAdminUnroutedComponent,
    CarritoPlistUserUnroutedComponent,
    CarritoPlistheaderUserUnroutedComponent,
    CarritoPlistrowUserUnroutedComponent,
    //
    CommentPlistAdminUnroutedComponent,
    CommentPlistheaderAdminUnroutedComponent,
    CommentPlistRowAdminUnroutedComponent,
    CommentDetailAdminUnroutedComponent,
    CommentFormAdminUnroutedComponent,
    CommentPlistGuestUnroutedComponent,    
    CommentPlistheaderGuestUnroutedComponent,
    CommentPlistRowGuestUnroutedComponent,
    CommentPlistRowUserUnroutedComponent,
    CommentPlistUserUnroutedComponent,    
    CommentPlistheaderUserUnroutedComponent,
    CommentNewUserUnroutedComponent
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
    FacturaPrintService,
    { provide: LOCALE_ID, useValue: 'es-ES' }, //USO DE LOCALE!!
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
