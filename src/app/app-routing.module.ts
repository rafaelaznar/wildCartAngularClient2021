import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { ReportsComponent } from './component/shared/routed/reports/reports.component';

//
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioViewUserRoutedComponent } from './component/application/usuario/routed/usuario/usuario-view-user-routed/usuario-view-user-routed.component';
//
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin-routed/tipousuario-edit-admin-routed.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin-routed/tipousuario-view-admin-routed.component';
//
import { ProductoEdiAdminRoutedComponent } from './component/application/producto/routed/admin/producto-edit-admin-routed/producto-edit-admin-routed.component';
import { ProductoNewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-new-admin-routed/producto-new-admin-routed.component';
import { ProductoPlistAdminRoutedComponent } from './component/application/producto/routed/admin/producto-plist-admin-routed/producto-plist-admin-routed.component';
import { ProductoRemoveAdminRoutedComponent } from './component/application/producto/routed/admin/producto-remove-admin-routed/producto-remove-admin-routed.component';
import { ProductoViewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-view-admin-routed/producto-view-admin-routed.component';
import { ProductoViewUserRoutedComponent } from './component/application/producto/routed/user/producto-view-user-routed/producto-view-user-routed.component';
import { ProductoViewGuestRoutedComponent } from './component/application/producto/routed/guest/producto-view-guest-routed/producto-view-guest-routed.component';
//
import { TipoproductoEditAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-edit-admin-routed/tipoproducto-edit-admin-routed.component';
import { TipoproductoNewAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-new-admin-routed/tipoproducto-new-admin-routed.component';
import { TipoproductoPlistAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-plist-admin-routed/tipoproducto-plist-admin-routed.component';
import { TipoproductoRemoveAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-remove-admin-routed/tipoproducto-remove-admin-routed.component';
import { TipoproductoViewAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-view-admin-routed/tipoproducto-view-admin-routed.component';
//
import { FacturaEditAdminRoutedComponent } from './component/application/factura/routed/admin/factura-edit-admin-routed/factura-edit-admin-routed.component';
import { FacturaNewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-new-admin-routed/factura-new-admin-routed.component';
import { FacturaPlistAdminRoutedComponent } from './component/application/factura/routed/admin/factura-plist-admin-routed/factura-plist-admin-routed.component';
import { FacturaRemoveAdminRoutedComponent } from './component/application/factura/routed/admin/factura-remove-admin-routed/factura-remove-admin-routed.component';
import { FacturaViewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-view-admin-routed/factura-view-admin-routed.component';
import { FacturaPlistUserRoutedComponent } from './component/application/factura/routed/user/factura-plist-user-routed/factura-plist-user-routed.component';
//
import { CompraPlistAdminRoutedComponent } from './component/application/compra/routed/admin/compra-plist-admin-routed/compra-plist-admin-routed.component';
import { CompraRemoveAdminRoutedComponent } from './component/application/compra/routed/admin/compra-remove-admin-routed/compra-remove-admin-routed.component';
import { CompraViewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-view-admin-routed/compra-view-admin-routed.component';
import { CompraNewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-new-admin-routed/compra-new-admin-routed.component';
import { CompraEditAdminRoutedComponent } from './component/application/compra/routed/admin/compra-edit-admin-routed/compra-edit-admin-routed.component';
//
import { CarritoViewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-view-admin-routed/carrito-view-admin-routed.component';
import { CarritoRemoveAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-remove-admin-routed/carrito-remove-admin-routed.component';
import { CarritoPlistAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-plist-admin-routed/carrito-plist-admin-routed.component';
import { CarritoEditAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-edit-admin-routed/carrito-edit-admin-routed.component';
import { CarritoNewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-new-admin-routed/carrito-new-admin-routed.component';
import { CarritoPlistUserRoutedComponent } from './component/application/carrito/routed/user/carrito-plist-user-routed/carrito-plist-user-routed.component';
//
import { CommentEditAdminRoutedComponent } from './component/application/comment/routed/admin/comment-edit-admin-routed/comment-edit-admin-routed.component';
import { CommentNewAdminRoutedComponent } from './component/application/comment/routed/admin/comment-new-admin-routed/comment-new-admin-routed.component';
import { CommentPlistAdminRoutedComponent } from './component/application/comment/routed/admin/comment-plist-admin-routed/comment-plist-admin-routed.component';
import { CommentRemoveAdminRoutedComponent } from './component/application/comment/routed/admin/comment-remove-admin-routed/comment-remove-admin-routed.component';
import { CommentViewAdminRoutedComponent } from './component/application/comment/routed/admin/comment-view-admin-routed/comment-view-admin-routed.component';
//
//
//
const routes: Routes = [
  { path: '', component: HomeComponent },
  //
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  //
  { path: 'administrador/random/load', component: GenerateComponent },
  { path: 'administrador/reports', component: ReportsComponent },
  //
  { path: 'administrador/tipousuario/plist', component: TipousuarioPlistAdminRoutedComponent },
  { path: 'administrador/tipousuario/view/:id', component: TipousuarioViewAdminRoutedComponent },
  { path: 'administrador/tipousuario/edit/:id', component: TipousuarioEditAdminRoutedComponent },
  //
  { path: 'administrador/usuario/plist', component: UsuarioPlistAdminRoutedComponent },
  { path: 'administrador/usuario/plist/tipousuario/:id_tipousuario', component: UsuarioPlistAdminRoutedComponent },
  { path: 'administrador/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'usuario/usuario/cview/:id', component: UsuarioViewUserRoutedComponent },
  { path: 'administrador/usuario/new', component: UsuarioNewAdminRoutedComponent },
  { path: 'administrador/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent },
  { path: 'administrador/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent },
  //
  { path: 'administrador/tipoproducto/plist', component: TipoproductoPlistAdminRoutedComponent },
  { path: 'administrador/tipoproducto/view/:id', component: TipoproductoViewAdminRoutedComponent },
  { path: 'administrador/tipoproducto/new', component: TipoproductoNewAdminRoutedComponent },
  { path: 'administrador/tipoproducto/edit/:id', component: TipoproductoEditAdminRoutedComponent },
  { path: 'administrador/tipoproducto/remove/:id', component: TipoproductoRemoveAdminRoutedComponent },
  //
  { path: 'administrador/producto/plist', component: ProductoPlistAdminRoutedComponent },
  { path: 'administrador/producto/plist/tipoproducto/:id_tipoproducto', component: ProductoPlistAdminRoutedComponent },
  { path: 'administrador/producto/view/:id', component: ProductoViewAdminRoutedComponent },
  { path: 'administrador/producto/new', component: ProductoNewAdminRoutedComponent },
  { path: 'administrador/producto/edit/:id', component: ProductoEdiAdminRoutedComponent },
  { path: 'administrador/producto/remove/:id', component: ProductoRemoveAdminRoutedComponent },
  { path: 'usuario/producto/cview/:id', component: ProductoViewUserRoutedComponent },
  { path: 'producto/view/:id', component: ProductoViewGuestRoutedComponent },
  //
  { path: 'administrador/compra/plist', component: CompraPlistAdminRoutedComponent },
  { path: 'administrador/compra/plist/factura/:id_factura', component: CompraPlistAdminRoutedComponent },
  { path: 'administrador/compra/plist/producto/:id_producto', component: CompraPlistAdminRoutedComponent },
  { path: 'administrador/compra/view/:id', component: CompraViewAdminRoutedComponent },
  { path: 'administrador/compra/new', component: CompraNewAdminRoutedComponent },
  { path: 'administrador/compra/edit/:id', component: CompraEditAdminRoutedComponent },
  { path: 'administrador/compra/remove/:id', component: CompraRemoveAdminRoutedComponent },
  //
  { path: 'administrador/factura/plist', component: FacturaPlistAdminRoutedComponent },
  { path: 'administrador/factura/plist/usuario/:id_usuario', component: FacturaPlistAdminRoutedComponent },
  { path: 'administrador/factura/new', component: FacturaNewAdminRoutedComponent },
  { path: 'administrador/factura/view/:id', component: FacturaViewAdminRoutedComponent },
  { path: 'administrador/factura/edit/:id', component: FacturaEditAdminRoutedComponent },
  { path: 'administrador/factura/remove/:id', component: FacturaRemoveAdminRoutedComponent },
  { path: 'usuario/factura/plist', component: FacturaPlistUserRoutedComponent },
  //
  { path: 'administrador/carrito/plist', component: CarritoPlistAdminRoutedComponent },
  { path: 'administrador/carrito/plist/producto/:id_producto', component: CarritoPlistAdminRoutedComponent },
  { path: 'administrador/carrito/plist/usuario/:id_usuario', component: CarritoPlistAdminRoutedComponent },
  { path: 'administrador/carrito/view/:id', component: CarritoViewAdminRoutedComponent },
  { path: 'administrador/carrito/new', component: CarritoNewAdminRoutedComponent },
  { path: 'administrador/carrito/edit/:id', component: CarritoEditAdminRoutedComponent },
  { path: 'administrador/carrito/remove/:id', component: CarritoRemoveAdminRoutedComponent },
  { path: 'usuario/carrito/cplist', component: CarritoPlistUserRoutedComponent },
  //
  { path: 'administrador/comment/plist', component: CommentPlistAdminRoutedComponent },
  { path: 'administrador/comment/plist/producto/:id_producto', component: CommentPlistAdminRoutedComponent },
  { path: 'administrador/comment/plist/usuario/:id_usuario', component: CommentPlistAdminRoutedComponent },
  { path: 'administrador/comment/view/:id', component: CommentViewAdminRoutedComponent },
  { path: 'administrador/comment/new', component: CommentNewAdminRoutedComponent },
  { path: 'administrador/comment/edit/:id', component: CommentEditAdminRoutedComponent },
  { path: 'administrador/comment/remove/:id', component: CommentRemoveAdminRoutedComponent }
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
